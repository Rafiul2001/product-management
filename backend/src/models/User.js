import { model, Schema } from "mongoose";
import { DB } from "../constants/DB";

const userSchema = new Schema(
  {
    userPhoneNumber: {
      type: String,
      required: true,
      unique: true,
    },
    userName: {
      type: String,
      required: true,
    },
    userEmail: {
      type: String,
    },
    password: {
      type: String,
      required: true,
    },
    userImageUrl: {
      type: String,
    },
    dateOfBirth: {
      type: Date,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const UserModel = model(DB.USER, userSchema);

module.exports = { UserModel };
