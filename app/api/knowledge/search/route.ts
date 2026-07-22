import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import WebsiteKnowledge from "@/models/WebsiteKnowledge";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const query = searchParams.get("q");

    if (!query) {
      return NextResponse.json(
        { success: false, message: "Search query is required" },
        { status: 400 }
      );
    }

    await connectDB();

    const keywords = query
      .toLowerCase()
      .split(" ")
      .filter((word) => word.length > 2);

    const results = await WebsiteKnowledge.find({
      isActive: true,
      $or: [
        { title: { $regex: query, $options: "i" } },
        { content: { $regex: query, $options: "i" } },
        { keywords: { $in: keywords } },
      ],
    }).limit(5);

    return NextResponse.json({
      success: true,
      query,
      count: results.length,
      data: results,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: "Search failed",
      },
      { status: 500 }
    );
  }
}