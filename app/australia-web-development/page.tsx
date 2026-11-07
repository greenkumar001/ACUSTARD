import type { Metadata } from "next"
import { RegionLandingPage } from "@/components/region-landing-page"

export const metadata: Metadata = {
  title: "Website Development & Software for Australian Businesses",
  description:
    "Acustard Technologies builds business websites, custom web applications, ERP systems and AI-enabled solutions for Australian businesses through remote delivery.",
  alternates: {
    canonical: "/australia-web-development",
    languages: {
      "en-US": "/usa-web-development",
      "en-GB": "/uk-web-development",
      "en-AU": "/australia-web-development",
      "x-default": "/",
    },
  },
}

export default function AustraliaWebDevelopmentPage() {
  return (
    <RegionLandingPage
      country="Australia"
      headline="Website Development & Software for Australian Businesses"
      intro="Give your business a modern digital foundation with responsive websites, custom applications and practical software. Work remotely with an India-based team using agreed milestones and clear communication."
      serviceArea="Remote project collaboration for businesses across Australia."
      localContext="Australian businesses need digital experiences that work smoothly across devices and make it easy for customers to understand services and get in touch. We plan each project around its audience, business processes and measurable requirements."
      faq={[
        {
          question: "Can you work with businesses across Australia remotely?",
          answer: "Yes. Acustard Technologies is based in India and can collaborate remotely with Australian businesses. Meeting times, updates and delivery milestones are planned together.",
        },
        {
          question: "What types of websites and applications do you develop?",
          answer: "We develop business websites, web applications, customer or staff portals, ERP and workflow software, mobile apps and AI integrations based on project requirements.",
        },
        {
          question: "Do you offer ongoing website support?",
          answer: "Support and maintenance can be discussed as part of the project scope. The services, response expectations and duration should be agreed before the project begins.",
        },
      ]}
    />
  )
}
