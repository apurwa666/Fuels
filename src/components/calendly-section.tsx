"use client"

import Script from 'next/script';
import { useEffect, useState } from 'react';
import { MotionWrapper } from './motion-wrapper';
import { FADE_IN_UP, STAGGER_CONTAINER } from '@/lib/animations';
import { Card } from './ui/card';
import { Mail, BarChart, TrendingUp, Search } from 'lucide-react';

const auditBenefits = [
  {
    icon: Mail,
    title: 'Email Health Analysis',
    description: 'Comprehensive review of your email deliverability.',
  },
  {
    icon: BarChart,
    title: 'Marketing Backend Review',
    description: 'Deep dive into your marketing infrastructure.',
  },
  {
    icon: TrendingUp,
    title: 'AOV Optimization Tips',
    description: 'Actionable strategies to boost your AOV.',
  },
  {
    icon: Search,
    title: 'Competitor Analysis',
    description: 'Smart insights for competitive edge.',
  },
];

export function CalendlySection() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const calendlyUrl = "https://calendly.com/fuelmails007/meeting";

  return (
    <section className="py-8 sm:py-12 bg-background relative overflow-hidden">
      <div className="mx-auto w-full max-w-[1440px] px-6 md:px-10 lg:px-16">
          <div className="grid lg:grid-cols-[3fr_2fr] gap-12 items-start">
            <MotionWrapper
              variants={STAGGER_CONTAINER}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="flex flex-col gap-8 text-center lg:text-left"
            >
              <MotionWrapper variants={FADE_IN_UP}>
                <h2 className="text-3xl sm:text-4xl font-bold font-headline tracking-tight mx-auto lg:mx-0">Ready to Elevate Your Brand?</h2>
                <p className="mt-4 text-lg text-muted-foreground mx-auto lg:mx-0">
                  Schedule Your Free Audit with Us Today!
                </p>
              </MotionWrapper>

              <MotionWrapper variants={FADE_IN_UP}>
                <h3 className="text-xl font-semibold mb-4">What You'll Get During the Audit:</h3>
                <div className="flex flex-col gap-4 max-w-lg mx-auto lg:mx-0 lg:max-w-none">
                  {auditBenefits.map((item, index) => (
                    <MotionWrapper
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
                      viewport={{ once: true }}
                    >
                      <div className="relative">
                        <Card className="relative flex items-center gap-4 p-4 text-left border-primary/10 bg-secondary/20">
                          <div className="p-3 bg-primary/10 rounded-lg">
                            <item.icon className="h-6 w-6 text-primary" />
                          </div>
                          <div>
                            <h4 className="font-semibold">{item.title}</h4>
                            <p className="text-sm text-muted-foreground">{item.description}</p>
                          </div>
                        </Card>
                      </div>
                    </MotionWrapper>
                  ))}
                </div>
              </MotionWrapper>
            </MotionWrapper>

            <MotionWrapper 
              id="schedule"
              variants={FADE_IN_UP} 
              viewport={{ once: true }}
              className="relative w-full max-w-lg lg:max-w-none mx-auto scroll-mt-20 md:scroll-mt-24"
            >
              <div className="relative">
                <Card className="relative shadow-2xl overflow-hidden bg-background border-primary/10">
                  {isClient && (
                    <div 
                      key={calendlyUrl} 
                      className="calendly-inline-widget w-full" 
                      data-url={calendlyUrl} 
                      style={{ minWidth: '320px', height: '550px' }}
                    ></div>
                  )}
                  <Script 
                    src="https://assets.calendly.com/assets/external/widget.js" 
                    strategy="afterInteractive"
                  />
                </Card>
              </div>
            </MotionWrapper>
        </div>
      </div>
    </section>
  );
}
