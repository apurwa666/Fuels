
"use client"

import React from 'react';
import { MotionWrapper } from './motion-wrapper'
import { FADE_IN_UP, STAGGER_CONTAINER } from '@/lib/animations'
import { CalendarCheck, ClipboardPen, Rocket } from 'lucide-react'

const steps = [
  {
    icon: CalendarCheck,
    title: 'Strategy Call',
    description: "Tell us your goals, and we'll craft a high-impact roadmap tailored to your specific market needs.",
  },
  {
    icon: ClipboardPen,
    title: 'Custom Planning',
    description: "Review your unique strategy and visuals, refined by our expert team to ensure peak performance.",
  },
  {
    icon: Rocket,
    title: 'Launch & Scale',
    description: 'We execute and provide deep-dive reports while you focus on scaling your operations.',
  },
]

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-12 sm:py-20">
      <div className="mx-auto w-full max-w-[1440px] px-6 md:px-10 lg:px-16">
        <div className="grid md:grid-cols-[1fr_1.5fr] gap-12 md:gap-24 items-start">
            <MotionWrapper 
              variants={FADE_IN_UP} 
              viewport={{ once: true }} 
              className="max-w-md mx-auto md:mx-0 text-center md:text-left"
            >
                <h2 className="text-3xl sm:text-5xl font-extrabold font-headline tracking-tight uppercase mb-8 text-center md:text-left">Simple Process, <br />Powerful <span className="text-accent italic drop-shadow-[0_0_20px_rgba(108,124,240,0.4)]">Results.</span></h2>
                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed text-center md:text-left font-medium">
                    Get your marketing momentum fueled in three straightforward steps. We handle the heavy lifting so you can focus on growth.
                </p>
            </MotionWrapper>

            <div className="flex justify-center md:justify-end">
                <MotionWrapper
                    variants={STAGGER_CONTAINER}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    className="grid gap-12 w-full max-w-2xl md:max-w-none"
                >
                {steps.map((step) => (
                    <MotionWrapper
                    key={step.title}
                    variants={FADE_IN_UP}
                    className="flex flex-col md:flex-row items-center md:items-start gap-8 group text-center md:text-left"
                    >
                        <div className="flex-shrink-0 w-16 h-16 bg-secondary flex items-center justify-center rounded-2xl group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                            <step.icon className="w-8 h-8" />
                        </div>
                        <div className="md:text-left">
                            <h3 className="text-xl sm:text-2xl font-extrabold mb-3 tracking-tight">{step.title}</h3>
                            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed font-medium md:text-left">
                                {step.description}
                            </p>
                        </div>
                    </MotionWrapper>
                ))}
                </MotionWrapper>
            </div>
        </div>
      </div>
    </section>
  );
}
