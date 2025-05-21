import connectionDB from "@/connectDB/connectionDB";
import Product from "@/models/Product";
import { NextRequest } from "next/server";

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
    return new Response(
      JSON.stringify({ message: "Something went wrong", error }),
      { status: 500 }
    );
  }
}
