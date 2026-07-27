
"use client"

import React, { useEffect } from 'react'
import { HeroSection } from "@/components/hero-section"
import { MetricsTicker } from "@/components/metrics-ticker"
import { StatsSection } from "@/components/stats-section"
import { ServicesScrollSection } from "@/components/services-scroll-section"
import { HowItWorksSection } from "@/components/how-it-works"
import { AboutUsSection } from "@/components/about-us-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { FaqSection } from "@/components/faq-section"
import { FinalCtaSection } from "@/components/final-cta-section"
import { CalendlySection } from "@/components/calendly-section"
import { SectionDivider } from "@/components/section-divider"

export default function Home() {
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash) {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    if (window.location.hash) {
      const timer = setTimeout(handleHashChange, 100);
      return () => clearTimeout(timer);
    }

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <>
      <HeroSection />
      
      <MetricsTicker />

      {/* Primary services ecosystem */}
      <ServicesScrollSection />

      <SectionDivider />

      {/* High-level performance metrics */}
      <StatsSection />

      <SectionDivider />

      {/* The faces and story behind the agency */}
      <AboutUsSection />

      <SectionDivider />

      {/* Step by step collaboration process */}
      <HowItWorksSection />

      <SectionDivider />

      {/* Social proof and results */}
      <TestimonialsSection />

      <SectionDivider />

      {/* Direct booking widget */}
      <CalendlySection />

      <SectionDivider />

      <FaqSection />

      <FinalCtaSection />
    </>
  )
}
