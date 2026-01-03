import { model, Schema } from "mongoose";

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

const CategoryModel = model("category", categorySchema);

module.exports = { CategoryModel };
