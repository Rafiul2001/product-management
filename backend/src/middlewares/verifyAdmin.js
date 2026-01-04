const jwt = require("jsonwebtoken");
const { config } = require("../config/config");

const verifyAdmin = async (req, res, next) => {
  try {
    const token = req.cookies?.token;
    if (!token) return res.status(401).json({ message: "Unauthorized" });
    const decoded = jwt.verify(token, config.SECRET_KEY);
    if (!decoded) return res.status(401).json({ message: "Unauthorized" });
    req.admin = decoded;
    next();
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = { verifyAdmin };
