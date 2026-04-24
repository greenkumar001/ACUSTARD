"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, ZoomIn } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"

interface ImageGalleryProps {
  images: {
    src: string
    alt: string
    width?: number
    height?: number
  }[]
  className?: string
}

export function ImageGallery({ images, className = "" }: ImageGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)
  }

  if (images.length === 0) {
    return null
  }

  return (
    <div className={`relative overflow-hidden rounded-lg border ${className}`}>
      <div className="relative aspect-video">
        <Image
          src={images[currentIndex].src || "/placeholder.svg"}
          alt={images[currentIndex].alt}
          fill
          className="object-cover transition-all duration-300"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <Dialog>
          <DialogTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-2 right-2 bg-background/80 backdrop-blur-sm hover:bg-background/90 z-10"
              aria-label="Zoom image"
            >
              <ZoomIn className="h-4 w-4" />
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-4xl p-0 overflow-hidden">
            <div className="relative aspect-16/9 w-full">
              <Image
                src={images[currentIndex].src || "/placeholder.svg"}
                alt={images[currentIndex].alt}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 90vw"
              />
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {images.length > 1 && (
        <div className="flex items-center justify-between p-2">
          <Button variant="outline" size="icon" onClick={prevImage} className="rounded-full hover:bg-blue-700 hover:text-white hover:border-blue-700 transition-colors duration-300">
            <ChevronLeft className="h-4 w-4" />
            <span className="sr-only">Previous image</span>
          </Button>
          <div className="text-sm text-muted-foreground">
            {currentIndex + 1} of {images.length}
          </div>
          <Button variant="outline" size="icon" onClick={nextImage} className="rounded-full hover:bg-blue-700 hover:text-white hover:border-blue-700 transition-colors duration-300">
            <ChevronRight className="h-4 w-4" />
            <span className="sr-only">Next image</span>
          </Button>
        </div>
      )}
    </div>
  )
}