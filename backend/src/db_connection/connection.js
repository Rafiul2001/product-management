const { default: mongoose } = require("mongoose");
const { config } = require("../config/config");

const dbConnect = async () => {
  try {
    await mongoose.connect(`${config.DB_CONNECTION_URL}${config.DATABASE}`);
  } catch (error) {
    console.error(error);
  }
};

const dbDisconnect = async () => {
  try {
    await mongoose.disconnect();
  } catch (error) {
    console.error(error);
  }
};

module.exports = { dbConnect, dbDisconnect };
