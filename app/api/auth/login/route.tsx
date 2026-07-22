import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";


import Admin from "@/models/Admin";
import { generateToken } from "@/lib/jwt";
import connectDB from "@/lib/mongodb";

export async function POST(req: Request) {
  await connectDB();

  const { email, password } = await req.json();

  const admin = await Admin.findOne({ email });

  if (!admin) {
    return NextResponse.json(
      {
        message: "Invalid Credentials",
      },
      { status: 401 }
    );
  }

  const matched = await bcrypt.compare(
    password,
    admin.password
  );

  if (!matched) {
    return NextResponse.json(
      {
        message: "Invalid Credentials",
      },
      { status: 401 }
    );
  }

  const token = generateToken({
    id: admin._id,
    role: admin.role,
  });
  const response = NextResponse.json({
    success: true,
  });

  response.cookies.set("admin_token", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: 60 * 60 * 24 * 7,
    path: "/",
  });
  console.log(response.cookies.getAll());
  return response;
}