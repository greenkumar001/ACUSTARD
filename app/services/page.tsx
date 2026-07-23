import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

// Import the constants
import { IMAGES } from "@/lib/constants"
import { Metadata } from "next"
export const metadata: Metadata = {
  title: "Software Development & IT Services",
  description:
    "Explore professional software development, website development, mobile app development, AI, SEO and digital marketing services by Acustard Technologies.",
}
export default function ServicesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-blue-700/10 to-violet-600/10 relative">
          {/* Background image */}
          <div className="absolute inset-0 z-0">
            <Image
              src={IMAGES.backgrounds.tech || "/placeholder.svg"}
              alt="Technology background"
              fill
              className="object-cover opacity-10"
            />
          </div>

          <div className="container px-4 md:px-6 relative z-10">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <div className="relative h-12 w-12">
                    <Image
                      src={IMAGES.logo || "/placeholder.svg"}
                      alt="acustard TECHNOLOGY Logo"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">Our Services</h1>
                <p className="max-w-[600px] mx-auto text-muted-foreground md:text-xl">
                  Comprehensive IT solutions tailored to your business needs.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Software Development Section */}
        <section id="software" className="w-full py-12 md:py-24 lg:py-32 relative">
          {/* Background image */}
          <div className="absolute inset-0 z-0">
            <Image
              src={IMAGES.backgrounds.data || "/placeholder.svg"}
              alt="Code background"
              fill
              className="object-cover opacity-5"
            />
          </div>

          <div className="container px-4 md:px-6 relative z-10">
            <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Software Development</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Custom Software Solutions
                </h2>
                <p className="text-muted-foreground md:text-xl/relaxed">
                  We build custom software solutions that streamline your business processes, improve efficiency, and
                  drive growth.
                </p>
                <ul className="grid gap-3">
                  <li className="flex items-center gap-2">
                    <ArrowRight className="h-4 w-4 text-acustard-blue" />
                    <span>Web Application Development</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ArrowRight className="h-4 w-4 text-acustard-blue" />
                    <span>Mobile App Development</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ArrowRight className="h-4 w-4 text-acustard-blue" />
                    <span>Enterprise Software Solutions</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ArrowRight className="h-4 w-4 text-acustard-blue" />
                    <span>API Development & Integration</span>
                  </li>
                </ul>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative w-full h-[300px] rounded-lg overflow-hidden">
                  <Image
                    src={IMAGES.services.software || "/placeholder.svg"}
                    alt="Software Development"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Design Services Section */}
        <section id="design" className="w-full py-12 md:py-24 lg:py-32 relative">
          {/* Background image */}
          <div className="absolute inset-0 z-0 bg-gradient-to-r from-blue-700/10 to-violet-600/10">
            <Image
              src={IMAGES.backgrounds.design || "/placeholder.svg"}
              alt="Design background"
              fill
              className="object-cover opacity-10 mix-blend-overlay"
            />
          </div>

          <div className="container px-4 md:px-6 relative z-10">
            <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
              <div className="flex items-center justify-center order-2 lg:order-1">
                <div className="relative w-full h-[300px] rounded-lg overflow-hidden">
                  <Image
                    src={IMAGES.services.design || "/placeholder.svg"}
                    alt="Design Services"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="space-y-4 order-1 lg:order-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Design Services</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Creative Design Solutions
                </h2>
                <p className="text-muted-foreground md:text-xl/relaxed">
                  Our design team creates stunning visuals that communicate your brand message effectively and leave a
                  lasting impression.
                </p>
                <ul className="grid gap-3">
                  <li className="flex items-center gap-2">
                    <ArrowRight className="h-4 w-4 text-blue-700" />
                    <span>Logo Design</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ArrowRight className="h-4 w-4 text-violet-600" />
                    <span>Brochure Design</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ArrowRight className="h-4 w-4 text-blue-700" />
                    <span>UI/UX Design</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ArrowRight className="h-4 w-4 text-violet-600" />
                    <span>Brand Identity Development</span>
                  </li>
                </ul>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="/portfolio">
                    <Button className="bg-blue-700 hover:bg-violet-600">View Our Portfolio</Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Digital Marketing Section */}
        <section id="marketing" className="w-full py-12 md:py-24 lg:py-32 relative">
          {/* Background image */}
          <div className="absolute inset-0 z-0">
            <Image
              src={IMAGES.backgrounds.network || "/placeholder.svg"}
              alt="Marketing background"
              fill
              className="object-cover opacity-5"
            />
          </div>

          <div className="container px-4 md:px-6 relative z-10">
            <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Digital Marketing</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Grow Your Online Presence
                </h2>
                <p className="text-muted-foreground md:text-xl/relaxed">
                  Our digital marketing strategies help you reach your target audience, increase brand awareness, and
                  drive conversions.
                </p>
                <ul className="grid gap-3">
                  <li className="flex items-center gap-2">
                    <ArrowRight className="h-4 w-4 text-blue-700" />
                    <span>Search Engine Optimization (SEO)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ArrowRight className="h-4 w-4 text-violet-600" />
                    <span>Social Media Marketing</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ArrowRight className="h-4 w-4 text-blue-700" />
                    <span>Content Marketing</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ArrowRight className="h-4 w-4 text-violet-600" />
                    <span>Email Marketing Campaigns</span>
                  </li>
                </ul>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative w-full h-[300px] rounded-lg overflow-hidden">
                  <Image
                    src={IMAGES.services.marketing || "/placeholder.svg"}
                    alt="Digital Marketing"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* IT Consulting Section */}
        <section id="consulting" className="w-full py-12 md:py-24 lg:py-32 relative">
          {/* Background image */}
          <div className="absolute inset-0 z-0 bg-gradient-to-r from-acustard-blue/10 to-acustard-violet/10">
            <Image
              src={IMAGES.backgrounds.abstract || "/placeholder.svg"}
              alt="Consulting background"
              fill
              className="object-cover opacity-10 mix-blend-overlay"
            />
          </div>

          <div className="container px-4 md:px-6 relative z-10">
            <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
              <div className="flex items-center justify-center order-2 lg:order-1">
                <div className="relative w-full h-[300px] rounded-lg overflow-hidden">
                  <Image
                    src={IMAGES.services.consulting || "/placeholder.svg"}
                    alt="IT Consulting"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="space-y-4 order-1 lg:order-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">IT Consulting</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Expert Technology Guidance
                </h2>
                <p className="text-muted-foreground md:text-xl/relaxed">
                  Our experienced consultants provide strategic advice to help you make informed technology decisions
                  and maximize your IT investments.
                </p>
                <ul className="grid gap-3">
                  <li className="flex items-center gap-2">
                    <ArrowRight className="h-4 w-4 text-blue-700" />
                    <span>IT Strategy Development</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ArrowRight className="h-4 w-4 text-violet-600" />
                    <span>Technology Assessment</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ArrowRight className="h-4 w-4 text-blue-700" />
                    <span>Digital Transformation</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ArrowRight className="h-4 w-4 text-violet-600" />
                    <span>IT Infrastructure Planning</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 relative">
          {/* Background image */}
          <div className="absolute inset-0 z-0">
            <Image
              src={IMAGES.backgrounds.gradient || "/placeholder.svg"}
              alt="CTA background"
              fill
              className="object-cover opacity-20"
            />
          </div>

          <div className="container px-4 md:px-6 relative z-10">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Ready to Get Started?</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Contact us today to discuss your project and how we can help you achieve your business goals.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/contact">
                  <Button className="bg-blue-700 hover:bg-violet-600" size="lg">
                    Contact Us
                  </Button>
                </Link>
                <Link href="/portfolio">
                  <Button
                    variant="outline"
                    className="text-acustard-blue hover:bg-acustard-blue hover:text-white hover:border-acustard-blue transition-colors duration-300"
                    size="lg"
                  >
                    View Our Work
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}