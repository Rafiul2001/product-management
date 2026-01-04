const express = require("express");
const jwt = require("jsonwebtoken");
const { AdminModel } = require("../models/Admin");
const { verifyPassword } = require("../utils/passwordEncrypter");
const { config } = require("../config/config");
const {
  EXPIRATION_TIME,
  COOKIE_MAX_AGE,
} = require("../constants/EXPIRATION_TIME");

const adminRouter = express.Router();

adminRouter.post("/login", async (req, res) => {
  try {
    const { adminUserName, password } = req.body;
    const exists = await AdminModel.findOne({
      adminUserName: adminUserName,
    }).lean();

    if (!exists) return res.status(404).json({ message: "Admin not found" });
    const isVerified = await verifyPassword(password, exists.password);
    if (!isVerified)
      return res.status(401).json({ message: "Password didn't match" });

    const admin = {
      _id: exists._id,
      adminType: exists.adminType,
    };

    const token = jwt.sign(admin, config.SECRET_KEY, {
      expiresIn: EXPIRATION_TIME,
    });

    res.cookie("token", token, {
      httpOnly: true,
      secure: config.NODE_ENV === "production",
      maxAge: COOKIE_MAX_AGE,
      sameSite: "strict",
      path: "/",
    });

    return res.status(200).json({ message: "Successfully logged in" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error" });
  }
});

adminRouter.post("/logout", async (req, res) => {
  try {
    res.clearCookie("token", { path: "/" });
    return res.status(200).json({ message: "Logged out successfully" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error" });
  }
});

module.exports = { adminRouter };
