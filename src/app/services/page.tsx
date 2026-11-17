import type { Metadata } from 'next';
import {
  ServicesHero,
  ServicesCatalog,
  ServicesApproach,
  ServicesWhy,
  ServicesCTA,
} from '@/components/Routes/Services';

export const metadata: Metadata = {
  title: 'Services | Nexo Linx — Web, Mobile, 3D, and Digital Solutions',
  description:
    'Explore Nexo Linx digital and technology services: Custom Web Development, App Development, Graphics Design, Digital Marketing, 3D Modeling, Video Editing, and Social Media Management in Butwal, Tilottama, and worldwide.',
  keywords: [
    'Web Development Butwal',
    'Mobile App Development Nepal',
    'Graphics Design Tilottama',
    'Digital Marketing Nepal',
    '3D Modeling Services',
    'Video Editing Services',
    'Social Media Management Nepal',
    'Nexo Linx Services',
  ],
  alternates: {
    canonical: 'https://www.nexolinx.com/services',
  },
  openGraph: {
    title: 'Digital & Technology Services | Nexo Linx',
    description:
      'From custom web applications and mobile apps to 3D modeling and performance marketing, explore how Nexo Linx helps ambitious brands build and scale.',
    url: 'https://www.nexolinx.com/services',
    siteName: 'Nexo Linx',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Digital & Technology Services | Nexo Linx',
    description:
      'From custom web applications and mobile apps to 3D modeling and performance marketing, explore how Nexo Linx helps ambitious brands build and scale.',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Digital & Technology Agency Services',
  provider: {
    '@type': 'Organization',
    name: 'Nexo Linx',
    url: 'https://www.nexolinx.com',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Tilottama',
      addressRegion: 'Rupandehi',
      addressCountry: 'Nepal',
    },
  },
  areaServed: [
    {
      '@type': 'Country',
      name: 'Nepal',
    },
    {
      '@type': 'Country',
      name: 'Global',
    },
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Nexo Linx Agency Capabilities',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Web Development',
          description:
            'Custom websites and web applications that improve online presence and user experience.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Graphics Design',
          description: 'Eye-catching designs that help a brand stand out.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'App Development',
          description:
            'User-friendly mobile apps for Nepal and global markets that work seamlessly across devices.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Digital Marketing',
          description:
            'Targeted marketing strategies to grow online presence and connect with the audience.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: '3D Modeling',
          description:
            'Realistic 3D models that bring ideas to life with precision and detail.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Editing',
          description: 'High-quality video and photo editing.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Social Media Management',
          description:
            'Growing and managing social media presence to engage the audience.',
        },
      },
    ],
  },
};

export default function ServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="w-full min-h-screen bg-black">
        <ServicesHero />
        <ServicesCatalog />
        <ServicesApproach />
        <ServicesWhy />
        <ServicesCTA />
      </main>
    </>
  );
}
