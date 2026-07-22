import { NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import WebsiteKnowledge from "@/models/WebsiteKnowledge";

const websiteData = [
  {
  title: "Greeting",
  category: "greeting",
  content:
    "Hello! Welcome to ACUSTARD TECHNOLOGIES. How can I assist you today?",
  keywords: [
    "hi",
    "hello",
    "hey",
    "hii",
    "hola",
    "namaste",
    "namaskar",
  ],
  aliases: [
    "hi",
    "hello",
    "hey there",
    "good morning",
    "good afternoon",
    "good evening",
    "namaste",
    "namaskar",
  ],
  url: "https://acustardtech.vercel.app/",
  isActive: true,
},{
  title: "About ACUSTARD TECHNOLOGIES",
  category: "company",
  content:
    "ACUSTARD TECHNOLOGIES is a technology company providing software development, digital solutions, and technology services for businesses.",
  keywords: [
    "company",
    "about",
    "acustard",
    "technology",
    "technologies",
    "business",
  ],
  aliases: [
    "what do you do",
    "what does acustard do",
    "tell me about your company",
    "what is acustard technologies",
    "aapki company kya karti hai",
    "company ke bare me batao",
  ],
  url: "https://acustardtech.vercel.app/about",
  isActive: true,
},


  {
    category: "services",
    title: "Web Development",
    content:
      "ACUSTARD TECHNOLOGIES provides modern web development solutions using modern technologies.",
    keywords: ["web development", "website", "web application"],
    sourcePage: "/services",
  },

  {
    category: "services",
    title: "Software Development",
    content:
      "ACUSTARD TECHNOLOGIES develops customized software solutions based on business requirements.",
    keywords: ["software", "custom software", "application"],
    sourcePage: "/services",
  },

  {
    category: "services",
    title: "Digital Solutions",
    content:
      "The company provides technology-driven digital solutions to help businesses improve their online presence and operations.",
    keywords: ["digital solutions", "technology", "business"],
    sourcePage: "/services",
  },

  {
    category: "contact",
    title: "Contact ACUSTARD TECHNOLOGIES",
    content:
      "Visitors can contact ACUSTARD TECHNOLOGIES through the contact information provided on the official website.",
    keywords: ["contact", "email", "phone", "address"],
    sourcePage: "/contact",
  },
];

export async function POST() {
  try {
    await connectDB();

    await WebsiteKnowledge.deleteMany({});

    const insertedData = await WebsiteKnowledge.insertMany(websiteData);

    return NextResponse.json({
      success: true,
      message: "Website knowledge inserted successfully",
      count: insertedData.length,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to insert website knowledge",
      },
      { status: 500 }
    );
  }
}