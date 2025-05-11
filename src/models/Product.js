import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    id: { type: Number, required: true, unique: true },
    image: { type: String, required: true },
    name: { type: String, required: true },
    category: { type: String, required: true },
    brand: { type: String, required: true },
    price: { type: Number, required: true },
    originalPrice: { type: Number, required: false },
    rating: { type: Number, required: true },
    inStock: { type: Boolean, required: true },
    isNew: { type: Boolean, required: true },
    features: [{ type: String }],
    description: { type: String },
    specifications: [
        {
            name: { type: String },
            value: { type: String },
        },
    ],
    relatedProducts: [
        {
            id: { type: Number },
            name: { type: String },
            price: { type: Number },
            image: { type: String },
        },
    ],
});

const Product = mongoose.models.Product || mongoose.model("Product", productSchema);

export default Product;

