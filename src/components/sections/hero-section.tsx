
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '../ui/button';
import { ArrowRight, Eye } from 'lucide-react';
import { AnimatedDiv } from '../shared/animated-div';
import { cn } from '@/lib/utils';

const titles = ['Experiences', 'Solutions', 'Websites'];

export default function HeroSection() {
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitleIndex((prevIndex) => (prevIndex + 1) % titles.length);
    }, 3000); // Change title every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen w-full flex items-center justify-center text-center overflow-hidden bg-background"
    >
      <div className="pointer-events-none absolute inset-0 z-0 bg-grid-pattern-animated opacity-10"></div>
      
      <div className="relative z-10 container mx-auto px-4 flex flex-col items-center">
        <AnimatedDiv>
          <h1 className="relative text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-4">
            Crafting Digital
            <span className="block text-primary h-24 md:h-28 lg:h-32">
              {titles.map((title, index) => (
                <span
                  key={title}
                  className={cn(
                    "absolute left-0 right-0 transition-all duration-1000",
                    index === currentTitleIndex ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
                  )}
                >
                  {title}
                </span>
              ))}
            </span>
          </h1>
        </AnimatedDiv>

        <AnimatedDiv delay="0.1s">
          <p className="max-w-3xl mx-auto text-lg md:text-xl text-muted-foreground mb-10">
            I'm Mashuk, a <span className="text-primary font-semibold">Full-Stack Developer</span> & <span className="text-accent font-semibold">Digital Marketer</span> transforming ideas into high-performance web solutions that leave a lasting impact.
          </p>
        </AnimatedDiv>

        <AnimatedDiv delay="0.2s" className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg">
            <Link href="/projects">
              View My Work <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <Button asChild variant="secondary" size="lg">
            <Link href="/resume">
              View CV <Eye className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </AnimatedDiv>
      </div>
      <style jsx>{`
        @keyframes moveGrid {
          from {
            background-position: 0 0;
          }
          to {
            background-position: 4rem 4rem;
          }
        }
        .bg-grid-pattern-animated {
          background-image: linear-gradient(
              to right,
              hsl(var(--border)) 1px,
              transparent 1px
            ),
            linear-gradient(to bottom, hsl(var(--border)) 1px, transparent 1px);
          background-size: 4rem 4rem;
          animation: moveGrid 20s linear infinite;
        }
      `}</style>
    </section>
  );
}
