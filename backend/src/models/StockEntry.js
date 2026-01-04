const { Schema } = require("mongoose");
const { DB } = require("../constants/DB");

const stockEntrySchema = new Schema(
  {
    productList: {
      type: [
        {
          productName: {
            type: String,
            required: true,
          },
          productId: {
            type: Schema.Types.ObjectId,
            ref: DB.PRODUCT,
            required: true,
          },
          quantity: {
            type: Number,
            required: true,
            min: [1, "Quantity must be at least 1"],
          },
          unitPrice: {
            type: Number,
            required: true,
          },
        },
      ],
      required: true,
    },
    totalCost: {
      type: Number,
    },
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

stockEntrySchema.pre("save", async function (doc, next) {
  doc.totalCost = doc.productList.reduce((sum, product) => {
    return (sum += product.quantity * product.unitPrice);
  }, 0);
  next();
});

const StockEntryModel = model(DB.STOCK_ENTRY, stockEntrySchema);

module.exports = { StockEntryModel };
