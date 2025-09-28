require("dotenv").config();
const express = require("express");
const cors = require("cors");
const multer = require("multer");
const { GoogleGenAI } = require("@google/genai");
const { PrismaClient } = require("../generated/prisma");
const Minio = require("minio");

const server = express();
const prisma = new PrismaClient({});

const ai = new GoogleGenAI(process.env.GEMINI_API_KEY);

server.use(cors());
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
  fileFilter: (req, file, cb) => {
    if (file.mimetype.startsWith("image/")) {
      cb(null, true);
    } else {
      cb(new Error("Only image files are allowed"), false);
    }
  }
});

// takes in an image and returns the image of shapes drawn over the original
const generateShapes = async (base64Image) => {
    const prompt = [
      {
        text: "You are a drawing assistant tasked with simplifying a reference image into it's most basic shapes. You have been given a reference image. It is your task to draw FILLED IN shapes on top of that image that break down the figure into simple, easy to draw, pieces. Do not alter the reference image, simply draw on top of it. Each shape should be outlined with a unique, high contrast color, BUT the shape itself should be a SOLID COLOR similar to the ORIGINAL IMAGE. Preserve the original image, only draw on top with each shape. Match your shapes as closely with the figure's edges as possible. The shapes should connect together to create an outline of the figure. Use multiple shapes for features and details. STAY IN THE COUNTOURS OF THE ORIGINAL IMAGE"},
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
}


const generateOutlines = async (base64Image) => {
    const prompt = [
      {
        text: "You are a drawing assistant tasked with simplifying a reference image into it's most basic shapes. You have been given a reference image. It is your task to draw OUTLINES OF SHAPES on top of that image that break down the figure into simple, easy to draw, pieces. Do not alter the reference image, simply draw on top of it. Each outline should be in a unique, high contrast color. Preserve the original image, the original image should be visible beneath the outlines. You are only drawing the OUTLINE of shapes, DO NOT fill in the shapes. The only thing you are drawing are outlines, so the original image should be easily visible underneath. Only draw on top of the original image with the outlines for each shape. Match your outlines as closely with the figure's edges as possible. The outlined shapes should connect together to create an outline of the figure. STAY IN THE COUNTOURS OF THE ORIGINAL IMAGE THIS IS THE MOST IMPORTANT PART. THE OUTLINES MUST BE WITHIN THE CONTOURS OF THE ORIGINAL IMAGE"},
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
}

const generateImageUrl = async (response, timestamp, req, type) => {
    let processedImageUrl = null;

    for (const part of response.candidates[0].content.parts) {
      if (part.text) {
      } else if (part.inlineData) {
        const imageData = part.inlineData.data;
        const buffer = Buffer.from(imageData, "base64");

        // Upload processed image to MinIO
        const processedFileName = `processed/${type}processed_${timestamp}_${req.file
          .originalname}`;

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
}

// this endpoint expects a reference image and will then draw shapes for the user to reference
server.post("/upload_ref", upload.single("image"), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: "No image file provided" });
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

    res.json({
      success: true,
      message: "Image processed successfully",
      originalImageUrl: originalImageUrl,
      shapeImageUrl: shapeUrl,
      outlineImageUrl: outlineUrl,
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

// this endpoint expects a drawn image and will create feedback based on it
server.post("/upload_img", upload.single("image"), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: "No image file provided" });
    }

    // Upload drawing to MinIO
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

    const prompt = [
      {
        text:
          "Analyze this image and return a new version of the image where all content is reduced to its most basic geometric shapes (such as circles, rectangles, squares, triangles, and lines). Ignore all complex details, textures, and decorative elements. The output should be a simplified image that visually represents only the essential geometric shapes found in the original image, using solid colors for each shape."
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

    let processedImageUrl = null;
    let textResponse = null;

    for (const part of response.candidates[0].content.parts) {
      if (part.text) {
        textResponse = part.text;
        console.log("Text response from Gemini:", part.text);
      } else if (part.inlineData) {
        const imageData = part.inlineData.data;
        const buffer = Buffer.from(imageData, "base64");

        // Upload processed image to MinIO
        const processedFileName = `processed/processed_${timestamp}_${req.file
          .originalname}`;

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

    // Generate direct URL for the original image
    const originalImageUrl = `${MINIO_PUBLIC_URL}/${BUCKET_NAME}/${originalFileName}`;

    res.json({
      success: true,
      message: "Image processed successfully",
      originalImageUrl: originalImageUrl,
      processedImageUrl: processedImageUrl,
      textResponse: textResponse,
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

server.get("/", (req, res) => {
  res.send("Hello, World!");
});

module.exports = server;
