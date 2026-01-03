import { model, Schema } from "mongoose";
import { DB } from "../constants/DB";

const categorySchema = new Schema(
  {
    categoryName: {
      type: String,
      required: true,
      unique: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const CategoryModel = model(DB.CATEGORY, categorySchema);

module.exports = { CategoryModel };
