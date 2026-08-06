
"use client"

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { MotionWrapper } from "@/components/motion-wrapper";
import { STAGGER_CONTAINER, FADE_IN_UP } from "@/lib/animations";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function HeroSection() {
    return (
        <section className="relative min-h-0 flex flex-col justify-center pt-24 pb-4 overflow-hidden bg-background">
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
                            <Button variant="black" size="lg" className="h-14 px-10 text-base font-black rounded-xl shadow-[0_1px_50px_rgba(108,124,240,0.3)] hover:shadow-[0_25px_60px_rgba(108,124,240,0.5)] transition-all hover:-translate-y-1 bg-accent text-accent-foreground" asChild>
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

                    {/* Right Visual (The Engine SVG) */}
                    <MotionWrapper
                        variants={FADE_IN_UP}
                        className="relative hidden lg:flex items-center justify-center lg:justify-end mt-4 lg:mt-0 lg:translate-x-[162px] -translate-y-1w"
                    >
                        <svg className="w-full max-w-[620px] h-auto overflow-visible" viewBox="-70 10 600 520" xmlns="http://www.w3.org/2000/svg">
                            <defs>
                                <radialGradient id="coreGradient" cx="50%" cy="50%" r="50%">
                                    <stop offset="0%" stopColor="hsl(231, 82%, 78%)" stopOpacity="0.9" />
                                    <stop offset="55%" stopColor="hsl(var(--accent))" stopOpacity="0.5" />
                                    <stop offset="100%" stopColor="hsl(var(--accent))" stopOpacity="0" />
                                </radialGradient>
                                <linearGradient id="chartFade" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="0%" stopColor="hsl(var(--accent))" stopOpacity="0.35" />
                                    <stop offset="100%" stopColor="hsl(var(--accent))" stopOpacity="0" />
                                </linearGradient>
                            </defs>
                            
                            {/* Flow path dots */}
                            <path id="flowpath" d="M300,270 C 300,360 460,380 500,460" fill="none" stroke="hsla(var(--accent),0.25)" strokeWidth="1.5" strokeDasharray="4 6" />
                            <circle r="3.5" fill="hsl(231, 82%, 78%)">
                                <animateMotion dur="3.2s" repeatCount="indefinite" begin="0s">
                                    <mpath href="#flowpath" />
                                </animateMotion>
                            </circle>
                            <circle r="3.5" fill="hsl(231, 82%, 78%)">
                                <animateMotion dur="3.2s" repeatCount="indefinite" begin="1.1s">
                                    <mpath href="#flowpath" />
                                </animateMotion>
                            </circle>
                            <circle r="3.5" fill="hsl(231, 82%, 78%)">
                                <animateMotion dur="3.2s" repeatCount="indefinite" begin="2.2s">
                                    <mpath href="#flowpath" />
                                </animateMotion>
                            </circle>

                            {/* Orbit rings */}
                            <circle cx="300" cy="220" r="130" fill="none" stroke="rgba(255,255,255,0.06)" />
                            <circle cx="300" cy="220" r="80" fill="none" stroke="rgba(255,255,255,0.06)" />

                            {/* Core */}
                            <motion.circle 
                                cx="300" cy="220" r="95" fill="url(#coreGradient)"
                                animate={{ r: [90, 98, 90] }}
                                transition={{ duration: 4, repeat: Infinity }}
                            />
                            <circle cx="300" cy="220" r="34" fill="hsl(var(--card))" stroke="hsla(var(--accent),0.5)" strokeWidth="1.5" />
                            <text x="300" y="215" textAnchor="middle" fontFamily="var(--font-headline)" fontWeight="800" fontSize="13" fill="hsl(var(--foreground))">FUEL</text>
                            <text x="300" y="230" textAnchor="middle" fontFamily="var(--font-headline)" fontWeight="800" fontSize="13" fill="hsl(var(--accent))" fontStyle="italic">MAILS</text>

                            {/* Orbiting icon system */}
                            <g>
                                <animateTransform
                                    attributeName="transform"
                                    type="rotate"
                                    from="0 300 220"
                                    to="360 300 220"
                                    dur="34s"
                                    repeatCount="indefinite"
                            />
                                {/* Top: Email */}
                                <g transform="translate(300,90)">
                                    <g>
                                        <animateTransform
                                            attributeName="transform"
                                            type="rotate"
                                            from="0 0 0"
                                            to="-360 0 0"
                                            dur="34s"
                                            repeatCount="indefinite"
                                    />
                                        <circle r="26" fill="hsl(var(--surface, var(--card)))" stroke="rgba(255,255,255,0.12)" />
                                        <path d="M-11,-7 h22 v14 h-22 Z M-11,-7 l11,9 l11,-9" stroke="hsl(var(--foreground))" strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                                    </g>
                                </g>

                                {/* Right: Chart */}
                                <g transform="translate(430,220)">
                                    <g>
                                        <animateTransform
                                            attributeName="transform"
                                            type="rotate"
                                            from="0 0 0"
                                            to="-360 0 0"
                                            dur="34s"
                                            repeatCount="indefinite"
                                    />
                                        <circle r="26" fill="hsl(var(--surface, var(--card)))" stroke="rgba(255,255,255,0.12)" />
                                        <path d="M-10,9 v-6 M-3,9 v-12 M4,9 v-4 M11,9 v-16 M-12,9 h24" stroke="hsl(var(--foreground))" strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                                    </g>   
                                </g>

                                {/* Bottom: Cart */}
                                <g transform="translate(300,350)">
                                    <g>
                                        <animateTransform
                                            attributeName="transform"
                                            type="rotate"
                                            from="0 0 0"
                                            to="-360 0 0"
                                            dur="34s"
                                            repeatCount="indefinite"
                                    />
                                        <circle r="26" fill="hsl(var(--surface, var(--card)))" stroke="rgba(255,255,255,0.12)" />
                                        <path d="M-11,-6 h4 l3,14 h11 l3,-10 h-15 M-3,11 a1.4,1.4 0 1 0 0.1,0 M9,11 a1.4,1.4 0 1 0 0.1,0" stroke="hsl(var(--foreground))" strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                                    </g>  
                                </g>

                                {/* Left: Target */}
                                <g transform="translate(170,220)">
                                    <g>
                                        <animateTransform
                                            attributeName="transform"
                                            type="rotate"
                                            from="0 0 0"
                                            to="-360 0 0"
                                            dur="34s"
                                            repeatCount="indefinite"
                                    />
                                        <circle r="26" fill="hsl(var(--surface, var(--card)))" stroke="rgba(255,255,255,0.12)" />
                                        <circle r="11" stroke="hsl(var(--foreground))" strokeWidth="1.6" fill="none" />
                                        <circle r="5" stroke="hsl(var(--foreground))" strokeWidth="1.6" fill="none" />
                                        <circle r="1.4" fill="hsl(var(--foreground))" />
                                    </g>   
                                </g>
                            
                            </g>
                            {/* Rising revenue chart */}
                            <path d="M370,470 L400,440 L430,450 L460,410 L490,420 L520,380 L520,500 L370,500 Z" fill="url(#chartFade)" />
                            <polyline points="370,470 400,440 430,450 460,410 490,420 520,380" fill="none" stroke="hsl(var(--accent))" strokeWidth="2.5" strokeLinecap="round" />

                            {/* Floating badge */}
                            <motion.g 
                                className="animate-float-y"
                                animate={{ y: [0, -8, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            >
                                <rect x="440" y="330" width="118" height="42" rx="21" fill="hsl(var(--card))" stroke="hsla(var(--accent),0.4)" />
                                <text x="499" y="356" textAnchor="middle" fontFamily="var(--font-headline)" fontWeight="800" fontSize="15" fill="hsl(var(--foreground))">+20&ndash;40%</text>
                            </motion.g>
                        </svg>
                    </MotionWrapper>
                </div>
            </div>
        </section>
    );
}