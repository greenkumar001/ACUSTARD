import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import "./assistant.css"
import { ThemeProvider } from "@/components/theme-provider"
import { WhatsappButton } from "@/components/whatsapp-button"
import { ScrollToTop } from "@/components/scroll-to-top"
import { AiAssistant } from "@/components/ai-assistant"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL("https://www.acustardtechnologies.com"),
  title: {
    default:
      "Acustard Technologies | Software Development, Web Development & Digital Solutions",
    template: "%s | Acustard Technologies",
  },

  description:
    "Acustard Technologies provides professional software development, website development, mobile app development, AI solutions, digital marketing, cloud solutions and IT services for businesses and startups.",

  keywords: [
    "Acustard Technologies",
    "software development company",
    "web development company",
    "website development company",
    "custom software development",
    "mobile app development",
    "AI development company",
    "machine learning solutions",
    "digital marketing services",
    "SEO services",
    "IT company",
    "technology company",
    "software company in India",
    "web development company in India",
    "software development company in Maharashtra",
    "software development company in Nagpur",
    "website development company in Nagpur",
    "IT services in Nagpur",
    "custom website development",
    "business website development",
    "ecommerce website development",
    "Next.js development",
    "React development",
    "MERN stack development",
  ],

  authors: [{ name: "Greenkumar Bisen" }],
  creator: "Acustard Technologies",
  publisher: "Acustard Technologies",

  applicationName: "Acustard Technologies",

  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },

  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://www.acustardtechnologies.com",
    siteName: "Acustard Technologies",
    title:
      "Acustard Technologies | Software Development & Digital Solutions",
    description:
      "Professional software development, website development, mobile apps, AI solutions, SEO and digital services for businesses and startups.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Acustard Technologies - Software Development and Digital Solutions",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Acustard Technologies | Software & Digital Solutions",
    description:
      "Software development, website development, AI, mobile apps, SEO and digital solutions.",
    images: ["/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  alternates: {
    canonical: "https://www.acustardtechnologies.com",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <ScrollToTop />

          {children}

          <WhatsappButton />
          <AiAssistant />
        </ThemeProvider>
      </body>
    </html>
  )
}