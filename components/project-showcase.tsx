"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

// Import the constants
import { IMAGES } from "@/lib/constants"

// Replace the projects array with the imported data
const projects = IMAGES.projects

export function ProjectShowcase() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextProject = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length)
  }

  const prevProject = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length)
  }

  const currentProject = projects[currentIndex]

  return (
    <div className="relative w-full overflow-hidden rounded-xl border bg-background shadow-lg">
      <div className="flex items-center justify-between p-4 border-b">
        <div className="flex items-center space-x-2">
          <div className="h-3 w-3 rounded-full bg-red-500"></div>
          <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
          <div className="h-3 w-3 rounded-full bg-green-500"></div>
        </div>
        <div className="flex-1 text-center text-sm font-medium truncate">{currentProject.url}</div>
        <Link
          href={currentProject.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-foreground"
        >
          <ExternalLink className="h-4 w-4" />
        </Link>
      </div>

      <div className="relative aspect-video">
        <Image
          src={currentProject.image || "/placeholder.svg"}
          alt={currentProject.title}
          fill
          className="object-cover"
        />
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold">{currentProject.title}</h3>
        <p className="mt-2 text-muted-foreground">{currentProject.description}</p>

        <div className="mt-4 flex flex-wrap gap-2">
          {currentProject.technologies.map((tech) => (
            <span
              key={tech}
              className="inline-flex items-center rounded-full bg-acustard-blue/10 px-2.5 py-0.5 text-xs font-medium text-acustard-blue"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-between p-4 border-t">
        <Button variant="outline" size="icon" onClick={prevProject} className="rounded-full hover:bg-acustard-blue hover:text-white hover:border-acustard-blue transition-colors duration-300">
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <div className="text-sm text-muted-foreground">
          {currentIndex + 1} of {projects.length}
        </div>
        <Button variant="outline" size="icon" onClick={nextProject} className="rounded-full hover:bg-acustard-blue hover:text-white hover:border-acustard-blue transition-colors duration-300">
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}