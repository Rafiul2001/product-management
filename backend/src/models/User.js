import { model, Schema } from "mongoose";

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

const UserModel = model("user", userSchema);
