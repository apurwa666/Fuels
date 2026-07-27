
"use client"

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { teamMembers } from '@/lib/data';
import { cn } from '@/lib/utils';
import { Skeleton } from '@/components/ui/skeleton';

export function TeamCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % teamMembers.length);
    }, 5000); // Change image every 5 seconds
    return () => clearInterval(interval);
  }, []);

  const currentMember = teamMembers[index];

  if (!currentMember) {
    return <Skeleton className="h-[450px] w-full max-w-md lg:max-w-[480px]" />;
  }

  return (
    <div className="relative h-[450px] sm:h-[500px] w-full max-w-md lg:max-w-[480px] overflow-hidden rounded-2xl shadow-2xl mx-auto lg:mr-0 lg:ml-auto">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentMember.name}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <Image
            src={currentMember.imageUrl}
            alt={currentMember.name}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover object-center"
            data-ai-hint={currentMember.dataAiHint || 'professional portrait'}
            priority={index === 0}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          <div className="absolute bottom-0 left-0 p-8">
            <motion.h3 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-2xl font-bold text-white shadow-md font-headline"
            >
              {currentMember.name}
            </motion.h3>
            <motion.p 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-base text-accent font-semibold"
            >
              {currentMember.title}
            </motion.p>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
