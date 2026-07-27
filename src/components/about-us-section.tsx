
"use client"

import React from 'react';
import { MotionWrapper } from './motion-wrapper';
import { FADE_IN_UP, STAGGER_CONTAINER } from '@/lib/animations';
import { TeamCarousel } from './team-carousel';

export function AboutUsSection() {
  return (
    <section id="about-us" className="py-12 sm:py-20 bg-background relative overflow-hidden">
      <div className="mx-auto w-full max-w-[1440px] px-6 md:px-10 lg:px-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <MotionWrapper
            variants={STAGGER_CONTAINER}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="flex flex-col gap-6 text-center lg:text-left"
          >
            <MotionWrapper variants={FADE_IN_UP}>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 text-accent font-bold text-xs uppercase tracking-widest mb-6 border border-accent/20">
                Our Story
              </div>
              <h2 className="text-3xl sm:text-5xl font-extrabold font-headline tracking-tight mb-8">The Partnership <br />Behind Your <span className="text-accent italic">Success.</span></h2>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-xl mx-auto lg:mx-0 font-medium text-justify">
                FuelMails was born from a shared vision: to build a marketing infrastructure that treats your business as its own. We are more than an agency; we are your dedicated growth partners.
              </p>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-xl mx-auto lg:mx-0 font-medium mt-4 text-justify">
                Our mission is to help 100+ brands achieve sustainable, high-performance growth through surgical precision in email and lifecycle marketing.
              </p>
            </MotionWrapper>
          </MotionWrapper>

          <MotionWrapper 
            variants={FADE_IN_UP} 
            viewport={{ once: true }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative z-10 w-full flex lg:justify-end">
              <TeamCarousel />
            </div>
            {/* Decorative background glow for the team section */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 w-[120%] h-[120%] bg-accent/5 rounded-full blur-[100px]" />
          </MotionWrapper>
        </div>
      </div>
    </section>
  );
}
