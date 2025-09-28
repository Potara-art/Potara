require("dotenv").config();
const express = require("express");
const cors = require("cors");
const multer = require("multer");
const { GoogleGenAI } = require("@google/genai");
const { PrismaClient } = require("../generated/prisma");
const Minio = require("minio");

const server = express();
const prisma = new PrismaClient({});

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

// Initialize MinIO bucket
const initializeBucket = async () => {
  try {
    const exists = await minioClient.bucketExists(BUCKET_NAME);
    if (!exists) {
      await minioClient.makeBucket(BUCKET_NAME, "us-east-1");
      console.log(`Bucket '${BUCKET_NAME}' created successfully.`);
    }
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

server.post("/api/upload", upload.single("image"), async (req, res) => {
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

    const ai = new GoogleGenAI(process.env.GEMINI_API_KEY);
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

        // Generate presigned URL for the processed image
        processedImageUrl = await minioClient.presignedGetObject(
          BUCKET_NAME,
          processedFileName,
          24 * 60 * 60
        ); // 24 hours
        console.log("Processed image uploaded to MinIO:", processedFileName);
      }
    }

    // Generate presigned URL for the original image
    const originalImageUrl = await minioClient.presignedGetObject(
      BUCKET_NAME,
      originalFileName,
      24 * 60 * 60
    ); // 24 hours

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
