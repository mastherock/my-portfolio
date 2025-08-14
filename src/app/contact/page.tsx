import type { Metadata } from 'next';
import ContactSection from '@/components/sections/contact-section';

export const metadata: Metadata = {
  title: 'Contact Me',
  description: 'Get in touch with Mashuk to discuss your project, ask a question, or just say hi.',
};

export default function ContactPage() {
  return (
    <div className="pt-24">
      <ContactSection />
    </div>
  );
}
