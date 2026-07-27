"use client"

import { useEffect, useState, useRef } from "react"

interface AnimatedCounterProps {
  toValue: number;
  duration?: number;
  className?: string;
  suffix?: string;
  prefix?: string;
}

export function AnimatedCounter({
  toValue,
  duration = 2000,
  className,
  suffix = "",
  prefix = "",
}: AnimatedCounterProps) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true)
          let startTime: number | null = null
          const end = toValue

          const animate = (timestamp: number) => {
            if (!startTime) startTime = timestamp
            const progress = timestamp - startTime
            const percentage = Math.min(progress / duration, 1)
            
            // Ease out cubic
            const easedPercentage = 1 - Math.pow(1 - percentage, 3)
            
            const current = Math.floor(end * easedPercentage)
            setCount(current)

            if (progress < duration) {
              requestAnimationFrame(animate)
            } else {
              setCount(end)
            }
          }
          requestAnimationFrame(animate)
        }
      },
      { threshold: 0.1 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [toValue, duration, hasAnimated])
  
  const formattedCount = new Intl.NumberFormat('en-US').format(count);

  return (
    <span ref={ref} className={className}>
      {prefix}{formattedCount}{suffix}
    </span>
  )
}
