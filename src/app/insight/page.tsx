import type { Metadata } from 'next';
import FrontBlog from '@/components/Routes/Blog/FrontBlog';
export const metadata: Metadata = {
  title: 'Insights | Nexo Linx',
  description: 'Insights and perspectives on technology, business, and product design.',
};


export default function InsightPage() {
  return (
    <main className="w-full min-h-screen bg-black">
      <FrontBlog />
    </main>
  );
}
