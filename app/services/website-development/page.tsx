import Link from "next/link"
import {
  ArrowRight,
  Check,
  Globe,
  Smartphone,
  Zap,
  Search,
  ShieldCheck,
  MessageCircle,
  Code2,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Website Development Company | Affordable Websites Starting ₹5,999",
  description:
    "Get professional, responsive and SEO-friendly websites starting at ₹5,999. Acustard Technologies builds business websites, landing pages and custom web solutions.",
  keywords: [
    "website development",
    "website development company",
    "website development company India",
    "affordable website development",
    "website starting at 5999",
    "business website development",
    "SEO friendly website",
    "responsive website development",
    "Acustard Technologies",
  ],
  alternates: {
    canonical: "/services/website-development",
  },
}

const features = [
  {
    icon: Globe,
    title: "Professional Design",
    description:
      "Modern and professional website design that represents your brand.",
  },
  {
    icon: Smartphone,
    title: "Mobile Responsive",
    description:
      "Your website works smoothly across mobile, tablet and desktop devices.",
  },
  {
    icon: Zap,
    title: "Fast Performance",
    description:
      "Performance-focused development for a better user experience.",
  },
  {
    icon: Search,
    title: "SEO-Friendly Structure",
    description:
      "Clean structure, metadata and technical foundations designed for search engines.",
  },
  {
    icon: ShieldCheck,
    title: "Secure Development",
    description:
      "Best practices are followed to create a reliable and secure website.",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp Integration",
    description:
      "Make it easy for your customers to contact your business directly.",
  },
]

const starterFeatures = [
  "Single Page Professional Website",
  "Modern UI Design",
  "Mobile Responsive",
  "Fast Loading",
  "Contact Section",
  "WhatsApp Integration",
  "SEO-Friendly Structure",
  "Basic On-Page SEO",
]

const businessFeatures = [
  "Multi-Page Business Website",
  "Professional UI/UX",
  "Mobile Responsive",
  "Contact Form",
  "WhatsApp Integration",
  "Google Maps Integration",
  "SEO-Friendly Structure",
  "Performance Optimization",
  "Basic Technical SEO",
]

const process = [
  {
    number: "01",
    title: "Discuss",
    description:
      "We understand your business, requirements and target customers.",
  },
  {
    number: "02",
    title: "Design",
    description:
      "We create a modern design that matches your brand and business goals.",
  },
  {
    number: "03",
    title: "Develop",
    description:
      "Our team develops the website with responsive and performance-focused code.",
  },
  {
    number: "04",
    title: "Launch",
    description:
      "After testing, your website is prepared for deployment and launch.",
  },
]

const faqs = [
  {
    question: "How much does a website cost?",
    answer:
      "Our professional single-page website starts at ₹5,999. Final pricing depends on the design, pages and functionality required.",
  },
  {
    question: "Is domain and hosting included in ₹5,999?",
    answer:
      "No. Domain and hosting charges are separate from the website development cost.",
  },
  {
    question: "Is the ₹5,999 website SEO friendly?",
    answer:
      "Yes. The website can be developed with a clean SEO-friendly structure, responsive design, proper metadata and basic on-page SEO.",
  },
  {
    question: "Will my website rank on Google?",
    answer:
      "An SEO-friendly website provides a strong technical foundation, but Google rankings cannot be guaranteed. Rankings depend on competition, content, authority, keywords and ongoing SEO efforts.",
  },
  {
    question: "Can you build an e-commerce website?",
    answer:
      "Yes. We can develop e-commerce websites and custom web applications according to your business requirements.",
  },
  {
    question: "Can you maintain my website after launch?",
    answer:
      "Yes. Website maintenance, updates, SEO and digital marketing services can be provided separately.",
  },
]

