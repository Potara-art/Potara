require("dotenv").config();
const express = require("express");
const cors = require("cors");
const multer = require("multer");
const fs = require("fs");
const path = require("path");
const { GoogleGenAI } = require("@google/genai");
const { PrismaClient } = require("../generated/prisma");

const server = express();
const prisma = new PrismaClient({});

server.use(cors());
server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use("/storage", express.static(path.join(__dirname, "../storage")));

const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, "storage/uploads/");
  },
  filename: function(req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  }
});

const upload = multer({
  storage: storage,
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

server.get("/users", async (req, res) => {
  try {
    const users = await prisma.user.findMany();
    res.json(users);
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({ error: "An error occurred while fetching users." });
  }
});

server.post("/api/upload", upload.single("image"), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: "No image file provided" });
    }

    const ai = new GoogleGenAI(process.env.GEMINI_API_KEY);
    const imageBuffer = fs.readFileSync(req.file.path);
    const base64Image = imageBuffer.toString("base64");

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

    // Ensure processed directory exists
    const processedDir = path.join(__dirname, "../storage/processed");
    if (!fs.existsSync(processedDir)) {
      fs.mkdirSync(processedDir, { recursive: true });
      console.log("Created processed directory:", processedDir);
    }

    let processedImageUrl = null;
    let textResponse = null;

    for (const part of response.candidates[0].content.parts) {
      if (part.text) {
        textResponse = part.text;
        console.log("Text response from Gemini:", part.text);
      } else if (part.inlineData) {
        const imageData = part.inlineData.data;
        const buffer = Buffer.from(imageData, "base64");

        // Create unique filename with timestamp
        const timestamp = Date.now();
        const processedFilename = `processed_${timestamp}_${req.file.originalname}`;
        const processedImagePath = path.join(processedDir, processedFilename);

        fs.writeFileSync(processedImagePath, buffer);
        processedImageUrl = `/storage/processed/${processedFilename}`;
        console.log("Image saved to:", processedImagePath);
      }
    }

    res.json({
      success: true,
      message: "Image processed successfully",
      originalImageUrl: `/storage/uploads/${req.file.filename}`,
      processedImageUrl: processedImageUrl,
      textResponse: textResponse,
      filename: req.file.filename
    });
  } catch (error) {
    console.error("Error processing image:", error);

    // More specific error handling
    if (error.message && error.message.includes('API key')) {
      return res.status(401).json({
        error: "API key error",
        details: "Please check your GEMINI_API_KEY environment variable"
      });
    }

    if (error.message && error.message.includes('quota')) {
      return res.status(429).json({
        error: "API quota exceeded",
        details: "Gemini API quota has been exceeded"
      });
    }

    res.status(500).json({
      error: "An error occurred while processing the image",
      details: error.message,
      stack: process.env.NODE_ENV === 'development' ? error.stack : undefined
    });
  }
});

server.get("/", (req, res) => {
  res.send("Hello, World!");
});

module.exports = server;
