import Link from "next/link"
import { ArrowLeft, Calendar, CheckCircle, Clock, User } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ImageGallery } from "@/components/image-gallery"
import { IMAGES } from "@/lib/constants"

export default function PortfolioDetailPage({ params }: { params: { id: string } }) {
  const project = IMAGES.portfolio.find((p) => p.id === params.id)

  if (!project) {
    return (
      <div className="flex min-h-screen flex-col">
        <Navbar />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center space-y-4">
            <h1 className="text-3xl font-bold">Project Not Found</h1>
            <p className="text-muted-foreground">The project you're looking for doesn't exist.</p>
            <Link href="/portfolio">
              <Button>Back to Portfolio</Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  // Generate additional images for the gallery
  const galleryImages = [
    { src: project.src, alt: project.alt },
    ...IMAGES.projects.map((p) => ({ src: p.image, alt: p.title })).slice(0, 3),
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-blue-700/10 to-violet-600/10">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <Link
                  href="/portfolio"
                  className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-foreground mb-4"
                >
                  <ArrowLeft className="mr-1 h-4 w-4" />
                  Back to Portfolio
                </Link>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">{project.title}</h1>
                <p className="max-w-[600px] mx-auto text-muted-foreground md:text-xl">{project.category}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Project Overview */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-start">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold tracking-tighter">Project Overview</h2>
                <p className="text-muted-foreground">
                  {project.title === "E-Commerce Platform"
                    ? "We developed a comprehensive e-commerce platform for a retail client looking to expand their online presence. The solution included advanced product filtering, secure payment processing, and a robust inventory management system."
                    : project.title === "Brand Identity"
                      ? "Our design team created a complete brand identity package for a startup tech company. The project included logo design, business cards, letterheads, and a comprehensive brand guideline document."
                      : project.title === "SEO Campaign"
                        ? "We implemented a strategic SEO campaign for a client in the finance sector. Through keyword optimization, content strategy, and technical SEO improvements, we achieved a 200% increase in organic traffic within 6 months."
                        : project.title === "Mobile Banking App"
                          ? "We designed and developed a secure, user-friendly mobile banking application with biometric authentication, real-time transaction monitoring, and personalized financial insights."
                          : project.title === "Product Brochure"
                            ? "Our design team created an elegant product brochure that effectively showcases the client's product features and benefits. The design incorporated brand colors, professional photography, and compelling copy."
                            : "We executed an integrated social media campaign across multiple platforms that significantly increased brand engagement and drove conversions. The strategy included content creation, community management, and targeted advertising."}
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <Card>
                    <CardContent className="p-4 flex items-center gap-3">
                      <Calendar className="h-5 w-5 text-blue-700" />
                      <div>
                        <p className="text-sm font-medium">Project Duration</p>
                        <p className="text-xs text-muted-foreground">3 months</p>
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-4 flex items-center gap-3">
                      <User className="h-5 w-5 text-violet-600" />
                      <div>
                        <p className="text-sm font-medium">Client</p>
                        <p className="text-xs text-muted-foreground">
                          {project.title === "E-Commerce Platform"
                            ? "RetailTech Inc."
                            : project.title === "Brand Identity"
                              ? "InnovateTech Startup"
                              : project.title === "SEO Campaign"
                                ? "FinanceGrow Ltd."
                                : project.title === "Mobile Banking App"
                                  ? "SecureBank Corp."
                                  : project.title === "Product Brochure"
                                    ? "ProductX Company"
                                    : "SocialBrand Agency"}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
                <h3 className="text-xl font-bold">Key Features</h3>
                <ul className="space-y-2">
                  {project.title === "E-Commerce Platform" ? (
                    <>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-blue-700 mt-0.5 shrink-0" />
                        <span>Advanced product filtering and search</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-violet-600 mt-0.5 shrink-0" />
                        <span>Secure payment processing with multiple gateways</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-blue-700 mt-0.5 shrink-0" />
                        <span>Real-time inventory management</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-violet-600 mt-0.5 shrink-0" />
                        <span>Customer account management and order history</span>
                      </li>
                    </>
                  ) : project.title === "Brand Identity" ? (
                    <>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-blue-700 mt-0.5 shrink-0" />
                        <span>Logo design with multiple variations</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-violet-600 mt-0.5 shrink-0" />
                        <span>Business cards and letterhead design</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-blue-700 mt-0.5 shrink-0" />
                        <span>Brand color palette and typography</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-violet-600 mt-0.5 shrink-0" />
                        <span>Comprehensive brand guidelines document</span>
                      </li>
                    </>
                  ) : project.title === "SEO Campaign" ? (
                    <>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-blue-700 mt-0.5 shrink-0" />
                        <span>Keyword research and optimization</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-violet-600 mt-0.5 shrink-0" />
                        <span>Content strategy and creation</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-blue-700 mt-0.5 shrink-0" />
                        <span>Technical SEO improvements</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-violet-600 mt-0.5 shrink-0" />
                        <span>Link building and outreach</span>
                      </li>
                    </>
                  ) : project.title === "Mobile Banking App" ? (
                    <>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-blue-700 mt-0.5 shrink-0" />
                        <span>Biometric authentication</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-violet-600 mt-0.5 shrink-0" />
                        <span>Real-time transaction monitoring</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-blue-700 mt-0.5 shrink-0" />
                        <span>Bill payment and fund transfers</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-violet-600 mt-0.5 shrink-0" />
                        <span>Personalized financial insights</span>
                      </li>
                    </>
                  ) : project.title === "Product Brochure" ? (
                    <>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-blue-700 mt-0.5 shrink-0" />
                        <span>Professional product photography</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-violet-600 mt-0.5 shrink-0" />
                        <span>Compelling copywriting</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-blue-700 mt-0.5 shrink-0" />
                        <span>Brand-aligned design elements</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-violet-600 mt-0.5 shrink-0" />
                        <span>Print and digital versions</span>
                      </li>
                    </>
                  ) : (
                    <>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-blue-700 mt-0.5 shrink-0" />
                        <span>Content creation and scheduling</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-violet-600 mt-0.5 shrink-0" />
                        <span>Community management</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-blue-700 mt-0.5 shrink-0" />
                        <span>Targeted advertising campaigns</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-violet-600 mt-0.5 shrink-0" />
                        <span>Performance analytics and reporting</span>
                      </li>
                    </>
                  )}
                </ul>
              </div>
              <div className="space-y-6">
                <ImageGallery images={galleryImages} />
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-2">Results</h3>
                    <p className="text-muted-foreground mb-4">
                      {project.title === "E-Commerce Platform"
                        ? "The e-commerce platform resulted in a 45% increase in online sales and a 30% reduction in cart abandonment rate within the first quarter after launch."
                        : project.title === "Brand Identity"
                          ? "The new brand identity helped the client establish a strong market presence, resulting in increased brand recognition and a 25% growth in new business inquiries."
                          : project.title === "SEO Campaign"
                            ? "The SEO campaign achieved a 200% increase in organic traffic, a 150% increase in lead generation, and a 35% improvement in conversion rates."
                            : project.title === "Mobile Banking App"
                              ? "The mobile banking app gained over 50,000 users within the first three months, with a 4.8/5 star rating on app stores and a 40% increase in digital transactions."
                              : project.title === "Product Brochure"
                                ? "The product brochure helped increase product inquiries by 60% and contributed to a 25% increase in sales conversions during sales meetings."
                                : "The social media campaign increased engagement by 300%, grew the client's follower base by 75%, and generated a 45% increase in website traffic from social channels."}
                    </p>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Clock className="h-4 w-4" />
                      <span>Completed: January 2023</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-blue-700/10 to-violet-600/10">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Ready for Similar Results?
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Let's discuss how we can help you achieve your business goals with our expertise.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/contact">
                  <Button size="lg" className="bg-blue-700 hover:bg-violet-600">
                    Contact Us
                  </Button>
                </Link>
                <Link href="/portfolio">
                  <Button variant="outline" size="lg">
                    View More Projects
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
