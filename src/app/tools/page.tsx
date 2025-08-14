import type { Metadata } from 'next';
import { SeoToolForm } from '@/components/seo-tool-form';
import { AnimatedDiv } from '@/components/shared/animated-div';

export const metadata: Metadata = {
  title: 'SEO Enhancement Tool',
  description: 'Use our AI-powered tool to analyze your content and get SEO improvement suggestions.',
};

export default function ToolsPage() {
  return (
    <div className="container mx-auto px-4 py-32">
      <div className="max-w-4xl mx-auto">
        <AnimatedDiv>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4 text-center">
            AI SEO Enhancement Tool
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground text-center max-w-3xl mx-auto mb-16">
            Paste your page content and target keywords to get instant, AI-driven suggestions for SEO improvements.
          </p>
        </AnimatedDiv>
        <AnimatedDiv delay="0.1s">
          <SeoToolForm />
        </AnimatedDiv>
      </div>
    </div>
  );
}
