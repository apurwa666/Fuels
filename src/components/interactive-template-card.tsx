
"use client"

import React, { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import type { EmailTemplate } from '@/lib/types';
import { Skeleton } from './ui/skeleton';

interface InteractiveTemplateCardProps {
  template: EmailTemplate;
  priority?: boolean;
}

export function InteractiveTemplateCard({ template, priority = false }: InteractiveTemplateCardProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [scrollAmount, setScrollAmount] = useState(0);

  const calculateScroll = () => {
    if (imgRef.current && containerRef.current) {
      const diff = imgRef.current.offsetHeight - containerRef.current.offsetHeight;
      setScrollAmount(Math.max(0, diff));
    }
  };

  useEffect(() => {
    if (isLoaded) {
      calculateScroll();
    }
    const handleResize = () => calculateScroll();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isLoaded]);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-full overflow-hidden rounded-2xl shadow-xl border bg-card transition-shadow hover:shadow-[0_20px_50px_rgba(0,0,0,0.15)]"
      onMouseEnter={() => {
        setIsHovering(true);
        calculateScroll();
      }}
      onMouseLeave={() => setIsHovering(false)}
    >
      {!isLoaded && (
        <div className="absolute inset-0 z-10 p-4">
          <Skeleton className="w-full h-full" />
        </div>
      )}
      
      <motion.div
        className="w-full h-auto cursor-ns-resize"
        animate={{ y: isHovering ? -scrollAmount : 0 }}
        transition={{ 
          duration: isHovering ? Math.max(4, scrollAmount / 150) : 3,
          ease: isHovering ? "linear" : [0.4, 0, 0.2, 1] 
        }}
      >
        <Image
          ref={imgRef}
          src={template.imageUrl}
          alt={template.name}
          width={600}
          height={2400}
          className="w-full h-auto block"
          onLoadingComplete={() => {
            setIsLoaded(true);
            calculateScroll();
          }}
          data-ai-hint={template.dataAiHint}
          priority={priority}
          unoptimized
        />
      </motion.div>
    </div>
  );
}
