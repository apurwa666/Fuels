import React from 'react';

/**
 * A subtle, atmospheric divider to create seamless transitions between sections.
 */
export function SectionDivider() {
  return (
    <div className="relative w-full h-6 sm:h-8 pointer-events-none">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent opacity-30" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-border to-transparent opacity-20" />
    </div>
  );
}