export default function WebsiteDevelopmentPage() {
  return (
    <main className="overflow-hidden">
      <Navbar />

      {/* HERO */}
      <section className="relative py-20 md:py-28">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 left-10 h-72 w-72 rounded-full bg-blue-600/10 blur-3xl" />
          <div className="absolute bottom-10 right-10 h-72 w-72 rounded-full bg-violet-600/10 blur-3xl" />
        </div>

        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">

            <div className="inline-flex items-center gap-2 rounded-full border bg-background px-4 py-2 text-sm font-medium mb-6">
              <Code2 className="h-4 w-4 text-blue-600" />
              Website Development Services
            </div>

            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Professional Websites
              <span className="block text-blue-600 mt-2">
                Starting at ₹5,999
              </span>
            </h1>

            <p className="mt-6 text-lg text-muted-foreground max-w-3xl mx-auto">
              Build a professional online presence with a modern,
              responsive and SEO-friendly website designed for your business.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">

              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-blue-700 hover:bg-violet-600 group"
                >
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>

              <Link href="/portfolio">
                <Button size="lg" variant="outline">
                  View Our Work
                </Button>
              </Link>

            </div>

            <p className="mt-5 text-sm text-muted-foreground">
              Domain & hosting charges are not included.
            </p>

          </div>
        </div>
      </section>


      {/* WHY WEBSITE */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container px-4 md:px-6">

          <div className="text-center max-w-2xl mx-auto mb-12">

            <p className="text-blue-600 font-semibold text-sm mb-3">
              WHAT YOU GET
            </p>

            <h2 className="text-3xl md:text-4xl font-bold">
              More Than Just a Website
            </h2>

            <p className="mt-4 text-muted-foreground">
              We build websites that are designed to look professional,
              work smoothly and provide a strong foundation for your
              online presence.
            </p>

          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">

            {features.map((feature) => {
              const Icon = feature.icon

              return (
                <div
                  key={feature.title}
                  className="rounded-2xl border bg-background p-6 hover:shadow-lg transition-shadow"
                >
                  <div className="w-12 h-12 rounded-xl bg-blue-600/10 flex items-center justify-center mb-5">
                    <Icon className="h-6 w-6 text-blue-600" />
                  </div>

                  <h3 className="text-xl font-semibold">
                    {feature.title}
                  </h3>

                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              )
            })}

          </div>

        </div>
      </section>


      {/* PRICING */}
      <section className="py-20 md:py-28">
        <div className="container px-4 md:px-6">

          <div className="text-center max-w-2xl mx-auto mb-14">

            <p className="text-blue-600 font-semibold text-sm mb-3">
              WEBSITE PACKAGES
            </p>

            <h2 className="text-3xl md:text-4xl font-bold">
              Choose the Right Website
            </h2>

            <p className="mt-4 text-muted-foreground">
              Start small or build a complete digital presence for your
              growing business.
            </p>

          </div>


          <div className="grid gap-8 lg:grid-cols-2 max-w-5xl mx-auto">

            {/* STARTER */}

            <div className="rounded-2xl border bg-background p-8 shadow-sm">

              <div className="flex items-center justify-between">

                <div>
                  <p className="text-blue-600 font-semibold">
                    Starter
                  </p>

                  <h3 className="text-2xl font-bold mt-2">
                    Single Page Website
                  </h3>
                </div>

              </div>

              <div className="mt-7">
                <span className="text-4xl font-bold">
                  ₹5,999
                </span>

                <span className="text-muted-foreground ml-2">
                  starting
                </span>
              </div>

              <p className="mt-4 text-muted-foreground">
                Perfect for small businesses, professionals,
                individuals and new brands.
              </p>

              <Link href="/contact" className="block mt-7">

                <Button
                  variant="outline"
                  className="w-full"
                  size="lg"
                >
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>

              </Link>

              <div className="border-t mt-8 pt-7">

                <p className="font-semibold mb-5">
                  Included:
                </p>

                <ul className="space-y-3">

                  {starterFeatures.map((feature) => (
                    <li
                      key={feature}
                      className="flex gap-3 text-sm"
                    >
                      <Check className="h-5 w-5 text-blue-600 shrink-0" />
                      <span className="text-muted-foreground">
                        {feature}
                      </span>
                    </li>
                  ))}

                </ul>

              </div>

              <div className="mt-7 rounded-xl bg-muted/50 p-4">
                <p className="text-xs text-muted-foreground">
                  Domain and hosting are not included and will
                  be charged separately.
                </p>
              </div>

            </div>


            {/* BUSINESS */}

            <div className="relative rounded-2xl border-2 border-blue-600 bg-background p-8 shadow-xl">

              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <span className="rounded-full bg-blue-700 text-white px-5 py-2 text-sm font-semibold whitespace-nowrap">
                  Recommended
                </span>
              </div>

              <p className="text-blue-600 font-semibold">
                Business
              </p>

              <h3 className="text-2xl font-bold mt-2">
                Business Website
              </h3>

              <div className="mt-7">
                <span className="text-4xl font-bold">
                  ₹14,999+
                </span>
              </div>

              <p className="mt-4 text-muted-foreground">
                Designed for businesses that need multiple pages,
                stronger branding and more functionality.
              </p>

              <Link href="/contact" className="block mt-7">

                <Button
                  className="w-full bg-blue-700 hover:bg-violet-600"
                  size="lg"
                >
                  Build My Website
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>

              </Link>

              <div className="border-t mt-8 pt-7">

                <p className="font-semibold mb-5">
                  Included:
                </p>

                <ul className="space-y-3">

                  {businessFeatures.map((feature) => (
                    <li
                      key={feature}
                      className="flex gap-3 text-sm"
                    >
                      <Check className="h-5 w-5 text-blue-600 shrink-0" />
                      <span className="text-muted-foreground">
                        {feature}
                      </span>
                    </li>
                  ))}

                </ul>

              </div>

              <div className="mt-7 rounded-xl bg-blue-600/5 p-4">
                <p className="text-xs text-muted-foreground">
                  Final pricing depends on pages, features,
                  integrations and project requirements.
                </p>
              </div>

            </div>

          </div>

        </div>
      </section>


      {/* SEO */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container px-4 md:px-6">

          <div className="max-w-4xl mx-auto text-center">

            <Search className="h-10 w-10 text-blue-600 mx-auto mb-5" />

            <h2 className="text-3xl md:text-4xl font-bold">
              SEO-Friendly Website Development
            </h2>

            <p className="mt-5 text-muted-foreground leading-relaxed">
              A beautiful website is only the beginning. We create
              websites with clean structure, responsive layouts,
              metadata, performance considerations and search-engine
              friendly foundations.
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-10 text-left">

              {[
                "Clean HTML Structure",
                "Meta Title & Description",
                "Responsive Design",
                "Sitemap & Indexing Support",
                "Image Optimization",
                "Performance Optimization",
                "Search Console Setup",
                "SEO-Friendly URLs",
              ].map((item) => (

                <div
                  key={item}
                  className="flex items-center gap-3 rounded-xl border bg-background p-4"
                >
                  <Check className="h-5 w-5 text-blue-600 shrink-0" />
                  <span className="text-sm">
                    {item}
                  </span>
                </div>

              ))}

            </div>

            <p className="text-xs text-muted-foreground mt-8">
              SEO-friendly development improves your technical
              foundation, but search rankings cannot be guaranteed.
            </p>

          </div>

        </div>
      </section>


      {/* PROCESS */}
      <section className="py-20 md:py-28">
        <div className="container px-4 md:px-6">

          <div className="text-center mb-14">

            <p className="text-blue-600 font-semibold text-sm mb-3">
              OUR PROCESS
            </p>

            <h2 className="text-3xl md:text-4xl font-bold">
              From Idea to Launch
            </h2>

          </div>

          <div className="grid gap-8 md:grid-cols-4 max-w-6xl mx-auto">

            {process.map((item) => (

              <div key={item.number} className="text-center">

                <div className="text-4xl font-bold text-blue-600/30">
                  {item.number}
                </div>

                <h3 className="text-xl font-bold mt-3">
                  {item.title}
                </h3>

                <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
                  {item.description}
                </p>

              </div>

            ))}

          </div>

        </div>
      </section>


      {/* FAQ */}
      <section className="py-20 md:py-28 bg-muted/30">
        <div className="container px-4 md:px-6">

          <div className="max-w-3xl mx-auto">

            <div className="text-center mb-12">

              <p className="text-blue-600 font-semibold text-sm mb-3">
                FAQ
              </p>

              <h2 className="text-3xl md:text-4xl font-bold">
                Frequently Asked Questions
              </h2>

            </div>

            <div className="space-y-5">

              {faqs.map((faq) => (

                <div
                  key={faq.question}
                  className="rounded-xl border bg-background p-6"
                >

                  <h3 className="font-semibold text-lg">
                    {faq.question}
                  </h3>

                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </p>

                </div>

              ))}

            </div>

          </div>

        </div>
      </section>


      {/* FINAL CTA */}
      <section className="py-20 md:py-28">

        <div className="container px-4 md:px-6">

          <div className="max-w-4xl mx-auto rounded-3xl border bg-background p-8 md:p-14 text-center shadow-xl">

            <h2 className="text-3xl md:text-4xl font-bold">
              Ready to Take Your Business Online?
            </h2>

            <p className="mt-5 text-muted-foreground max-w-2xl mx-auto">
              Start your professional website journey with Acustard
              Technologies.
            </p>

            <Link href="/contact">

              <Button
                size="lg"
                className="mt-8 bg-blue-700 hover:bg-violet-600"
              >
                Start Your Website — ₹5,999
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>

            </Link>

          </div>

        </div>

      </section>
      <Footer />
    </main>
  )
}