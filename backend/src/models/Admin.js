const { Schema, model } = require("mongoose");
const { DB } = require("../constants/DB");

const ADMIN_TYPES = {
  SUPER_ADMIN: "SUPER_ADMIN",
  SECONDARY_ADMIN: "SECONDARY_ADMIN",
};

const adminSchema = new Schema(
  {
    adminUserName: {
      type: String,
      required: true,
      unique: true,
    },
    adminEmail: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    adminType: {
      type: String,
      enum: Object.values(ADMIN_TYPES),
      required: true,
      default: ADMIN_TYPES.SECONDARY_ADMIN,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const AdminModel = model(DB.ADMIN, adminSchema);

module.exports = { AdminModel, ADMIN_TYPES };
