import React from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

interface LogoIconProps {
  className?: string;
  imageUrl?: string;
}

export const LogoIcon = ({ className, imageUrl = '/images/logo.png' }: LogoIconProps) => {
    return (
        <div className={cn("relative w-full h-full", className)}>
            <Image
                src={imageUrl}
                alt="FuelMails Logo"
                fill
                sizes="(max-width: 768px) 10vw, 5vw"
                className="object-contain"
                priority
            />
        </div>
    );
};
