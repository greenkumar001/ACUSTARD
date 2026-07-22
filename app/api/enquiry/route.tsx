import { NextResponse } from "next/server";

import Enquiry from "@/models/Enquiry";
import connectDB from "@/lib/mongodb";

export async function POST(req: Request) {
  try {
    const data = await req.json();

    if (!data?.fullName || !data?.email || !data?.phone || !data?.message) {
      return NextResponse.json(
        { success: false, message: "Please provide all required enquiry fields" },
        { status: 400 }
      );
    }

    await connectDB();

    const enquiry = await Enquiry.create({
      fullName: data.fullName,
      email: data.email,
      phone: data.phone,
      message: data.message ?? "",

      status: "new",
    });

    return NextResponse.json(
      {
        success: true,
        message: "Enquiry saved successfully",
        enquiry,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("❌ Enquiry save failed:", error);

    return NextResponse.json(
      {
        success: false,
        message: error instanceof Error ? error.message : "Unknown error while saving enquiry",
      },
      { status: 500 }
    );
  }
}