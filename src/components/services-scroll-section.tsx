
"use client";

import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { services } from '@/lib/data';
import { MotionWrapper } from './motion-wrapper';
import { FADE_IN_UP, STAGGER_CONTAINER } from '@/lib/animations';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface ServiceCardProps {
  service: typeof services[0];
  index: number;
}

function ServiceCard({ service, index }: ServiceCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  const springConfig = { damping: 20, stiffness: 150 };
  const mouseXSpring = useSpring(mouseX, springConfig);
  const mouseYSpring = useSpring(mouseY, springConfig);

  const rotateX = useTransform(mouseYSpring, [0, 1], [10, -10]);
  const rotateY = useTransform(mouseXSpring, [0, 1], [-10, 10]);

  const spotlightX = useTransform(mouseXSpring, [0, 1], ["0%", "100%"]);
  const spotlightY = useTransform(mouseYSpring, [0, 1], ["0%", "100%"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0.5);
    mouseY.set(0.5);
  };

  return (
    <Link 
      href={service.href} 
      className="group block relative h-full outline-none no-underline cursor-pointer"
    >
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        variants={FADE_IN_UP}
        style={{
          perspective: "1200px",
        }}
        className="relative h-full"
      >
        <div className="absolute -inset-[1.5px] rounded-[22px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 overflow-hidden pointer-events-none">
          <div className="absolute inset-[-100%] bg-[conic-gradient(from_var(--tw-gradient-from),#6c7cf0,#a5b4fc,#ffffff,#6c7cf0)] animate-[spin_4s_linear_infinite]" />
        </div>

        <motion.div
          style={{
            rotateX,
            rotateY,
            transformStyle: "preserve-3d",
          }}
          className="relative h-full bg-background border border-border/70 rounded-[20px] p-8 sm:p-10 flex flex-col shadow-sm transition-all duration-500 group-hover:shadow-[0_24px_48px_rgba(108,124,240,0.14)]"
        >
          <motion.div
            className="absolute inset-0 rounded-[20px] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{
              background: `radial-gradient(320px circle at var(--spotlight-x) var(--spotlight-y), rgba(108, 124, 240, 0.12), transparent 70%)`,
              // @ts-ignore
              "--spotlight-x": spotlightX,
              // @ts-ignore
              "--spotlight-y": spotlightY,
            }}
          />

          <div className="relative z-10 flex flex-col h-full">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#eef0ff] to-[#e2e5ff] flex items-center justify-center text-accent mb-8 animate-[floatY_3.6s_ease-in-out_infinite] group-hover:scale-110 group-hover:-rotate-6 transition-transform duration-500">
              <service.icon className="w-7 h-7" />
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold mb-4 tracking-tight">
              <span className="relative inline-block pb-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-accent after:transition-[width] after:duration-500 group-hover:after:w-full">
                {service.title}
              </span>
            </h3>

            <p className="text-base sm:text-lg leading-relaxed text-muted-foreground mb-8 font-medium">
              {service.description}
            </p>

            <div className="relative pl-6 mb-10 italic text-base sm:text-lg text-slate-500 font-medium">
              <div className="absolute left-0 top-1 bottom-1 w-1 bg-[#c7c9f5] rounded-full scale-y-0 origin-top group-hover:scale-y-100 group-hover:bg-accent transition-all duration-700" />
              "{service.teaser}"
            </div>

            <div className="mt-auto flex items-center gap-2 text-accent font-bold text-sm tracking-wide opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <span>View details</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </motion.div>
      </motion.div>
    </Link>
  );
}

export function ServicesScrollSection() {
  return (
    <section id="services" className="py-12 sm:py-20 relative overflow-hidden">
      <div className="absolute inset-0 -z-10 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(hsl(var(--accent)) 1.5px, transparent 1.5px)', backgroundSize: '32px 32px' }} 
      />

      <div className="container mx-auto mb-12 sm:mb-16">
        <MotionWrapper variants={FADE_IN_UP} viewport={{ once: true }} className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 text-accent font-bold text-xs uppercase tracking-widest mb-6 border border-accent/20">
            Our Ecosystem
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-headline tracking-tight uppercase mb-8">
            Expertise Driven <br />by <span className="text-accent italic">Results.</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed font-medium">
            FuelMails is both a powerful marketing infrastructure and your hands-on growth partner. We build the systems that drive real business growth.
          </p>
        </MotionWrapper>
      </div>

      <div className="container mx-auto max-w-6xl">
        <MotionWrapper
          variants={STAGGER_CONTAINER}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-14 mx-auto"
        >
          {services.map((service, index) => (
            <ServiceCard 
              key={service.title} 
              service={service} 
              index={index} 
            />
          ))}
        </MotionWrapper>
      </div>
    </section>
  );
}
