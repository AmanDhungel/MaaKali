import Contact from "@/models/Contact";
import { NextResponse } from "next/server";

export async function DELETE(
  req: Request,
  { params }: { params: Promise<{ contact: string }> }
) {
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
  const { contact } = await params;
  const body = await req.json();
  const { name, email, phonenumber, message } = body;
  try {
    const res = await Contact.findByIdAndUpdate(contact, {
      name,
      email,
      phonenumber,
      message,
    });
    return NextResponse.json({
      message: "Contact updated successfully",
      data: res,
      status: 200,
    });
  } catch (error) {
    return NextResponse.json({
      message: "Contact not updated",
      data: null,
      status: 500,
    });
  }
}
