import Link from "next/link"
import { ArrowRight, CheckCircle2, Globe2, MessageSquare } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

type RegionPageProps = {
  country: string
  headline: string
  intro: string
  serviceArea: string
  localContext: string
  faq: { question: string; answer: string }[]
}

const services = [
  "Business website design and development",
  "Custom web applications and portals",
  "ERP and business process software",
  "Mobile app development",
  "AI integrations and workflow automation",
  "SEO and digital marketing",
]

export function RegionLandingPage({
  country,
  headline,
  intro,
  serviceArea,
  localContext,
  faq,
}: RegionPageProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <section className="relative overflow-hidden bg-gradient-to-br from-blue-700/10 via-background to-violet-600/10 py-16 md:py-24">
          <div className="container relative z-10 mx-auto px-4 md:px-6">
            <div className="mx-auto max-w-4xl text-center">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border bg-background/80 px-4 py-2 text-sm text-muted-foreground">
                <Globe2 className="h-4 w-4 text-blue-700" />
                Serving businesses in {country}
              </div>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                {headline}
              </h1>
              <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-muted-foreground">
                {intro}
              </p>
              <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                <Button asChild size="lg" className="bg-blue-700 hover:bg-violet-600">
                  <Link href="/contact">
                    Discuss Your Project <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link href="/portfolio">View Our Work</Link>
                </Button>
              </div>
              <p className="mt-5 text-sm text-muted-foreground">
                India-based technology team · Remote project delivery · Clear communication
              </p>
            </div>
          </div>
        </section>

        <section className="py-14 md:py-20">
          <div className="container mx-auto grid gap-10 px-4 md:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-blue-700">
                Technology partner for {country}
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                Digital solutions built around your business
              </h2>
              <p className="mt-5 leading-8 text-muted-foreground">
                {localContext}
              </p>
              <p className="mt-4 leading-8 text-muted-foreground">
                Acustard Technologies is based in India and works remotely with businesses. We plan communication,
                milestones and delivery around the needs of each project, with scope and timelines agreed before work begins.
              </p>
            </div>
            <div className="rounded-2xl border bg-card p-6 shadow-sm md:p-8">
              <h3 className="text-xl font-semibold">Our services</h3>
              <ul className="mt-6 space-y-4">
                {services.map((service) => (
                  <li key={service} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-blue-700" />
                    <span className="text-muted-foreground">{service}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="bg-muted/40 py-14 md:py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                A straightforward way to work together
              </h2>
              <p className="mt-4 leading-7 text-muted-foreground">
                From the first conversation to launch, we keep the process transparent and focused on your goals.
              </p>
            </div>
            <div className="mx-auto mt-10 grid max-w-5xl gap-5 md:grid-cols-3">
              {[
                { title: "1. Understand", text: "We discuss your goals, users, requirements and expected outcomes." },
                { title: "2. Plan and build", text: "We agree on scope, milestones and communication before development." },
                { title: "3. Launch and support", text: "We test the solution, coordinate launch and discuss ongoing support." },
              ].map((step) => (
                <div key={step.title} className="rounded-xl border bg-card p-6">
                  <h3 className="font-semibold">{step.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-muted-foreground">{step.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-14 md:py-20">
          <div className="container mx-auto max-w-3xl px-4 md:px-6">
            <h2 className="text-center text-3xl font-bold tracking-tight sm:text-4xl">
              Frequently asked questions
            </h2>
            <div className="mt-8 space-y-6">
              {faq.map((item) => (
                <div key={item.question} className="border-b pb-5">
                  <h3 className="font-semibold">{item.question}</h3>
                  <p className="mt-2 leading-7 text-muted-foreground">{item.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-r from-blue-700/10 to-violet-600/10 py-14 md:py-20">
          <div className="container mx-auto px-4 text-center md:px-6">
            <MessageSquare className="mx-auto h-8 w-8 text-blue-700" />
            <h2 className="mt-4 text-3xl font-bold tracking-tight">Have a project in mind?</h2>
            <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
              Tell us what you want to build. We’ll review your requirements and discuss a practical next step.
            </p>
            <Button asChild size="lg" className="mt-7 bg-blue-700 hover:bg-violet-600">
              <Link href="/contact">Contact Acustard Technologies</Link>
            </Button>
            <p className="mt-5 text-sm text-muted-foreground">{serviceArea}</p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
