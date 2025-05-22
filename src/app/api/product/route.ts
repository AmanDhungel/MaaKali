import connectionDB from "@/connectDB/connectionDB";
import Product from "@/models/Product";
import User from "@/models/User";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export async function GET() {
  connectionDB();
  try {
    const product = await Product.find();
    return new Response(JSON.stringify(product), { status: 200 });
  } catch {
    return new Response(JSON.stringify({ message: "Something went wrong" }), {
      status: 500,
    });
  }
}

export async function POST(request: Request) {
  await connectionDB();
  const body = await request.json();
  const {
    image,
    name,
    category,
    brand,
    price,
    originalPrice,
    rating,
    inStock,
    isProductNew,
    features,
    description,
    specifications,
    relatedProducts,
  } = body;

  try {
    const product = new Product({
      image,
      name,
      category,
      brand,
      price,
      originalPrice,
      rating,
      inStock,
      isProductNew,
      features,
      description,
      specifications,
      relatedProducts,
    });
    await product.save();
    return new Response(JSON.stringify(product), { status: 201 });
  } catch (error) {
    console.log("error error error", error);
    return new Response(
      JSON.stringify({ message: "Something went wrong", error }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
