"use client"

import { motion, type Variants, type Transition } from "framer-motion"
import type React from "react"

interface MotionWrapperProps {
  children: React.ReactNode;
  className?: string;
  variants: Variants;
  initial?: string;
  whileInView?: string;
  viewport?: {
    once?: boolean;
    amount?: number | "some" | "all";
    margin?: string;
  };
  transition?: Transition;
  tag?: keyof typeof motion;
}

export function MotionWrapper({ 
  children, 
  className, 
  variants, 
  initial = "hidden", 
  whileInView = "visible",
  viewport = { once: true, amount: 0.2 },
  tag = "div",
  ...props
}: MotionWrapperProps) {
  const MotionComponent = motion[tag] as any;
  return (
    <MotionComponent
      className={className}
      variants={variants}
      initial={initial}
      whileInView={whileInView}
      viewport={viewport}
      {...props}
    >
      {children}
    </MotionComponent>
  )
}
