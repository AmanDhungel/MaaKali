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
    console.error("Error deleting product:", error);
    return new Response(
      JSON.stringify({ message: "Something went wrong", error }),
      { status: 500 }
    );
  }
}

// export async function PATCH(
//   req: Request,
//   { params }: { params: Promise<{ blog: string }> }
// ) {
//   const { blog } = await params;
//   const body = await req.json();
//   const {
//     title,
//     author,
//     description,
//     comments,
//     excerpt,
//     image,
//     tags,
//     relatedPosts,
//   } = body;
//   try {
//     const res = await Blog.findByIdAndUpdate(blog, {
//       title,
//       author,
//       description,
//       comments,
//       excerpt,
//       image,
//       tags,
//       relatedPosts,
//     });
//     return NextResponse.json({
//       message: "blog updated successfully",
//       data: res,
//       status: 200,
//     });
//   } catch (error) {
//     return NextResponse.json({
//       message: "blog could not be updated",
//       data: null,
//       status: 500,
//     });
//   }
// }
