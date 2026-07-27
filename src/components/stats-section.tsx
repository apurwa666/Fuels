'use client';

import React from 'react';
import { stats } from '@/lib/data';
import { AnimatedCounter } from './animated-counter';
import { MotionWrapper } from './motion-wrapper';
import { FADE_IN_UP, STAGGER_CONTAINER } from '@/lib/animations';
import { cn } from '@/lib/utils';

export function StatsSection() {
  return (
    <div className="py-8 sm:py-12">
      <div className="mx-auto w-full max-w-[1440px] px-6 md:px-10 lg:px-16">
        <div className="max-w-5xl mx-auto">
          <MotionWrapper
            variants={STAGGER_CONTAINER}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-0"
          >
            {stats.map((stat, index) => (
              <MotionWrapper 
                key={stat.label} 
                variants={FADE_IN_UP} 
                className={cn(
                  "flex flex-col items-center justify-center text-center py-6 px-6",
                  index !== 0 && "md:border-l md:border-white/10"
                )}
              >
                <div className="flex flex-col items-center">
                  <div className="text-5xl sm:text-6xl lg:text-7xl font-extrabold font-headline tracking-tighter text-white mb-2">
                    <AnimatedCounter
                      toValue={stat.value}
                      duration={stat.duration}
                    />
                    <span className="text-primary/80">{stat.suffix}</span>
                  </div>
                  <p className="text-[10px] sm:text-xs font-black uppercase tracking-[0.2em] text-muted-foreground max-w-[180px] leading-tight text-center">
                    {stat.label}
                  </p>
                </div>
              </MotionWrapper>
            ))}
          </MotionWrapper>
        </div>
      </div>
    </div>
  );
}
