import connectionDB from "@/connectDB/connectionDB";
import Blog from "@/models/Blog";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ blog: string }> }
) {
  const { blog } = await params;

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

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ blog: string }> }
) {
  await connectionDB();
  const { blog } = await params;
  const blogdata = await Blog.findById(blog);
  try {
    return NextResponse.json(blogdata, { status: 200 });
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

export async function PATCH(
  req: Request,
  { params }: { params: Promise<{ blog: string }> }
) {
  const { blog } = await params;
  const body = await req.json();
  const {
    title,
    author,
    description,
    comments,
    excerpt,
    image,
    tags,
    relatedPosts,
  } = body;
  try {
    const res = await Blog.findByIdAndUpdate(blog, {
      title,
      author,
      description,
      comments,
      excerpt,
      image,
      tags,
      relatedPosts,
    });
    return NextResponse.json({
      message: "blog updated successfully",
      data: res,
      status: 200,
    });
  } catch (error) {
    return NextResponse.json({
      message: "blog could not be updated",
      data: null,
      status: 500,
    });
  }
}
