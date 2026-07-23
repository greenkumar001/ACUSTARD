"use client"

import type React from "react"

import { useState } from "react"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"


export function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    message: '',
  })

  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState<{ [key: string]: string }>({})

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {}

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required'
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required'
    } else if (!/^[+\d\s-]{10,}$/.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email'
    }

    return newErrors
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev }
        delete newErrors[name]
        return newErrors
      })
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const newErrors = validateForm()

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    try {
      const response = await fetch('/api/enquiry', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        throw new Error('Failed to submit enquiry')
      }

      setSubmitted(true)
      setTimeout(() => {
        setFormData({ fullName: '', phone: '', email: '', message: '' })
        setSubmitted(false)
        setErrors({})
      }, 4000)
    } catch (error) {
      console.error('Enquiry submission failed:', error)
      setErrors({ submit: 'Unable to send enquiry right now. Please try again later.' })
    }
  }

  return (
    <div className="animate-in fade-in slide-in-from-right-8 duration-1000">
      <div className="bg-card border border-border rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-shadow">
        {submitted ? (
          <div className="py-12 text-center animate-in fade-in duration-500">
            <div className="w-16 h-16 rounded-full bg-green-500/20 text-green-500 flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-foreground mb-2">Thank You!</h3>
            <p className="text-muted-foreground">
              We&apos;ve received your enquiry. Our counselor will contact you shortly.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Full Name */}
            <div>
              <label htmlFor="fullName" className="block text-sm font-medium text-foreground mb-2">
                Full Name *
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className={`w-full px-4 py-2 bg-background border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 transition-all ${errors.fullName ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20' : 'border-border focus:border-primary focus:ring-primary/20'
                  }`}
                placeholder="Raj Kumar"
              />
              {errors.fullName && <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>}
            </div>

            {/* Mobile */}
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                Phone Number *
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className={`w-full px-4 py-2 bg-background border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 transition-all ${errors.phone ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20' : 'border-border focus:border-primary focus:ring-primary/20'
                  }`}
                placeholder="+91 9876543210"
              />
              {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full px-4 py-2 bg-background border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 transition-all ${errors.email ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20' : 'border-border focus:border-primary focus:ring-primary/20'
                  }`}
                placeholder="raj@example.com"
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>
            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-2 bg-background border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all resize-none"
                placeholder="Tell us about yourself or ask any questions..."
              />
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              className="
    group
    w-full
    rounded-xl
    border
    border-blue-400/40
    bg-gradient-to-r
    from-blue-600
    via-indigo-600
    to-violet-600
    py-3
    text-base
    font-semibold
    text-white
    shadow-lg
    shadow-blue-500/25
    transition-all
    duration-300
    hover:-translate-y-0.5
    hover:from-blue-500
    hover:via-indigo-500
    hover:to-violet-500
    hover:shadow-xl
    hover:shadow-blue-500/40
  "
            >
              <span>Submit Enquiry</span>

              <ArrowRight
                className="
      ml-2
      h-5
      w-5
      transition-transform
      duration-300
      group-hover:translate-x-1
    "
              />
            </Button>

            <p className="text-xs text-muted-foreground text-center">
              We respect your privacy. Your information is secure with us.
            </p>
          </form>
        )}
      </div>
    </div>
  )

}