const { PrismaClient } = require("../generated/prisma");
const prisma = new PrismaClient({});
const express = require("express");
const cors = require("cors");
const multer = require("multer");
const server = express();

server.use(cors());
server.use(express.json());
server.use(express.urlencoded({ extended: true }));

const upload = multer({
  limits: {
    fileSize: 10 * 1024 * 1024, // 10MB limit
  },
  fileFilter: (req, file, cb) => {
    if (file.mimetype.startsWith('image/')) {
      cb(null, true);
    } else {
      cb(new Error('Only image files are allowed'), false);
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

server.post("/api/reference", upload.single("image"), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: "No image file provided" });
    }

    const imageData = {
      originalName: req.file.originalname,
      mimeType: req.file.mimetype,
      size: req.file.size,
      buffer: req.file.buffer
    };

    res.json({
      success: true,
      message: "Reference image uploaded successfully",
      data: {
        filename: imageData.originalName,
        size: imageData.size,
        mimeType: imageData.mimeType,
        uploadedAt: new Date().toISOString()
      }
    });

  } catch (error) {
    console.error("Error processing reference image:", error);
    res.status(500).json({
      error: "An error occurred while processing the reference image",
      details: error.message
    });
  }
});

server.get("/", (req, res) => {
  res.send("Hello, World!");
});

module.exports = server;
