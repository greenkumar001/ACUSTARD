import dotenv from "dotenv";

dotenv.config({ path: ".env.local" });

import mongoose from "mongoose";
import * as cheerio from "cheerio";

const MONGODB_URI = process.env.MONGODB_URI;
const BASE_URL = "https://acustardtech.vercel.app";

const pages = [
  "/",
  "/about",
  "/services",
  "/projects",
  "/contact",
  "/careers",
];

const knowledgeSchema = new mongoose.Schema(
  {
    title: String,
    content: String,
    category: String,
    url: String,
    keywords: [String],
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

const WebsiteKnowledge =
  mongoose.models.WebsiteKnowledge ||
  mongoose.model("WebsiteKnowledge", knowledgeSchema);

function generateKeywords(text: string) {
  return [
    ...new Set(
      text
        .toLowerCase()
        .replace(/[^\w\s]/g, "")
        .split(/\s+/)
        .filter((word) => word.length > 3)
    ),
  ].slice(0, 100);
}

async function scrapePage(path: string) {
  const url = `${BASE_URL}${path}`;

  const response = await fetch(url);

  if (!response.ok) {
    console.log(`Skipped: ${url}`);
    return [];
  }

  const html = await response.text();
  const $ = cheerio.load(html);

  $("script, style, noscript, svg").remove();

  const sections: any[] = [];

  $("h1, h2, h3").each((_, heading) => {
    const title = $(heading).text().trim();

    let content = "";
    let next = $(heading).next();

    while (
      next.length &&
      !["h1", "h2", "h3"].includes(next.prop("tagName")?.toLowerCase() || "")
    ) {
      content += " " + next.text();
      next = next.next();
    }

    content = content.replace(/\s+/g, " ").trim();

    if (title && content.length > 20) {
      const fullText = `${title} ${content}`;

      sections.push({
        title,
        content,
        category: path === "/" ? "home" : path.replace("/", ""),
        url,
        keywords: generateKeywords(fullText),
        isActive: true,
      });
    }
  });

  return sections;
}

async function seed() {
  try {
    if (!MONGODB_URI) {
      throw new Error("MONGODB_URI is missing");
    }

    await mongoose.connect(MONGODB_URI);

    console.log("MongoDB connected");

    await WebsiteKnowledge.deleteMany({});

    let totalInserted = 0;

    for (const page of pages) {
      const sections = await scrapePage(page);

      if (sections.length > 0) {
        await WebsiteKnowledge.insertMany(sections);
        totalInserted += sections.length;

        console.log(
          `${page}: ${sections.length} sections inserted`
        );
      }
    }

    console.log(
      `Successfully inserted ${totalInserted} knowledge sections`
    );

    await mongoose.disconnect();
  } catch (error) {
    console.error("SEED ERROR:", error);
  }
}

seed();