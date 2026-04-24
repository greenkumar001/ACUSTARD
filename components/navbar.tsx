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
      behavior: "auto",
    })
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
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
            className="text-xl font-bold tracking-tight group-hover:text-gradient transition-all duration-300"
            whileHover={{ scale: 1.02 }}
          >
            ACUSTARD TECHNOLOGIES
          </motion.span>
        </Link>

        {isMobile ? (
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden  text-black border-gray-300 hover:bg-blue-700 hover:text-white hover:border-blue-700 transition-colors duration-300">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-300px sm:w-400px">
              <div className="flex justify-center mb-8 mt-6">
                <div className="relative h-16 w-16">
                  <Image
                    src="/ACUSTARD.jpeg"
                    alt="acustard TECHNOLOGIES Logo"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              <nav className="flex flex-col gap-4 mt-8">
                {navItems.map((item) => (
                  <Button
                    key={item.name}
                    variant="ghost"
                    className="justify-start text-lg font-medium text-white hover:bg-blue-700 hover:text-white transition-colors duration-300"
                    onClick={() => handleNavigation(item.href)}
                  >
                    {item.name}
                  </Button>
                ))}
                <Button
                  className="w-full mt-4 bg-blue-700 hover:bg-violet-600  transition-colors duration-300"
                  onClick={() => handleNavigation("/contact")}
                >
                  Contact Us
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        ) : (
          <nav className="hidden md:flex gap-4">
            {navItems.map((item) => (
              <Button
                key={item.name}
                variant="ghost"
                className="text-sm font-medium  text-black hover:bg-blue-700 hover:text-white transition-colors duration-300"
                onClick={() => handleNavigation(item.href)}
              >
                {item.name}
              </Button>
            ))}
            <Button
              className="bg-blue-700 hover:bg-violet-600  transition-all duration-300 hover:shadow-lg hover:shadow-blue-700/20"
              onClick={() => handleNavigation("/contact")}
            >
              Contact Us
            </Button>
          </nav>
        )}
      </div>
    </header>
  )
}