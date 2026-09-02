"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import {
  ArrowRight,
  Check,
  Globe,
  Search,
  GraduationCap,
  Building2,
  Smartphone,
  TrendingUp,
  Sparkles,
} from "lucide-react"

import { Button } from "@/components/ui/button"

const solutions = [
  {
    title: "Website Development",
    subtitle: "Professional Website",
    price: "₹5,999",
    description:
      "Launch your business online with a modern, fast and SEO-friendly website.",
    icon: Globe,
    popular: true,
    features: [
      "Single Page Professional Website",
      "Modern & Responsive Design",
      "Mobile Friendly",
      "Fast Loading Performance",
      "WhatsApp Integration",
      "Contact Section",
      "SEO-Friendly Structure",
      "Basic On-Page SEO",
    ],
    note: "Domain & Hosting charges are not included.",
    button: "Build My Website",
  },

  {
    title: "SEO Services",
    subtitle: "Grow on Google",
    price: "Custom",
    description:
      "Improve your website visibility and build a strong foundation for organic search growth.",
    icon: Search,
    popular: false,
    features: [
      "Technical SEO Audit",
      "Keyword Research",
      "On-Page SEO",
      "Website Performance Optimization",
      "Google Search Console Setup",
      "Sitemap & Indexing",
      "SEO Content Strategy",
      "Monthly Performance Reports",
    ],
    note: "Search rankings depend on competition and cannot be guaranteed.",
    button: "Get SEO Consultation",
  },

  {
    title: "College CRM / ERP",
    subtitle: "Education Management",
    price: "Custom",
    description:
      "A complete digital solution designed to simplify college administration and management.",
    icon: GraduationCap,
    popular: false,
    features: [
      "Student Management",
      "Faculty Management",
      "Admission Management",
      "Fee Management",
      "Attendance System",
      "Notice Management",
      "Role-Based Login",
      "Reports & Analytics",
    ],
    note: "Features can be customized according to your institution.",
    button: "Request Demo",
  },

  {
    title: "Business CRM / ERP",
    subtitle: "Business Automation",
    price: "₹49,999+",
    description:
      "Custom software solutions to manage customers, operations and business processes.",
    icon: Building2,
    popular: false,
    features: [
      "Customer Management",
      "Lead Management",
      "Employee Management",
      "Custom Dashboard",
      "Role-Based Access",
      "Reports & Analytics",
      "Database Integration",
      "Custom Business Modules",
    ],
    note: "Final pricing depends on required modules and features.",
    button: "Build Your CRM",
  },

  {
    title: "Mobile App Development",
    subtitle: "Android & iOS",
    price: "Custom",
    description:
      "Transform your idea into a powerful and scalable mobile application.",
    icon: Smartphone,
    popular: false,
    features: [
      "Custom UI/UX Design",
      "Android Application",
      "iOS Application",
      "Backend API Development",
      "Authentication System",
      "Database Integration",
      "Admin Dashboard",
      "App Deployment Support",
    ],
    note: "Pricing depends on app complexity and required features.",
    button: "Build My App",
  },

  {
    title: "Digital Marketing",
    subtitle: "Grow Your Business",
    price: "Custom",
    description:
      "Build your digital presence and reach the right customers with effective marketing strategies.",
    icon: TrendingUp,
    popular: false,
    features: [
      "Social Media Marketing",
      "Google Ads",
      "Meta Ads",
      "SEO Strategy",
      "Content Marketing",
      "Lead Generation",
      "Brand Awareness",
      "Performance Reporting",
    ],
    note: "Monthly plans can be customized according to your goals.",
    button: "Grow My Business",
  },
]

