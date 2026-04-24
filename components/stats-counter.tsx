"use client"

import type React from "react"

import { useEffect, useState, useRef } from "react"
import { motion, useInView } from "framer-motion"

interface StatsCounterProps {
  end: number
  duration?: number
  label: string
  icon?: React.ReactNode
}

export function StatsCounter({ end, duration = 2, label, icon }: StatsCounterProps) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  useEffect(() => {
    if (!isInView) return

    let startTime: number
    let animationFrame: number

    const countUp = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = timestamp - startTime
      const progressPercent = Math.min(progress / (duration * 1000), 1)

      setCount(Math.floor(progressPercent * end))

      if (progressPercent < 1) {
        animationFrame = requestAnimationFrame(countUp)
      }
    }

    animationFrame = requestAnimationFrame(countUp)

    return () => {
      cancelAnimationFrame(animationFrame)
    }
  }, [end, duration, isInView])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center justify-center space-y-2 text-center"
    >
      <div className="text-4xl md:text-5xl font-bold text-gradient">{count}+</div>
      <div className="flex items-center gap-2">
        {icon && <span>{icon}</span>}
        <span className="text-sm md:text-base font-medium">{label}</span>
      </div>
    </motion.div>
  )
}