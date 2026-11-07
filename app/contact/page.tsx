import type { Metadata } from "next";
import ContactClient from "./contact-client";

export const metadata: Metadata = {
  title: "Contact Acustard Technologies",
  description:
    "Contact Acustard Technologies to discuss website development, custom software, ERP systems, AI solutions, and digital transformation projects.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return <ContactClient />;
}