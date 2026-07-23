"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, Send, Bot } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import Image from "next/image"
import { IMAGES } from "@/lib/constants"


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

  const handleSendMessage = async () => {
    if (!inputValue.trim() || isTyping) return

    const userMessage: Message = {
      id: `user-${Date.now()}`,
      content: inputValue,
      sender: "user",
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInputValue("")
    setIsTyping(true)

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: userMessage.content,
        }),
      })

      const data = await response.json()

      const assistantMessage: Message = {
        id: `assistant-${Date.now()}`,
        content:
          data.answer ||
          "Sorry, I don't have this information in the official ACUSTARD TECHNOLOGIES website data.",
        sender: "assistant",
        timestamp: new Date(),
      }

      setMessages((prev) => [...prev, assistantMessage])
    } catch (error) {
      console.error("Chat error:", error)

      setMessages((prev) => [
        ...prev,
        {
          id: `assistant-${Date.now()}`,
          content: "Something went wrong. Please try again.",
          sender: "assistant",
          timestamp: new Date(),
        },
      ])
    } finally {
      setIsTyping(false)
    }
  }

  return (
    <>
      {/* Chat button */}
      <div className="assistant-wrapper">
        <div className="assistant-hi">Hi 👋</div>

        <motion.button
          className="ai-assistant-button"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsOpen(true)}
          aria-label="Open AI Assistant"
        >
          <img
            src="/assistant.png"
            alt="Acustard AI Assistant"
          />
        </motion.button>
      </div>

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
            <Card className="overflow-hidden shadow-xl border-blue-700/20">
              <CardHeader className="bg-blue-700 text-white p-4 flex flex-row justify-between items-center">
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
                  className="text-white hover:bg-blue-700 hover:text-white transition-colors duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  <X className="h-4 w-4" />
                </Button>
              </CardHeader>

              <CardContent className="p-0">
                <div className="h-80
      overflow-y-auto
      p-4
      bg-white
      text-gray-900
      dark:bg-gray-900
      dark:text-gray-100">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={`mb-4 flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
                    >
                      <div
                        className={` max-w-[80%]
            rounded-2xl
            px-4
            py-2.5
            shadow-sm ${message.sender === "user"
                            ? `
                  rounded-br-md
                  bg-blue-600
                  text-white
                `
                            : `
                  rounded-bl-md
                  border
                  border-gray-200
                  bg-gray-100
                  text-gray-900
                  dark:border-gray-700
                  dark:bg-gray-800
                  dark:text-gray-100
                `
                          }`}
                      >
                        <p className="text-sm leading-relaxed">{message.content}</p>
                        <p className="mt-1 text-right text-[10px] opacity-60">
                          {message.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                        </p>
                      </div>
                    </div>
                  ))}

                  {isTyping && (
                    <div className="mb-4 flex justify-start">
                      <div
                        className="
            rounded-2xl
            rounded-bl-md
            border
            border-gray-200
            bg-gray-100
            px-4
            py-3
            dark:border-gray-700
            dark:bg-gray-800
          "
                      >
                        <div className="flex items-center gap-1">
                          <span className="h-2 w-2 animate-bounce rounded-full bg-gray-500 dark:bg-gray-400" />
                          <span className="h-2 w-2 animate-bounce rounded-full bg-gray-500 dark:bg-gray-400 [animation-delay:150ms]" />
                          <span className="h-2 w-2 animate-bounce rounded-full bg-gray-500 dark:bg-gray-400 [animation-delay:300ms]" />
                        </div>
                      </div>
                    </div>
                  )}

                  <div ref={messagesEndRef} />
                </div>
              </CardContent>

              <CardFooter className="
    border-gray-200
    bg-white
    p-3
    dark:border-gray-700
    dark:bg-gray-950">
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
                    className="
        h-10
        flex-1
        border-gray-300
        bg-gray-100
        text-gray-900
        placeholder:text-gray-500
        dark:border-gray-700
        dark:bg-gray-800
        dark:text-white
        dark:placeholder:text-gray-400
      "
                  />
                  <Button
                    type="submit"
                    size="icon"
                    className="ai-assistant-button h-10
        w-10
        shrink-0
        rounded-lg
        bg-blue-600
        text-white
        hover:bg-blue-700
        disabled:opacity-50"
                    disabled={!inputValue.trim()}
                  > <img
                      src="/assistant.png"
                      alt="Acustard AI Assistant"
                    />
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