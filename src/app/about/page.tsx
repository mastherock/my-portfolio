import AboutSection from '@/components/sections/about-section';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Me',
  description: 'Learn more about Mashuk, a passionate Full-Stack Developer, his skills, and the technologies he works with.',
};

export default function AboutPage() {
  return (
    <div className="pt-24 bg-background">
      <AboutSection />
    </div>
  );
}
