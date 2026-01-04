const express = require("express");
const { ProductModel } = require("../models/Product");

const productRouter = express.Router();

productRouter.get("/get-all", async (req, res) => {
  try {
    const allProducts = await ProductModel.find({});
    return res.status(200).json({
      data: allProducts,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error" });
  }
});

productRouter.get("/get/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const product = await ProductModel.findOne({ _id: id }).lean();
    return res.status(200).json({
      data: product,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error" });
  }
});

productRouter.post("/create", async (req, res) => {
  try {
    const {
      productName,
      category,
      quantity,
      price,
      discountedPrice,
      productStatus,
      stockLimit,
    } = req.body;
    const newProduct = new ProductModel({
      productName,
      category,
      quantity,
      price,
      discountedPrice,
      productStatus,
      stockLimit,
    });
    await newProduct.save();
    return res.status(201).json({
      message: "Product created successfully",
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error" });
  }
});

productRouter.patch("/update/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const {
      productName,
      category,
      quantity,
      price,
      discountedPrice,
      productStatus,
      stockLimit,
    } = req.body;
    const updatedQuery = {
      $set: {
        productName: productName,
        category: category,
        quantity: quantity,
        price: price,
        discountedPrice: discountedPrice,
        productStatus: productStatus,
        stockLimit: stockLimit,
      },
    };
    const product = await ProductModel.findByIdAndUpdate(
      { _id: id },
      updatedQuery,
      { new: true }
    ).lean();
    if (!product)
      return res.status(404).json({
        message: "Product not found",
      });
    return res.status(200).json({
      message: "Updated successfully",
      data: product,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error" });
  }
});

productRouter.delete("/delete/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const product = await ProductModel.deleteOne({ _id: id });
    if (!product.acknowledged)
      return res.status(404).json({ message: "Product not found!" });
    return res.status(200).json({
      data: product.acknowledged,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error" });
  }
});

module.exports = { productRouter };
