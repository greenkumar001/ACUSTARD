import mongoose, { Schema, model, models } from "mongoose";

const EnquirySchema = new Schema(
  {
    fullName: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
    },

    phone: {
      type: String,
      required: true,
    },


    message: {
      type: String,
    },

    status: {
      type: String,
      enum: ["new", "contacted", "admission", "closed"],
      default: "new",
    },
  },
  {
    timestamps: true,
  }
);

export default models.Enquiry || model("Enquiry", EnquirySchema);