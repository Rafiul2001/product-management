import { model, Schema } from "mongoose";
import { DB } from "../constants/DB";

const ORDER_STATUS = {
  PENDING: "PENDING",
  CONFIRMED: "CONFIRMED",
  CANCELLED: "CANCELLED",
  DELIVERED: "DELIVERED",
};

const PAYMENT_STATUS = {
  PAID: "PAID",
  DUE: "DUE",
  REFUNDED: "REFUNDED",
};

const PAYMENT_METHOD = {
  CASH_ON_DELIVERY: "CASH_ON_DELIVERY",
  ONLINE_MOBILE_BANKING: "ONLINE_MOBILE_BANKING",
  VISA_OR_MASTER_CARD: "VISA_OR_MASTER_CARD",
};

const REFUND_STATUS = {
  PENDING: "PENDING",
  SUCCESS: "SUCCESS",
  FAILED: "FAILED",
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
    paymentStatus: {
      type: String,
      enum: Object.values(PAYMENT_STATUS),
      required: true,
      default: PAYMENT_STATUS.DUE,
    },
    paymentMethod: {
      type: String,
      enum: Object.values(PAYMENT_METHOD),
      required: true,
    },
    payment: {
      type: {
        transactionId: { type: String },
        gateway: { type: String },
        amountPaid: { type: Number },
        currency: { type: String, default: "BDT" },
        paidAt: { type: Date },
      },
    },
    refund: {
      type: {
        refundId: { type: String },
        refundAmount: { type: Number },
        refundReason: { type: String },
        refundStatus: {
          type: String,
          enum: Object.values(REFUND_STATUS),
        },
        refundedAt: { type: Date },
      },
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
