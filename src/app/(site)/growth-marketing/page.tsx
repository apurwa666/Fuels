"use client"

import React from 'react'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { MotionWrapper } from "@/components/motion-wrapper"
import { FADE_IN_UP, STAGGER_CONTAINER } from "@/lib/animations"
import { ArrowRight } from 'lucide-react'
import { growthServices } from '@/lib/data'
import { motion } from 'framer-motion'

const iconDrawingVariants = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: {
      pathLength: { duration: 1.5, ease: "easeInOut" },
      opacity: { duration: 0.5 }
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  }
};

export default function GrowthMarketingPage() {
  return (
    <div className="bg-background">
      {/* Full-Funnel Growth Hero Section */}
      <section className="relative min-h-[60vh] lg:min-h-screen flex flex-col items-center justify-center pt-24 sm:pt-32 pb-8 sm:pb-12 lg:pb-16 overflow-hidden bg-[#0a0a10]">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-[20%] left-[10%] w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-accent/5 rounded-full blur-[80px] sm:blur-[120px] opacity-30" />
          <div className="absolute bottom-[10%] right-[10%] w-[250px] sm:w-[400px] h-[250px] sm:h-[400px] bg-primary/5 rounded-full blur-[60px] sm:blur-[100px] opacity-20" />
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
               style={{ backgroundImage: 'radial-gradient(rgba(129,140,248,0.09) 1.5px, transparent 1.5px)', backgroundSize: '30px 30px' }} 
          />
        </div>

        <div className="container px-4">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            <MotionWrapper
              variants={STAGGER_CONTAINER}
              initial="hidden"
              animate="visible"
              className="flex flex-col items-center lg:items-start text-center lg:text-left"
            >
              <MotionWrapper variants={FADE_IN_UP} className="flex flex-col items-center lg:items-start">
                <div className="inline-flex items-center rounded-full border border-accent/30 px-5 py-2 text-[10px] sm:text-[11px] font-black mb-6 sm:mb-8 bg-accent/10 text-accent uppercase tracking-[0.2em] sm:tracking-[0.25em] shadow-[0_0_20px_rgba(108,124,240,0.2)]">
                  Scale Your Business Efficiently
                </div>
                <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold font-headline tracking-tighter leading-[1.1] sm:leading-[0.95] mb-6 sm:mb-8 text-white text-center lg:text-left">
                  Full-Funnel Growth<br />
                  <span className="text-accent italic drop-shadow-[0_0_25px_rgba(108,124,240,0.8)]">Systems.</span>
                </h1>
                <p className="text-sm sm:text-base md:text-lg text-[#93a0c2] mb-8 sm:mb-10 leading-relaxed max-w-xl mx-auto lg:mx-0 font-medium px-4 sm:px-0 text-center lg:text-left">
                  We build the marketing infrastructure that finds your best customers and scales your revenue with surgical precision. Stop guessing and start growing.
                </p>
                <div className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-4 w-full sm:w-auto">
                  <Button variant="black" size="lg" className="h-14 px-8 sm:px-10 text-base sm:text-lg font-black rounded-xl shadow-[0_20px_50px_rgba(108,124,240,0.3)] hover:shadow-[0_25px_60px_rgba(108,124,240,0.5)] transition-all hover:-translate-y-1 bg-accent text-accent-foreground" asChild>
                    <Link href="/#schedule">Free Growth Audit <ArrowRight className="ml-2 w-5 sm:w-6 h-5 sm:h-6" /></Link>
                  </Button>
                </div>
              </MotionWrapper>
            </MotionWrapper>

            <MotionWrapper variants={FADE_IN_UP} className="relative hidden md:flex items-center justify-center mt-12 lg:mt-0">
              <div className="relative group w-full max-w-[500px] px-4 sm:px-0">
                <motion.div 
                  animate={{ 
                    scale: [1, 1.1, 1],
                    opacity: [0.3, 0.15, 0.3]
                  }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[80%] h-10 bg-black/60 blur-[50px] rounded-full z-0"
                />

                <motion.div 
                  animate={{ y: [0, -15, 0] }}
                  transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                  style={{ transformStyle: 'preserve-3d' }}
                  className="relative z-10 w-full p-6 sm:p-10 rounded-[2rem] sm:rounded-[2.5rem] bg-gradient-to-br from-[#141420]/90 to-[#0c0c14]/90 border border-white/10 backdrop-blur-xl shadow-2xl"
                >
                  <svg viewBox="0 0 480 460" className="relative z-20 w-full h-auto drop-shadow-[0_0_30px_rgba(108,124,240,0.1)]">
                    <defs>
                      <linearGradient id="funnelStroke" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#818cf8" />
                        <stop offset="100%" stopColor="#4c4fc9" />
                      </linearGradient>
                      <linearGradient id="chartLine" x1="0" y1="0" x2="1" y2="0">
                        <stop offset="0%" stopColor="#4c4fc9" />
                        <stop offset="100%" stopColor="#a5b4fc" />
                      </linearGradient>
                      <linearGradient id="chartFill" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#818cf8" stopOpacity="0.35" />
                        <stop offset="100%" stopColor="#818cf8" stopOpacity="0" />
                      </linearGradient>
                      <radialGradient id="particleGlow" cx="50%" cy="50%" r="50%">
                        <stop offset="0%" stopColor="#c7d2fe" />
                        <stop offset="100%" stopColor="#818cf8" />
                      </radialGradient>
                    </defs>

                    <path d="M 40 40 L 440 40 L 270 180 L 210 180 Z"
                          fill="rgba(129,140,248,0.05)" stroke="url(#funnelStroke)" strokeWidth="2" />
                    <line x1="40" y1="40" x2="440" y2="40" stroke="#818cf8" strokeWidth="2" strokeLinecap="round" />
                    <line x1="140" y1="93" x2="340" y2="93" stroke="#818cf8" strokeWidth="1" opacity="0.35" strokeDasharray="4 5" />
                    <line x1="180" y1="137" x2="300" y2="137" stroke="#818cf8" strokeWidth="1" opacity="0.35" strokeDasharray="4 5" />

                    <text x="40" y="26" fill="#93a0c2" fontFamily="var(--font-headline)" fontSize="12" fontWeight="800" letterSpacing="0.5">NEW LEADS</text>
                    <text x="310" y="175" fill="#93a0c2" fontFamily="var(--font-headline)" fontSize="12" fontWeight="800" letterSpacing="0.5">CUSTOMERS</text>

                    <line x1="240" y1="180" x2="240" y2="230" stroke="#4c4fc9" strokeWidth="2" opacity="0.6" />

                    {[0, 0.4, 0.8, 1.2, 1.6].map((delay, i) => (
                      <circle key={i} r="4" fill="url(#particleGlow)">
                        <animateMotion 
                          path={`M ${60 + (i * 80)},45 L 240,178`} 
                          dur="2.2s" 
                          begin={`${delay}s`}
                          repeatCount="indefinite" 
                        />
                        <animate 
                          attributeName="opacity" 
                          values="0;1;1;0" 
                          keyTimes="0;0.15;0.8;1" 
                          dur="2.2s" 
                          begin={`${delay}s`}
                          repeatCount="indefinite" 
                        />
                      </circle>
                    ))}

                    <text x="40" y="238" fill="#93a0c2" fontFamily="var(--font-headline)" fontSize="12" fontWeight="800" letterSpacing="0.5">REVENUE GROWTH</text>

                    <path d="M 40 400 L 40 420 L 440 420 L 440 400"
                          fill="none" stroke="#2a2d45" strokeWidth="1" />

                   {/* Revenue Area */}
                    <path
                      id="growthArea"
                      d="M 40 400 
                        C 110 405, 140 340, 190 330
                        C 240 320, 260 270, 310 250
                        C 360 230, 380 190, 440 160
                        L 440 420 L 40 420 Z"
                      fill="url(#chartFill)"
                    />

                    {/* Animated Revenue Growth Line */}
                  <path
                    id="growthLine"
                    d="M 40 400 
                      C 110 405, 140 340, 190 330
                      C 240 320, 260 270, 310 250
                      C 360 230, 380 190, 440 160"
                    fill="none"
                    stroke="#818cf8"
                    strokeWidth="4"
                    strokeLinecap="round"
                   
                  >
                    <animate
                      attributeName="strokeDashoffset"
                      from="1"
                      to="0"
                      dur="5s"
                      begin="1s"
                      fill="freeze"
                    />
                  </path>

                    {/* Ball */}
                    <circle r="7" fill="#c7d2fe">
                      <animateMotion
                        dur="3s"
                        begin="0s"
                        fill="freeze"
                        repeatCount="1"
                        path="
                          M 40 400 
                          C 110 405, 140 340, 190 330
                          C 240 320, 260 270, 310 250
                          C 360 230, 380 190, 440 160
                        "
                      />
                    </circle>
                  </svg>
                </motion.div>
              </div>
            </MotionWrapper>
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="py-8 sm:py-12 lg:py-16 relative overflow-hidden bg-[#0a0a10]">
        <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
          <div className="absolute inset-0 opacity-[0.05]" 
               style={{ backgroundImage: 'radial-gradient(rgba(129,140,248,0.07) 1.5px, transparent 1.5px)', backgroundSize: '30px 30px' }} 
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
        </div>

        <div className="container px-4">
          <div className="text-center mb-10 sm:mb-12">
            <MotionWrapper variants={FADE_IN_UP} viewport={{ once: true }}>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-headline mb-6 tracking-tight">How We Drive Growth</h2>
              <p className="text-base sm:text-lg text-[#93a0c2] max-w-2xl mx-auto font-medium">
                Our growth marketing covers every stage of the journey, from first touch to long-term loyalty.
              </p>
            </MotionWrapper>
          </div>

          <motion.div 
            variants={STAGGER_CONTAINER}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {growthServices.map((service, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                className="group relative"
              >
                <div className="h-full relative overflow-hidden bg-[#121218] border border-white/10 rounded-[22px] p-8 sm:p-10 transition-all duration-500 hover:-translate-y-2 hover:bg-[#15151d] hover:border-accent/40 hover:shadow-[0_24px_48px_rgba(108,124,240,0.18)]">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-[#1c1c26] text-white flex items-center justify-center mb-8 transition-all duration-500 group-hover:bg-[#6366f1] group-hover:scale-110 group-hover:-rotate-3 group-hover:shadow-[0_0_20px_rgba(108,124,240,0.4)]">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 sm:w-7 sm:h-7">
                      {index === 0 && (
                        <>
                          <motion.circle variants={iconDrawingVariants} cx="12" cy="12" r="9" />
                          <motion.circle variants={iconDrawingVariants} cx="12" cy="12" r="5.2" />
                          <motion.circle variants={iconDrawingVariants} cx="12" cy="12" r="1.4" fill="currentColor" stroke="none" />
                        </>
                      )}
                      {index === 1 && (
                        <>
                          <motion.rect variants={iconDrawingVariants} x="3" y="3" width="8" height="8" rx="2.4" />
                          <motion.rect variants={iconDrawingVariants} x="13" y="13" width="8" height="8" rx="2.4" />
                          <motion.path variants={iconDrawingVariants} d="M9 11 L15 13" />
                        </>
                      )}
                      {index === 2 && (
                        <motion.polygon variants={iconDrawingVariants} points="13 2 4 14 11 14 10 22 20 9 13 9 13 2" />
                      )}
                    </svg>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-extrabold mb-4 tracking-tight text-white">{service.title}</h3>
                  <p className="text-sm sm:text-base leading-relaxed text-[#93a0c2] font-medium">
                    {service.description}
                  </p>

                  <div className="mt-8 h-0.5 w-7 bg-[#6366f1] rounded-full origin-left transition-all duration-500 group-hover:w-11" />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="py-12 sm:py-20 overflow-hidden relative">
        <div className="container px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
               <div className="order-2 md:order-1">
                 <div className="grid gap-6 sm:gap-8">
                    {[
                      { step: 1, title: "Target Account Research", desc: "We find exactly who your best customers are and where they live." },
                      { step: 2, title: "Multi-Channel Outreach", desc: "Automated and manual touchpoints across email, LinkedIn, and more." },
                      { step: 3, title: "Pipeline Acceleration", desc: "We nurture leads until they are ready to close with dedicated SDR support." }
                    ].map((m) => (
                      <div key={m.step} className="flex flex-col sm:flex-row gap-5 sm:gap-6 p-6 sm:p-8 bg-card border border-white/5 rounded-3xl shadow-2xl transition-all hover:border-accent/30 group">
                        <div className="w-10 h-12 sm:w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center text-accent font-black text-lg sm:text-xl flex-shrink-0 group-hover:bg-accent group-hover:text-accent-foreground transition-all">
                          {m.step}
                        </div>
                        <div>
                          <h4 className="font-extrabold text-lg sm:text-xl mb-2 tracking-tight">{m.title}</h4>
                          <p className="text-sm sm:text-base text-muted-foreground/80 font-medium">{m.desc}</p>
                        </div>
                      </div>
                    ))}
                 </div>
               </div>
              <MotionWrapper variants={FADE_IN_UP} viewport={{ once: true }} className="order-1 md:order-2">
                <div className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-[10px] sm:text-xs font-black uppercase tracking-widest mb-6 border border-accent/20">Systematic Execution</div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-headline mb-6 sm:mb-8 text-white tracking-tight leading-[1.1]">
                  A systematic <br /><span className="text-accent italic drop-shadow-[0_0_25px_rgba(108,124,240,0.8)]">approach to scale.</span>
                </h2>
                <p className="text-base sm:text-lg text-muted-foreground mb-8 sm:mb-10 font-medium leading-relaxed">
                  Growth shouldn't be a gamble. We use a data-driven experimentation cadence to find your most efficient customer acquisition levers.
                </p>
                <Link href="/#schedule" className="inline-flex items-center gap-2 text-accent font-black text-base sm:text-lg tracking-tight group">
                  Learn about our process
                  <ArrowRight className="w-5 sm:w-6 h-5 sm:h-6 group-hover:translate-x-1 transition-transform" />
                </Link>
              </MotionWrapper>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-24 bg-primary text-primary-foreground text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(108,124,240,0.2)_0%,transparent_70%)] pointer-events-none" />
        <div className="container px-4 relative z-10">
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold font-headline mb-8 sm:mb-10 tracking-tight leading-[1.2] sm:leading-[1] max-w-4xl mx-auto uppercase">Ready to Build Your Success Story?</h2>
          <p className="text-base sm:text-xl opacity-90 mb-10 sm:mb-14 max-w-2xl mx-auto font-medium leading-relaxed">
            Stop guessing and start growing. Schedule your free 30-minute growth audit today.
          </p>
          <Button size="lg" variant="secondary" className="h-14 sm:h-16 px-10 sm:px-12 text-lg sm:text-xl font-black rounded-xl shadow-[0_20px_50px_rgba(108,124,240,0.3)] transition-all hover:scale-105" asChild>
            <Link href="/#schedule">Book Your Free Growth Audit</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
