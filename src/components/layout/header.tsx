
'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Logo } from './logo';
import { Button } from '../ui/button';
import { ThemeToggle } from '../theme-toggle';
import { MobileNav } from './mobile-nav';
import { AnimatedDiv } from '../shared/animated-div';

export const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/projects', label: 'Projects' },
  { href: '/services', label: 'Services' },
  { href: '/blog', label: 'Blog' },
  { href: '/tools', label: 'Tools' },
  { href: '/resume', label: 'Resume' },
  { href: '/contact', label: 'Contact' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const navRef = useRef<HTMLElement>(null);
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0, opacity: 0 });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // A small timeout to ensure the DOM is ready for measurement
    const timer = setTimeout(() => {
      if (navRef.current) {
        const activeButton = navRef.current.querySelector(`[data-active="true"]`) as HTMLElement;
        if (activeButton) {
          setIndicatorStyle({
            left: activeButton.offsetLeft,
            width: activeButton.offsetWidth,
            opacity: 1,
          });
        } else {
           setIndicatorStyle({ left: 0, width: 0, opacity: 0 });
        }
      }
    }, 50);
    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-background/80 backdrop-blur-sm border-b'
          : 'bg-transparent'
      )}
    >
      <AnimatedDiv className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Logo />
          
          <div className="hidden md:flex items-center gap-2">
            <nav ref={navRef} className="flex items-center gap-1 bg-muted/50 p-1 rounded-full border relative">
              <div
                className="absolute bg-primary shadow-sm rounded-full transition-all duration-300 ease-in-out"
                style={{ ...indicatorStyle, height: 'calc(100% - 8px)', top: '4px' }}
              />
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  data-active={pathname === link.href}
                  className={cn(
                    'px-4 py-2 rounded-full text-sm font-medium transition-colors relative z-10',
                    pathname === link.href
                      ? 'text-primary-foreground'
                      : 'text-muted-foreground hover:text-foreground'
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <ThemeToggle />
            <Button asChild>
              <Link href="/contact">Hire Me</Link>
            </Button>
          </div>
        
          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            <MobileNav />
          </div>
        </div>
      </AnimatedDiv>
    </header>
  );
}
