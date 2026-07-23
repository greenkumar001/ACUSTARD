"use client"

import { Button } from "@/components/ui/button"

import Link from "next/link"
import { Mail, MapPin, Phone, Clock, CheckCircle, MessageSquare } from "lucide-react"
import Image from "next/image"
import { motion } from "framer-motion"

import { Card, CardContent } from "@/components/ui/card"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ContactForm } from "@/components/contact-form"
import { IMAGES } from "@/lib/constants"

export default function ContactPage() {
  // Animation variants for staggered animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-acustard-blue/10 to-acustard-violet/10 relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src={IMAGES.backgrounds.development || "/placeholder.svg"}
              alt="Contact Us"
              fill
              className="object-cover opacity-10"
            />
          </div>
          <div className="container px-4 md:px-6 relative z-10">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <motion.div
                  className="flex items-center justify-center gap-3 mb-6"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="relative h-24 w-24 overflow-hidden rounded-lg">
                    <Image
                      src={IMAGES.logo || "/placeholder.svg"}
                      alt="Acustard technologies Logo"
                      fill
                      className="object-contain"
                    />
                  </div>
                </motion.div>
                <motion.h1
                  className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  Contact Us
                </motion.h1>
                <motion.p
                  className="max-w-[600px] mx-auto text-muted-foreground md:text-xl"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  We're here to help. Reach out to our team with any questions or inquiries.
                </motion.p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Cards Section */}
        <section className="w-full py-12 md:py-16 bg-background relative">
          {/* Background image */}
          <div className="absolute inset-0 z-0">
            <Image
              src={IMAGES.backgrounds.cyber || "/placeholder.svg"}
              alt="Technology background"
              fill
              className="object-cover opacity-5"
            />
          </div>

          <div className="container px-4 md:px-6 relative z-10">
            <motion.div
              className="grid gap-6 md:grid-cols-3"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.div variants={itemVariants}>
                <Card className="border-blue-700/20 hover:border-blue-700/50 transition-colors hover:shadow-lg hover:shadow-blue-700/10">
                  <CardContent className="p-6">
                    <div className="flex flex-col items-center text-center gap-4">
                      <motion.div
                        className="h-12 w-12 rounded-full bg-blue-700/10 flex items-center justify-center"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      >
                        <Phone className="h-6 w-6 text-blue-700" />
                      </motion.div>
                      <div>
                        <h3 className="text-lg font-medium mb-2">Phone</h3>
                        <p className="text-sm text-muted-foreground mb-1">
                          <Link
                            href="tel:+91 9145376420"
                            className="hover:text-blue-700 transition-colors duration-300"
                          >
                            +91 9145376420
                          </Link>
                        </p>
                        <p className="text-sm text-muted-foreground">
                          <Link
                            href="tel:+91 8275723209"
                            className="hover:text-blue-700 transition-colors duration-300"
                          >
                            +91 8275723209
                          </Link>
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={itemVariants}>
                <Card className="border-violet-600/20 hover:border-violet-600/50 transition-colors hover:shadow-lg hover:shadow-violet-600/10">
                  <CardContent className="p-6">
                    <div className="flex flex-col items-center text-center gap-4">
                      <motion.div
                        className="h-12 w-12 rounded-full bg-violet-600/10 flex items-center justify-center"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      >
                        <Mail className="h-6 w-6 text-violet-600" />
                      </motion.div>
                      <div>
                        <h3 className="text-lg font-medium mb-2">Email</h3>
                        <p className="text-sm text-muted-foreground mb-1">
                          <Link
                            href="mailto:acustardtechnologies@gmail.com"
                            className="hover:text-acustard-violet transition-colors duration-300"
                          >
                            acustardtechnologies@gmail.com
                          </Link>
                        </p>
                        <p className="text-sm text-muted-foreground">
                          <Link
                            href="mailto:acustardtechnologies@gmail.com"
                            className="hover:text-acustard-violet transition-colors duration-300"
                          >
                            info@acustardtechnologies.com
                          </Link>
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={itemVariants}>
                <Card className="border-blue-700/20 hover:border-blue-700/50 transition-colors hover:shadow-lg hover:shadow-blue-700/10">
                  <CardContent className="p-6">
                    <div className="flex flex-col items-center text-center gap-4">
                      <motion.div
                        className="h-12 w-12 rounded-full bg-blue-700/10 flex items-center justify-center"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      >
                        <Clock className="h-6 w-6 text-blue-700" />
                      </motion.div>
                      <div>
                        <h3 className="text-lg font-medium mb-2">Business Hours</h3>
                        <p className="text-sm text-muted-foreground mb-1">Monday - Friday: 9:00 AM - 6:00 PM</p>
                        <p className="text-sm text-muted-foreground">Saturday: 10:00 AM - 2:00 PM</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Contact Form and Map Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 relative">
          {/* Background image */}
          <div className="absolute inset-0 z-0">
            <Image
              src={IMAGES.backgrounds.tech || "/placeholder.svg"}
              alt="Data background"
              fill
              className="object-cover opacity-5"
            />
          </div>

          <div className="container px-4 md:px-6 relative z-10">
            <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-start">
              <motion.div
                className="space-y-6"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div>
                  <h2 className="text-3xl font-bold tracking-tighter mb-4">Get in Touch</h2>
                  <p className="text-muted-foreground">
                    Fill out the form and our team will get back to you within 24 hours.
                  </p>
                </div>

                <ContactForm />

                <div className="flex flex-col gap-4 mt-8">
                  <motion.div
                    className="flex items-start gap-2"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <CheckCircle className="h-5 w-5 text-blue-700 mt-0.5 shrink-0" />
                    <p className="text-sm text-muted-foreground">
                      <span className="font-medium text-foreground">Quick Response:</span> Our team typically responds
                      within 24 hours.
                    </p>
                  </motion.div>
                  <motion.div
                    className="flex items-start gap-2"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <CheckCircle className="h-5 w-5 text-violet-600 mt-0.5 shrink-0" />
                    <p className="text-sm text-muted-foreground">
                      <span className="font-medium text-foreground">Expert Consultation:</span> Get personalized advice
                      from our specialists.
                    </p>
                  </motion.div>
                  <motion.div
                    className="flex items-start gap-2"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <CheckCircle className="h-5 w-5 text-blue-700 mt-0.5 shrink-0" />
                    <p className="text-sm text-muted-foreground">
                      <span className="font-medium text-foreground">Confidentiality:</span> Your information is secure
                      and will not be shared.
                    </p>
                  </motion.div>
                </div>
              </motion.div>

              <motion.div
                className="space-y-6"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div>
                  <h2 className="text-3xl font-bold tracking-tighter mb-4">Our Location</h2>
                  <p className="text-muted-foreground mb-6">Visit our office to meet our team in person.</p>
                </div>

                <motion.div
                  className="aspect-video w-full overflow-hidden rounded-lg border shadow-md"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d13443.141830706176!2d80.1986642!3d21.437544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjHCsDI1JzUwLjUiTiA4MMKwMTEnMjQuMSJF!5e1!3m2!1sen!2sin!4v1776844604202!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </motion.div>

                <motion.div
                  className="bg-muted p-6 rounded-lg border hover:shadow-lg transition-shadow duration-300"
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <div className="flex items-start gap-4">
                    <MapPin className="h-6 w-6 text-blue-700 mt-1 shrink-0" />
                    <div>
                      <h3 className="font-medium mb-2">Office Address</h3>
                      <p className="text-sm text-muted-foreground">
                        <br />
                        Gondia MH - 441601 |Nagpur, Maharashtra - 440016
                        <br />
                        India
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 pt-6 border-t">
                    <div className="flex items-start gap-4">
                      <MessageSquare className="h-6 w-6 text-violet-600 mt-1 shrink-0" />
                      <div>
                        <h3 className="font-medium mb-2">WhatsApp Support</h3>
                        <p className="text-sm text-muted-foreground">
                          For quick responses, reach out to us on WhatsApp at
                          <br />
                          <Link
                            href="https://wa.me/9145376420"
                            className="text-violet-600 hover:underline transition-colors duration-300"
                          >
                            +91 9145376420
                          </Link>
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 relative">
          {/* Background image */}
          <div className="absolute inset-0 z-0 bg-gradient-to-r from-blue-700/10 to-violet-600/10">
            <Image
              src={IMAGES.backgrounds.abstract || "/placeholder.svg"}
              alt="Abstract technology background"
              fill
              className="object-cover opacity-10 mix-blend-overlay"
            />
          </div>

          <div className="container px-4 md:px-6 relative z-10">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <motion.h2
                  className="text-3xl font-bold tracking-tighter"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  Frequently Asked Questions
                </motion.h2>
                <motion.p
                  className="max-w-[600px] mx-auto text-muted-foreground"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  Find answers to common questions about our services.
                </motion.p>
              </div>
            </div>
            <motion.div
              className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.div variants={itemVariants}>
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold mb-2">What services does acustard TECHNOLOGIES offer?</h3>
                    <p className="text-muted-foreground">
                      We offer a wide range of services including software development, logo and brochure design,
                      digital marketing, and IT consulting.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
              <motion.div variants={itemVariants}>
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold mb-2">How long does it take to complete a project?</h3>
                    <p className="text-muted-foreground">
                      Project timelines vary depending on the scope and complexity. We provide detailed timelines during
                      the initial consultation phase.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
              <motion.div variants={itemVariants}>
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold mb-2">Do you offer ongoing support after project completion?</h3>
                    <p className="text-muted-foreground">
                      Yes, we offer various support and maintenance packages to ensure your software and systems
                      continue to run smoothly.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
              <motion.div variants={itemVariants}>
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold mb-2">How do I request a quote for my project?</h3>
                    <p className="text-muted-foreground">
                      You can request a quote by filling out the contact form on this page or by calling us directly.
                      We'll schedule a consultation to discuss your needs.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 bg-background relative">
          {/* Background image */}
          <div className="absolute inset-0 z-0">
            <Image
              src={IMAGES.backgrounds.gradient || "/placeholder.svg"}
              alt="Gradient background"
              fill
              className="object-cover opacity-15"
            />
          </div>

          <div className="container px-4 md:px-6 relative z-10">
            <motion.div
              className="flex flex-col items-center justify-center space-y-4 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter">Ready to Transform Your Business?</h2>
                <p className="max-w-[600px] mx-auto text-muted-foreground">
                  Contact us today to discuss how we can help you achieve your business goals with our innovative
                  technology solutions.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row mt-6">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link href="/services">
                    <Button
                      size="lg"
                      className="bg-blue-700 hover:bg-violet-600 transition-all duration-300 hover:shadow-lg hover:shadow-blue-700/20"
                    >
                      Explore Our Services
                    </Button>
                  </Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link href="/portfolio">
                    <Button
                      variant="outline"
                      size="lg"
                      className="hover:bg-violet-600/10 transition-all duration-300"
                    >
                      View Our Portfolio
                    </Button>
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}