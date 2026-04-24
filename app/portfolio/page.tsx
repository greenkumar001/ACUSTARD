import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

// Import the constants
import { IMAGES } from "@/lib/constants"

export default function PortfolioPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-blue-700/10 to-violet-600/10 relative">
          <div className="absolute inset-0 z-0">
            <Image
              src={IMAGES.backgrounds.abstract || "/placeholder.svg"}
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
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">Our Portfolio</h1>
                <p className="max-w-[600px] mx-auto text-muted-foreground md:text-xl">
                  Explore our recent projects and see how we've helped businesses achieve their goals.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Portfolio Tabs Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <Tabs defaultValue="all" className="w-full">
              <TabsList className="grid w-full max-w-md mx-auto grid-cols-4 mb-8 bg-blue-700/10">
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="software">Software</TabsTrigger>
                <TabsTrigger value="design">Design</TabsTrigger>
                <TabsTrigger value="marketing">Marketing</TabsTrigger>
              </TabsList>
              <TabsContent value="all" className="space-y-8">
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {IMAGES.portfolio.map((project) => (
                    <Card key={project.id} className="overflow-hidden">
                      <div className="relative aspect-video">
                        <Image
                          src={project.src || "/placeholder.svg"}
                          alt={project.alt}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <CardHeader>
                        <CardTitle>{project.title}</CardTitle>
                        <CardDescription>{project.category}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground">
                          {project.title === "E-Commerce Platform"
                            ? "A custom e-commerce platform with integrated payment processing and inventory management."
                            : project.title === "Brand Identity"
                              ? "Complete brand identity design including logo, business cards, and marketing materials."
                              : project.title === "SEO Campaign"
                                ? "Comprehensive SEO strategy that increased organic traffic by 200% in 6 months."
                                : project.title === "Mobile Banking App"
                                  ? "Secure and user-friendly mobile banking application with biometric authentication."
                                  : project.title === "Product Brochure"
                                    ? "Elegant product brochure design that effectively showcases product features and benefits."
                                    : "Integrated social media campaign that increased engagement and conversions."}
                        </p>
                      </CardContent>
                      <CardFooter>
                        <Link
                          href={`/portfolio/${project.id}`}
                          className={`inline-flex items-center text-sm font-medium ${
                            project.category === "Design Services" ? "text-acustard-violet" : "text-acustard-blue"
                          }`}
                        >
                          View Case Study <ArrowRight className="ml-1 h-4 w-4" />
                        </Link>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="software" className="space-y-8">
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  <Card className="overflow-hidden">
                    <div className="relative aspect-video">
                      <Image
                        src="/placeholder.svg?height=300&width=500"
                        alt="Project 1"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle>E-Commerce Platform</CardTitle>
                      <CardDescription>Software Development</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        A custom e-commerce platform with integrated payment processing and inventory management.
                      </p>
                    </CardContent>
                    <CardFooter>
                      <Link
                        href="/portfolio/ecommerce"
                        className="inline-flex items-center text-sm font-medium text-blue-700"
                      >
                        View Case Study <ArrowRight className="ml-1 h-4 w-4" />
                      </Link>
                    </CardFooter>
                  </Card>
                  <Card className="overflow-hidden">
                    <div className="relative aspect-video">
                      <Image
                        src="/placeholder.svg?height=300&width=500"
                        alt="Project 4"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle>Mobile Banking App</CardTitle>
                      <CardDescription>Software Development</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        Secure and user-friendly mobile banking application with biometric authentication.
                      </p>
                    </CardContent>
                    <CardFooter>
                      <Link
                        href="/portfolio/banking-app"
                        className="inline-flex items-center text-sm font-medium text-violet-600"
                      >
                        View Case Study <ArrowRight className="ml-1 h-4 w-4" />
                      </Link>
                    </CardFooter>
                  </Card>
                </div>
              </TabsContent>
              <TabsContent value="design" className="space-y-8">
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  <Card className="overflow-hidden">
                    <div className="relative aspect-video">
                      <Image
                        src="/placeholder.svg?height=300&width=500"
                        alt="Project 2"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle>Brand Identity</CardTitle>
                      <CardDescription>Design Services</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        Complete brand identity design including logo, business cards, and marketing materials.
                      </p>
                    </CardContent>
                    <CardFooter>
                      <Link
                        href="/portfolio/brand-identity"
                        className="inline-flex items-center text-sm font-medium text-blue-700"
                      >
                        View Case Study <ArrowRight className="ml-1 h-4 w-4" />
                      </Link>
                    </CardFooter>
                  </Card>
                  <Card className="overflow-hidden">
                    <div className="relative aspect-video">
                      <Image
                        src="/placeholder.svg?height=300&width=500"
                        alt="Project 5"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle>Product Brochure</CardTitle>
                      <CardDescription>Design Services</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        Elegant product brochure design that effectively showcases product features and benefits.
                      </p>
                    </CardContent>
                    <CardFooter>
                      <Link
                        href="/portfolio/product-brochure"
                        className="inline-flex items-center text-sm font-medium text-violet-600"
                      >
                        View Case Study <ArrowRight className="ml-1 h-4 w-4" />
                      </Link>
                    </CardFooter>
                  </Card>
                </div>
              </TabsContent>
              <TabsContent value="marketing" className="space-y-8">
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  <Card className="overflow-hidden">
                    <div className="relative aspect-video">
                      <Image
                        src="/placeholder.svg?height=300&width=500"
                        alt="Project 3"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle>SEO Campaign</CardTitle>
                      <CardDescription>Digital Marketing</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        Comprehensive SEO strategy that increased organic traffic by 200% in 6 months.
                      </p>
                    </CardContent>
                    <CardFooter>
                      <Link
                        href="/portfolio/seo-campaign"
                        className="inline-flex items-center text-sm font-medium text-blue-700"
                      >
                        View Case Study <ArrowRight className="ml-1 h-4 w-4" />
                      </Link>
                    </CardFooter>
                  </Card>
                  <Card className="overflow-hidden">
                    <div className="relative aspect-video">
                      <Image
                        src="/placeholder.svg?height=300&width=500"
                        alt="Project 6"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle>Social Media Campaign</CardTitle>
                      <CardDescription>Digital Marketing</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        Integrated social media campaign that increased engagement and conversions.
                      </p>
                    </CardContent>
                    <CardFooter>
                      <Link
                        href="/portfolio/social-media"
                        className="inline-flex items-center text-sm font-medium text-violet-600"
                      >
                        View Case Study <ArrowRight className="ml-1 h-4 w-4" />
                      </Link>
                    </CardFooter>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-blue-700/10 to-violet-600/10">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Ready to Start Your Project?
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Let's work together to bring your vision to life.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/contact">
                  <Button size="lg" className="bg-blue-700 hover:bg-violet-600">
                    Contact Us
                  </Button>
                </Link>
                <Link href="/services">
                  <Button variant="outline" size="lg" className="hover:bg-blue-700 hover:text-white">
                    Explore Our Services
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