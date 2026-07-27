
"use client"

import React from 'react';
import { emailTemplates } from '@/lib/data';
import { InteractiveTemplateCard } from '@/components/interactive-template-card';

export function AnimatedTemplateDisplay() {
  // Triple the templates to ensure enough coverage for seamless looping
  const duplicatedTemplates = [...emailTemplates, ...emailTemplates, ...emailTemplates];

  return (
    <div className="relative w-full overflow-hidden py-12 pause-on-hover">
      <div className="flex gap-16 animate-marquee w-max">
        {duplicatedTemplates.map((template, index) => (
          <div 
            key={`${template.id}-${index}`} 
            className="w-[260px] sm:w-[300px] h-[400px] sm:h-[500px] flex-shrink-0"
          >
            <InteractiveTemplateCard template={template} />
          </div>
        ))}
      </div>
      
      {/* Edge Fades for a cleaner look */}
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
    </div>
  );
}
