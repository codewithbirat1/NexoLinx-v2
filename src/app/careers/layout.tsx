import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Careers | Nexo Linx',
  description:
    'Join Nexo Linx and help build meaningful digital products through design, engineering, and collaboration.',
};

export default function CareersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
