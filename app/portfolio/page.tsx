
import Image from "next/image"
import Link from "next/link"


import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

import { IMAGES } from "@/lib/constants"

export default function PortfolioPage() {
  const portfolioProjects = IMAGES.projects

  // Get projects dynamically based on category
  const softwareProjects = portfolioProjects.filter(
    (project) =>
      project.category === "Software Development" ||
      project.category === "Web Development" ||
      project.category === "EdTech & Software Development"
  )

  const designProjects = portfolioProjects.filter(
    (project) => project.category === "Design Services"
  )

  const marketingProjects = portfolioProjects.filter(
    (project) => project.category === "Digital Marketing"
  )

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative w-full overflow-hidden bg-gradient-to-r from-blue-700/10 to-violet-600/10 py-12 md:py-24 lg:py-32">
          <div className="absolute inset-0 z-0">
            <Image
              src={IMAGES.backgrounds.abstract || "/placeholder.svg"}
              alt="Technology background"
              fill
              className="object-cover opacity-10"
            />
          </div>

          <div className="container relative z-10 px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="mb-4 flex items-center justify-center gap-3">
                  <div className="relative h-12 w-12">
                    <Image
                      src={IMAGES.logo || "/placeholder.svg"}
                      alt="Acustard Technologies Logo"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>

                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl">
                  Our Portfolio
                </h1>

                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Explore our recent projects and see how we've helped
                  businesses achieve their goals through technology,
                  innovation, and creative solutions.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Portfolio Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <Tabs defaultValue="all" className="w-full">
              {/* Tabs */}
              <TabsList className="mx-auto mb-8 grid w-full max-w-lg grid-cols-4 bg-blue-700/10">
                <TabsTrigger value="all">
                  All
                </TabsTrigger>

                <TabsTrigger value="software">
                  Software
                </TabsTrigger>

                <TabsTrigger value="design">
                  Design
                </TabsTrigger>

                <TabsTrigger value="marketing">
                  Marketing
                </TabsTrigger>
              </TabsList>

              {/* All Projects */}
              <TabsContent value="all" className="space-y-8">
                <ProjectGrid projects={portfolioProjects} />
              </TabsContent>

              {/* Software Projects */}
              <TabsContent value="software" className="space-y-8">
                <ProjectGrid projects={softwareProjects} />
              </TabsContent>

              {/* Design Projects */}
              <TabsContent value="design" className="space-y-8">
                <ProjectGrid projects={designProjects} />
              </TabsContent>

              {/* Marketing Projects */}
              <TabsContent value="marketing" className="space-y-8">
                <ProjectGrid projects={marketingProjects} />
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full bg-gradient-to-r from-blue-700/10 to-violet-600/10 py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Ready to Start Your Project?
                </h2>

                <p className="mx-auto max-w-[900px] text-muted-foreground md:text-xl">
                  Let's work together to bring your vision to life.
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

                <Link href="/services">
                  <Button
                    variant="outline"
                    size="lg"
                    className="hover:bg-blue-700 hover:text-white"
                  >
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

/* Project Grid Component */
function ProjectGrid({
  projects,
}: {
  projects: typeof IMAGES.projects
}) {
  if (projects.length === 0) {
    return (
      <div className="py-12 text-center">
        <p className="text-muted-foreground">
          No projects available in this category.
        </p>
      </div>
    )
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {projects.map((project) => (
        <Card
          key={project.id}
          className="group overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
        >
          {/* Project Image */}
          <div className="relative aspect-video overflow-hidden">
            <Image
              src={project.src || "/placeholder.svg"}
              alt={project.alt}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>

          {/* Project Information */}
          <CardHeader>
            <CardTitle>{project.title}</CardTitle>

            <CardDescription>
              {project.category}
            </CardDescription>
          </CardHeader>

          <CardContent>
            <p className="line-clamp-3 text-sm text-muted-foreground">
              {project.description}
            </p>
          </CardContent>

          {/* Footer */}

        </Card>
      ))}
    </div>
  )
}