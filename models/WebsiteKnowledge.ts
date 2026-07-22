import mongoose, { Schema, Document, Model } from "mongoose";

export interface IWebsiteKnowledge extends Document {
  category: string;
  title: string;
  content: string;
  keywords: string[];
  sourcePage?: string;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const WebsiteKnowledgeSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },

    content: {
      type: String,
      required: true,
    },

    category: {
      type: String,
      required: true,
    },

    url: String,

    keywords: {
      type: [String],
      default: [],
    },

    aliases: {
      type: [String],
      default: [],
    },

    isActive: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

const WebsiteKnowledge: Model<IWebsiteKnowledge> =
  mongoose.models.WebsiteKnowledge ||
  mongoose.model<IWebsiteKnowledge>(
    "WebsiteKnowledge",
    WebsiteKnowledgeSchema
  );

export default WebsiteKnowledge;