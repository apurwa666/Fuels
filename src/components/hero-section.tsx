"use client"

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { MotionWrapper } from "@/components/motion-wrapper";
import { STAGGER_CONTAINER, FADE_IN_UP } from "@/lib/animations";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { emailTemplates } from '@/lib/data';

// Sub-component for dynamic template images in the carousel
function CarouselTemplateImage({ template, isHovered }: { template: typeof emailTemplates[0], isHovered: boolean }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const [scrollAmount, setScrollAmount] = useState(0);

  const calculateScroll = () => {
    if (imgRef.current && containerRef.current) {
      const diff = imgRef.current.offsetHeight - containerRef.current.offsetHeight;
      setScrollAmount(Math.max(0, diff));
    }
  };

  useEffect(() => {
    calculateScroll();
  }, []);

  return (
    <div ref={containerRef} className="relative w-full h-full overflow-hidden rounded-2xl">
      <motion.div
        className="absolute top-0 left-0 w-full"
        animate={{ y: isHovered ? -scrollAmount : 0 }}
        transition={{ 
          duration: isHovered ? Math.max(4, scrollAmount / 150) : 3, 
          ease: isHovered ? "linear" : [0.4, 0, 0.2, 1],
          delay: 0 
        }}
      >
        <Image 
          ref={imgRef}
          src={template.imageUrl} 
          alt={template.name} 
          width={600}
          height={2400}
          className="w-full h-auto object-cover object-top" 
          onLoadingComplete={calculateScroll}
          data-ai-hint="email template"
          priority
          unoptimized
        />
      </motion.div>
    </div>
  );
}

