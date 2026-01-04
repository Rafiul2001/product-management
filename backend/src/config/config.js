require("dotenv").config();
const config = {
  DB_CONNECTION_URL: process.env.DB_CONNECTION_URL || "",
  DATABASE: process.env.DATABASE || "",
  PORT: process.env.PORT || 3000,
  SECRET_KEY: process.env.SECRET_KEY || "",
  NODE_ENV: process.env.NODE_ENV || "",
};

module.exports = { config };
