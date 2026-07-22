import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

import Admin from "@/models/Admin";
import connectDB from "@/lib/mongodb";

export async function POST() {
  try {
    await connectDB();

    const email = process.env.ADMIN_EMAIL || "admin@acustardtechnologies.com";
    const password = process.env.ADMIN_PASSWORD || "Green@123";

    const exists = await Admin.findOne({ email });
    if (exists) {
      return NextResponse.json({ success: true, message: "Admin already exists", email });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    await Admin.create({
      email,
      password: hashedPassword,
      role: "admin",
    });

    return NextResponse.json({ success: true, message: "Admin created", email });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: error instanceof Error ? error.message : "Failed to create admin" },
      { status: 500 }
    );
  }
}
