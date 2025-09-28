require("dotenv").config();
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const multer = require("multer");
const { GoogleGenAI } = require("@google/genai");
const { PrismaClient } = require("../generated/prisma");
const Minio = require("minio");
const {
  generateToken,
  hashPassword,
  verifyPassword,
  verifyToken
} = require("../utils/auth");

const server = express();
const prisma = new PrismaClient({
  omit: {
    user: {
      password_hash: true
    }
  }
});

const ai = new GoogleGenAI(process.env.GEMINI_API_KEY);

server.use(
  cors({
    credentials: true,
    origin: process.env.FRONTEND_URL || "http://localhost:5173"
  })
);
server.use(cookieParser());
server.use(express.json());
server.use(express.urlencoded({ extended: true }));

const minioClient = new Minio.Client({
  endPoint: process.env.MINIO_ENDPOINT || "localhost",
  port: parseInt(process.env.MINIO_PORT) || 9000,
  useSSL: process.env.MINIO_USE_SSL === "true",
  accessKey: process.env.MINIO_ACCESS_KEY || "admin",
  secretKey: process.env.MINIO_SECRET_KEY || "password"
});

const BUCKET_NAME = process.env.MINIO_BUCKET_NAME || "potara-images";
const MINIO_PUBLIC_URL =
  process.env.MINIO_PUBLIC_URL || "http://localhost:9000";

const initializeBucket = async () => {
  try {
    const exists = await minioClient.bucketExists(BUCKET_NAME);
    if (!exists) {
      await minioClient.makeBucket(BUCKET_NAME, "us-east-1");
      console.log(`Bucket '${BUCKET_NAME}' created successfully.`);
    }

    const policy = {
      Version: "2012-10-17",
      Statement: [
        {
          Effect: "Allow",
          Principal: "*",
          Action: ["s3:GetObject"],
          Resource: [`arn:aws:s3:::${BUCKET_NAME}/*`]
        }
      ]
    };

    await minioClient.setBucketPolicy(BUCKET_NAME, JSON.stringify(policy));
    console.log(`Bucket '${BUCKET_NAME}' policy set to public read.`);
  } catch (error) {
    console.error("Error initializing MinIO bucket:", error);
  }
};

initializeBucket();

const upload = multer({
  storage: multer.memoryStorage(),
  limits: {
    fileSize: 10 * 1024 * 1024 // 10MB limit
  },
  fileFilter: (_, file, cb) => {
    if (file.mimetype.startsWith("image/")) {
      cb(null, true);
    } else {
      cb(new Error("Only image files are allowed"), false);
    }
  }
});

// takes in an image and returns the image of shapes drawn over the original
const generateShapes = async base64Image => {
  const prompt = [
    {
      text:
        "You are a drawing assistant tasked with simplifying a reference image into it's most basic shapes. You have been given a reference image. It is your task to draw FILLED IN shapes on top of that image that break down the figure into simple, easy to draw, pieces. Do not alter the reference image, simply draw on top of it. Each shape should be outlined with a unique, high contrast color, BUT the shape itself should be a SOLID COLOR similar to the ORIGINAL IMAGE. Preserve the original image, only draw on top with each shape. Match your shapes as closely with the figure's edges as possible. The shapes should connect together to create an outline of the figure. Use multiple shapes for features and details. STAY IN THE COUNTOURS OF THE ORIGINAL IMAGE"
    },
    {
      inlineData: {
        mimeType: "image/png",
        data: base64Image
      }
    }
  ];

  console.log("Sending request to Gemini API...");
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash-image-preview",
    contents: prompt
  });

  console.log("Received response from Gemini API");
  console.log("Response structure:", JSON.stringify(response, null, 2));

  return response;
};

