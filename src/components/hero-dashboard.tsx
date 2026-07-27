
"use client"

import { motion, useReducedMotion } from "framer-motion"
import { AnimatedCounter } from "./animated-counter"
import { AmbientBlob } from "./ambient-blob"
import { stats } from "@/lib/data"

const CHART_POINTS: [number, number][] = [
  [0, 150],
  [57, 133],
  [114, 142],
  [171, 96],
  [228, 106],
  [285, 61],
  [342, 41],
  [399, 18],
]

const linePath = CHART_POINTS.map(([x, y], i) => `${i === 0 ? "M" : "L"}${x},${y}`).join(" ")
const areaPath = `${linePath} L399,190 L0,190 Z`

const revenueStat = stats[0]
const campaignStat = stats[1]

export function HeroDashboard() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.94, y: 12 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
      className="relative mx-auto w-full max-w-md lg:max-w-none"
    >
      {/* Ambient glow behind the card */}
      <div className="absolute inset-0 -z-10">
        <AmbientBlob className="w-72 h-72 bg-accent/25 -top-10 -right-10 opacity-70" />
        <AmbientBlob className="w-64 h-64 bg-primary/20 -bottom-10 -left-10 opacity-60" />
      </div>

      {/* Main dashboard card */}
      <div className="relative rounded-2xl border border-border/70 bg-card/90 backdrop-blur-xl shadow-2xl shadow-primary/10 p-6 sm:p-8">
        {/* Window chrome dots */}
        <div className="flex items-center gap-1.5 mb-6">
          <span className="w-2.5 h-2.5 rounded-full bg-muted-foreground/20" />
          <span className="w-2.5 h-2.5 rounded-full bg-muted-foreground/20" />
          <span className="w-2.5 h-2.5 rounded-full bg-muted-foreground/20" />
        </div>

        {/* Chart */}
        <div className="relative">
          <svg viewBox="0 0 400 190" className="w-full h-auto" preserveAspectRatio="none">
            <defs>
              <linearGradient id="heroChartStroke" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="hsl(var(--accent))" />
                <stop offset="100%" stopColor="hsl(var(--primary))" />
              </linearGradient>
              <linearGradient id="heroChartFill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="hsl(var(--accent))" stopOpacity="0.35" />
                <stop offset="100%" stopColor="hsl(var(--accent))" stopOpacity="0" />
              </linearGradient>
            </defs>

            {/* Grid lines */}
            {[40, 90, 140].map((y) => (
              <line
                key={y}
                x1="0"
                y1={y}
                x2="400"
                y2={y}
                stroke="hsl(var(--border))"
                strokeWidth="1"
                strokeDasharray="4 6"
              />
            ))}

            <motion.path
              d={areaPath}
              fill="url(#heroChartFill)"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.6 }}
            />

            <motion.path
              d={linePath}
              fill="none"
              stroke="url(#heroChartStroke)"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ pathLength: shouldReduceMotion ? 1 : 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.6, ease: "easeInOut" }}
            />
          </svg>
        </div>
      </div>

      {/* Floating metric chip - revenue */}
      <motion.div
        animate={shouldReduceMotion ? undefined : { y: [0, -8, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-5 -right-4 sm:-top-7 sm:-right-7 flex items-center gap-3 rounded-xl border bg-background shadow-lg px-4 py-3"
      >
        <div className="p-2 rounded-lg bg-accent/10 shrink-0">
          <revenueStat.icon className="w-4 h-4 text-accent" />
        </div>
        <div>
          <p className="text-sm font-bold font-headline leading-none whitespace-nowrap">
            <AnimatedCounter
              toValue={revenueStat.value}
              duration={revenueStat.duration}
              prefix={revenueStat.prefix}
              suffix={revenueStat.suffix}
            />
          </p>
          <p className="text-[10px] text-muted-foreground mt-1 whitespace-nowrap">{revenueStat.label}</p>
        </div>
      </motion.div>

      {/* Floating metric chip - campaigns */}
      <motion.div
        animate={shouldReduceMotion ? undefined : { y: [0, 8, 0] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
        className="absolute -bottom-5 -left-4 sm:-bottom-7 sm:-left-7 flex items-center gap-3 rounded-xl border bg-background shadow-lg px-4 py-3"
      >
        <div className="p-2 rounded-lg bg-primary/10 shrink-0">
          <campaignStat.icon className="w-4 h-4 text-primary" />
        </div>
        <div>
          <p className="text-sm font-bold font-headline leading-none whitespace-nowrap">
            <AnimatedCounter
              toValue={campaignStat.value}
              duration={campaignStat.duration}
              prefix={campaignStat.prefix}
              suffix={campaignStat.suffix}
            />
          </p>
          <p className="text-[10px] text-muted-foreground mt-1 whitespace-nowrap">{campaignStat.label}</p>
        </div>
      </motion.div>
    </motion.div>
  )
}
