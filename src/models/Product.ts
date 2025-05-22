import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  image: { type: String, required: true },
  name: { type: String, required: true },
  category: { type: String, required: true },
  brand: { type: String, required: true },
  price: { type: Number, required: true },
  originalPrice: { type: Number, required: false },
  rating: { type: String, required: true },
  inStock: { type: String, required: true },
  isProductNew: { type: String, required: true },
  features: [{ type: String }],
  description: { type: String },
  specifications: {
    type: String,
  },
  relatedProducts: {
    type: String,
  },
});

const Product =
  mongoose.models.Product || mongoose.model("Product", productSchema);

export default Product;