export function HeroSection() {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const [radius, setRadius] = useState(250);
    const displayTemplates = emailTemplates.slice(0, 6);

    // Responsive radius for the 3D carousel to ensure it fits mobile screens perfectly with clean gaps
    useEffect(() => {
      const updateRadius = () => {
        if (window.innerWidth < 640) {
          setRadius(160); // Increased radius to accommodate larger mobile templates
        } else if (window.innerWidth < 1024) {
          setRadius(210); // Refined tablet radius
        } else {
          setRadius(250); // Default for desktop
        }
      };
      
      updateRadius();
      window.addEventListener('resize', updateRadius);
      return () => window.removeEventListener('resize', updateRadius);
    }, []);

    return (
        <section className="relative min-h-0 flex flex-col justify-center pt-24 pb-12 sm:pb-20 overflow-hidden bg-background">
            {/* Background Glows */}
            <div className="absolute inset-0 -z-10 pointer-events-none">
                <div className="absolute top-[45%] right-[22%] w-[800px] h-[400px] bg-accent/30 rounded-full blur-[100px] opacity-40" />
                <div className="absolute bottom-[10%] left-[10%] w-[500px] h-[300px] bg-accent/10 rounded-full blur-[100px] opacity-20" />
            </div>

            <div className="mx-auto w-full max-w-[1440px] px-6 md:px-10 lg:px-16">
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-20 items-center">
                    {/* Left Content */}
                    <MotionWrapper
                        className="flex flex-col items-center lg:items-start text-center lg:text-left"
                        variants={STAGGER_CONTAINER}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        <MotionWrapper variants={FADE_IN_UP} className="flex flex-col items-center lg:items-start">
                            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-accent/40 bg-accent/10 text-accent font-headline font-bold text-[12.5px] tracking-[0.14em] uppercase mb-4 sm:mb-6">
                                <span className="w-1.5 h-1.5 rounded-full bg-accent shadow-[0_0_8px_hsl(var(--accent))]" />
                                The Growth Engine
                            </div>
                            <h1 className="font-headline font-extrabold leading-[1.04] text-primary mb-4 sm:mb-6 text-[clamp(2rem,5vw,4rem)] tracking-tight text-center lg:text-left">
                                <span className="italic text-accent drop-shadow-[0_0_25px_rgba(108,124,240,0.8)]">Unlock</span> an Additional <span className="italic text-accent drop-shadow-[0_0_25px_rgba(108,124,240,0.8)]">20&ndash;40%</span> Revenue Without Increasing <span className="italic text-accent drop-shadow-[0_0_25px_rgba(108,124,240,0.8)] whitespace-nowrap">Ad&nbsp;Spend.</span>
                            </h1>
                            <p className="text-base sm:text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-xl mx-auto lg:mx-0 font-medium">
                                We turn your email and growth marketing into a high-performance revenue engine, scaling your business with precision and partnership.
                            </p>
                        </MotionWrapper>

                        <MotionWrapper variants={FADE_IN_UP} className="flex flex-col sm:flex-row items-center lg:items-start gap-4 mt-6 sm:mt-8 w-full sm:w-auto">
                            <Button size="lg" className="h-14 px-10 text-base font-black rounded-xl shadow-[0_1px_50px_rgba(108,124,240,0.3)] hover:shadow-[0_25px_60px_rgba(108,124,240,0.5)] transition-all hover:-translate-y-1 bg-accent text-accent-foreground" asChild>
                                <Link href="/#schedule">
                                    Book Your Free Audit <ArrowRight className="ml-2 w-5 h-5" />
                                </Link>
                            </Button>
                            <Button
                                size="lg"
                                variant="outline"
                                className="h-14 px-10 text-base font-black rounded-xl border-border bg-transparent transition-transform hover:-translate-y-1"
                                asChild
                            >
                                <Link href="/#services">Explore Our Services</Link>
                            </Button>
                        </MotionWrapper>
                    </MotionWrapper>

                    {/* Right Visual (3D Carousel) */}
                    <div className="relative flex items-center justify-center mt-12 lg:mt-0">
                      <div className="relative w-full max-w-[750px] aspect-square flex items-center justify-center">
                        <motion.div 
                          animate={{ scale: [1, 1.2, 1], opacity: [0.6, 1, 0.6] }}
                          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                          className="absolute w-40 h-40 rounded-full bg-accent/20 blur-[80px] z-0 pointer-events-none"
                        />

                        <div className="absolute inset-0 flex items-center justify-center" style={{ perspective: '1600px' }}>
                          <motion.div 
                            className="relative w-full h-full flex items-center justify-center"
                            style={{ transformStyle: 'preserve-3d' }}
                            animate={{ rotateY: 360 }}
                            transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
                          >
                            {displayTemplates.map((template, idx) => {
                              const angle = (idx * 60); 
                              
                              return (
                                <div
                                  key={template.id}
                                  className="absolute pointer-events-auto"
                                  style={{
                                    transform: `rotateY(${angle}deg) translateZ(${radius}px)`,
                                    transformStyle: 'preserve-3d',
                                    zIndex: hoveredIndex === idx ? 100 : idx
                                  }}
                                  onMouseEnter={() => setHoveredIndex(idx)}
                                  onMouseLeave={() => setHoveredIndex(null)}
                                >
                                  <motion.div
                                    className="relative w-32 h-72 sm:w-[215px] sm:h-[440px] rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-card cursor-pointer"
                                    animate={{ 
                                        y: hoveredIndex === idx ? -50 : 0,
                                        scale: hoveredIndex === idx ? 1.05 : 1,
                                        rotateY: hoveredIndex === idx ? 5 : 0
                                    }}
                                    transition={{ 
                                      type: "spring", 
                                      stiffness: 400, 
                                      damping: 40,
                                      mass: 0.8
                                    }}
                                  >
                                    <CarouselTemplateImage template={template} isHovered={hoveredIndex === idx} />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent pointer-events-none" />
                                    <AnimatePresence>
                                      {hoveredIndex === idx && (
                                        <motion.div 
                                          initial={{ opacity: 0 }}
                                          animate={{ opacity: 1 }}
                                          exit={{ opacity: 0 }}
                                          className="absolute inset-0 border-2 border-accent/50 rounded-2xl shadow-[inset_0_0_30px_rgba(108,124,240,0.4)] pointer-events-none"
                                        />
                                      )}
                                    </AnimatePresence>
                                  </motion.div>
                                </div>
                              );
                            })}
                          </motion.div>
                        </div>
                      </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
