"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu } from "lucide-react"
import { motion } from "framer-motion"
import { useRouter } from "next/navigation"

import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet"

import { useMobile } from "@/hooks/use-mobile"

export function Navbar() {
  const isMobile = useMobile()
  const [isOpen, setIsOpen] = useState(false)
  const router = useRouter()

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact Us", href: "/contact" },
  ]

  const handleNavigation = (href: string) => {
    setIsOpen(false)

    router.push(href)

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <header
      className="
        sticky
        top-0
        z-50
        w-full
        border-b
        border-gray-200
        bg-white/95
        shadow-sm
        backdrop-blur
        dark:border-gray-800
        dark:bg-gray-950/95
      "
    >
      <div
        className="
          container
          mx-auto
          flex
          h-20
          items-center
          justify-between
          px-4
          sm:px-6
          lg:px-8
        "
      >

        {/* Brand Logo */}
        <Link
          href="/"
          aria-label="Acustard Technologies - Home"
          className="group flex items-center gap-3"
          onClick={() => handleNavigation("/")}
        >
          <motion.div
            className="
              relative
              h-12
              w-12
              overflow-hidden
              rounded-md
              sm:h-14
              sm:w-14
            "
            whileHover={{ scale: 1.05 }}
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 10,
            }}
          >
            <Image
              src="/ACUSTARD.jpeg"
              alt="Acustard Technologies logo"
              fill
              priority
              sizes="56px"
              className="object-contain"
            />
          </motion.div>

          <motion.span
            className="
              hidden
              text-lg
              font-bold
              tracking-tight
              text-gray-900
              transition-colors
              duration-300
              group-hover:text-blue-600
              dark:text-white
              dark:group-hover:text-blue-400
              sm:block
              sm:text-xl
            "
            whileHover={{ scale: 1.02 }}
          >
            ACUSTARD TECHNOLOGIES
          </motion.span>
        </Link>

        {/* Mobile Navigation */}
        {isMobile ? (
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="
                  border-gray-300
                  bg-white
                  text-gray-900
                  transition-all
                  hover:border-blue-600
                  hover:bg-blue-600
                  hover:text-white
                  dark:border-gray-700
                  dark:bg-gray-900
                  dark:text-white
                  dark:hover:border-blue-500
                  dark:hover:bg-blue-600
                "
                aria-label="Open navigation menu"
              >
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>

            <SheetContent
              side="right"
              className="
                w-[85%]
                max-w-sm
                border-gray-200
                bg-white
                dark:border-gray-800
                dark:bg-gray-950
              "
            >
              <SheetTitle className="sr-only">
                Acustard Technologies Navigation Menu
              </SheetTitle>

              {/* Mobile Logo */}
              <div className="mb-8 mt-6 flex justify-center">
                <div className="relative h-16 w-16">
                  <Image
                    src="/ACUSTARD.jpeg"
                    alt="Acustard Technologies logo"
                    fill
                    sizes="64px"
                    className="object-contain"
                  />
                </div>
              </div>

              {/* Mobile Navigation Links */}
              <nav
                aria-label="Mobile navigation"
                className="mt-8 flex flex-col gap-2"
              >
                {navItems.map((item) => (
                  <Button
                    key={item.href}
                    variant="ghost"
                    className="
                      justify-start
                      text-lg
                      font-medium
                      text-gray-700
                      transition-colors
                      hover:bg-blue-600
                      hover:text-white
                      dark:text-gray-200
                      dark:hover:bg-blue-600
                      dark:hover:text-white
                    "
                    onClick={() => handleNavigation(item.href)}
                  >
                    {item.name}
                  </Button>
                ))}

                <Button
                  className="
                    mt-5
                    w-full
                    bg-gradient-to-r
                    from-blue-600
                    to-indigo-600
                    font-semibold
                    text-white
                    shadow-lg
                    shadow-blue-500/20
                    transition-all
                    hover:from-blue-500
                    hover:to-indigo-500
                    hover:shadow-xl
                  "
                  onClick={() => handleNavigation("/contact")}
                >
                  Start a Conversation
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        ) : (

          /* Desktop Navigation */
          <nav
            aria-label="Main navigation"
            className="hidden items-center gap-2 md:flex"
          >
            {navItems.map((item) => (
              <Button
                key={item.href}
                variant="ghost"
                className="
                  text-sm
                  font-medium
                  text-gray-700
                  transition-all
                  duration-300
                  hover:bg-blue-600
                  hover:text-white
                  dark:text-gray-200
                  dark:hover:bg-blue-600
                  dark:hover:text-white
                "
                onClick={() => handleNavigation(item.href)}
              >
                {item.name}
              </Button>
            ))}

            <Button
              className="
                ml-2
                bg-gradient-to-r
                from-blue-600
                to-indigo-600
                font-semibold
                text-white
                shadow-md
                shadow-blue-500/20
                transition-all
                duration-300
                hover:-translate-y-0.5
                hover:from-blue-500
                hover:to-indigo-500
                hover:shadow-lg
                hover:shadow-blue-500/30
              "
              onClick={() => handleNavigation("/contact")}
            >
              Start a Conversation
            </Button>
          </nav>
        )}
      </div>
    </header>
  )
}