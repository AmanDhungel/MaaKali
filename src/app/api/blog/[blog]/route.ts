import connectionDB from "@/connectDB/connectionDB";
import Blog from "@/models/Blog";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function DELETE(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const blog = searchParams.get("blog");

  console.log("Blog ID to delete:", blog);

  try {
    await connectionDB();
    const deletedBlog = await Blog.findByIdAndDelete(blog);

    if (!deletedBlog) {
      return NextResponse.json({ message: "Blog not found" }, { status: 404 });
    }

    return NextResponse.json(deletedBlog, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      {
        message: "Something went wrong",
        error: error instanceof Error ? error.message : String(error),
      },
      { status: 500 }
    );
  }
}
