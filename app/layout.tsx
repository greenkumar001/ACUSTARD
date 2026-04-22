import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import "./assistant.css"
import { ThemeProvider } from "@/components/theme-provider"
import { WhatsappButton } from "@/components/whatsapp-button"
import { ScrollToTop } from "@/components/scroll-to-top"
import { AiAssistant } from "@/components/ai-assistant"
// import { TestAssistant } from "@/components/test-assistant"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "ACUSTARD TECHNOLOGIES",
  description: "Innovative Software Solutions & Digital Services",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <ScrollToTop />
          {children}
          <WhatsappButton />
          <AiAssistant />
          {/* <TestAssistant /> */}
        </ThemeProvider>
      </body>
    </html>
  )
}