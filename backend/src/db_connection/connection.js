const { default: mongoose } = require("mongoose");
const { config } = require("../config/config");

const dbConnect = async () => {
  try {
    mongoose.connect(`${config.DB_CONNECTION_URL}${config.DATABASE}`);
  } catch (error) {
    console.log(error);
  }
};

module.exports = { dbConnect };