const generateOutlines = async base64Image => {
  const prompt = [
    {
      text:
        "You are a drawing assistant tasked with simplifying a reference image into it's most basic shapes. You have been given a reference image. It is your task to draw OUTLINES OF SHAPES on top of that image that break down the figure into simple, easy to draw, pieces. Do not alter the reference image, simply draw on top of it. Each outline should be in a unique, high contrast color. Preserve the original image, the original image should be visible beneath the outlines. You are only drawing the OUTLINE of shapes, DO NOT fill in the shapes. The only thing you are drawing are outlines, so the original image should be easily visible underneath. Only draw on top of the original image with the outlines for each shape. Match your outlines as closely with the figure's edges as possible. The outlined shapes should connect together to create an outline of the figure. STAY IN THE COUNTOURS OF THE ORIGINAL IMAGE THIS IS THE MOST IMPORTANT PART. THE OUTLINES MUST BE WITHIN THE CONTOURS OF THE ORIGINAL IMAGE"
    },
    {
      inlineData: {
        mimeType: "image/png",
        data: base64Image
      }
    }
  ];

  console.log("Sending request to Gemini API...");
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash-image-preview",
    contents: prompt
  });

  console.log("Received response from Gemini API");
  console.log("Response structure:", JSON.stringify(response, null, 2));

  return response;
};

const generateImageUrl = async (response, timestamp, req, type) => {
  let processedImageUrl = null;

  for (const part of response.candidates[0].content.parts) {
    if (part.text) {
    } else if (part.inlineData) {
      const imageData = part.inlineData.data;
      const buffer = Buffer.from(imageData, "base64");

      // Upload processed image to MinIO
      const processedFileName = `processed/${type}processed_${timestamp}_${req
        .file.originalname}`;

      await minioClient.putObject(
        BUCKET_NAME,
        processedFileName,
        buffer,
        buffer.length,
        {
          "Content-Type": "image/png"
        }
      );

      // Generate direct URL for the processed image
      processedImageUrl = `${MINIO_PUBLIC_URL}/${BUCKET_NAME}/${processedFileName}`;
      console.log("Processed image uploaded to MinIO:", processedFileName);
    }
  }

  return processedImageUrl;
};

// this endpoint expects a reference image and will then draw shapes for the user to reference
server.post("/upload_ref", upload.single("image"), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: "No image file provided" });
    }

    let userId = null;
    try {
      const token = req.cookies.auth_token;
      if (token) {
        const decoded = verifyToken(token);
        userId = decoded.userId;
      }
    } catch (err) {
      console.log("No valid authentication token");
    }

    // Upload original image to MinIO
    const timestamp = Date.now();
    const originalFileName = `uploads/${timestamp}-${req.file.originalname}`;

    await minioClient.putObject(
      BUCKET_NAME,
      originalFileName,
      req.file.buffer,
      req.file.buffer.length,
      {
        "Content-Type": req.file.mimetype
      }
    );

    const base64Image = req.file.buffer.toString("base64");

    const [shapes, outlines] = await Promise.all([
      generateShapes(base64Image),
      generateOutlines(base64Image)
    ]);

    const [shapeUrl, outlineUrl] = await Promise.all([
      generateImageUrl(shapes, timestamp, req, "shape"),
      generateImageUrl(outlines, timestamp, req, "outline")
    ]);

    // Generate direct URL for the original image
    const originalImageUrl = `${MINIO_PUBLIC_URL}/${BUCKET_NAME}/${originalFileName}`;

    // save reference to db (needed for feedback)
    referenceDb = await prisma.reference.create({
      data: {
        url: originalImageUrl,
        shape_url: shapeUrl,
        outline_url: outlineUrl,
        user_id: userId
      }
    });

    res.json({
      success: true,
      message: "Image processed successfully",
      originalImageUrl: originalImageUrl,
      shapeImageUrl: shapeUrl,
      outlineImageUrl: outlineUrl,
      referenceId: referenceDb.id,
      filename: originalFileName
    });
  } catch (error) {
    console.error("Error processing image:", error);

    if (error.message && error.message.includes("API key")) {
      return res.status(401).json({
        error: "API key error",
        details: "Please check your GEMINI_API_KEY environment variable"
      });
    }

    if (error.message && error.message.includes("quota")) {
      return res.status(429).json({
        error: "API quota exceeded",
        details: "Gemini API quota has been exceeded"
      });
    }

    res.status(500).json({
      error: "An error occurred while processing the image",
      details: error.message,
      stack: process.env.NODE_ENV === "development" ? error.stack : undefined
    });
  }
});

