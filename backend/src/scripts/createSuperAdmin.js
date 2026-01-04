const readline = require("readline");
const { AdminModel, ADMIN_TYPES } = require("../models/Admin");
const { hashPassowrd } = require("../utils/passwordEncrypter");
const { dbConnect, dbDisconnect } = require("../db_connection/connection");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const ask = (question) =>
  new Promise((resolve) => rl.question(question, resolve));

(async () => {
  const name = await ask("Enter username: ");
  const email = await ask("Enter email: ");
  const password = await ask("Enter password: ");
  try {
    await dbConnect();
    const exists = await AdminModel.findOne({ adminUserName: name }).lean();
    if (exists) {
      console.log(`Already registered with ${exists.adminUserName}`);
      rl.close();
      await dbDisconnect();
      return;
    }
    const hashedPassword = await hashPassowrd(password);
    const newAdmin = new AdminModel({
      adminUserName: name,
      adminEmail: email,
      password: hashedPassword,
      adminType: ADMIN_TYPES.SUPER_ADMIN,
    });
    await newAdmin.save();
    console.log("Successfully registered a new admin");
    await dbDisconnect();
    rl.close();
  } catch (error) {
    console.error("Error:", error);
    rl.close();
    await dbDisconnect();
    process.exit(1);
  }
})();
