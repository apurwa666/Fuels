
"use client"

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, CheckCircle2, XCircle, ArrowRight, Timer, Users, Target, Zap, BarChart3 } from 'lucide-react';
import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import { MotionWrapper } from '@/components/motion-wrapper';
import { FADE_IN_UP, STAGGER_CONTAINER } from '@/lib/animations';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { cn } from '@/lib/utils';

export default function B2BVSLPage() {
  const [isPlaying, setIsPlaying] = useState(false);

  const reelTestimonials = [
    { 
      name: "Sarah Johnson", 
      title: "CMO, TechScale B2B", 
      thumbnail: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=600&auto=format&fit=crop",
      duration: "0:45"
    },
    { 
      name: "David Chen", 
      title: "Founder, Enterprise SaaS", 
      thumbnail: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop",
      duration: "1:12"
    },
    { 
      name: "Mark Thompson", 
      title: "Growth Lead, Global Fintech", 
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
                For B2B Founders & Revenue Leaders
              </div>
              <h1 className="font-headline font-extrabold leading-[1.1] text-white mb-6 text-[clamp(1.75rem,5vw,3.5rem)] tracking-tight max-w-4xl mx-auto">
                The 27-Minute Breakdown: How We Turn Cold Pipeline Into <span className="text-accent italic drop-shadow-[0_0_25px_rgba(108,124,240,0.6)]">$500K+ in Closed Revenue</span>
              </h1>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-12">
                A walkthrough of the exact lifecycle and outbound system we run for B2B teams — plus the 3 numbers we check before touching a single campaign.
              </p>
            </MotionWrapper>

            {/* Video Player Area */}
            <MotionWrapper variants={FADE_IN_UP} className="relative max-w-4xl mx-auto mb-12 group">
              <div className="absolute -inset-4 rounded-[2rem] p-[2px] opacity-70 pointer-events-none overflow-hidden">
                <motion.div 
                  initial={{ rotate: 0 }}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
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
                    <div className="absolute top-6 left-6 px-3 py-1.5 bg-black/60 backdrop-blur-md rounded-lg border border-white/10 text-[10px] sm:text-xs font-mono font-bold tracking-wider">
                      Anish Pantha, Co-Founder
                    </div>
                    <div className="absolute bottom-6 right-6 px-3 py-1.5 bg-black/60 backdrop-blur-md rounded-lg border border-white/10 text-[10px] sm:text-xs font-mono font-bold tracking-wider">
                      ▶ 27:14
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
                <Link href="#audit">Book Your Pipeline Audit <ArrowRight className="ml-2 w-5 h-5" /></Link>
              </Button>
              <p className="mt-6 text-sm text-muted-foreground font-medium">
                No pitch deck. No hard sell. <span className="text-white font-bold">Just the audit.</span>
              </p>
            </MotionWrapper>

            <div className="mt-20">
              <p className="text-[10px] font-black uppercase tracking-[0.3em] text-muted-foreground mb-8">Systems currently running inside teams at</p>
              <div className="flex flex-wrap justify-center gap-x-12 gap-y-8 opacity-40 grayscale contrast-125">
                {["Northbeam", "Ledgerly", "Arcstone", "Havenly B2B", "Fintra"].map((brand) => (
                  <span key={brand} className="font-headline font-bold text-xl text-white">{brand}</span>
                ))}
              </div>
            </div>
          </MotionWrapper>
        </div>
      </section>

      {/* Proof Strip */}
      <section className="py-20 bg-card/30 border-y border-white/5">
        <div className="container px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 max-w-5xl mx-auto">
            {[
              { val: "+34%", lab: "Pipeline Velocity" },
              { val: "3.2x", lab: "Meetings Booked" },
              { val: "$18M+", lab: "Attributed Pipeline" },
              { val: "60+", lab: "B2B Teams Scaled" }
            ].map((item, i) => (
              <div key={i} className={cn("text-center px-4", i !== 0 && "lg:border-l lg:border-white/10")}>
                <p className="text-3xl sm:text-4xl font-black text-accent mb-2 font-headline">{item.val}</p>
                <p className="text-[10px] sm:text-xs font-black uppercase tracking-widest text-muted-foreground">{item.lab}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Qualifier Section */}
      <section className="py-24">
        <div className="container px-4">
          <div className="text-center mb-16">
            <div className="inline-block px-3 py-1 rounded-full bg-accent/10 text-accent font-bold text-[10px] uppercase tracking-widest mb-4">
              Is This For You
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-headline tracking-tight text-white uppercase mb-6">Built for revenue teams. <br className="hidden sm:block" />Not for every business.</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">This system was designed around a specific kind of sales motion. Here's how to know if it fits before you book time.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-px bg-white/5 rounded-3xl overflow-hidden border border-white/10 max-w-5xl mx-auto shadow-2xl">
            <div className="bg-card p-10 sm:p-14">
              <h3 className="flex items-center gap-3 text-emerald-500 font-bold mb-8">
                <CheckCircle2 className="w-5 h-5" /> This is built for you if
              </h3>
              <ul className="space-y-6">
                {[
                  "You sell B2B, with a sales cycle longer than a single touch",
                  "You already have pipeline, but it's inconsistent month to month",
                  "You have a CRM in place and someone who owns follow-up",
                  "You're looking to scale outbound + lifecycle without hiring in-house"
                ].map((text, i) => (
                  <li key={i} className="flex gap-4 text-sm text-muted-foreground font-medium leading-relaxed">
                    <span className="text-accent font-mono">+</span> {text}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-card/50 p-10 sm:p-14">
              <h3 className="flex items-center gap-3 text-muted-foreground font-bold mb-8">
                <XCircle className="w-5 h-5" /> This isn't for you if
              </h3>
              <ul className="space-y-6">
                {[
                  "You're pre-revenue with no defined ICP yet",
                  "You sell direct-to-consumer or run a single-purchase storefront",
                  "You're looking for a one-off campaign, not an ongoing system",
                  "You don't have anyone who can take a qualified call"
                ].map((text, i) => (
                  <li key={i} className="flex gap-4 text-sm text-muted-foreground/60 font-medium leading-relaxed">
                    <span className="text-muted-foreground/40 font-mono">–</span> {text}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Chapters Section */}
      <section className="py-24 bg-card/10 border-y border-white/5">
        <div className="container px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-start max-w-5xl mx-auto">
            <div>
              <div className="inline-block px-3 py-1 rounded-full bg-accent/10 text-accent font-bold text-[10px] uppercase tracking-widest mb-6">
                Inside The Walkthrough
              </div>
              <h2 className="text-3xl font-extrabold font-headline text-white mb-8 leading-tight">
                Skimming instead of watching? <br />Here's the map.
              </h2>
              <p className="text-muted-foreground mb-12">Every claim in the video is timestamped, so you can jump straight to what matters to you.</p>
            </div>
            <div className="space-y-8 relative">
               <div className="absolute left-[45px] top-4 bottom-4 w-px bg-white/5 hidden sm:block" />
               {[
                 { time: "00:41", title: "The 3 numbers we pull first", desc: "The exact diagnostic we run on a prospect's CRM and email infrastructure before recommending anything." },
                 { time: "06:15", title: "Why 'more leads' is the wrong fix", desc: "What we found across 60+ B2B accounts when we audited pipeline drop-off instead of top volume." },
                 { time: "13:02", title: "The $210K Recovery Sequence", desc: "A walkthrough of the actual sequence, timing, and triggers — shown on screen, not just described." },
                 { time: "19:48", title: "The Week One Requirement", desc: "Access, assets, and approvals — set expectations before you ever get on a call with us." },
                 { time: "24:30", title: "Accountability Dashboards", desc: "The exact dashboard your team will see, and the 4 metrics we're held accountable to." }
               ].map((chapter, i) => (
                 <div key={i} className="flex gap-8 relative group">
                    <div className="w-24 shrink-0 font-mono text-accent font-black text-sm bg-card border border-white/10 rounded-lg h-10 flex items-center justify-center group-hover:bg-accent group-hover:text-black transition-colors">
                      {chapter.time}
                    </div>
                    <div>
                      <h4 className="text-white font-bold mb-2 group-hover:text-accent transition-colors">{chapter.title}</h4>
                      <p className="text-xs text-muted-foreground leading-relaxed font-medium">{chapter.desc}</p>
                    </div>
                 </div>
               ))}
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-24">
        <div className="container px-4">
          <div className="text-center mb-16">
            <div className="inline-block px-3 py-1 rounded-full bg-accent/10 text-accent font-bold text-[10px] uppercase tracking-widest mb-4">
              Proof, Not Praise
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-headline tracking-tight text-white uppercase">What the system did for teams like yours</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              { 
                tag: "B2B SaaS — Series A", 
                val: "+41% SQLs", 
                desc: "Rebuilt lifecycle email around product usage triggers instead of time-based drips, cutting time-to-demo by nearly a third.",
                foot: "90 days · lifecycle + outbound"
              },
              { 
                tag: "Professional Services Firm", 
                val: "$1.2M", 
                desc: "Pipeline re-engaged from a dormant contact list of 14,000 accounts that hadn't been emailed in over a year.",
                foot: "120 days · list reactivation"
              },
              { 
                tag: "Fintech — Series B", 
                val: "3.4x", 
                desc: "Meeting-booked rate on outbound after rebuilding sequencing around a tighter, better-qualified ICP.",
                foot: "60 days · outbound system"
              }
            ].map((item, i) => (
              <Card key={i} className="p-10 bg-card/50 border-white/5 flex flex-col gap-6 hover:border-accent/30 transition-all group">
                <span className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">{item.tag}</span>
                <p className="text-4xl font-black text-accent font-headline">{item.val}</p>
                <p className="text-sm text-muted-foreground leading-relaxed flex-grow font-medium">{item.desc}</p>
                <div className="pt-6 border-t border-white/5 text-[10px] font-bold text-muted-foreground uppercase tracking-widest">
                  {item.foot}
                </div>
              </Card>
            ))}
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
                <div className="absolute top-4 right-4 px-2 py-1 bg-black/60 backdrop-blur-md rounded-md border border-white/10 text-[10px] font-mono font-bold">
                  {reel.duration}
                </div>
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
          <Card className="max-w-4xl mx-auto bg-card p-10 sm:p-14 border-white/5 relative overflow-hidden">
            <div className="relative z-10 flex flex-col md:flex-row gap-12 items-start">
              <div className="w-40 h-40 rounded-2xl overflow-hidden shrink-0 shadow-2xl bg-accent/20 flex items-center justify-center text-accent font-black text-4xl font-headline">
                AP
              </div>
              <div>
                <h3 className="text-2xl font-black text-white mb-2 font-headline tracking-tight">Anish Pantha</h3>
                <span className="text-accent font-mono text-xs font-bold tracking-widest block mb-6 uppercase">Co-Founder, FuelMails</span>
                <p className="text-base text-muted-foreground leading-relaxed font-medium">
                  Anish leads the growth and lifecycle strategy behind FuelMails' B2B accounts, working directly with founders and revenue leaders to rebuild pipeline systems around actual sales-cycle data rather than generic best practices. He's on every strategy call personally before a single sequence is built.
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
              Before You Book
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-headline tracking-tight text-white uppercase">Common Questions from B2B Teams</h2>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              {[
                { q: "How long is the contract?", a: "Month to month after the first 90-day build period. We ask for 90 days because lifecycle and outbound systems need a full sales cycle to show accurate data — not because we lock you in." },
                { q: "Does this replace our SDR team?", a: "No. We build and run the systems that feed your sales team qualified conversations. Your reps still take the calls and close the deals." },
                { q: "What CRMs do you work with?", a: "HubSpot, Salesforce, and most major CRMs with an open API. We integrate with what you already have — we don't ask you to migrate." },
                { q: "How is this different from your DTC service?", a: "B2B lifecycle is built around sales-cycle length, deal stage, and account-level signals — not cart behavior or AOV. Different team, different sequences, different reporting." }
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
      <section className="py-24 pb-32" id="cta">
        <div className="container px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="flex justify-center mb-12">
               <svg width="240" height="140" viewBox="0 0 200 120" className="drop-shadow-[0_0_30px_rgba(108,124,240,0.2)]">
                  <path d="M20 100 A80 80 0 0 1 180 100" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="12" strokeLinecap="round"/>
                  <motion.path 
                    d="M20 100 A80 80 0 0 1 140 30" 
                    fill="none" 
                    stroke="hsl(var(--accent))" 
                    strokeWidth="12" 
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    transition={{ duration: 2, ease: "easeOut" }}
                    viewport={{ once: true }}
                  />
                  <motion.line 
                    x1="100" y1="100" x2="150" y2="45" 
                    stroke="white" 
                    strokeWidth="3" 
                    strokeLinecap="round"
                    initial={{ rotate: -120 }}
                    whileInView={{ rotate: 0 }}
                    style={{ transformOrigin: "100px 100px" }}
                    transition={{ duration: 2, ease: "easeOut" }}
                    viewport={{ once: true }}
                  />
                  <circle cx="100" cy="100" r="6" fill="white"/>
                  <text x="100" y="118" textAnchor="middle" fill="rgba(255,255,255,0.4)" fontFamily="var(--font-mono)" fontSize="9" fontWeight="bold" letterSpacing="1">PIPELINE VELOCITY</text>
                </svg>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold font-headline tracking-tight text-white uppercase mb-6 leading-tight">
              See if your pipeline qualifies <br />for the same system.
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-12 font-medium">
              15-minute audit. We'll tell you plainly if this fits your sales motion — and if it doesn't, we'll say so.
            </p>
            
            <Button size="lg" className="h-16 px-12 text-xl font-black rounded-xl shadow-[0_20px_50px_rgba(108,124,240,0.3)] bg-accent text-accent-foreground" asChild>
              <Link href="/#schedule">Book Your Pipeline Audit <ArrowRight className="ml-2 w-6 h-6" /></Link>
            </Button>
            
            <div className="mt-8 flex items-center justify-center gap-2 font-mono text-[10px] sm:text-xs font-black text-accent tracking-widest uppercase">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              Limited to 6 new B2B accounts per quarter
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