// this endpoint expects a drawn image and the url to the original reference and will create feedback based on it
server.post("/upload_img", upload.single("image"), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: "No image file provided" });
    }

    const { referenceId } = req.body;
    if (!referenceId) {
      return res.status(400).json({ error: "Reference ID not provided" });
    }

    let userId = null;
    let username = "Artist";
    try {
      const token = req.cookies.auth_token;
      if (token) {
        const decoded = verifyToken(token);
        userId = decoded.userId;

        const user = await prisma.user.findUnique({
          where: { id: userId }
        });
        if (user) {
          username = user.username;
        }
      }
    } catch (err) {
      console.log("No valid authentication token");
    }

    const reference = await prisma.reference.findUnique({
      where: { id: parseInt(referenceId) }
    });

    if (!reference) {
      return res.status(404).json({ error: "Reference not found" });
    }

    // Upload drawing to MinIO
    const timestamp = Date.now();
    const drawingFileName = `uploads/${timestamp}-${req.file.originalname}`;

    await minioClient.putObject(
      BUCKET_NAME,
      drawingFileName,
      req.file.buffer,
      req.file.buffer.length,
      {
        "Content-Type": req.file.mimetype
      }
    );

    const base64Image = req.file.buffer.toString("base64");

    const referenceUrl = reference.url;

    // referenceUrl says localhost, must fix
    const internalReferenceUrl = referenceUrl.replace(
      "localhost:9000",
      "minio:9000"
    );

    const fetch = await import("node-fetch");
    const referenceResponse = await fetch.default(internalReferenceUrl);
    const referenceBuffer = await referenceResponse.arrayBuffer();

    const base64Reference = Buffer.from(referenceBuffer).toString("base64");
    const prompt = [
      {
        text: `You've been given a drawing user ${username} has made & reference image. They are working on going from reference image to their own image through understanding the basic shapes of the original image. Your job is to provide helpful feedback the user can use to improve their art. Be extremely friendly and nice. The user will not prompt you for additional advice, so you need to be comprehensive in one response. Make sure to compare the user's drawing to the reference image. The closer the user is to the refernence, the better.`
      },
      {
        inlineData: {
          mimeType: "image/png",
          data: base64Image
        }
      },
      {
        inlineData: {
          mimeType: "image/png",
          data: base64Reference
        }
      }
    ];

    console.log("Sending request to Gemini API...");
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash-image-preview",
      contents: prompt
    });

    console.log("Received response from Gemini API");
    console.log("Response structure:", JSON.stringify(response, null, 2));

    let feedback = "";

    for (const part of response.candidates[0].content.parts) {
      if (part.text) {
        feedback = part.text;
        break;
      }
    }

    // Generate direct URL for the drawn image
    const drawingUrl = `${MINIO_PUBLIC_URL}/${BUCKET_NAME}/${drawingFileName}`;

    // save to db if logged in
    if (userId) {
      await prisma.drawing.create({
        data: {
          url: drawingUrl,
          user_id: userId,
          reference_id: parseInt(referenceId),
          feedback: feedback
        }
      });
    }

    res.json({
      success: true,
      message: "Image processed successfully",
      drawingUrl: drawingUrl,
      feedback: feedback,
      saved: userId !== null
    });
  } catch (error) {
    console.error("Error processing image:", error);

    if (error.message && error.message.includes("API key")) {
      return res.status(401).json({
        error: "API key error",
        details: "Please check your GEMINI_API_KEY environment variable"
      });
    }

    if (error.message && error.message.includes("quota")) {
      return res.status(429).json({
        error: "API quota exceeded",
        details: "Gemini API quota has been exceeded"
      });
    }

    res.status(500).json({
      error: "An error occurred while processing the image",
      details: error.message,
      stack: process.env.NODE_ENV === "development" ? error.stack : undefined
    });
  }
});

