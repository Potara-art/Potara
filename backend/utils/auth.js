const jwt = require("jsonwebtoken");
const argon2 = require("argon2");

const JWT_SECRET = process.env.JWT_SECRET || "your-secret-key";

const generateToken = userId => {
  return jwt.sign({ userId }, JWT_SECRET, {});
};

const verifyToken = token => {
  return jwt.verify(token, JWT_SECRET);
};

const hashPassword = async password => {
  return await argon2.hash(password);
};

const verifyPassword = async (hashedPassword, password) => {
  return await argon2.verify(hashedPassword, password);
};

module.exports = {
  generateToken,
  verifyToken,
  hashPassword,
  verifyPassword
};
