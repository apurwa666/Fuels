

'use client';

import { useEffect } from 'react';
import { notFound, useRouter } from 'next/navigation';

export default function NotFoundCatchAll() {
  const router = useRouter();
  
  // This disables Next.js's automatic scroll restoration.
  useEffect(() => {
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }
  }, []);
  
  useEffect(() => {
    notFound();
  }, [router]);

  return null;
}