// live feedback endpoint for real-time drawing guidance
server.post("/live_feedback", async (req, res) => {
  try {
    const { canvasData, referenceId, conversationHistory = [] } = req.body;

    if (!canvasData) {
      return res.status(400).json({ error: "Canvas data is required" });
    }

    if (!referenceId) {
      return res.status(400).json({ error: "Reference ID is required" });
    }

    // Get reference from database
    const reference = await prisma.reference.findUnique({
      where: { id: parseInt(referenceId) }
    });

    if (!reference) {
      return res.status(404).json({ error: "Reference not found" });
    }

    // Extract base64 data from canvas (remove data:image/png;base64, prefix)
    const base64Canvas = canvasData.split(",")[1];
    if (!base64Canvas) {
      return res.status(400).json({ error: "Invalid canvas data format" });
    }

    // Get reference image as base64
    // Fix URL for internal Docker network access
    console.log("Original reference URL:", reference.url);
    let internalReferenceUrl = reference.url.replace(
      "localhost:9000",
      "minio:9000"
    );

    // Try multiple URL transformation strategies
    if (internalReferenceUrl === reference.url) {
      // If localhost:9000 replacement didn't work, try other patterns
      internalReferenceUrl = reference.url.replace(
        "127.0.0.1:9000",
        "minio:9000"
      );
    }
    if (internalReferenceUrl === reference.url) {
      // If no replacement worked, try force replacing the host
      internalReferenceUrl = reference.url.replace(
        /https?:\/\/[^\/]+/,
        "http://minio:9000"
      );
    }

    const fetch = await import("node-fetch");
    let base64Reference;

    try {
      const referenceResponse = await fetch.default(internalReferenceUrl);
      const referenceBuffer = await referenceResponse.arrayBuffer();
      base64Reference = Buffer.from(referenceBuffer).toString("base64");
    } catch (fetchError) {
      // Try fallback strategies
      const fallbackUrls = [
        reference.url.replace(/https?:\/\/[^:]+:\d+/, "http://minio:9000"),
        reference.url.replace(/https?:\/\/[^:]+:\d+/, "http://localhost:9000"),
        reference.url.replace(/https?:\/\/[^:]+:\d+/, "http://127.0.0.1:9000")
      ];

      let lastError = fetchError;
      let success = false;

      for (const fallbackUrl of fallbackUrls) {
        try {
          const fallbackResponse = await fetch.default(fallbackUrl);
          const referenceBuffer = await fallbackResponse.arrayBuffer();
          base64Reference = Buffer.from(referenceBuffer).toString("base64");
          success = true;
          break;
        } catch (fallbackError) {
          lastError = fallbackError;
        }
      }

      // If all fallbacks failed, throw the last error
      if (!success) {
        throw lastError;
      }
    }

    // Create conversational context
    const conversationContext =
      conversationHistory.length > 0
        ? `Previous feedback given: ${conversationHistory
            .slice(-3)
            .join(" | ")}`
        : "This is the first feedback for this drawing session.";

    // Build prompt for live feedback
    const prompt = [
      {
        text: `You are Shelly, a friendly and encouraging art mentor providing live drawing feedback.
               Give brief, specific, and supportive advice in 1-2 sentences maximum.
               Be conversational and upbeat like a helpful friend.
               Compare their current progress to the reference image and help them improve.
               Focus on what they're doing well and give gentle guidance for improvement.
               ${conversationContext}
               Avoid repeating previous advice unless they really need to hear it again.
               Keep responses short and sweet for speech bubble display.`
      },
      {
        inlineData: {
          mimeType: "image/png",
          data: base64Canvas
        }
      },
      {
        inlineData: {
          mimeType: "image/png",
          data: base64Reference
        }
      }
    ];

    // Call Gemini API
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash-image-preview",
      contents: prompt
    });

    let feedback = "";
    for (const part of response.candidates[0].content.parts) {
      if (part.text) {
        feedback = part.text;
        break;
      }
    }

    // Simple similarity check to avoid repetitive feedback
    const shouldSpeak = !conversationHistory.some(prev => {
      const similarity =
        feedback.toLowerCase().includes(prev.toLowerCase().slice(0, 20)) ||
        prev.toLowerCase().includes(feedback.toLowerCase().slice(0, 20));
      return similarity;
    });

    res.json({
      feedback,
      shouldSpeak,
      timestamp: Date.now()
    });
  } catch (error) {
    console.error("Error generating live feedback:", error);

    if (error.message && error.message.includes("API key")) {
      return res.status(401).json({
        error: "API key error",
        details: "Please check your GEMINI_API_KEY environment variable"
      });
    }

    if (error.message && error.message.includes("quota")) {
      return res.status(429).json({
        error: "API quota exceeded",
        details: "Gemini API quota has been exceeded"
      });
    }

    res.status(500).json({
      error: "Failed to generate live feedback",
      details: error.message,
      stack: process.env.NODE_ENV === "development" ? error.stack : undefined
    });
  }
});

