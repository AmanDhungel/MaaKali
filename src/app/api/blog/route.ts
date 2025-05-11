import { NextRequest } from "next/server";
import connectionDB from "@/connectDB/connectionDB.js";
import Blog from "@/models/Blog.js";

export async function GET() {
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
    const { title, content, comments, excerpt, image, tags, relatedPosts } =
      body;
    const blog = new Blog({
      title,
      content,
      image,
      tags,
      relatedPosts,
      comments,
      excerpt,
    });
    await blog.save();
    return new Response(JSON.stringify(blog), { status: 201 });
  } catch (error) {
    console.log("Error in POST /api/blog:", error);
    return new Response(
      JSON.stringify({ message: "Something went wrong", error }),
      { status: 500 }
    );
  }
}
