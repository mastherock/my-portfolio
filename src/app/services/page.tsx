import type { Metadata } from 'next';
import ServicesSection from '@/components/sections/services-section';

export const metadata: Metadata = {
  title: 'My Services',
  description: 'Discover the professional services offered by Mashuk, including web development, UI/UX design, and SEO optimization.',
};

export default function ServicesPage() {
  return (
    <div className="pt-24">
      <ServicesSection />
    </div>
  );
}
