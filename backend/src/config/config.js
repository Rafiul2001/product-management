require("dotenv").config();
const config = {
  DB_CONNECTION_URL: process.env.DB_CONNECTION_URL || "",
  DATABASE: process.env.DATABASE || "",
  PORT: process.env.PORT || 3000,
};

module.exports = { config };
