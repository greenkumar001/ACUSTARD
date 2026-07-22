import { NextResponse } from "next/server";

import Enquiry from "@/models/Enquiry";
import connectDB from "@/lib/mongodb";

export async function PATCH(req: Request) {
  try {
    await connectDB();
    const { id, status } = await req.json();

    if (!id || !status) {
      return NextResponse.json({ success: false, message: "Missing id or status" }, { status: 400 });
    }

    const updated = await Enquiry.findByIdAndUpdate(id, { status }, { new: true });

    if (!updated) {
      return NextResponse.json({ success: false, message: "Enquiry not found" }, { status: 404 });
    }

    return NextResponse.json({ success: true, enquiry: updated });
  } catch (error) {
    return NextResponse.json({ success: false, message: "Update failed" }, { status: 500 });
  }
}

export async function DELETE(req: Request) {
  try {
    await connectDB();
    const { id } = await req.json();

    if (!id) {
      return NextResponse.json({ success: false, message: "Missing enquiry id" }, { status: 400 });
    }

    const deleted = await Enquiry.findByIdAndDelete(id);

    if (!deleted) {
      return NextResponse.json({ success: false, message: "Enquiry not found" }, { status: 404 });
    }

    return NextResponse.json({ success: true, message: "Enquiry deleted successfully" });
  } catch (error) {
    return NextResponse.json({ success: false, message: "Delete failed" }, { status: 500 });
  }
}
