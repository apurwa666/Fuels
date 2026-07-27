
"use client"

import { motion, useReducedMotion, type Variants } from "framer-motion"
import { cn } from "@/lib/utils"

interface AmbientBlobProps {
  className: string
  variants?: Variants
}

const DEFAULT_DRIFT: Variants = {
  initial: { x: "0%", y: "10%", scale: 1 },
  animate: {
    x: ["0%", "8%", "-6%", "0%"],
    y: ["10%", "-8%", "6%", "10%"],
    scale: [1, 1.08, 0.95, 1],
    transition: { duration: 30, repeat: Infinity, ease: "easeInOut" },
  },
}

/**
 * A soft, blurred gradient shape used for ambient section backgrounds.
 * Motion is intentionally slow and low-amplitude, and is skipped entirely
 * for users who prefer reduced motion.
 */
export function AmbientBlob({ className, variants = DEFAULT_DRIFT }: AmbientBlobProps) {
  const shouldReduceMotion = useReducedMotion()

  return (
    <motion.div
      aria-hidden
      className={cn("absolute rounded-full filter blur-3xl", className)}
      variants={shouldReduceMotion ? undefined : variants}
      initial={shouldReduceMotion ? undefined : "initial"}
      animate={shouldReduceMotion ? undefined : "animate"}
      style={shouldReduceMotion ? { opacity: 0.2 } : undefined}
    />
  )
}
