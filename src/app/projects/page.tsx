import type { Metadata } from 'next';
import ProjectsSection from '@/components/sections/projects-section';

export const metadata: Metadata = {
  title: 'My Projects',
  description: 'Explore a selection of projects developed by Mashuk, showcasing skills in full-stack development and design.',
};

export default function ProjectsPage() {
  return (
    <div className="pt-24">
      <ProjectsSection />
    </div>
  );
}
