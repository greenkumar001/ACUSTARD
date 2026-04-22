"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, Send, Bot } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import Image from "next/image"
import { IMAGES } from "@/lib/constants"

// Predefined responses for the AI assistant
const PREDEFINED_RESPONSES: Record<string, string> = {
  greeting: "Hello! Welcome to acustard Technologies. How can I assist you today?",
  services:
    "We offer a range of services including software development, design services, digital marketing, and IT consulting. Would you like to know more about any specific service?",
  contact:
    "You can reach us via email at acustardtechnologies@gmail.com, call us at +91 9145376420, or fill out the contact form on our website.",
  about:
    "acustard Technologies is a forward-thinking IT company founded by Greenkumar Bisen. We specialize in innovative software solutions and digital services for businesses of all sizes.",
  software:
    "Our software development services include web application development, mobile app development, enterprise software solutions, and API development & integration.",
  design: "Our design services include logo design, brochure design, UI/UX design, and brand identity development.",
  marketing:
    "Our digital marketing services include SEO, social media marketing, content marketing, and email marketing campaigns.",
  consulting:
    "Our IT consulting services include IT strategy development, technology assessment, digital transformation, and IT infrastructure planning.",
  location: "We are located in Nagpur, Maharashtra, India.",
  hours: "Our business hours are Monday to Friday from 9:00 AM to 6:00 PM, and Saturday from 10:00 AM to 2:00 PM.",
  default:
    "I'm sorry, I don't have specific information about that. Would you like to speak with one of our team members? You can contact us through our contact form or email us at acustardtechnologies@gmail.com.",
}

// Function to find the best matching response
function findBestResponse(message: string): string {
  message = message.toLowerCase()

  if (message.includes("hello") || message.includes("hi") || message.includes("hey")) {
    return PREDEFINED_RESPONSES.greeting
  } else if (message.includes("service")) {
    return PREDEFINED_RESPONSES.services
  } else if (
    message.includes("contact") ||
    message.includes("reach") ||
    message.includes("email") ||
    message.includes("phone")
  ) {
    return PREDEFINED_RESPONSES.contact
  } else if (message.includes("about") || message.includes("company") || message.includes("who")) {
    return PREDEFINED_RESPONSES.about
  } else if (
    message.includes("software") ||
    message.includes("development") ||
    message.includes("app") ||
    message.includes("web")
  ) {
    return PREDEFINED_RESPONSES.software
  } else if (
    message.includes("design") ||
    message.includes("logo") ||
    message.includes("brochure") ||
    message.includes("ui") ||
    message.includes("ux")
  ) {
    return PREDEFINED_RESPONSES.design
  } else if (message.includes("marketing") || message.includes("seo") || message.includes("social media")) {
    return PREDEFINED_RESPONSES.marketing
  } else if (message.includes("consulting") || message.includes("strategy") || message.includes("assessment")) {
    return PREDEFINED_RESPONSES.consulting
  } else if (message.includes("location") || message.includes("address") || message.includes("where")) {
    return PREDEFINED_RESPONSES.location
  } else if (message.includes("hours") || message.includes("time") || message.includes("when")) {
    return PREDEFINED_RESPONSES.hours
  } else {
    return PREDEFINED_RESPONSES.default
  }
}

interface Message {
  id: string
  content: string
  sender: "user" | "assistant"
  timestamp: Date
}

export function AiAssistant() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [inputValue, setInputValue] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  // Add initial greeting when the chat is first opened
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setMessages([
        {
          id: "welcome",
          content: "Hello! I'm your acustard Technologies assistant. How can I help you today?",
          sender: "assistant",
          timestamp: new Date(),
        },
      ])
    }
  }, [isOpen, messages.length])

  // Scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  const handleSendMessage = () => {
    if (!inputValue.trim()) return

    // Add user message
    const userMessage: Message = {
      id: `user-${Date.now()}`,
      content: inputValue,
      sender: "user",
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInputValue("")
    setIsTyping(true)

    // Simulate AI thinking and responding
    setTimeout(() => {
      const response = findBestResponse(userMessage.content)

      const assistantMessage: Message = {
        id: `assistant-${Date.now()}`,
        content: response,
        sender: "assistant",
        timestamp: new Date(),
      }

      setMessages((prev) => [...prev, assistantMessage])
      setIsTyping(false)
    }, 1000)
  }

  return (
    <>
      {/* Chat button */}
      <motion.button
        className="ai-assistant-button"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(true)}
        aria-label="Open AI Assistant"
      >
        <Bot className="h-6 w-6" />
      </motion.button>

      {/* Chat window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed bottom-6 right-6 z-50 w-80 md:w-96"
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
          >
            <Card className="overflow-hidden shadow-xl border-acustard-blue/20">
              <CardHeader className="bg-acustard-blue text-white p-4 flex flex-row justify-between items-center">
                <div className="flex items-center gap-2">
                  <div className="relative h-8 w-8 overflow-hidden rounded-full">
                    <Image
                      src={IMAGES.logo || "/placeholder.svg"}
                      alt="acustard Technologies"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="font-medium">acustard Assistant</h3>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-white hover:bg-acustard-blue/80"
                  onClick={() => setIsOpen(false)}
                >
                  <X className="h-4 w-4" />
                </Button>
              </CardHeader>

              <CardContent className="p-0">
                <div className="h-80 overflow-y-auto p-4 bg-muted/30">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={`mb-4 flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
                    >
                      <div
                        className={`max-w-[80%] rounded-lg px-4 py-2 ${
                          message.sender === "user" ? "bg-acustard-blue text-white" : "bg-muted"
                        }`}
                      >
                        <p className="text-sm">{message.content}</p>
                        <p className="text-xs mt-1 opacity-70">
                          {message.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                        </p>
                      </div>
                    </div>
                  ))}

                  {isTyping && (
                    <div className="mb-4 flex justify-start">
                      <div className="max-w-[80%] rounded-lg px-4 py-2 bg-muted">
                        <div className="flex space-x-1">
                          <div
                            className="h-2 w-2 rounded-full bg-gray-400 animate-bounce"
                            style={{ animationDelay: "0ms" }}
                          ></div>
                          <div
                            className="h-2 w-2 rounded-full bg-gray-400 animate-bounce"
                            style={{ animationDelay: "150ms" }}
                          ></div>
                          <div
                            className="h-2 w-2 rounded-full bg-gray-400 animate-bounce"
                            style={{ animationDelay: "300ms" }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  )}

                  <div ref={messagesEndRef} />
                </div>
              </CardContent>

              <CardFooter className="p-2 border-t">
                <form
                  className="flex w-full gap-2"
                  onSubmit={(e) => {
                    e.preventDefault()
                    handleSendMessage()
                  }}
                >
                  <Input
                    placeholder="Type your message..."
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    className="flex-1"
                  />
                  <Button
                    type="submit"
                    size="icon"
                    className="bg-acustard-blue hover:bg-acustard-violet"
                    disabled={!inputValue.trim()}
                  >
                    <Send className="h-4 w-4" />
                  </Button>
                </form>
              </CardFooter>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}