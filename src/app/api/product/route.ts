import connectionDB from "@/connectDB/connectionDB";
import Product from "@/models/Product";
import mongoose from "mongoose";

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

  try {
    const product = new Product({
      id: new mongoose.Types.ObjectId().toString(),
      ...body,
    });
    await product.save();
    return new Response(JSON.stringify(product), { status: 201 });
  } catch (error) {
    console.log(error);
    return new Response(
      JSON.stringify({ message: "Something went wrong", error }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
