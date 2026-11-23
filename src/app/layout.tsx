import type { Metadata, Viewport } from 'next';
import './globals.css';
import { portfolioData } from '@/data/portfolio';

export const viewport: Viewport = {
  themeColor: '#111315',
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://ayush-rokad.vercel.app'),
  title: portfolioData.meta.title,
  description: portfolioData.meta.description,
  authors: [{ name: portfolioData.meta.author }],
  alternates: {
    canonical: 'https://ayush-rokad.vercel.app/',
  },
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
  openGraph: {
    title: portfolioData.meta.title,
    description: portfolioData.meta.description,
    url: 'https://ayush-rokad.vercel.app/',
    siteName: 'Ayush Rokad',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Ayush Rokad | UI/UX & Product Designer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: portfolioData.meta.title,
    description: portfolioData.meta.description,
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Ayush Rokad',
  jobTitle: 'UI/UX & Product Designer',
  url: 'https://ayush-rokad.vercel.app/',
  image: 'https://ayush-rokad.vercel.app/og-image.png',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Surat',
    addressRegion: 'Gujarat',
    addressCountry: 'India',
  },
  sameAs: ['https://www.linkedin.com/in/ayushrokad/'],
  knowsAbout: [
    'UI/UX Design',
    'Product Design',
    'Mobile App Design',
    'Design Systems',
    'Figma',
    'Prototyping',
    'E-commerce Experience Design',
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <link rel="canonical" href="https://ayush-rokad.vercel.app/" />
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-[#111315] text-[#F1F0EC] antialiased selection:bg-[#AFA4FF]/30 selection:text-white">
        {children}
      </body>
    </html>
  );
}
