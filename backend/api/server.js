const { PrismaClient } = require("../generated/prisma");
const prisma = new PrismaClient({});
const express = require("express");
const server = express();

server.get("/users", async (req, res) => {
  try {
    const users = await prisma.user.findMany();
    res.json(users);
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({ error: "An error occurred while fetching users." });
  }
});

server.get("/", (req, res) => {
  res.send("Hello, World!");
});

module.exports = server;
