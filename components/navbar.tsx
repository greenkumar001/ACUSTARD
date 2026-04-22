"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu } from "lucide-react"
import { motion } from "framer-motion"
import { useRouter } from "next/navigation"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { useMobile } from "@/hooks/use-mobile"

export function Navbar() {
  const isMobile = useMobile()
  const [isOpen, setIsOpen] = useState(false)
  const router = useRouter()

  // Update the navItems array to include the gallery
  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact", href: "/contact" },
  ]

  // Function to handle navigation with scroll to top
  const handleNavigation = (href: string) => {
    // Close mobile menu if open
    if (isOpen) {
      setIsOpen(false)
    }

    // Navigate to the page
    router.push(href)

    // Scroll to top
    window.scrollTo({
      top: 0,
      behavior: "instant",
    })
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group" onClick={() => handleNavigation("/")}>
          <motion.div
            className="relative h-14 w-14 overflow-hidden rounded-md"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <Image
              src="/ACUSTARD.jpeg"
              alt="ACUSTARD TECHNOLOGIES Logo"
              fill
              className="object-contain"
            />
          </motion.div>
          <motion.span
            className="text-xl font-bold tracking-tight group-hover:text-gradient-acustard transition-all duration-300"
            whileHover={{ scale: 1.02 }}
          >
            ACUSTARD TECHNOLOGIES
          </motion.span>
        </Link>

        {isMobile ? (
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex justify-center mb-8 mt-6">
                <div className="relative h-16 w-16">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Aeth%20%281%29.jpg-yWhA0h3HB7eG2n1GkqtErukc3XCJLh.jpeg"
                    alt="acustard TECHNOLOGIES Logo"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              <nav className="flex flex-col gap-4 mt-8">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-lg font-medium transition-colors hover:text-primary relative overflow-hidden group"
                    onClick={(e) => {
                      e.preventDefault()
                      handleNavigation(item.href)
                    }}
                  >
                    <span className="relative z-10">{item.name}</span>
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-acustard-blue to-acustard-violet group-hover:w-full transition-all duration-300"></span>
                  </a>
                ))}
                <a
                  href="/contact"
                  onClick={(e) => {
                    e.preventDefault()
                    handleNavigation("/contact")
                  }}
                >
                  <Button className="w-full mt-4 bg-acustard-blue hover:bg-acustard-violet transition-colors duration-300">
                    Contact Us
                  </Button>
                </a>
              </nav>
            </SheetContent>
          </Sheet>
        ) : (
          <nav className="hidden md:flex gap-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-medium transition-colors hover:text-primary relative overflow-hidden group"
                onClick={(e) => {
                  e.preventDefault()
                  handleNavigation(item.href)
                }}
              >
                <span className="relative z-10">{item.name}</span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-acustard-blue to-acustard-violet group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
            <a
              href="/contact"
              onClick={(e) => {
                e.preventDefault()
                handleNavigation("/contact")
              }}
            >
              <Button className="bg-acustard-blue hover:bg-acustard-violet transition-all duration-300 hover:shadow-lg hover:shadow-acustard-blue/20">
                Contact Us
              </Button>
            </a>
          </nav>
        )}
      </div>
    </header>
  )
}