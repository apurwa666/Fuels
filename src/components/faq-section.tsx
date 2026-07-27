"use client"

import { faqs } from '@/lib/data'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { MotionWrapper } from './motion-wrapper'
import { FADE_IN_UP } from '@/lib/animations'
import { motion, type Variants } from 'framer-motion'
import { cn } from '@/lib/utils'

const AnimatedBlob = ({ className, animationVariants }: { className: string, animationVariants: Variants }) => {
    return (
        <motion.div
            className={cn("absolute rounded-full filter blur-3xl opacity-30", className)}
            variants={animationVariants}
            initial="initial"
            animate="animate"
        />
    );
}

export function FaqSection() {
    const blobAnimation1: Variants = {
        initial: { x: '0%', y: '20%', scale: 1 },
        animate: {
          x: ['0%', '70%', '20%', '0%'],
          y: ['20%', '-30%', '80%', '20%'],
          scale: [1, 1.2, 0.9, 1],
          transition: { duration: 40, repeat: Infinity, ease: 'easeInOut' }
        }
    };
    
    const blobAnimation2: Variants = {
        initial: { x: '100%', y: '80%', scale: 1.1 },
        animate: {
            x: ['100%', '30%', '-10%', '100%'],
            y: ['80%', '120%', '10%', '80%'],
            scale: [1.1, 0.8, 1.3, 1.1],
            transition: { duration: 45, repeat: Infinity, ease: 'easeInOut', delay: 5 }
        }
    };

  return (
    <section id="faq" className="py-8 sm:py-12 bg-background relative overflow-hidden">
        <div className="absolute inset-0 z-0">
            <AnimatedBlob className="w-96 h-96 bg-primary/20" animationVariants={blobAnimation1} />
            <AnimatedBlob className="w-80 h-80 bg-accent/20" animationVariants={blobAnimation2} />
        </div>
      <div className="mx-auto w-full max-w-[1440px] px-6 md:px-10 lg:px-16 relative z-10">
        <MotionWrapper variants={FADE_IN_UP} className="text-center mb-8 max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold font-headline tracking-tight">Frequently Asked Questions</h2>
          <p className="mt-4 text-muted-foreground">
            Have questions? We've got answers. If you can't find what you're looking for, feel free to contact us.
          </p>
        </MotionWrapper>
        
        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="w-full bg-background/50 backdrop-blur-sm rounded-lg p-4 sm:p-6 border">
              {faqs.map((faq, index) => (
                <MotionWrapper 
                  key={faq.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true, amount: 0.5 }}
                >
                  <AccordionItem value={faq.id} className={cn(index === faqs.length - 1 && "border-b-0")}>
                    <AccordionTrigger className="text-lg font-semibold text-left hover:no-underline">{faq.question}</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                </MotionWrapper>
              ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
