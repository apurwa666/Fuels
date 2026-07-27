import type { Metadata } from 'next';
import { ClientRoot } from '@/components/client-root';
import './globals.css';

export const metadata: Metadata = {
  title: 'FuelMails - Fueling Your Marketing Momentum',
  description: 'A SaaS email marketing platform to help businesses grow their campaigns.',
  icons: {
    icon: [
      { url: '/images/logo.png', type: 'image/png' },
      { url: '/images/logo.png', sizes: '32x32', type: 'image/png' },
      { url: '/images/logo.png', sizes: '16x16', type: 'image/png' },
      { url: '/images/logo.png', sizes: '192x192', type: 'image/png' },
    ],
    shortcut: '/images/logo.png',
    apple: [
      { url: '/images/logo.png', sizes: '180x180', type: 'image/png' },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,500;0,700;0,800;1,700;1,800&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
        <link rel="icon" type="image/png" href="/images/logo.png" />
      </head>
      <body className="font-body antialiased overflow-x-hidden">
        <ClientRoot>{children}</ClientRoot>
      </body>
    </html>
  );
}
