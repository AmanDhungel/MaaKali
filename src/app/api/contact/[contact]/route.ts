import connectionDB from "@/connectDB/connectionDB";
import Contact from "@/models/Contact";
import { NextResponse } from "next/server";

export async function DELETE(
  req: Request,
  { params }: { params: Promise<{ contact: string }> }
) {
  await connectionDB();
  const { contact } = await params;
  try {
    const res = await Contact.findByIdAndDelete(contact);
    return NextResponse.json({
      message: "Contact deleted successfully",
      data: res,
      status: 200,
    });
  } catch (error) {
    return NextResponse.json({
      message: "Contact not deleted",
      data: null,
      status: 500,
    });
  }
}

export async function PATCH(
  req: Request,
  { params }: { params: Promise<{ contact: string }> }
) {
  await connectionDB();
  const { contact } = await params;
  const body = await req.json();
  const { checked } = body;
  console.log(checked);
  try {
    const res = await Contact.findByIdAndUpdate(contact, { checked: checked });
    return NextResponse.json({
      message: "Status Change Successfully",
      data: res,
      status: 200,
    });
  } catch (error) {
    return NextResponse.json({
      message: "Status could not be deleted",
      data: null,
      status: 500,
    });
  }
}
