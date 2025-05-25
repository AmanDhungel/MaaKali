import connectionDB from "@/connectDB/connectionDB";
import Contact from "@/models/Contact";
import { NextResponse } from "next/server";

export async function GET() {
  await connectionDB();
  try {
    const res = await Contact.find();
    return new Response(JSON.stringify(res), { status: 200 });
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
  await connectionDB();
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
