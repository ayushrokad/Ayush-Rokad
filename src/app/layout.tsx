import type { Metadata, Viewport } from 'next';
import './globals.css';
import { portfolioData } from '@/data/portfolio';

export const viewport: Viewport = {
  themeColor: '#111315',
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  title: portfolioData.meta.title,
  description: portfolioData.meta.description,
  keywords: portfolioData.meta.keywords,
  authors: [{ name: portfolioData.meta.author }],
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
  openGraph: {
    title: portfolioData.meta.title,
    description: portfolioData.meta.description,
    url: portfolioData.meta.siteUrl,
    siteName: 'Ayush Rokad Portfolio',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: portfolioData.meta.title,
    description: portfolioData.meta.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400;1,500;1,600&family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[#111315] text-[#F1F0EC] antialiased selection:bg-[#AFA4FF]/30 selection:text-white">
        {children}
      </body>
    </html>
  );
}
