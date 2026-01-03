import { model, Schema } from "mongoose";
import { DB } from "../constants/DB";

const stockEntrySchema = new Schema(
  {
    productList: [
      {
        product: {
          type: Schema.Types.ObjectId,
          ref: "product",
          required: true,
        },
        quantity: {
          type: Number,
          required: true,
          min: [1, "Quantity must be at least 1"],
        },
      },
    ],
    challanImageUrl: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const StockEntryModel = model(DB.STOCK_ENTRY, stockEntrySchema);

module.exports = { StockEntryModel };
