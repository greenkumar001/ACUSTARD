import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { IMAGES } from "@/lib/constants"

export default function GalleryPage() {
  // Create a unique set of images for the gallery
  // Use a Map to track images by their src to avoid duplicates
  const uniqueImages = new Map()

  // Add portfolio images
  IMAGES.portfolio.forEach((project) => {
    if (!uniqueImages.has(project.src)) {
      uniqueImages.set(project.src, {
        src: project.src,
        alt: project.alt,
        category: "Portfolio",
      })
    }
  })

  // Add project showcase images
  IMAGES.projects.forEach((project) => {
    if (!uniqueImages.has(project.image)) {
      uniqueImages.set(project.image, {
        src: project.image,
        alt: project.title,
        category: "Projects",
      })
    }
  })

  // Add company images
  if (!uniqueImages.has(IMAGES.office)) {
    uniqueImages.set(IMAGES.office, {
      src: IMAGES.office,
      alt: "acustard TECHNOLOGY Office",
      category: "Company",
    })
  }

  if (!uniqueImages.has(IMAGES.team)) {
    uniqueImages.set(IMAGES.team, {
      src: IMAGES.team,
      alt: "acustard TECHNOLOGY Team",
      category: "Company",
    })
  }

  // Add team member images
  IMAGES.team_members.forEach((member) => {
    if (!uniqueImages.has(member.image)) {
      uniqueImages.set(member.image, {
        src: member.image,
        alt: member.name,
        category: "Team",
      })
    }
  })

  // Add additional gallery images
  IMAGES.gallery.forEach((image) => {
    if (!uniqueImages.has(image.src)) {
      uniqueImages.set(image.src, {
        src: image.src,
        alt: image.alt,
        category: "Services",
      })
    }
  })

  // Add service images
  Object.entries(IMAGES.services).forEach(([key, src]) => {
    if (!uniqueImages.has(src)) {
      uniqueImages.set(src, {
        src: src,
        alt: `${key.charAt(0).toUpperCase() + key.slice(1)} Services`,
        category: "Services",
      })
    }
  })

  // Convert Map to array
  const galleryImages = Array.from(uniqueImages.values())

  // Group images by category
  const categories = ["Portfolio", "Projects", "Services", "Team", "Company"]

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-acustard-blue/10 to-acustard-violet/10 relative">
          <div className="absolute inset-0 z-0">
            <Image
              src={IMAGES.backgrounds.digital || "/placeholder.svg"}
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
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">Image Gallery</h1>
                <p className="max-w-[600px] mx-auto text-muted-foreground md:text-xl">
                  A visual showcase of our work, team, and services.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            {categories.map((category) => {
              const categoryImages = galleryImages.filter((img) => img.category === category)
              if (categoryImages.length === 0) return null

              return (
                <div key={category} className="mb-16">
                  <h2 className="text-2xl font-bold mb-8 text-center">{category}</h2>
                  <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {categoryImages.map((image, index) => (
                      <div key={index} className="relative aspect-video rounded-lg overflow-hidden border group">
                        <Image
                          src={image.src || "/placeholder.svg"}
                          alt={image.alt}
                          fill
                          className="object-cover transition-all duration-300 group-hover:scale-105"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                          <p className="text-white text-center px-4">{image.alt}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-acustard-blue/10 to-acustard-violet/10">
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
                  <Button size="lg" className="bg-acustard-blue hover:bg-acustard-violet">
                    Contact Us
                  </Button>
                </Link>
                <Link href="/portfolio">
                  <Button variant="outline" size="lg" className="hover:bg-acustard-blue hover:text-white hover:border-acustard-blue transition-colors duration-300">
                    View Our Portfolio
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