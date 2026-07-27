"use client";

import React from 'react';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from "@/components/ui/toaster";

export function ClientRoot({ children }: { children: React.ReactNode }) {
    return (
        <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            forcedTheme="dark"
            enableSystem={false}
            disableTransitionOnChange
        >
            <div className="block">
                {children}
            </div>
            <Toaster />
        </ThemeProvider>
    );
}
