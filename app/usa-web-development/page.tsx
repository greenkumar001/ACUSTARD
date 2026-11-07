import type { Metadata } from "next"
import { RegionLandingPage } from "@/components/region-landing-page"

export const metadata: Metadata = {
  title: "Web Development & Custom Software for US Businesses",
  description:
    "Acustard Technologies helps US businesses build professional websites, custom web applications, ERP software and AI-enabled digital solutions through remote project delivery.",
  alternates: {
    canonical: "/usa-web-development",
    languages: {
      "en-US": "/usa-web-development",
      "en-GB": "/uk-web-development",
      "en-AU": "/australia-web-development",
      "x-default": "/",
    },
  },
}

export default function USWebDevelopmentPage() {
  return (
    <RegionLandingPage
      country="the United States"
      headline="Web Development & Custom Software for US Businesses"
      intro="Build a stronger digital presence with business websites, custom web applications and practical software solutions. Work with an India-based development team through a clear, remote-first process."
      serviceArea="Serving businesses across the United States through remote collaboration."
      localContext="Whether you are a startup, growing company or established business, your website and software should support real business goals. We work with you to understand your audience, workflows and priorities before recommending a solution."
      faq={[
        {
          question: "Can Acustard Technologies work with clients in the United States?",
          answer: "Yes. Acustard Technologies is based in India and can work remotely with US businesses. Project communication, meeting times, milestones and delivery expectations are agreed together.",
        },
        {
          question: "What services can you provide to US businesses?",
          answer: "Services include website development, custom web applications, ERP and business software, mobile app development, AI integrations, and SEO or digital marketing.",
        },
        {
          question: "How do we get a project estimate?",
          answer: "Share your goals, required features, preferred timeline and any existing references through our contact page. We can then discuss the scope and an appropriate estimate.",
        },
      ]}
    />
  )
}
