import Link from "next/link"
import Image from "next/image"
import {
  ArrowRight,
  Code,
  Cpu,
  Globe,
  Layers,
  LayoutGrid,
  MessageSquare,
  Palette,
  CheckCircle,
  Users,
  Briefcase,
  Award,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { HeroSection } from "@/components/hero-section"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ContactForm } from "@/components/contact-form"
import { StatsCounter } from "@/components/stats-counter"
import { ProjectShowcase } from "@/components/project-showcase"

// Import the constants
import { IMAGES } from "@/lib/constants"
import { Testimonial } from "@/components/testimonial"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <HeroSection />

        {/* Services Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-blue-500/10 to-violet-500/10 relative overflow-hidden">
          {/* Background decorative elements */}
          <div className="absolute inset-0 z-0">
            <Image
              src={IMAGES.backgrounds.tech || "/placeholder.svg"}
              alt="Software Development"
              fill
              className="object-cover opacity-10"
            />
          </div>

          <div className="container px-4 md:px-6 relative z-10">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Services</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  We provide comprehensive IT solutions to help your business grow and succeed in the digital landscape.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3">
              <Card className="group relative overflow-hidden transition-all hover:shadow-lg">
                <CardHeader className="p-6">
                  <Code className="h-10 w-10 mb-2 text-blue-700" />
                  <CardTitle>Software Development</CardTitle>
                  <CardDescription>Custom software solutions tailored to your business needs.</CardDescription>
                </CardHeader>
                <CardFooter className="p-6 pt-0">
                  <Link
                    href="/services#software"
                    className="inline-flex items-center text-sm font-medium text-blue-700"
                  >
                    Learn more <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </CardFooter>
              </Card>
              <Card className="group relative overflow-hidden transition-all hover:shadow-lg">
                <CardHeader className="p-6">
                  <Palette className="h-10 w-10 mb-2 text-violet-600" />
                  <CardTitle>Design Services</CardTitle>
                  <CardDescription>Logo design, brochures, and visual identity creation.</CardDescription>
                </CardHeader>
                <CardFooter className="p-6 pt-0">
                  <Link
                    href="/services#design"
                    className="inline-flex items-center text-sm font-medium text-violet-600"
                  >
                    Learn more <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </CardFooter>
              </Card>
              <Card className="group relative overflow-hidden transition-all hover:shadow-lg">
                <CardHeader className="p-6">
                  <Globe className="h-10 w-10 mb-2 text-blue-700" />
                  <CardTitle>Digital Marketing</CardTitle>
                  <CardDescription>
                    Comprehensive digital marketing strategies to grow your online presence.
                  </CardDescription>
                </CardHeader>
                <CardFooter className="p-6 pt-0">
                  <Link
                    href="/services#marketing"
                    className="inline-flex items-center text-sm font-medium text-blue-700"
                  >
                    Learn more <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="w-full py-16 md:py-28 lg:py-36 bg-black text-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center gap-6 text-center mb-16">
              <div className="space-y-3">
                <h2 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">Our Impact in Numbers</h2>
                <p className="mx-auto max-w-2xl text-base text-white/70 md:text-lg lg:text-base">
                  We've helped businesses across various industries achieve their digital goals.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 lg:gap-12">
              <StatsCounter
                end={10}
                label="Projects Completed"
                icon={<Briefcase className="h-6 w-6 text-blue-700" />}
              />
              <StatsCounter
                end={15}
                label="Happy Clients"
                icon={<Users className="h-6 w-6 text-violet-600" />}
              />
              <StatsCounter
                end={8}
                label="Team Members"
                icon={<Users className="h-6 w-6 text-blue-700" />}
              />
              <StatsCounter
                end={5}
                label="Years Experience"
                icon={<Award className="h-6 w-6 text-violet-600" />}
              />
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
              <div className="space-y-4">
                <div className="flex items-center gap-3 mb-4">
                  {/* Update the logo image in the About Section */}
                  <div className="relative h-12 w-12">
                    <Image
                      src={IMAGES.logo || "/placeholder.svg"}
                      alt="ACUSTARD Logo"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  About Acustard Technologies
                </h2>
                <p className="text-muted-foreground md:text-xl/relaxed">
                  Founded by Greenkumar Bisen, Acustard Technologies is a forward-thinking IT company dedicated to
                  delivering innovative solutions that drive business growth and digital transformation.
                </p>
                <ul className="space-y-2 mt-4">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-blue-700 mt-0.5 shrink-0" />
                    <span>Expert team with diverse technical skills</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-violet-600 mt-0.5 shrink-0" />
                    <span>Proven track record of successful projects</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-blue-700 mt-0.5 shrink-0" />
                    <span>Client-focused approach to every project</span>
                  </li>
                </ul>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="/about">
                    <Button className="bg-blue-700 hover:bg-violet-600">Learn More About Us</Button>
                  </Link>
                  <Link href="/contact">
                    <Button variant="outline" className="hover:bg-blue-700 hover:text-white hover:border-blue-700 transition-colors duration-300">
                      Contact Us
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="relative">
                <div className="absolute -top-6 -left-6 w-24 h-24 bg-blue-500 rounded-full blur-xl"></div>
                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-violet-500/20 rounded-full blur-xl"></div>
                <div className="relative rounded-lg overflow-hidden border shadow-lg">
                  {/* Update the office image in the About Section */}
                  <Image
                    src={IMAGES.office || "/placeholder.svg"}
                    alt="ACUSTARD TECHNOLOGY office"
                    width={600}
                    height={400}
                    className="rounded-lg object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Website Showcase Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-blue-500/10 to-violet-500/10">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Work in Action</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Take a look at some of our recent projects and see how we've helped businesses achieve their goals.
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-4xl">
              <ProjectShowcase />
            </div>
            <div className="flex justify-center mt-8">
              <Link href="/portfolio">
                <Button className="bg-blue-700 hover:bg-violet-600">
                  View All Projects <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Technologies Section */}
        <section
          aria-labelledby="technologies-heading"
          className="
    relative
    w-full
    overflow-hidden
    bg-white
    py-16
    text-gray-900
    dark:bg-gray-950
    dark:text-white
    sm:py-20
    lg:py-28
  "
        >
          {/* Background */}
          <div className="pointer-events-none absolute inset-0 z-0">
            <Image
              src="/placeholder.svg?height=1080&width=1920"
              alt=""
              fill
              sizes="100vw"
              className="object-cover opacity-[0.03] dark:opacity-[0.05]"
            />
          </div>

          <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">

            {/* Section Header */}
            <div className="mx-auto max-w-3xl text-center">
              <h2
                id="technologies-heading"
                className="
          text-3xl
          font-bold
          tracking-tight
          text-gray-900
          dark:text-white
          sm:text-4xl
          lg:text-5xl
        "
              >
                Our Technologies
              </h2>

              <p
                className="
          mt-4
          text-sm
          leading-7
          text-gray-600
          dark:text-gray-400
          sm:text-base
          lg:text-lg
        "
              >
                We leverage modern technologies and industry-leading tools
                to build scalable, high-performance digital solutions.
              </p>
            </div>

            {/* Technology Tabs */}
            <Tabs
              defaultValue="web"
              className="mx-auto mt-10 w-full max-w-5xl sm:mt-14"
            >

              {/* Tabs Navigation */}
              <TabsList
                className="
          grid
          h-auto
          w-full
          grid-cols-1
          gap-2
          rounded-xl
          bg-gray-100
          p-2
          dark:bg-gray-900
          sm:grid-cols-3
        "
              >
                <TabsTrigger
                  value="web"
                  className="
            min-h-11
            rounded-lg
            px-3
            py-2
            text-sm
            font-medium
            text-gray-600
            transition-all
            data-[state=active]:bg-white
            data-[state=active]:text-blue-600
            data-[state=active]:shadow-sm
            dark:text-gray-400
            dark:data-[state=active]:bg-gray-800
            dark:data-[state=active]:text-blue-400
            sm:text-base
          "
                >
                  Web Development
                </TabsTrigger>

                <TabsTrigger
                  value="mobile"
                  className="
            min-h-11
            rounded-lg
            px-3
            py-2
            text-sm
            font-medium
            text-gray-600
            transition-all
            data-[state=active]:bg-white
            data-[state=active]:text-blue-600
            data-[state=active]:shadow-sm
            dark:text-gray-400
            dark:data-[state=active]:bg-gray-800
            dark:data-[state=active]:text-blue-400
            sm:text-base
          "
                >
                  Mobile Development
                </TabsTrigger>

                <TabsTrigger
                  value="design"
                  className="
            min-h-11
            rounded-lg
            px-3
            py-2
            text-sm
            font-medium
            text-gray-600
            transition-all
            data-[state=active]:bg-white
            data-[state=active]:text-blue-600
            data-[state=active]:shadow-sm
            dark:text-gray-400
            dark:data-[state=active]:bg-gray-800
            dark:data-[state=active]:text-blue-400
            sm:text-base
          "
                >
                  Design Tools
                </TabsTrigger>
              </TabsList>

              {/* Web Development */}
              <TabsContent
                value="web"
                className="
          mt-5
          rounded-2xl
          border
          border-gray-200
          bg-white
          p-4
          shadow-sm
          dark:border-gray-800
          dark:bg-gray-900
          sm:mt-6
          sm:p-6
        "
              >
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-6">
                  {[
                    { name: "React", icon: Cpu, color: "text-blue-600" },
                    { name: "Next.js", icon: Layers, color: "text-violet-600" },
                    { name: "Node.js", icon: Code, color: "text-blue-600" },
                    { name: "Angular", icon: LayoutGrid, color: "text-violet-600" },
                  ].map((tech) => {
                    const Icon = tech.icon

                    return (
                      <div
                        key={tech.name}
                        className="
                  flex
                  min-h-32
                  flex-col
                  items-center
                  justify-center
                  gap-3
                  rounded-xl
                  border
                  border-gray-200
                  bg-gray-50
                  p-4
                  text-center
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-blue-500/40
                  hover:shadow-md
                  dark:border-gray-700
                  dark:bg-gray-800
                "
                      >
                        <div
                          className="
                    flex
                    h-14
                    w-14
                    items-center
                    justify-center
                    rounded-full
                    bg-gray-200
                    dark:bg-gray-700
                  "
                        >
                          <Icon className={`h-7 w-7 ${tech.color}`} />
                        </div>

                        <span className="text-sm font-semibold text-gray-800 dark:text-gray-200">
                          {tech.name}
                        </span>
                      </div>
                    )
                  })}
                </div>
              </TabsContent>

              {/* Mobile Development */}
              <TabsContent
                value="mobile"
                className="
          mt-5
          rounded-2xl
          border
          border-gray-200
          bg-white
          p-4
          shadow-sm
          dark:border-gray-800
          dark:bg-gray-900
          sm:mt-6
          sm:p-6
        "
              >
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-6">
                  {[
                    { name: "React Native", icon: Cpu, color: "text-blue-600" },
                    { name: "Flutter", icon: Layers, color: "text-violet-600" },
                    { name: "Swift", icon: Code, color: "text-blue-600" },
                    { name: "Kotlin", icon: LayoutGrid, color: "text-violet-600" },
                  ].map((tech) => {
                    const Icon = tech.icon

                    return (
                      <div
                        key={tech.name}
                        className="
                  flex
                  min-h-32
                  flex-col
                  items-center
                  justify-center
                  gap-3
                  rounded-xl
                  border
                  border-gray-200
                  bg-gray-50
                  p-4
                  text-center
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-blue-500/40
                  hover:shadow-md
                  dark:border-gray-700
                  dark:bg-gray-800
                "
                      >
                        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gray-200 dark:bg-gray-700">
                          <Icon className={`h-7 w-7 ${tech.color}`} />
                        </div>

                        <span className="text-sm font-semibold text-gray-800 dark:text-gray-200">
                          {tech.name}
                        </span>
                      </div>
                    )
                  })}
                </div>
              </TabsContent>

              {/* Design Tools */}
              <TabsContent
                value="design"
                className="
          mt-5
          rounded-2xl
          border
          border-gray-200
          bg-white
          p-4
          shadow-sm
          dark:border-gray-800
          dark:bg-gray-900
          sm:mt-6
          sm:p-6
        "
              >
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-6">
                  {[
                    { name: "Adobe XD", icon: Palette },
                    { name: "Figma", icon: Palette },
                    { name: "Photoshop", icon: Palette },
                    { name: "Illustrator", icon: Palette },
                  ].map((tech) => {
                    const Icon = tech.icon

                    return (
                      <div
                        key={tech.name}
                        className="
                  flex
                  min-h-32
                  flex-col
                  items-center
                  justify-center
                  gap-3
                  rounded-xl
                  border
                  border-gray-200
                  bg-gray-50
                  p-4
                  text-center
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-violet-500/40
                  hover:shadow-md
                  dark:border-gray-700
                  dark:bg-gray-800
                "
                      >
                        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gray-200 dark:bg-gray-700">
                          <Icon className="h-7 w-7 text-violet-600" />
                        </div>

                        <span className="text-sm font-semibold text-gray-800 dark:text-gray-200">
                          {tech.name}
                        </span>
                      </div>
                    )
                  })}
                </div>
              </TabsContent>

            </Tabs>
          </div>
        </section>

        {/* Testimonials Section */}
        <Testimonial />
        {/* Contact Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 relative overflow-hidden">
          {/* Background decorative elements */}
          <div className="absolute inset-0 z-0">
            <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-500/5 rounded-bl-full"></div>
            <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-violet-500/5 rounded-tr-full"></div>
          </div>

          <div className="container px-4 md:px-6 relative z-10">
            <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Get in Touch</h2>
                <p className="text-muted-foreground md:text-xl/relaxed">
                  Ready to transform your business with cutting-edge technology solutions? Contact us today to discuss
                  your project.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Globe className="h-5 w-5 text-blue-700" />
                    <span>www.acustardtechnologies.com</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MessageSquare className="h-5 w-5 text-violet-600" />
                    <span>acustardtechnologies@gmail.com</span>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-blue-500/10 rounded-lg border border-blue-500/20">
                  <h3 className="font-medium mb-2 flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-[#25D366]"
                    >
                      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                    </svg>
                    WhatsApp Us
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    For quick responses, reach out to us on WhatsApp at +91 9145376420
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}