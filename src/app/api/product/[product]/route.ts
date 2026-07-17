import connectionDB from "@/connectDB/connectionDB";
import Product from "@/models/Product";
import { NextRequest } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ product: string }> }
) {
  const { product } = await params;
  try {
    await connectionDB();
    const productData = await Product.findById(product);
    if (!productData) {
      return new Response(JSON.stringify({ message: "Product not found" }), {
        status: 404,
      });
    }
    return new Response(JSON.stringify(productData), { status: 200 });
  } catch (error) {
    return new Response(
      JSON.stringify({ message: "Something went wrong", error }),
      { status: 500 }
    );
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ product: string }> }
) {
  const { product } = await params;
  try {
    await connectionDB();
    const deletedProduct = await Product.findByIdAndDelete(product);
    if (!deletedProduct) {
      return new Response(JSON.stringify({ message: "Product not found" }), {
        status: 404,
      });
    }
    return new Response(JSON.stringify(deletedProduct), { status: 200 });
  } catch (error) {
    console.error("Error deleting product:", error);
    return new Response(
      JSON.stringify({ message: "Something went wrong", error }),
      { status: 500 }
    );
  }
}

export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ product: string }> }
) {
  const { product } = await params;
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
    await connectionDB();
    const updatedProduct = await Product.findByIdAndUpdate(
      product,
      {
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
      },
      { new: true }
    );
    if (!updatedProduct) {
      return new Response(JSON.stringify({ message: "Product not found" }), {
        status: 404,
      });
    }
    return new Response(JSON.stringify(updatedProduct), { status: 200 });
  } catch (error) {
    return new Response(
      JSON.stringify({ message: "Something went wrong", error }),
      { status: 500 }
    );
  }
}
