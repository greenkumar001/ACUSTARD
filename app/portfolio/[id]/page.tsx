
import Link from "next/link"
import { ArrowLeft, Calendar, CheckCircle, Clock, User } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ImageGallery } from "@/components/image-gallery"
import { IMAGES } from "@/lib/constants"

export default function PortfolioDetailPage({
  params,
}: {
  params: { id: string }
}) {
  const project = IMAGES.projects.find(
    (project) => project.id === params.id
  )

  if (!project) {
    return (
      <div className="flex min-h-screen flex-col">
        <Navbar />

        <main className="flex flex-1 items-center justify-center">
          <div className="space-y-4 text-center">
            <h1 className="text-3xl font-bold">Project Not Found</h1>

            <p className="text-muted-foreground">
              The project you're looking for doesn't exist.
            </p>

            <Link href="/portfolio">
              <Button>Back to Portfolio</Button>
            </Link>
          </div>
        </main>

        <Footer />
      </div>
    )
  }

  const galleryImages = [
    {
      src: project.src,
      alt: project.alt,
    },

    ...IMAGES.projects
      .filter((p) => p.src !== project.src)
      .map((p) => ({
        src: p.src,
        alt: p.title,
      }))
      .slice(0, 3),
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full bg-gradient-to-r from-blue-700/10 to-violet-600/10 py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-4">
                <Link
                  href="/portfolio"
                  className="mb-4 inline-flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                >
                  <ArrowLeft className="mr-1 h-4 w-4" />
                  Back to Portfolio
                </Link>

                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl">
                  {project.title}
                </h1>

                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  {project.category}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Project Overview */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
              {/* Project Information */}
              <div className="space-y-6">
                <div>
                  <h2 className="text-3xl font-bold tracking-tighter">
                    Project Overview
                  </h2>

                  <p className="mt-4 text-muted-foreground">
                    {project.overview}
                  </p>
                </div>

                {/* Project Details */}
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <Card>
                    <CardContent className="flex items-center gap-3 p-4">
                      <Calendar className="h-5 w-5 text-blue-700" />

                      <div>
                        <p className="text-sm font-medium">
                          Project Duration
                        </p>

                        <p className="text-xs text-muted-foreground">
                          {project.duration}
                        </p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="flex items-center gap-3 p-4">
                      <User className="h-5 w-5 text-violet-600" />

                      <div>
                        <p className="text-sm font-medium">Client</p>

                        <p className="text-xs text-muted-foreground">
                          {project.client}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Technologies */}
                <div>
                  <h3 className="mb-3 text-xl font-bold">
                    Technologies Used
                  </h3>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="inline-flex items-center rounded-full bg-blue-700/10 px-3 py-1 text-xs font-medium text-blue-700"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Key Features */}
                <div>
                  <h3 className="mb-3 text-xl font-bold">
                    Key Features
                  </h3>

                  <ul className="space-y-3">
                    {project.features.map((feature, index) => (
                      <li
                        key={feature}
                        className="flex items-start gap-2"
                      >
                        <CheckCircle
                          className={`mt-0.5 h-5 w-5 shrink-0 ${index % 2 === 0
                            ? "text-blue-700"
                            : "text-violet-600"
                            }`}
                        />

                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Visit Project */}
                {project.url && project.url !== "#" && (
                  <Link
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="bg-blue-700 hover:bg-violet-600">
                      Visit Live Project
                    </Button>
                  </Link>
                )}
              </div>

              {/* Gallery & Results */}
              <div className="space-y-6">
                <ImageGallery images={galleryImages} />

                <Card>
                  <CardContent className="p-6">
                    <h3 className="mb-2 text-xl font-bold">
                      Results
                    </h3>

                    <p className="mb-4 text-muted-foreground">
                      {project.results}
                    </p>

                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Clock className="h-4 w-4" />

                      <span>
                        Completed: {project.completed}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full bg-gradient-to-r from-blue-700/10 to-violet-600/10 py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Ready for Similar Results?
                </h2>

                <p className="max-w-[900px] text-muted-foreground md:text-xl">
                  Let's discuss how we can help you achieve your business
                  goals with our expertise.
                </p>
              </div>

              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/contact">
                  <Button
                    size="lg"
                    className="bg-blue-700 hover:bg-violet-600"
                  >
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
