import Blog from "@/models/Blog";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const body = await req.json();
  const { name, email, phonenumber, message } = body;
  try {
    const res = Blog.find();
    return NextResponse.json({
      message: "Contact fetched successfully",
      data: res,
      status: 200,
    });
  } catch (error) {
    return NextResponse.json({
      message: "Contact not fetched",
      data: null,
      status: 500,
    });
  }
}

export async function POST(req: Request) {
  const body = await req.json();
  const { name, email, phonenumber, message } = body;
  try {
    const res = await Blog.create({
      name,
      email,
      phonenumber,
      message,
    });
    return NextResponse.json({
      message: "Contact created successfully",
      data: res,
      status: 200,
    });
  } catch (error) {
    return NextResponse.json({
      message: "Contact not created",
      data: null,
      status: 500,
    });
  }
}
