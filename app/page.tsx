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
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { HeroSection } from "@/components/hero-section"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ContactForm } from "@/components/contact-form"
import { StatsCounter } from "@/components/stats-counter"
import { ProjectShowcase } from "@/components/project-showcase"

// Import the constants
import { IMAGES } from "@/lib/constants"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <HeroSection />

        {/* Services Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-acustard-blue/10 to-acustard-violet/10 relative overflow-hidden">
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
                  <Code className="h-10 w-10 mb-2 text-acustard-blue" />
                  <CardTitle>Software Development</CardTitle>
                  <CardDescription>Custom software solutions tailored to your business needs.</CardDescription>
                </CardHeader>
                <CardFooter className="p-6 pt-0">
                  <Link
                    href="/services#software"
                    className="inline-flex items-center text-sm font-medium text-acustard-blue"
                  >
                    Learn more <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </CardFooter>
              </Card>
              <Card className="group relative overflow-hidden transition-all hover:shadow-lg">
                <CardHeader className="p-6">
                  <Palette className="h-10 w-10 mb-2 text-acustard-violet" />
                  <CardTitle>Design Services</CardTitle>
                  <CardDescription>Logo design, brochures, and visual identity creation.</CardDescription>
                </CardHeader>
                <CardFooter className="p-6 pt-0">
                  <Link
                    href="/services#design"
                    className="inline-flex items-center text-sm font-medium text-acustard-violet"
                  >
                    Learn more <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </CardFooter>
              </Card>
              <Card className="group relative overflow-hidden transition-all hover:shadow-lg">
                <CardHeader className="p-6">
                  <Globe className="h-10 w-10 mb-2 text-acustard-blue" />
                  <CardTitle>Digital Marketing</CardTitle>
                  <CardDescription>
                    Comprehensive digital marketing strategies to grow your online presence.
                  </CardDescription>
                </CardHeader>
                <CardFooter className="p-6 pt-0">
                  <Link
                    href="/services#marketing"
                    className="inline-flex items-center text-sm font-medium text-acustard-blue"
                  >
                    Learn more <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-acustard-black text-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Impact in Numbers</h2>
                <p className="max-w-[900px] text-white/70 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  We've helped businesses across various industries achieve their digital goals.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
              <StatsCounter
                end={150}
                label="Projects Completed"
                icon={<Briefcase className="h-5 w-5 text-acustard-blue" />}
              />
              <StatsCounter end={80} label="Happy Clients" icon={<Users className="h-5 w-5 text-acustard-violet" />} />
              <StatsCounter end={15} label="Team Members" icon={<Users className="h-5 w-5 text-acustard-blue" />} />
              <StatsCounter
                end={5}
                label="Years Experience"
                icon={<Award className="h-5 w-5 text-acustard-violet" />}
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
                  About ACUSTARD
                </h2>
                <p className="text-muted-foreground md:text-xl/relaxed">
                  Founded by Greenkumar Bisen, ACUSTARD is a forward-thinking IT company dedicated to
                  delivering innovative solutions that drive business growth and digital transformation.
                </p>
                <ul className="space-y-2 mt-4">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-acustard-blue mt-0.5 shrink-0" />
                    <span>Expert team with diverse technical skills</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-acustard-violet mt-0.5 shrink-0" />
                    <span>Proven track record of successful projects</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-acustard-blue mt-0.5 shrink-0" />
                    <span>Client-focused approach to every project</span>
                  </li>
                </ul>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="/about">
                    <Button className="bg-acustard-blue hover:bg-acustard-violet">Learn More About Us</Button>
                  </Link>
                  <Link href="/contact">
                    <Button variant="outline" className="hover:bg-acustard-blue hover:text-card-foreground">
                      Contact Us
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="relative">
                <div className="absolute -top-6 -left-6 w-24 h-24 bg-acustard-blue/20 rounded-full blur-xl"></div>
                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-acustard-violet/20 rounded-full blur-xl"></div>
                <div className="relative rounded-lg overflow-hidden border shadow-lg">
                  {/* Update the office image in the About Section */}
                  <Image
                    src={IMAGES.office || "/placeholder.svg"}
                    alt="acustard TECHNOLOGY office"
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
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-acustard-blue/10 to-acustard-violet/10">
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
                <Button className="bg-acustard-blue hover:bg-acustard-violet">
                  View All Projects <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Technologies Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 relative overflow-hidden">
          {/* Background image */}
          <div className="absolute inset-0 z-0">
            {/* Update the background image in the Technologies Section */}
            <Image
              src="/placeholder.svg?height=1080&width=1920"
              alt="Technology background"
              fill
              className="object-cover opacity-5"
            />
          </div>

          <div className="container px-4 md:px-6 relative z-10">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Technologies</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  We leverage cutting-edge technologies to deliver exceptional results.
                </p>
              </div>
            </div>
            <Tabs defaultValue="web" className="mt-12 max-w-4xl mx-auto">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="web">Web Development</TabsTrigger>
                <TabsTrigger value="mobile">Mobile Development</TabsTrigger>
                <TabsTrigger value="design">Design Tools</TabsTrigger>
              </TabsList>
              <TabsContent value="web" className="p-4 bg-background rounded-lg mt-4 border">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-4">
                  <div className="flex flex-col items-center gap-2">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-muted">
                      <Cpu className="h-8 w-8 text-acustard-blue" />
                    </div>
                    <span className="text-sm font-medium">React</span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-muted">
                      <Layers className="h-8 w-8 text-acustard-violet" />
                    </div>
                    <span className="text-sm font-medium">Next.js</span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-muted">
                      <Code className="h-8 w-8 text-acustard-blue" />
                    </div>
                    <span className="text-sm font-medium">Node.js</span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-muted">
                      <LayoutGrid className="h-8 w-8 text-acustard-violet" />
                    </div>
                    <span className="text-sm font-medium">Angular</span>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="mobile" className="p-4 bg-background rounded-lg mt-4 border">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-4">
                  <div className="flex flex-col items-center gap-2">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-muted">
                      <Cpu className="h-8 w-8 text-acustard-blue" />
                    </div>
                    <span className="text-sm font-medium">React Native</span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-muted">
                      <Layers className="h-8 w-8 text-acustard-violet" />
                    </div>
                    <span className="text-sm font-medium">Flutter</span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-muted">
                      <Code className="h-8 w-8 text-acustard-blue" />
                    </div>
                    <span className="text-sm font-medium">Swift</span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-muted">
                      <LayoutGrid className="h-8 w-8 text-acustard-violet" />
                    </div>
                    <span className="text-sm font-medium">Kotlin</span>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="design" className="p-4 bg-background rounded-lg mt-4 border">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-4">
                  <div className="flex flex-col items-center gap-2">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-muted">
                      <Palette className="h-8 w-8 text-acustard-violet" />
                    </div>
                    <span className="text-sm font-medium">Adobe XD</span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-muted">
                      <Palette className="h-8 w-8 text-acustard-blue" />
                    </div>
                    <span className="text-sm font-medium">Figma</span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-muted">
                      <Palette className="h-8 w-8 text-acustard-violet" />
                    </div>
                    <span className="text-sm font-medium">Photoshop</span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-muted">
                      <Palette className="h-8 w-8 text-acustard-blue" />
                    </div>
                    <span className="text-sm font-medium">Illustrator</span>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-acustard-blue/10 to-acustard-violet/10">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">What Our Clients Say</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Don't just take our word for it. Here's what our clients have to say about our services.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2">
              <Card className="bg-muted/50">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <MessageSquare className="h-10 w-10 text-acustard-blue" />
                    <div>
                      <p className="text-lg font-medium">
                        "acustard TECHNOLOGY transformed our business with their innovative software solutions. Their
                        team was professional, responsive, and delivered beyond our expectations."
                      </p>
                      <p className="mt-2 text-sm text-muted-foreground">— Sarah Johnson, CEO of TechStart</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-muted/50">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <MessageSquare className="h-10 w-10 text-acustard-violet" />
                    <div>
                      <p className="text-lg font-medium">
                        "The digital marketing campaign designed by acustard TECHNOLOGY increased our online visibility
                        by 200%. Their strategic approach and attention to detail made all the difference."
                      </p>
                      <p className="mt-2 text-sm text-muted-foreground">
                        — Michael Chen, Marketing Director at GlobalTech
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 relative overflow-hidden">
          {/* Background decorative elements */}
          <div className="absolute inset-0 z-0">
            <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-acustard-blue/5 rounded-bl-full"></div>
            <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-acustard-violet/5 rounded-tr-full"></div>
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
                    <Globe className="h-5 w-5 text-acustard-blue" />
                    <span>www.acustardtech.com</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MessageSquare className="h-5 w-5 text-acustard-violet" />
                    <span>info@acustardtech.com</span>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-acustard-blue/10 rounded-lg border border-acustard-blue/20">
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