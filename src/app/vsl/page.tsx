
"use client"

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, CheckCircle2, XCircle, Plus, ArrowRight } from 'lucide-react';
import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import { MotionWrapper } from '@/components/motion-wrapper';
import { FADE_IN_UP, STAGGER_CONTAINER } from '@/lib/animations';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { AnimatedCounter } from '@/components/animated-counter';
import { cn } from '@/lib/utils';

export default function VSLPage() {
  const [isPlaying, setIsPlaying] = useState(false);

  const stats = [
    { value: 38, label: 'Email Revenue', suffix: '%' },
    { value: 4.6, label: 'Average ROAS', suffix: 'x' },
    { value: 22, label: 'Open Rates', suffix: '%' },
    { value: 3.1, label: 'List Growth', suffix: 'x' },
    { value: 60, label: 'Brands Scaled', suffix: '+' },
    { value: 31, label: 'Conversion Lift', suffix: '%' },
  ];

  const duplicatedStats = [...stats, ...stats, ...stats];

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
          <MotionWrapper variants={STAGGER_CONTAINER} className="text-center">
            <MotionWrapper variants={FADE_IN_UP}>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-accent/40 bg-accent/10 text-accent font-mono text-[10px] sm:text-xs tracking-[0.14em] uppercase mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-accent shadow-[0_0_8px_hsl(var(--accent))]" />
                For 7 & 8-Figure Ecommerce & DTC Brands
              </div>
              <h1 className="font-headline font-extrabold leading-[1.1] text-white mb-6 text-[clamp(1.75rem,5vw,3.5rem)] tracking-tight max-w-4xl mx-auto">
                Watch How We Add <span className="text-accent italic drop-shadow-[0_0_25px_rgba(108,124,240,0.6)]">20–40% More Revenue</span> Without Spending an Extra Dollar on Ads
              </h1>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-12">
                A 6-minute breakdown of the exact email & lifecycle system we've used to scale 60+ brands — and how to see if it fits yours.
              </p>
            </MotionWrapper>

            {/* Video Player Area */}
            <MotionWrapper variants={FADE_IN_UP} className="relative max-w-4xl mx-auto mb-12 group">
              {/* Gauge Frame Animation */}
              <div className="absolute -inset-4 rounded-[2rem] p-[2px] opacity-70 pointer-events-none overflow-hidden">
                <motion.div 
                  initial={{ rotate: 0 }}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
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
                      alt="Video Preview"
                      fill
                      className="object-cover opacity-50 group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                      <div className="w-20 h-20 rounded-full bg-accent flex items-center justify-center shadow-[0_0_40px_rgba(108,124,240,0.5)] group-hover:scale-110 transition-transform duration-300">
                        <Play className="w-8 h-8 text-white fill-current ml-1" />
                      </div>
                    </div>
                    <div className="absolute bottom-6 left-6 px-3 py-1.5 bg-black/60 backdrop-blur-md rounded-lg border border-white/10 text-[10px] sm:text-xs font-mono font-bold tracking-wider">
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

            <MotionWrapper variants={FADE_IN_UP}>
              <Button size="lg" className="h-16 px-10 text-lg font-black rounded-xl shadow-[0_20px_50px_rgba(108,124,240,0.3)] hover:shadow-[0_25px_60px_rgba(108,124,240,0.5)] transition-all hover:-translate-y-1 bg-accent text-accent-foreground" asChild>
                <Link href="#audit">Get My Free Growth Audit <ArrowRight className="ml-2 w-5 h-5" /></Link>
              </Button>
              <p className="mt-6 text-sm text-muted-foreground font-medium">
                No pitch. Just a straight look at your numbers. <span className="text-white font-bold">Usually a $500 value.</span>
              </p>
            </MotionWrapper>
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

      {/* Discover Section */}
      <section className="py-24">
        <div className="container px-4">
          <div className="text-center mb-16">
            <div className="inline-block px-3 py-1 rounded-full bg-accent/10 text-accent font-bold text-[10px] uppercase tracking-widest mb-4">
              In This Video
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-headline tracking-tight text-white uppercase">What You'll Discover</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { time: "00:47", title: "The 'leaky list' problem", desc: "Why most DTC brands lose 15–20% of possible email revenue before a single campaign goes out." },
              { time: "02:15", title: "The 3-flow stack", desc: "The exact flow sequence we install first on every account — and why order matters more than volume." },
              { time: "04:30", title: "The audit itself", desc: "What we actually check in your account during the free audit, and what you walk away with either way." }
            ].map((item, i) => (
              <Card key={i} className="p-8 bg-card/50 border-white/5 hover:border-accent/30 transition-colors group">
                <span className="font-mono text-accent text-sm font-bold tracking-widest">{item.time}</span>
                <h3 className="text-xl font-bold text-white mt-4 mb-3">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </Card>
            ))}
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

      {/* Process Section */}
      <section className="py-24">
        <div className="container px-4">
          <div className="text-center mb-16">
            <div className="inline-block px-3 py-1 rounded-full bg-accent/10 text-accent font-bold text-[10px] uppercase tracking-widest mb-4">
              The Method
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-headline tracking-tight text-white uppercase">Simple Process, Powerful Results</h2>
            <p className="mt-4 text-muted-foreground max-w-xl mx-auto">The same three-step sequence behind every account we run — no custom guesswork per client.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto relative">
            <div className="absolute top-10 left-10 right-10 h-px bg-white/5 hidden md:block" />
            {[
              { step: "01", title: "Strategy Call", desc: "Tell us your goals — we map a roadmap built around your actual list and margins." },
              { step: "02", title: "Custom Planning", desc: "Your flows, segments, and calendar get built and reviewed before anything sends." },
              { step: "03", title: "Launch & Scale", desc: "We execute and report weekly, while you focus on running the rest of the business." }
            ].map((item, i) => (
              <div key={i} className="relative z-10 text-center flex flex-col items-center">
                <div className="w-20 h-20 rounded-full bg-card border border-white/10 flex items-center justify-center text-accent font-mono text-2xl font-black mb-8 group-hover:bg-accent group-hover:text-accent-foreground transition-all duration-500">
                  {item.step}
                </div>
                <h3 className="text-xl font-extrabold text-white mb-4">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed font-medium">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof - Reels Grid */}
      <section className="py-24 bg-card/10">
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
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                
                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/20 group-hover:scale-110 group-hover:bg-accent/40 transition-all duration-300">
                    <Play className="w-6 h-6 text-white fill-current ml-1" />
                  </div>
                </div>

                {/* Duration Tag */}
                <div className="absolute top-4 right-4 px-2 py-1 bg-black/60 backdrop-blur-md rounded-md border border-white/10 text-[10px] font-mono font-bold">
                  {reel.duration}
                </div>

                {/* Caption */}
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="text-lg font-bold text-white mb-1">{reel.name}</p>
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
                  src="/images/anish.jpeg"
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

      {/* Offer Section */}
      <section className="py-24 bg-card/20 border-y border-white/5" id="audit">
        <div className="container px-4">
          <div className="text-center mb-16">
            <div className="inline-block px-3 py-1 rounded-full bg-accent/10 text-accent font-bold text-[10px] uppercase tracking-widest mb-4">
              Ready to Elevate Your Brand?
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-headline tracking-tight text-white uppercase mb-4">What You'll Get During the Audit</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">Book a free 20-minute audit. No credit card, no long-term contract, no pressure.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto">
            {[
              { title: "Email Health Analysis", desc: "A full review of your deliverability and list hygiene." },
              { title: "Marketing Backend Review", desc: "A deep dive into your current flows and infrastructure." },
              { title: "AOV Optimization Tips", desc: "Actionable ideas to lift average order value fast." },
              { title: "Competitor Analysis", desc: "A clear read on where you stand against similar brands." }
            ].map((item, i) => (
              <Card key={i} className="p-6 bg-card border-white/5 flex gap-5 items-start">
                <div className="w-8 h-8 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">{item.title}</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed font-medium">{item.desc}</p>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" className="h-16 px-10 text-lg font-black rounded-xl shadow-[0_20px_50px_rgba(108,124,240,0.3)] bg-accent text-accent-foreground" asChild>
              <Link href="/#schedule">Book Your Free Audit <ArrowRight className="ml-2 w-5 h-5" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24">
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
                <Link href="/#schedule">Get My Free Growth Audit</Link>
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
