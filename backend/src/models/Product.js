const { Schema, model } = require("mongoose");
const { DB } = require("../constants/DB");

const PRODUCT_STATUS = {
  ACTIVATED: "ACTIVATED",
  DEACTIVATED: "DEACTIVATED",
};

const productSchema = new Schema(
  {
    productName: {
      type: String,
      required: true,
    },
    category: {
      type: Schema.Types.ObjectId,
      ref: "category",
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
      min: [0, "Minimum should be 0"],
      default: 0,
      validate: {
        validator: (value) => {
          return value <= this.stockLimit;
        },
        message: "Quantity must be less than or equal to stockLimit",
      },
    },
    price: {
      type: Number,
      required: true,
    },
    discountedPrice: {
      type: Number,
      validate: {
        validator: (value) => {
          return value < this.price;
        },
        message: "Discounted price must be less than actual price",
      },
    },
    productStatus: {
      type: String,
      enum: Object.values(PRODUCT_STATUS),
      required: true,
      default: PRODUCT_STATUS.DEACTIVATED,
    },
    stockLimit: {
      type: Number,
      required: true,
      min: [1, "Minimum stock limit should be 1"],
      default: 1,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const ProductModel = model(DB.PRODUCT, productSchema);

module.exports = { ProductModel };
