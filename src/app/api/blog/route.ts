import { NextRequest } from "next/server";
import connectionDB from "@/connectDB/connectionDB.js";
import Blog from "@/models/Blog";

export async function GET(req: NextRequest) {
  try {
    await connectionDB();
    const blog = await Blog.find();
    return new Response(JSON.stringify(blog), { status: 200 });
  } catch (error) {
    return new Response(
      JSON.stringify({ message: "Something went wrong", error }),
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest) {
  await connectionDB();
  const body = await req.json();
  try {
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
    const blog = new Blog({
      title,
      description,
      image,
      tags,
      author,
      relatedPosts,
      comments,
      excerpt,
    });
    await blog.save();
    return new Response(JSON.stringify(blog), { status: 201 });
  } catch (error) {
    return new Response(
      JSON.stringify({ message: "Something went wrong", error }),
      { status: 500 }
    );
  }
}
