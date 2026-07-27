"use client"

import React from 'react';
import Link from 'next/link'
import { motion, type Variants } from 'framer-motion';

import { Button } from './ui/button'
import { MotionWrapper } from './motion-wrapper'
import { FADE_IN_UP } from '@/lib/animations'
import { cn } from '@/lib/utils';

const AnimatedBlob = ({ className, animationVariants }: { className: string, animationVariants: Variants }) => {
    return (
        <motion.div
            className={cn("absolute rounded-full filter blur-3xl opacity-50", className)}
            variants={animationVariants}
            initial="initial"
            animate="animate"
        />
    );
}

export function FinalCtaSection() {
  const blobAnimation1: Variants = {
    initial: { x: '0%', y: '20%', scale: 1.2, rotate: 0 },
    animate: {
      x: ['0%', '90%', '10%', '0%'],
      y: ['20%', '-20%', '100%', '20%'],
      scale: [1.2, 0.8, 1.3, 1.2],
      rotate: [0, 90, 180, 0],
      transition: { duration: 40, repeat: Infinity, ease: 'easeInOut' }
    }
  };

  const blobAnimation3: Variants = {
      initial: { x: '50%', y: '100%', scale: 0.9, rotate: 0 },
      animate: {
          x: ['50%', '-10%', '110%', '50%'],
          y: ['100%', '0%', '50%', '100%'],
          scale: [0.9, 1.2, 0.7, 0.9],
          rotate: [0, 120, -120, 0],
          transition: { duration: 50, repeat: Infinity, ease: 'easeInOut', delay: 10 }
      }
  };

  return (
    <section className="py-20 sm:py-24 bg-background relative overflow-hidden">
        <div className="absolute inset-0 z-0">
            <AnimatedBlob className="w-96 h-96 bg-primary/30" animationVariants={blobAnimation1} />
            <AnimatedBlob className="w-72 h-72 bg-primary/20" animationVariants={blobAnimation3} />
        </div>
      <div className="mx-auto w-full max-w-[1440px] px-6 md:px-10 lg:px-16 relative z-10">
          <MotionWrapper 
            variants={FADE_IN_UP} 
            className="p-8 sm:p-16 text-center relative rounded-[3rem] bg-card/40 backdrop-blur-xl border border-white/5"
          >
            <div className="relative z-10">
              <h2 className="text-3xl sm:text-5xl font-extrabold font-headline tracking-tight uppercase leading-[1.1]">Ready to Fuel Your <span className="text-accent italic drop-shadow-[0_0_25px_rgba(108,124,240,0.6)]">Growth?</span></h2>
              <p className="mt-6 max-w-2xl mx-auto text-base sm:text-lg text-muted-foreground font-medium">
                Join thousands of businesses already seeing results with FuelMails. Start your free trial today and take your email marketing to the next level. No credit card required.
              </p>
              <div className="mt-10 flex justify-center">
                <Button size="lg" className="h-16 px-12 text-lg font-black rounded-xl shadow-[0_20px_50px_rgba(108,124,240,0.3)] hover:shadow-[0_25px_60px_rgba(108,124,240,0.5)] transition-all hover:-translate-y-1" asChild>
                  <Link href="/#schedule">Start Your Free Trial</Link>
                </Button>
              </div>
            </div>
          </MotionWrapper>
      </div>
    </section>
  )
}
