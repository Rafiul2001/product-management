import { model, Schema } from "mongoose";

const ADMIN_TYPES = {
  SUPER_ADMIN: "SUPER_ADMIN",
  SECONDARY_ADMIN: "SECONDARY_ADMIN",
};

const adminSchema = new Schema({
  adminUserName: {
    type: String,
    required: true,
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
});

const AdminModel = model("admin", adminSchema);

module.exports = { AdminModel };
