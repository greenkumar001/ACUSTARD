"use client"
import { AnimatePresence, motion } from "framer-motion"
import { MessageSquare } from "lucide-react"
import { Card, CardContent } from "./ui/card"
import { useEffect, useState } from "react"

export function Testimonial() {
  const testimonials = [
    {
      quote:
        "Acustard Technologies transformed our business with innovative software solutions. Their team was professional, responsive, and delivered beyond our expectations.",
      name: "T. Harinkhede",
      role: "CEO, Devrath Technologies",
      iconColor: "text-blue-700",
    },
    {
      quote:
        "Acustard Technologies significantly improved our online visibility through a strategic digital marketing campaign. Their approach and attention to detail made a real difference.",
      name: "Ritesh Patle",
      role: "CEO, SunEnergySystems",
      iconColor: "text-violet-600",
    },
    {
      quote:
        "Working with Acustard Technologies was a great experience. Their team understood our requirements, delivered a professional solution, and maintained excellent communication throughout the project.",
      name: "Rushikesh burle & Bhushan Fhulkar",
      role: "Technology & Business Solutions",
      iconColor: "text-blue-700",
    },
  ]
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [])
  return (
    <div>
      <section
        aria-labelledby="testimonials-heading"
        className="w-full overflow-hidden bg-gradient-to-r from-blue-700/10 to-violet-600/10 py-16 md:py-24"
      >
        <div className="container mx-auto px-4 md:px-6">

          {/* Heading */}
          <div className="mx-auto max-w-3xl text-center">
            <h2
              id="testimonials-heading"
              className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl"
            >
              What Our Clients Say About Acustard Technologies
            </h2>

            <p className="mt-4 text-muted-foreground md:text-lg">
              Real experiences from businesses that have worked with Acustard Technologies.
            </p>
          </div>

          {/* Carousel */}
          <div className="relative mx-auto mt-12 max-w-6xl">

            <div className="flex items-center justify-center gap-6">

              {/* Previous Card */}
              <motion.div
                className="hidden w-64 shrink-0 opacity-40 lg:block"
                animate={{ scale: 0.85 }}
              >
                <Card className="h-64 bg-background/60">
                  <CardContent className="flex h-full items-center justify-center p-6">
                    <p className="line-clamp-5 text-sm text-muted-foreground">
                      {
                        testimonials[
                          (activeIndex - 1 + testimonials.length) %
                          testimonials.length
                        ].quote
                      }
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Center Active Card */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, x: 100, scale: 0.9 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 0, x: -100, scale: 0.9 }}
                  transition={{
                    duration: 0.7,
                    ease: "easeInOut",
                  }}
                  className="w-full max-w-2xl"
                >
                  <Card className="border-blue-700/20 bg-background shadow-xl">
                    <CardContent className="p-6 sm:p-8 md:p-10">

                      <div className="flex items-start gap-4">

                        <MessageSquare className="mt-1 h-9 w-9 shrink-0 text-blue-700 dark:text-blue-400" />

                        <div>
                          <blockquote className="text-lg font-medium leading-8 text-foreground sm:text-xl">
                            “{testimonials[activeIndex].quote}”
                          </blockquote>

                          <footer className="mt-6">
                            <cite className="not-italic font-semibold text-foreground">
                              {testimonials[activeIndex].name}
                            </cite>

                            <p className="mt-1 text-sm text-muted-foreground">
                              {testimonials[activeIndex].role}
                            </p>
                          </footer>
                        </div>

                      </div>

                    </CardContent>
                  </Card>
                </motion.div>
              </AnimatePresence>

              {/* Next Card */}
              <motion.div
                className="hidden w-64 shrink-0 opacity-40 lg:block"
                animate={{ scale: 0.85 }}
              >
                <Card className="h-64 bg-background/60">
                  <CardContent className="flex h-full items-center justify-center p-6">
                    <p className="line-clamp-5 text-sm text-muted-foreground">
                      {testimonials[(activeIndex + 1) % testimonials.length].quote}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

            </div>

            {/* Dots */}
            <div className="mt-8 flex justify-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${activeIndex === index
                    ? "w-8 bg-blue-700"
                    : "w-2.5 bg-muted-foreground/30"
                    }`}
                  aria-label={`Show testimonial ${index + 1}`}
                />
              ))}
            </div>

          </div>
        </div>
      </section>
    </div>
  )
}