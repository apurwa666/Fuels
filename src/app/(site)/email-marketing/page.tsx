
"use client"

import React, { useState, useRef, useEffect, useCallback } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"
import { MotionWrapper } from "@/components/motion-wrapper"
import { FADE_IN_UP, STAGGER_CONTAINER } from "@/lib/animations"
import { Card } from '@/components/ui/card'
import { CheckCircle2, Workflow, Users, BarChart3, ArrowRight } from 'lucide-react'
import { emailServices, emailTemplates } from '@/lib/data'

/**
 * Sub-component for the content-aware auto-scrolling template images.
 * Scrolls from top to bottom based on the image height.
 */
function CarouselTemplateImage({ 
  template, 
  isActive, 
  isDragging,
  onComplete 
}: { 
  template: typeof emailTemplates[0], 
  isActive: boolean,
  isDragging: boolean,
  onComplete: () => void 
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const [scrollAmount, setScrollAmount] = useState(0);
  const [isReady, setIsReady] = useState(false);

  const calculateScroll = useCallback(() => {
    if (imgRef.current && containerRef.current) {
      const diff = imgRef.current.offsetHeight - containerRef.current.offsetHeight;
      setScrollAmount(Math.max(0, diff));
      setIsReady(true);
    }
  }, []);

  useEffect(() => {
    calculateScroll();
    window.addEventListener('resize', calculateScroll);
    return () => window.removeEventListener('resize', calculateScroll);
  }, [calculateScroll]);

  // Determine duration based on content length (px / speed)
  const duration = Math.max(5, scrollAmount / 150);

  return (
    <div ref={containerRef} className="relative w-full h-full overflow-hidden rounded-2xl bg-card/50 pointer-events-none">
      <motion.div
        className="absolute top-0 left-0 w-full"
        initial={{ y: 0 }}
        animate={{ y: isActive && isReady && !isDragging ? -scrollAmount : 0 }}
        transition={{ 
          duration: isActive && !isDragging ? duration : 0.8, 
          ease: isActive && !isDragging ? "linear" : [0.4, 0, 0.2, 1],
        }}
        onAnimationComplete={() => {
          if (isActive && isReady && !isDragging && scrollAmount > 0) {
            onComplete();
          }
        }}
      >
        <Image 
          ref={imgRef}
          src={template.imageUrl} 
          alt={template.name} 
          width={600}
          height={2400}
          className="w-full h-auto object-cover object-top select-none pointer-events-none" 
          onLoad={calculateScroll}
          data-ai-hint="email template"
          priority
          unoptimized
          draggable={false}
        />
      </motion.div>
    </div>
  );
}

export default function EmailMarketingPage() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const displayTemplates = emailTemplates;

  const nextTemplate = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % displayTemplates.length);
  }, [displayTemplates.length]);

  const prevTemplate = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + displayTemplates.length) % displayTemplates.length);
  }, [displayTemplates.length]);

  // When a template finishes its vertical scroll
  const handleTemplateComplete = () => {
    if (timerRef.current) clearTimeout(timerRef.current);
    
    // Wait 0.5s after reaching bottom before changing positions
    if (!isDragging) {
      timerRef.current = setTimeout(nextTemplate, 500);
    }
  };

  // Logic to handle "dragging the position"
  const handleDragEnd = (event: any, info: any) => {
    setIsDragging(false);
    const threshold = 50; 
    const velocity = info.velocity.x;
    
    if (info.offset.x < -threshold || velocity < -300) {
      nextTemplate();
    } else if (info.offset.x > threshold || velocity > 300) {
      prevTemplate();
    }
  };

  // Cleanup timers
  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  return (
    <div className="bg-background">
      <section className="relative min-h-[85vh] lg:min-h-screen flex flex-col justify-center pt-24 pb-12 overflow-hidden bg-background">
        <div className="absolute inset-0 -z-10 pointer-events-none">
          <div className="absolute top-[45%] right-[22%] w-[800px] h-[400px] bg-accent/30 rounded-full blur-[100px] opacity-40" />
          <div className="absolute bottom-[10%] left-[10%] w-[500px] h-[300px] bg-accent/10 rounded-full blur-[100px] opacity-20" />
        </div>

        <div className="container px-4">
          <div className="grid lg:grid-cols-[1fr_1fr] gap-12 lg:gap-20 items-center">
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
                  Retention Systems
                </div>
                <h1 className="font-headline font-extrabold leading-[1.04] text-primary mb-6 sm:mb-8 text-[clamp(2.25rem,5.5vw,4.5rem)] tracking-tight text-center lg:text-left">
                  Email Marketing Built to <span className="italic text-accent drop-shadow-[0_0_25px_rgba(108,124,240,0.8)]">Perform.</span>
                </h1>
                <p className="text-base sm:text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-xl mx-auto lg:mx-0 font-medium text-center lg:text-left">
                  The retention engine for modern brands. We combine high-performance design with surgical automation to squeeze every drop of ROI from your list.
                </p>
                <div className="flex flex-col sm:flex-row items-center lg:items-start gap-4 mt-8 sm:mt-10 w-full sm:w-auto">
                  <Button variant="black" size="lg" className="h-14 px-10 text-base font-black rounded-xl shadow-[0_20px_50px_rgba(108,124,240,0.3)] hover:shadow-[0_25px_60px_rgba(108,124,240,0.5)] transition-all hover:-translate-y-1 bg-accent text-accent-foreground" asChild>
                    <Link href="/#schedule">Free Email Audit <ArrowRight className="ml-2 w-5 h-5" /></Link>
                  </Button>
                </div>
              </MotionWrapper>
            </MotionWrapper>

            {/* 3D Stacked Carousel with Fixed Modulo Overlap */}
            <div className="relative flex items-center justify-center mt-12 lg:mt-0 h-[480px] sm:h-[600px] w-full">
              <div 
                className="relative w-full h-full flex items-center justify-center"
                style={{ perspective: '1500px', transformStyle: 'preserve-3d' }}
              >
                {displayTemplates.map((template, index) => {
                  const offset = (index - activeIndex + displayTemplates.length) % displayTemplates.length;
                  
                  let x = 0;
                  let rotateY = 0;
                  let scale = 0.6;
                  let zIndex = 0;
                  let opacity = 0;
                  let pointerEvents: "auto" | "none" = "none";

                  // Logic for 3-at-a-time stack positions with strict z-index handling
                  if (offset === 0) {
                    // Center (Focused)
                    x = 0;
                    rotateY = 0;
                    scale = 1;
                    zIndex = 20; // Highest
                    opacity = 1;
                    pointerEvents = "auto";
                  } else if (offset === 1) {
                    // Right (Angled In)
                    x = "75%";
                    rotateY = -45;
                    scale = 0.82;
                    zIndex = 10;
                    opacity = 0.5;
                    pointerEvents = "auto";
                  } else if (offset === displayTemplates.length - 1) {
                    // Left (Angled In)
                    x = "-75%";
                    rotateY = 45;
                    scale = 0.82;
                    zIndex = 10;
                    opacity = 0.5;
                    pointerEvents = "auto";
                  } else {
                    // Hidden states - prevent them from flying through the middle
                    opacity = 0;
                    zIndex = 0;
                    x = offset < displayTemplates.length / 2 ? "150%" : "-150%";
                  }

                  return (
                    <motion.div
                      key={template.id}
                      drag="x"
                      dragConstraints={{ left: 0, right: 0 }}
                      dragElastic={0.2}
                      onDragStart={() => {
                        setIsDragging(true);
                        if (timerRef.current) clearTimeout(timerRef.current);
                      }}
                      onDragEnd={handleDragEnd}
                      animate={{
                        x,
                        rotateY,
                        scale,
                        zIndex,
                        opacity,
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 260,
                        damping: 26,
                        mass: 1,
                      }}
                      className="absolute w-44 h-96 sm:w-60 sm:h-[460px] lg:w-72 lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl border border-white/5 bg-card cursor-grab active:cursor-grabbing select-none"
                      style={{
                        pointerEvents,
                        backfaceVisibility: 'hidden',
                        transformStyle: 'preserve-3d',
                      }}
                    >
                      <CarouselTemplateImage 
                        template={template} 
                        isActive={offset === 0}
                        isDragging={isDragging}
                        onComplete={handleTemplateComplete} 
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                      
                      {offset === 0 && (
                          <motion.div 
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          className="absolute inset-0 border-2 border-accent/30 rounded-3xl shadow-[inset_0_0_50px_rgba(108,124,240,0.2)] pointer-events-none"
                        />
                      )}
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        
        <div className="absolute inset-0 -z-20 opacity-[0.02] pointer-events-none" 
             style={{ backgroundImage: 'radial-gradient(hsl(var(--accent)) 1px, transparent 0)', backgroundSize: '40px 40px' }} 
        />
      </section>

      <section className="pt-6 pb-12 sm:pt-10 sm:pb-20 bg-secondary/10 relative">
        <div className="container px-4">
          <div className="text-center mb-12 sm:mb-16">
            <MotionWrapper variants={FADE_IN_UP} viewport={{ once: true }}>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent font-bold text-[10px] uppercase tracking-widest mb-4">
                Full-Service Execution
              </div>
              <h2 className="text-3xl sm:text-5xl font-extrabold font-headline mb-6 tracking-tight">Our Core Ecosystem</h2>
              <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto font-medium">
                We build the systems, you harvest the results. Targeted execution for high-growth brands.
              </p>
            </MotionWrapper>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {emailServices.map((service, index) => (
              <MotionWrapper
                key={index}
                variants={FADE_IN_UP}
                className="h-full group"
                viewport={{ once: true }}
              >
                <Card className="h-full border border-primary/5 shadow-2xl bg-background/80 backdrop-blur-md p-8 transition-all duration-500 hover:-translate-y-2 hover:border-accent/30">
                  <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-accent group-hover:text-accent-foreground transition-all duration-500">
                    <service.icon className="w-7 h-7 text-primary group-hover:text-accent-foreground" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-extrabold mb-4 tracking-tight">{service.title}</h3>
                  <p className="text-sm sm:text-base leading-relaxed text-muted-foreground font-medium">
                    {service.description}
                  </p>
                </Card>
              </MotionWrapper>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 overflow-hidden relative">
        <div className="container px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
              <MotionWrapper variants={FADE_IN_UP} viewport={{ once: true }}>
                <div className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-[10px] sm:text-xs font-black uppercase tracking-widest mb-6 border border-accent/20">Revenue Engineering</div>
                <h2 className="text-3xl sm:text-5xl font-extrabold font-headline mb-8 text-primary tracking-tight leading-[1.1]">Email is your <br /><span className="text-accent italic drop-shadow-[0_0_25px_rgba(108,124,240,0.8)]">most powerful Lever.</span></h2>
                <p className="text-base sm:text-lg text-muted-foreground mb-8 font-medium leading-relaxed">
                  Stop hunting for more traffic and start building wealth from the traffic you already have. We provide the architecture that turns customers into fans.
                </p>
                <ul className="space-y-4">
                  {[
                    "Welcome paths that build instant loyalty",
                    "Advanced behavioral checkout recovery",
                    "Predictive lifecycle win-back loops",
                    "AI-driven product recommendations"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-4 text-sm sm:text-base font-bold">
                      <div className="flex-shrink-0 w-6 h-6 bg-accent/20 rounded-full flex items-center justify-center">
                        <CheckCircle2 className="w-3.5 h-3.5 text-accent" />
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
              </MotionWrapper>
              
              <div className="relative group mt-8 lg:mt-0">
                <div className="absolute -inset-8 bg-gradient-to-tr from-primary/10 to-accent/10 rounded-[4rem] blur-3xl opacity-30" />
                <div className="relative bg-background p-10 sm:p-16 rounded-[2.5rem] shadow-3xl border border-primary/5 backdrop-blur-sm">
                  <div className="space-y-12">
                    <div className="flex items-center gap-6">
                      <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                        < BarChart3 className="w-8 h-8" />
                      </div>
                      <div>
                        <p className="text-[10px] font-black uppercase tracking-[0.3em] text-muted-foreground mb-1">Performance Benchmark</p>
                        <p className="text-xl sm:text-3xl font-black text-primary tracking-tight">+40% Revenue Share</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-6">
                      <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                        <Workflow className="w-8 h-8" />
                      </div>
                      <div>
                        <p className="text-[10px] font-black uppercase tracking-[0.3em] text-muted-foreground mb-1">System Depth</p>
                        <p className="text-xl sm:text-3xl font-black text-primary tracking-tight">15+ Automated Flows</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-6">
                      <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                        <Users className="w-8 h-8" />
                      </div>
                      <div>
                        <p className="text-[10px] font-black uppercase tracking-[0.3em] text-muted-foreground mb-1">Audience Health</p>
                        <p className="text-xl sm:text-3xl font-black text-primary tracking-tight">45% Open Rate Average</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-24 bg-primary text-primary-foreground text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(108,124,240,0.2)_0%,transparent_70%)] pointer-events-none" />
        <div className="container px-4 relative z-10">
          <h2 className="text-3xl sm:text-5xl font-extrabold font-headline mb-8 tracking-tight leading-[1.2] max-w-4xl mx-auto uppercase">Start Scaling Your Retention Revenue</h2>
          <p className="text-base sm:text-xl opacity-90 mb-12 max-w-2xl mx-auto font-medium leading-relaxed">
            Every day you wait is revenue left in your customers' pockets. Schedule your free 30-minute audit now.
          </p>
          <Button size="lg" variant="secondary" className="h-16 px-12 text-xl font-black rounded-xl shadow-[0_20px_50px_rgba(108,124,240,0.3)] hover:shadow-[0_25px_60px_rgba(108,124,240,0.5)] transition-all hover:scale-105" asChild>
            <Link href="/#schedule">Book Your Free Email Audit</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
