import HeroSection from '@/components/sections/hero-section';
import AboutSection from '@/components/sections/about-section';
import ServicesSection from '@/components/sections/services-section';
import ProjectsSection from '@/components/sections/projects-section';
import ContactSection from '@/components/sections/contact-section';

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection isHomePage={true} />
      <ServicesSection isHomePage={true} />
      <ProjectsSection isHomePage={true} />
      <ContactSection />
    </>
  );
}