// this endpoint retrieves all the images an authenticated user has
server.get("/gallery", async (req, res) => {
  try {
    const token = req.cookies.auth_token;
    let userId = null;

    if (!token) {
      return res.status(401).json({
        error: "User not authenticated"
      });
    }

    const decoded = verifyToken(token);
    userId = decoded.userId;

    const drawings = await prisma.drawing.findMany({
      where: {
        user_id: userId
      },
      include: {
        reference: true // Include the associated reference
      },
      orderBy: {
        created_at: "desc" // Most recent first
      }
    });

    return res.status(200).json({
      drawings: drawings.map(drawing => ({
        id: drawing.id,
        drawingUrl: drawing.url,
        feedback: drawing.feedback,
        referenceId: drawing.reference_id,
        originalImageUrl: drawing.reference.url,
        shapeImageUrl: drawing.reference.shape_url,
        outlineImageUrl: drawing.reference.outline_url,
        createdAt: drawing.created_at
      }))
    });
  } catch (err) {
    console.log("Gallery error: ", err);
    return res.status(400).json({
      error: "Error retrieving gallery",
      details: err.message
    });
  }
});

// ----------------- AUTHENTICATION -----------------

server.post("/auth/register", async (req, res) => {
  try {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
      return res
        .status(400)
        .json({ error: "Username, email, and password are required" });
    }

    if (password.length < 6) {
      return res
        .status(400)
        .json({ error: "Password must be at least 6 characters long" });
    }

    const existingUser = await prisma.user.findUnique({
      where: { email }
    });

    if (existingUser) {
      return res
        .status(409)
        .json({ error: "User with this email already exists" });
    }

    const password_hash = await hashPassword(password);

    const user = await prisma.user.create({
      data: {
        username,
        email,
        password_hash
      }
    });

    const token = generateToken(user.id);

    res.cookie("auth_token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict"
    });

    res.status(201).json({
      success: true,
      message: "User registered successfully",
      user: {
        id: user.id,
        username: user.username,
        email: user.email
      }
    });
  } catch (error) {
    console.error("Registration error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

server.post("/auth/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: "Email and password are required" });
    }

    const user = await prisma.user.findUnique({
      where: { email },
      select: {
        id: true,
        username: true,
        email: true,
        password_hash: true
      }
    });

    if (!user) {
      return res.status(401).json({ error: "Invalid email or password" });
    }

    const isValidPassword = await verifyPassword(user.password_hash, password);

    if (!isValidPassword) {
      return res.status(401).json({ error: "Invalid email or password" });
    }

    const token = generateToken(user.id);

    res.cookie("auth_token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict"
    });

    res.json({
      success: true,
      message: "Login successful",
      user: {
        id: user.id,
        username: user.username,
        email: user.email
      }
    });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

server.post("/auth/logout", (_, res) => {
  res.clearCookie("auth_token", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict"
  });

  res.json({
    success: true,
    message: "Logout successful"
  });
});

server.get("/auth/me", async (req, res) => {
  try {
    const token = req.cookies.auth_token;

    if (!token) {
      return res.status(401).json({ error: "No authentication token" });
    }

    const decoded = verifyToken(token);

    const user = await prisma.user.findUnique({
      where: { id: decoded.userId }
    });

    if (!user) {
      return res.status(401).json({ error: "User not found" });
    }

    res.json({
      success: true,
      user: {
        id: user.id,
        username: user.username,
        email: user.email
      }
    });
  } catch (error) {
    console.error("Auth verification error:", error);
    res.status(401).json({ error: "Invalid token" });
  }
});

module.exports = server;
