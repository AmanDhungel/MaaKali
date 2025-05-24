import Contact from "@/models/Contact";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const res = await Contact.find();
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
      error: error instanceof Error ? error.message : String(error),
    });
  }
}

export async function POST(req: Request) {
  const body = await req.json();
  const { name, email, phonenumber, message } = body;
  try {
    const res = await Contact.create({
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
