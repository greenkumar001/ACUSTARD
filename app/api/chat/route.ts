import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import WebsiteKnowledge from "@/models/WebsiteKnowledge";

const STOP_WORDS = new Set([
  "what",
  "is",
  "are",
  "the",
  "a",
  "an",
  "do",
  "does",
  "you",
  "your",
  "how",
  "can",
  "i",
  "tell",
  "me",
  "about",
  "please",
  "provide",
  "give",
  "tell",
  "kya",
  "hai",
  "ke",
  "ki",
  "ka",
  "ko",
  "batao",
  "mujhe",
  "aapki",
  "aap",
]);

function normalize(text: string) {
  return text
    .toLowerCase()
    .replace(/[^\p{L}\p{N}\s]/gu, "")
    .split(/\s+/)
    .filter((word) => word.length > 1);
}

export async function POST(request: NextRequest) {
  try {
    const { message } = await request.json();

    if (!message?.trim()) {
      return NextResponse.json(
        {
          success: false,
          message: "Message is required",
        },
        { status: 400 }
      );
    }

    await connectDB();

    const userMessage = message.toLowerCase().trim();
    const userWords = normalize(userMessage).filter(
      (word) => !STOP_WORDS.has(word)
    );

    const allData = await WebsiteKnowledge.find({
      isActive: true,
    }).lean();

    const scoredResults = allData.map((item: any) => {
  const keywords = (item.keywords || []).map((x: string) =>
    x.toLowerCase().trim()
  );

  const aliases = (item.aliases || []).map((x: string) =>
    x.toLowerCase().trim()
  );

  const title = (item.title || "").toLowerCase();
  const content = (item.content || "").toLowerCase();

  let score = 0;

  // Exact alias match
  for (const alias of aliases) {
    if (userMessage.includes(alias)) {
      score += 100;
    }
  }

  // Exact keyword match
  for (const word of userWords) {
    if (keywords.includes(word)) {
      score += 10;
    }

    if (title.includes(word)) {
      score += 5;
    }

    if (content.includes(word)) {
      score += 1;
    }
  }

  return {
    item,
    score,
  };
});

   const bestMatches = scoredResults
  .filter((result) => result.score >= 10)
  .sort((a, b) => b.score - a.score)[0];

   if (!bestMatches) {
  return NextResponse.json({
    success: true,
    answer:
      "Sorry, I don't have this information in the official ACUSTARD TECHNOLOGIES website data.",
    data: [],
  });
}

return NextResponse.json({
  success: true,
  answer: bestMatches.item.content,
  data: bestMatches.item,
});
  } catch (error) {
    console.error("CHAT ERROR:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong",
      },
      { status: 500 }
    );
  }
}