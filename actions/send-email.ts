"use server"

import { z } from "zod"

// Define a schema for form validation
const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z.string().optional(),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
})

export async function sendEmail(formData: FormData) {
  try {
    // Extract form data
    const name = formData.get("name") as string
    const email = formData.get("email") as string
    const phone = formData.get("phone") as string
    const message = formData.get("message") as string

    // Validate form data
    const result = formSchema.safeParse({ name, email, phone, message })

    if (!result.success) {
      return {
        success: false,
        message: "Validation failed. Please check your inputs.",
      }
    }

    // In a real implementation, you would use a service like Nodemailer, SendGrid, etc.
    // For this example, we'll simulate sending an email
    console.log("Sending email to: acustardtechnologies@gmail.com")
    console.log("From:", name, email)
    console.log("Message:", message)

    // Simulate a delay to mimic sending an email
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // Return success response
    return {
      success: true,
      message: "Message sent! We'll get back to you as soon as possible.",
    }
  } catch (error) {
    console.error("Error sending email:", error)
    return {
      success: false,
      message: "Failed to send message. Please try again later.",
    }
  }
}
