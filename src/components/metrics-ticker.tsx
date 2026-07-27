"use client"

import React from 'react';
import { MotionWrapper } from "@/components/motion-wrapper";
import { FADE_IN_UP } from "@/lib/animations";

const metrics = [
  { value: '+38%', label: 'Email Revenue' },
  { value: '4.6x', label: 'Average ROAS' },
  { value: '+22%', label: 'Open Rates' },
  { value: '3.1x', label: 'List Growth' },
  { value: '60+', label: 'Brands Scaled' },
  { value: '+31%', label: 'Conversion Lift' },
];

export function MetricsTicker() {
  const duplicatedMetrics = [...metrics, ...metrics, ...metrics];

  return (
    <MotionWrapper
      variants={FADE_IN_UP}
      initial="hidden"
      
    >
      <section className="relative pt-4 pb-10 sm:pb-12 bg-background overflow-hidden border-none">
        <div className="container mx-auto px-4 relative z-10 mb-8">
          <p className="text-center font-headline italic font-bold text-muted-foreground text-sm tracking-wide">
            Real numbers, pulled straight from <span className="text-accent">live campaigns</span>
          </p>
        </div>

        <div className="relative w-full overflow-hidden pause-on-hover">
          <div className="flex gap-4 animate-marquee w-max">
            {duplicatedMetrics.map((metric, index) => (
              <div 
                key={`${metric.label}-${index}`} 
                className="flex items-center gap-3 whitespace-nowrap bg-card border border-white/5 rounded-full px-6 py-3 font-headline font-bold text-base shadow-lg"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-accent shadow-[0_0_8px_hsl(var(--accent))]" />
                <span className="text-accent">{metric.value}</span>
                <span className="text-muted-foreground font-body font-medium text-sm">{metric.label}</span>
              </div>
            ))}
          </div>

          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
        </div>
      </section>
    </MotionWrapper>
  );
}