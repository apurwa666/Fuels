"use client"

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Script from 'next/script';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, CheckCircle2, XCircle, Plus, ArrowRight, Clock, Calendar } from 'lucide-react';
import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import { MotionWrapper } from '@/components/motion-wrapper';
import { FADE_IN_UP, STAGGER_CONTAINER } from '@/lib/animations';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { cn } from '@/lib/utils';

export default function VSLPage() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const stats = [
    { value: 38, label: 'Email Revenue', suffix: '%' },
    { value: 4.6, label: 'Average ROAS', suffix: 'x' },
    { value: 22, label: 'Open Rates', suffix: '%' },
    { value: 3.1, label: 'List Growth', suffix: 'x' },
    { value: 60, label: 'Brands Scaled', suffix: '+' },
    { value: 31, label: 'Conversion Lift', suffix: '%' },
  ];

  const duplicatedStats = [...stats, ...stats, ...stats];

  const discoverItems = [
    { time: "00:47", title: "The 'leaky list' problem", desc: "Why most DTC brands lose 15–20% of revenue before a campaign even goes out." },
    { time: "02:15", title: "The 3-flow stack", desc: "The exact sequence we install first — and why order matters more than volume." },
    { time: "04:30", title: "The audit itself", desc: "What we actually check in your account and what you walk away with either way." }
  ];

  const reelTestimonials = [
    { 
      name: "Sarah Johnson", 
      title: "CMO, LuxeDTC", 
      thumbnail: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=600&auto=format&fit=crop",
      duration: "0:45"
    },
    { 
      name: "David Chen", 
      title: "Founder, Peak Gear", 
      thumbnail: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop",
      duration: "1:12"
    },
    { 
      name: "Mark Thompson", 
      title: "Growth Lead, Vitality", 
      thumbnail: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=600&auto=format&fit=crop",
      duration: "0:58"
    }
  ];

  return (
    <div className="bg-background min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[900px] h-[500px] bg-accent/10 rounded-full blur-[120px] -z-10 pointer-events-none" />
        
        <div className="container px-4">
          <MotionWrapper variants={STAGGER_CONTAINER} className="text-center lg:text-left">
            <MotionWrapper variants={FADE_IN_UP} className="mb-12 text-center">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-accent/40 bg-accent/10 text-accent font-mono text-[10px] sm:text-xs tracking-[0.14em] uppercase mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-accent shadow-[0_0_8px_hsl(var(--accent))]" />
                For 7 & 8-Figure Ecommerce & DTC Brands
              </div>
              <h1 className="font-headline font-extrabold leading-[1.1] text-white mb-6 text-[clamp(1.75rem,5vw,3.5rem)] tracking-tight max-w-5xl mx-auto">
                Watch How We Add <span className="text-accent italic drop-shadow-[0_0_25px_rgba(108,124,240,0.6)]">20–40% More Revenue</span> Without Spending an Extra Dollar on Ads
              </h1>
            </MotionWrapper>

            <div className="grid lg:grid-cols-[1.5fr_1fr] gap-12 items-start">
              {/* Left Column: Video */}
              <MotionWrapper variants={FADE_IN_UP} className="relative group">
                <div className="absolute -inset-4 rounded-[2rem] p-[2px] opacity-70 pointer-events-none overflow-hidden">
                  <motion.div 
                    initial={{ rotate: 0 }}
                    animate={{ rotate: 360 }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-[-100%] bg-[conic-gradient(from_0deg,transparent_0deg,hsl(var(--accent))_140deg,transparent_141deg)]"
                  />
                </div>

                <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-card aspect-video shadow-2xl">
                  {!isPlaying ? (
                    <div 
                      className="relative w-full h-full cursor-pointer group"
                      onClick={() => setIsPlaying(true)}
                    >
                      <Image 
                        src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop"
                        alt="Growth Engine Breakdown"
                        fill
                        className="object-cover opacity-50 group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                        <div className="w-20 h-20 rounded-full bg-accent flex items-center justify-center shadow-[0_0_40px_rgba(108,124,240,0.5)] group-hover:scale-110 transition-transform duration-300">
                          <Play className="w-8 h-8 text-white fill-current ml-1" />
                        </div>
                      </div>
                      <div className="absolute bottom-6 left-6 px-3 py-1.5 bg-black/60 backdrop-blur-md rounded-lg border border-white/10 text-[10px] sm:text-xs font-mono font-bold tracking-wider text-white">
                        ▶ 06:14 · THE GROWTH ENGINE BREAKDOWN
                      </div>
                    </div>
                  ) : (
                    <div className="w-full h-full bg-black flex items-center justify-center">
                      <p className="text-accent font-mono text-sm animate-pulse">Video stream initializing...</p>
                    </div>
                  )}
                </div>
              </MotionWrapper>

              {/* Right Column: Discover List */}
              <div className="space-y-6">
                <div className="inline-block px-3 py-1 rounded-full bg-accent/10 text-accent font-bold text-[10px] uppercase tracking-widest mb-2">
                  In This 6-Minute Breakdown
                </div>
                <div className="grid gap-4">
                  {discoverItems.map((item, i) => (
                    <MotionWrapper 
                      key={i} 
                      variants={FADE_IN_UP} 
                      transition={{ delay: 0.1 * i }}
                      className="p-5 bg-card/40 border border-white/5 rounded-2xl hover:border-accent/30 transition-colors group"
                    >
                      <div className="flex items-center gap-3 mb-2">
                        <span className="font-mono text-accent text-xs font-bold tracking-widest bg-accent/10 px-2 py-0.5 rounded">{item.time}</span>
                        <h3 className="text-base font-bold text-white group-hover:text-accent transition-colors">{item.title}</h3>
                      </div>
                      <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                    </MotionWrapper>
                  ))}
                </div>
                <div className="pt-4">
                   <Button size="lg" className="w-full h-14 text-base font-black rounded-xl shadow-[0_10px_30px_rgba(108,124,240,0.3)] bg-accent text-accent-foreground" asChild>
                    <Link href="#audit">Get Your Free Growth Audit <ArrowRight className="ml-2 w-5 h-5" /></Link>
                  </Button>
                </div>
              </div>
            </div>
          </MotionWrapper>
        </div>
      </section>

      {/* Stat Ticker */}
      <div className="py-6 border-y border-white/5 bg-card/30 overflow-hidden">
        <div className="flex gap-16 animate-marquee w-max">
          {duplicatedStats.map((stat, index) => (
            <div key={index} className="flex items-baseline gap-3 whitespace-nowrap">
              <span className="font-mono font-bold text-xl text-accent">
                {stat.value}{stat.suffix}
              </span>
              <span className="text-sm text-muted-foreground uppercase tracking-widest font-medium">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* BIG CALENDLY SECTION - Balanced Proportions */}
      <section className="py-20 sm:py-24 bg-background relative overflow-hidden" id="audit">
        <div className="container px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-20 items-center">
              <MotionWrapper variants={FADE_IN_UP}>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-500 font-bold text-[10px] uppercase tracking-widest mb-6">
                  Now Booking for 2025
                </div>
                <h2 className="text-3xl sm:text-4xl font-extrabold font-headline tracking-tight text-white uppercase mb-8">Ready to Scale Your Retention Revenue?</h2>
                <p className="text-muted-foreground text-lg mb-10 leading-relaxed font-medium">
                  Book a free 20-minute growth audit. We'll look at your Klaviyo infrastructure, identify leaks, and give you a roadmap — whether you work with us or not.
                </p>
                
                <div className="space-y-6">
                  {[
                    "Klaviyo Deliverability Health Check",
                    "Revenue-Per-Recipient Benchmark",
                    "Flow Stack Optimization Plan",
                    "AOV & LTV Lift Strategies"
                  ].map((benefit, i) => (
                    <div key={i} className="flex items-center gap-4 text-white font-bold text-sm sm:text-base">
                      <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                        <CheckCircle2 className="w-4 h-4 text-accent" />
                      </div>
                      {benefit}
                    </div>
                  ))}
                </div>

                <div className="mt-12 p-6 rounded-2xl bg-card border border-white/5">
                   <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent">
                        <Clock className="w-6 h-6" />
                      </div>
                      <div>
                        <p className="text-white font-bold">20 Minutes</p>
                        <p className="text-xs text-muted-foreground">Strategic Analysis Call</p>
                      </div>
                   </div>
                </div>
              </MotionWrapper>

              <MotionWrapper variants={FADE_IN_UP} className="relative">
                <Card className="relative shadow-2xl overflow-hidden bg-background border-white/10 rounded-[2.5rem]">
                  {isClient && (
                    <div 
                      key="vsl-calendly" 
                      className="calendly-inline-widget w-full" 
                      data-url="https://calendly.com/fuelmails007/meeting" 
                      style={{ minWidth: '320px', height: '600px' }}
                    ></div>
                  )}
                  <Script 
                    src="https://assets.calendly.com/assets/external/widget.js" 
                    strategy="afterInteractive"
                  />
                </Card>
                <div className="absolute -z-10 -bottom-10 -right-10 w-64 h-64 bg-accent/10 rounded-full blur-[100px]" />
              </MotionWrapper>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-24 bg-card/20 border-y border-white/5">
        <div className="container px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center max-w-5xl mx-auto">
            <div>
              <div className="inline-block px-3 py-1 rounded-full bg-destructive/10 text-destructive font-bold text-[10px] uppercase tracking-widest mb-6">
                The Real Cost of Standing Still
              </div>
              <h2 className="text-3xl font-extrabold font-headline text-white mb-8 leading-tight">
                Most brands aren't losing to competitors. They're losing to their own backend.
              </h2>
              <ul className="space-y-4">
                {[
                  "Flows built once, never touched again since launch",
                  "Segments based on guesswork, not real purchase behavior",
                  "An agency sending 'campaigns' with no lifecycle strategy",
                  "No clear read on what's driving revenue vs. vanity opens"
                ].map((text, i) => (
                  <li key={i} className="flex gap-4 items-start text-muted-foreground text-sm sm:text-base font-medium">
                    <XCircle className="w-5 h-5 text-destructive shrink-0 mt-0.5" />
                    {text}
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative aspect-square max-w-sm mx-auto w-full">
              <div className="absolute inset-0 rounded-full border-8 border-white/5" />
              <div className="absolute inset-0 rounded-full border-8 border-accent/20 border-t-accent shadow-[0_0_30px_rgba(108,124,240,0.3)] animate-[spin_3s_linear_infinite]" />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8">
                <span className="text-4xl font-headline font-black text-white">-20%</span>
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground mt-1">Average Leak</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof - Reels Grid */}
      <section className="py-24 bg-card/10 border-y border-white/5">
        <div className="container px-4">
          <div className="text-center mb-16">
            <div className="inline-block px-3 py-1 rounded-full bg-accent/10 text-accent font-bold text-[10px] uppercase tracking-widest mb-4">
              Social Proof
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-headline tracking-tight text-white uppercase">Loved by Marketers Worldwide</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {reelTestimonials.map((reel, i) => (
              <MotionWrapper 
                key={i} 
                variants={FADE_IN_UP} 
                className="relative aspect-[9/16] rounded-3xl overflow-hidden border border-white/10 bg-card group shadow-2xl cursor-pointer"
              >
                <Image 
                  src={reel.thumbnail}
                  alt={reel.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/20 group-hover:scale-110 group-hover:bg-accent/40 transition-all duration-300">
                    <Play className="w-6 h-6 text-white fill-current ml-1" />
                  </div>
                </div>
                <div className="absolute top-4 right-4 px-2 py-1 bg-black/60 backdrop-blur-md rounded-md border border-white/10 text-[10px] font-mono font-bold text-white">
                  {reel.duration}
                </div>
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <p className="text-lg font-bold mb-1">{reel.name}</p>
                  <p className="text-xs text-accent font-black uppercase tracking-widest">{reel.title}</p>
                </div>
              </MotionWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-24">
        <div className="container px-4">
          <Card className="max-w-4xl mx-auto bg-card p-8 sm:p-12 border-white/5 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-[80px] -z-0" />
            <div className="relative z-10 flex flex-col md:flex-row gap-10 items-center">
              <div className="w-48 h-48 rounded-2xl overflow-hidden shrink-0 shadow-2xl">
                <Image 
                  src="https://picsum.photos/seed/anish/600/800"
                  alt="Anish Pantha"
                  width={400}
                  height={400}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="text-center md:text-left">
                <span className="text-accent font-mono text-xs font-bold tracking-widest block mb-2 uppercase">Co-Founder, FuelMails</span>
                <h3 className="text-2xl font-black text-white mb-6 font-headline tracking-tight">Anish Pantha</h3>
                <p className="text-lg text-muted-foreground leading-relaxed italic font-medium">
                  "We built FuelMails to treat your account like our own — not a rotating junior on a template. This audit is the same lens we use on every one of our 60+ client accounts, applied to yours, for free."
                </p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-card/20 border-y border-white/5">
        <div className="container px-4">
          <div className="text-center mb-16">
            <div className="inline-block px-3 py-1 rounded-full bg-accent/10 text-accent font-bold text-[10px] uppercase tracking-widest mb-4">
              Questions
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-headline tracking-tight text-white uppercase">Frequently Asked Questions</h2>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              {[
                { q: "What kind of results can I expect from email marketing?", a: "Most accounts see meaningful lift within the first 30–60 days as flows and segmentation go live, with compounding gains after." },
                { q: "Do you only do email marketing?", a: "No — we also run growth marketing: lifecycle, sales development, and retention experiments beyond the inbox." },
                { q: "How long does it take to see results?", a: "Foundational flows typically launch within 2–3 weeks, with early revenue signal showing up shortly after." },
                { q: "Do I need to sign a long-term contract?", a: "No long-term lock-in is required — we earn the right to keep working with you month over month." }
              ].map((item, i) => (
                <AccordionItem key={i} value={`item-${i}`} className="border-white/5">
                  <AccordionTrigger className="text-left font-headline font-bold text-white hover:text-accent transition-colors text-lg py-6">
                    {item.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed text-base pb-6 font-medium">
                    {item.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 pb-32">
        <div className="container px-4">
          <Card className="max-w-4xl mx-auto bg-accent p-12 sm:p-20 text-center relative overflow-hidden border-none shadow-[0_40px_100px_rgba(108,124,240,0.4)]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.2)_0%,transparent_70%)] pointer-events-none" />
            
            <div className="relative z-10">
              <div className="inline-block px-3 py-1 rounded-full bg-white/20 text-white font-bold text-[10px] uppercase tracking-[0.2em] mb-8">
                Limited Audit Slots
              </div>
              <h2 className="text-3xl sm:text-5xl font-extrabold font-headline tracking-tight text-black uppercase mb-6 leading-tight">
                Fuel Your Growth Before <br />Your Competitors Do
              </h2>
              <p className="text-black/70 text-lg font-bold max-w-xl mx-auto mb-12">
                Join 60+ brands already scaling with FuelMails. Book your free audit — no credit card required.
              </p>
              
              <Button size="lg" variant="secondary" className="h-16 px-12 text-xl font-black rounded-xl bg-black text-white hover:bg-black/90 transition-all hover:scale-105" asChild>
                <Link href="#audit">Get My Free Growth Audit</Link>
              </Button>
              
              <div className="mt-8 flex items-center justify-center gap-2 font-mono text-[10px] sm:text-xs font-black text-black/60 tracking-widest uppercase">
                <span className="w-2 h-2 rounded-full bg-black/80 animate-pulse" />
                Only 5 audit slots open this month
              </div>
            </div>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
}
