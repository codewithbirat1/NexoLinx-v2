import type { Metadata, Viewport } from 'next';
import { interTight } from '@/fonts';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { PredictiveArcBackground } from '@/components/common/PredictiveArcBackground';
import './globals.css';
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: 'Nexo Linx | Leading IT Company in Butwal & Tilottama — Your Tech Solution',
  description:
    'Nexo Linx is a trusted IT company in Butwal providing Web Development, Custom Software Solutions, Mobile App Development, UI/UX Design, and Digital Marketing.',
  keywords: [
    'Leading IT Company Butwal',
    'Leading IT Company Tilottama',
    'Your Tech Solution',
    'Software Development Company Butwal',
    'Web Development Tilottama',
    'Mobile App Development Butwal',
    'UI/UX Design Services',
    'Digital Marketing Tilottama',
    'Custom Software Solutions',
    'Technology Solutions Butwal',
  ],
  authors: [{ name: 'Nexo Linx', url: 'https://www.nexolinx.com' }],
  creator: 'Nexo Linx',
  publisher: 'Nexo Linx',
  openGraph: {
    title: 'Nexo Linx | Leading IT Company in Butwal',
    description:
      'Top software development company offering web, mobile apps, UI/UX design & digital marketing solutions in Butwal and Tilottama.',
    url: 'https://www.nexolinx.com',
    siteName: 'Nexo Linx',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@nexolinx',
    creator: '@nexolinx',
    title: 'Nexo Linx | Leading IT Company in Butwal',
    description:
      'Top software development company in Butwal and Tilottama. Web, mobile apps, UI/UX design & digital marketing solutions.',
  },
  icons: {
    icon: '/brand/nexolinx-mark.png',
  },
};

export const viewport: Viewport = {
  themeColor: '#1374DF',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("font-sans", interTight.variable)}>
      <body className="min-h-screen bg-black text-white antialiased font-sans selection:bg-[#1374DF] selection:text-white relative overflow-x-clip">
        <Header />
        <PredictiveArcBackground />
        <div className="relative z-10 pt-16 sm:pt-20 lg:pt-[88px]">
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
