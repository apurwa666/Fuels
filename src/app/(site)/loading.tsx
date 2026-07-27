import React from 'react';

export default function Loading() {
  return (
    <div className="fixed top-0 left-0 w-full h-1 z-[100] pointer-events-none">
      <div className="h-full bg-primary animate-progress-loading shadow-[0_0_10px_hsl(var(--primary))]" />
    </div>
  );
}
