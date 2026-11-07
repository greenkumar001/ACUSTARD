import type { Metadata } from "next"
import { RegionLandingPage } from "@/components/region-landing-page"

export const metadata: Metadata = {
  title: "Web Development & Software Solutions for UK Businesses",
  description:
    "Acustard Technologies provides website development, bespoke software, ERP solutions and AI integrations for UK businesses through remote collaboration.",
  alternates: {
    canonical: "/uk-web-development",
    languages: {
      "en-US": "/usa-web-development",
      "en-GB": "/uk-web-development",
      "en-AU": "/australia-web-development",
      "x-default": "/",
    },
  },
}

export default function UKWebDevelopmentPage() {
  return (
    <RegionLandingPage
      country="the United Kingdom"
      headline="Web Development & Software Solutions for UK Businesses"
      intro="Create a professional online presence and improve business workflows with bespoke websites, web applications and software solutions. Collaborate with an India-based technology team remotely."
      serviceArea="Working remotely with businesses across the United Kingdom."
      localContext="From small and medium-sized businesses to growing digital teams, the right technology should be reliable, easy to use and aligned with your operations. We focus on understanding your requirements, agreeing the scope and delivering a solution that fits your business."
      faq={[
        {
          question: "Do you provide web development for UK companies?",
          answer: "Yes. Acustard Technologies is based in India and works remotely with UK businesses. Communication schedules and project milestones are agreed to suit both teams.",
        },
        {
          question: "Can you build bespoke software and business systems?",
          answer: "We can develop custom web applications, ERP and workflow systems, business portals, mobile applications and integrations based on an agreed project scope.",
        },
        {
          question: "Can you redesign an existing business website?",
          answer: "Yes. Share your current website and explain what you want to improve, such as design, usability, performance, content structure or enquiry generation. We can review the requirements and discuss suitable options.",
        },
      ]}
    />
  )
}
