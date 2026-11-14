import type { Metadata, Viewport } from 'next';
import { interTight } from '@/fonts';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { PredictiveArcBackground } from '@/components/common/PredictiveArcBackground';
import './globals.css';
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: 'Nexo Linx — Build • Optimize • Outrank.',
  description: 'Nexo Linx — Digital Agency for Next-Generation Products and Services.',
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
