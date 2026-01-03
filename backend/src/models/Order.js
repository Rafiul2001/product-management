import { model, Schema } from "mongoose";
import { DB } from "../constants/DB";

const ORDER_STATUS = {
  PENDING: "PENDING",
  CONFIRMED: "CONFIRMED",
  CANCELLED: "CANCELLED",
  DELIVERED: "DELIVERED",
};

const orderSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
    productList: {
      type: [
        {
          product: {
            type: Schema.Types.ObjectId,
            ref: "product",
            required: true,
          },
          quantity: {
            type: Number,
            required: true,
            min: 1,
          },
          unitPrice: { type: Number, required: true, min: 0 },
        },
      ],
    },
    totalPrice: {
      type: Number,
      min: 0,
    },
    orderStatus: {
      type: String,
      enum: Object.values(ORDER_STATUS),
      required: true,
      default: ORDER_STATUS.PENDING,
    },
    shippingAddress: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

orderSchema.pre("save", function (next) {
  this.totalPrice = this.productList.reduce((sum, item) => {
    return sum + item.quantity * item.unitPrice;
  }, 0);

  next();
});

const OrderModel = model(DB.ORDER, orderSchema);

module.exports = { OrderModel };