export function PricingSection() {
  return (<section
    className="w-full py-20 md:py-28 relative overflow-hidden"
    id="pricing"
  >
    {/* Background Decoration */}

    <div className="absolute inset-0 -z-10 overflow-hidden">

      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl" />

      <div className="absolute bottom-20 right-10 w-72 h-72 bg-violet-600/10 rounded-full blur-3xl" />

    </div>

    <div className="container px-4 md:px-6">

      {/* Section Header */}

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-3xl mx-auto mb-16"
      >

        <div className="flex justify-center mb-5">

          <div className="flex items-center gap-2 px-4 py-2 rounded-full border bg-background shadow-sm">

            <Sparkles className="w-4 h-4 text-blue-600" />

            <span className="text-sm font-semibold text-blue-600">
              SOLUTIONS & PRICING
            </span>

          </div>

        </div>

        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">

          Everything Your Business Needs
          <span className="block text-blue-600 mt-2">
            To Grow Digitally
          </span>

        </h2>

        <p className="mt-6 text-muted-foreground text-base md:text-lg">

          From an affordable professional website starting at ₹5,999
          to powerful CRM, ERP and custom software solutions.

        </p>

      </motion.div>


      {/* Solutions Grid */}

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">

        {solutions.map((solution, index) => {

          const Icon = solution.icon

          return (

            <motion.div
              key={solution.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
              whileHover={{
                y: -8,
              }}
              className={`relative rounded-2xl border bg-background p-7 shadow-sm transition-all duration-300 flex flex-col ${solution.popular
                ? "border-blue-600 shadow-xl shadow-blue-500/10"
                : "border-border hover:shadow-xl"
                }`}
            >

              {/* Popular Badge */}

              {solution.popular && (

                <div className="absolute -top-4 left-1/2 -translate-x-1/2">

                  <div className="bg-blue-700 text-white px-5 py-2 rounded-full text-sm font-semibold shadow-lg whitespace-nowrap">

                    Best for Small Business

                  </div>

                </div>

              )}


              {/* Icon */}

              <div className="w-14 h-14 rounded-xl bg-blue-600/10 flex items-center justify-center mb-6">

                <Icon className="w-7 h-7 text-blue-600" />

              </div>


              {/* Title */}

              <p className="text-sm font-semibold text-blue-600 mb-2">

                {solution.subtitle}

              </p>


              <h3 className="text-2xl font-bold">

                {solution.title}

              </h3>


              {/* Description */}

              <p className="mt-4 text-muted-foreground text-sm leading-relaxed min-h-[65px]">

                {solution.description}

              </p>


              {/* Price */}

              <div className="my-7">

                <div className="text-3xl md:text-4xl font-bold text-foreground">

                  {solution.price}

                </div>

                {solution.price !== "Custom" && (

                  <p className="text-sm text-muted-foreground mt-2">

                    Starting price

                  </p>

                )}

              </div>


              {/* CTA */}

              <Link
                href="/services/website-development"
                className="block mb-7"
              >

                <Button
                  className={`w-full group ${solution.popular
                    ? "bg-blue-700 hover:bg-violet-600 text-white"
                    : ""
                    }`}
                  variant={
                    solution.popular
                      ? "default"
                      : "outline"
                  }
                >

                  {solution.button}

                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />

                </Button>

              </Link>


              {/* Divider */}

              <div className="border-t pt-6 flex-grow">


                <p className="font-semibold text-sm mb-5">

                  What's Included

                </p>


                {/* Features */}

                <ul className="space-y-3">

                  {solution.features.map((feature) => (

                    <li
                      key={feature}
                      className="flex items-start gap-3 text-sm"
                    >

                      <Check className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />

                      <span className="text-muted-foreground">

                        {feature}

                      </span>

                    </li>

                  ))}

                </ul>


                {/* Note */}

                <div className="mt-6 pt-5 border-t">

                  <p className="text-xs text-muted-foreground leading-relaxed">

                    {solution.note}

                  </p>

                </div>

              </div>

            </motion.div>

          )
        })}

      </div>


      {/* Bottom CTA */}

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto mt-16"
      >

        <div className="rounded-2xl border bg-background p-8 md:p-12 text-center shadow-sm">

          <h3 className="text-2xl md:text-3xl font-bold">

            Have a Custom Requirement?

          </h3>

          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">

            Every business is different. Tell us about your idea and
            we will help you build the right digital solution.

          </p>

          <Link href="/contact">

            <Button
              size="lg"
              className="mt-7 bg-blue-700 hover:bg-violet-600"
            >

              Discuss Your Project

              <ArrowRight className="ml-2 w-4 h-4" />

            </Button>

          </Link>

        </div>

      </motion.div>


      {/* Disclaimer */}

      <div className="max-w-4xl mx-auto mt-8 text-center">

        <p className="text-xs text-muted-foreground">

          Prices shown are starting prices and may vary depending on
          project requirements, features and complexity. Domain,
          hosting and third-party service charges may apply separately.

        </p>

      </div>

    </div>
  </section>

  )
}
