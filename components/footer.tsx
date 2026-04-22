"use client"
import Image from "next/image"
import {  Mail, MapPin, Phone } from "lucide-react"
import { motion } from "framer-motion"
import { useRouter } from "next/navigation"

import { IMAGES } from "@/lib/constants"

export function Footer() {
  const router = useRouter()

  // Function to handle navigation with scroll to top
  const handleNavigation = (href: string) => {
    // Navigate to the page
    router.push(href)

    // Scroll to top
    window.scrollTo({
      top: 0,
      behavior: "instant",
    })
  }

  return (
    <footer className="w-full bg-background">
      {/* Top Footer Section with Contact Info */}
      <div className="border-t border-b py-12 bg-muted/30">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-3">
            <motion.div
              className="flex items-start gap-3"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <MapPin className="h-6 w-6 text-acustard-blue shrink-0 mt-1" />
              <div>
                <h3 className="font-medium mb-2">Our Location</h3>
                <p className="text-sm text-muted-foreground">
                  Gondia,MH 441601 | Nagpur, Maharashtra 440016
                  <br />
                  India
                </p>
              </div>
            </motion.div>
            <motion.div
              className="flex items-start gap-3"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Mail className="h-6 w-6 text-acustard-violet shrink-0 mt-1" />
              <div>
                <h3 className="font-medium mb-2">Email Us</h3>
                <p className="text-sm text-muted-foreground">
                  <a
                    href="mailto:acustardtechnologies@gmail.com"
                    className="hover:text-acustard-blue transition-colors duration-300"
                  >
                    acustardtechnologies@gmail.com
                  </a>
                </p>
                <p className="text-sm text-muted-foreground">
                  <a
                    href="mailto:acustardtechnologies@gmail.com"
                    className="hover:text-acustard-blue transition-colors duration-300"
                  >
                    support@acustardtech.com
                  </a>
                </p>
              </div>
            </motion.div>
            <motion.div
              className="flex items-start gap-3"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Phone className="h-6 w-6 text-acustard-blue shrink-0 mt-1" />
              <div>
                <h3 className="font-medium mb-2">Call Us</h3>
                <p className="text-sm text-muted-foreground">
                  <a href="tel:+919145376420" className="hover:text-acustard-blue transition-colors duration-300">
                    +91 91453 76420
                  </a>
                </p>
                <p className="text-sm text-muted-foreground">
                  <a href="tel:+918275723209" className="hover:text-acustard-blue transition-colors duration-300">
                    +91 82757 23210
                  </a>
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="py-12">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 lg:grid-cols-4">
            <div className="space-y-4">
              <a
                href="/"
                className="flex flex-col items-center md:items-start gap-3 group"
                onClick={(e) => {
                  e.preventDefault()
                  handleNavigation("/")
                }}
              >
                <div className="relative h-20 w-20 overflow-hidden rounded-md">
                  <Image
                    src={IMAGES.logo || "/placeholder.svg"}
                    alt="ACUSTARD TECHNOLOGIES Logo"
                    fill
                    className="object-contain"
                  />
                </div>
                <span className="text-xl font-bold tracking-tight group-hover:text-gradient-acustard transition-all duration-300">
                  ACUSTARD TECHNOLOGIES
                </span>
              </a>
              <p className="text-sm text-muted-foreground">
                Innovative software solutions and digital services for businesses of all sizes. We help companies
                transform their digital presence and achieve their business goals.
              </p>
              <div className="flex gap-4">
                {/* <motion.a
                  href="#"
                  className="text-muted-foreground hover:text-acustard-blue transition-colors duration-300"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <Facebook className="h-5 w-5" />
                  <span className="sr-only">Facebook</span>
                </motion.a> */}
                {/* <motion.a
                  href="#"
                  className="text-muted-foreground hover:text-acustard-blue transition-colors duration-300"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <Twitter className="h-5 w-5" />
                  <span className="sr-only">Twitter</span>
                </motion.a> */}
                {/* <motion.a
                  href="#"
                  className="text-muted-foreground hover:text-acustard-blue transition-colors duration-300"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <Instagram className="h-5 w-5" />
                  <span className="sr-only">Instagram</span>
                </motion.a> */}
                {/* <motion.a
                  href="#"
                  className="text-muted-foreground hover:text-acustard-violet transition-colors duration-300"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </motion.a> */}
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-base font-medium">Company</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="/about"
                    className="text-muted-foreground hover:text-acustard-blue transition-colors duration-300 relative group"
                    onClick={(e) => {
                      e.preventDefault()
                      handleNavigation("/about")
                    }}
                  >
                    <span>About Us</span>
                    <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-acustard-blue group-hover:w-full transition-all duration-300"></span>
                  </a>
                </li>
                <li>
                  <a
                    href="/team"
                    className="text-muted-foreground hover:text-acustard-blue transition-colors duration-300 relative group"
                    onClick={(e) => {
                      e.preventDefault()
                      handleNavigation("/team")
                    }}
                  >
                    <span>Our Team</span>
                    <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-acustard-blue group-hover:w-full transition-all duration-300"></span>
                  </a>
                </li>
                <li>
                  <a
                    href="/careers"
                    className="text-muted-foreground hover:text-acustard-blue transition-colors duration-300 relative group"
                    onClick={(e) => {
                      e.preventDefault()
                      handleNavigation("/careers")
                    }}
                  >
                    <span>Careers</span>
                    <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-acustard-blue group-hover:w-full transition-all duration-300"></span>
                  </a>
                </li>
                <li>
                  <a
                    href="/contact"
                    className="text-muted-foreground hover:text-acustard-blue transition-colors duration-300 relative group"
                    onClick={(e) => {
                      e.preventDefault()
                      handleNavigation("/contact")
                    }}
                  >
                    <span>Contact Us</span>
                    <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-acustard-blue group-hover:w-full transition-all duration-300"></span>
                  </a>
                </li>
                <li>
                  <a
                    href="/gallery"
                    className="text-muted-foreground hover:text-acustard-blue transition-colors duration-300 relative group"
                    onClick={(e) => {
                      e.preventDefault()
                      handleNavigation("/gallery")
                    }}
                  >
                    <span>Gallery</span>
                    <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-acustard-blue group-hover:w-full transition-all duration-300"></span>
                  </a>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-base font-medium">Services</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="/services#software"
                    className="text-muted-foreground hover:text-acustard-violet transition-colors duration-300 relative group"
                    onClick={(e) => {
                      e.preventDefault()
                      handleNavigation("/services#software")
                    }}
                  >
                    <span>Software Development</span>
                    <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-acustard-violet group-hover:w-full transition-all duration-300"></span>
                  </a>
                </li>
                <li>
                  <a
                    href="/services#design"
                    className="text-muted-foreground hover:text-acustard-violet transition-colors duration-300 relative group"
                    onClick={(e) => {
                      e.preventDefault()
                      handleNavigation("/services#design")
                    }}
                  >
                    <span>Logo & Brochure Design</span>
                    <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-acustard-violet group-hover:w-full transition-all duration-300"></span>
                  </a>
                </li>
                <li>
                  <a
                    href="/services#marketing"
                    className="text-muted-foreground hover:text-acustard-violet transition-colors duration-300 relative group"
                    onClick={(e) => {
                      e.preventDefault()
                      handleNavigation("/services#marketing")
                    }}
                  >
                    <span>Digital Marketing</span>
                    <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-acustard-violet group-hover:w-full transition-all duration-300"></span>
                  </a>
                </li>
                <li>
                  <a
                    href="/services#consulting"
                    className="text-muted-foreground hover:text-acustard-violet transition-colors duration-300 relative group"
                    onClick={(e) => {
                      e.preventDefault()
                      handleNavigation("/services#consulting")
                    }}
                  >
                    <span>IT Consulting</span>
                    <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-acustard-violet group-hover:w-full transition-all duration-300"></span>
                  </a>
                </li>
                <li>
                  <a
                    href="/portfolio"
                    className="text-muted-foreground hover:text-acustard-violet transition-colors duration-300 relative group"
                    onClick={(e) => {
                      e.preventDefault()
                      handleNavigation("/portfolio")
                    }}
                  >
                    <span>Portfolio</span>
                    <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-acustard-violet group-hover:w-full transition-all duration-300"></span>
                  </a>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-base font-medium">Legal</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="/privacy"
                    className="text-muted-foreground hover:text-acustard-blue transition-colors duration-300 relative group"
                    onClick={(e) => {
                      e.preventDefault()
                      handleNavigation("/privacy")
                    }}
                  >
                    <span>Privacy Policy</span>
                    <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-acustard-blue group-hover:w-full transition-all duration-300"></span>
                  </a>
                </li>
                <li>
                  <a
                    href="/terms"
                    className="text-muted-foreground hover:text-acustard-blue transition-colors duration-300 relative group"
                    onClick={(e) => {
                      e.preventDefault()
                      handleNavigation("/terms")
                    }}
                  >
                    <span>Terms of Service</span>
                    <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-acustard-blue group-hover:w-full transition-all duration-300"></span>
                  </a>
                </li>
                <li>
                  <a
                    href="/cookies"
                    className="text-muted-foreground hover:text-acustard-blue transition-colors duration-300 relative group"
                    onClick={(e) => {
                      e.preventDefault()
                      handleNavigation("/cookies")
                    }}
                  >
                    <span>Cookie Policy</span>
                    <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-acustard-blue group-hover:w-full transition-all duration-300"></span>
                  </a>
                </li>
                <li>
                  <a
                    href="/sitemap"
                    className="text-muted-foreground hover:text-acustard-blue transition-colors duration-300 relative group"
                    onClick={(e) => {
                      e.preventDefault()
                      handleNavigation("/sitemap")
                    }}
                  >
                    <span>Sitemap</span>
                    <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-acustard-blue group-hover:w-full transition-all duration-300"></span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="border-t py-6 bg-muted/20">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} ACUSTARD TECHNOLOGIES. All rights reserved. Founded by Greenkumar
              Bisen.
            </p>
            <p className="text-xs text-muted-foreground">
              Images provided by{" "}
              <a
                href="https://www.freepik.com"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-acustard-blue transition-colors duration-300"
              >
                Freepik
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}