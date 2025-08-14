
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Logo } from './logo';
import { navLinks } from './header';
import { cn } from '@/lib/utils';
import { ThemeToggle } from '../theme-toggle';

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Open menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="flex flex-col bg-card">
        <SheetHeader>
          <Logo />
          <SheetTitle className="sr-only">Main Menu</SheetTitle>
          <SheetDescription className="sr-only">A list of navigation links for the website.</SheetDescription>
        </SheetHeader>
        
        <nav className="flex-grow flex flex-col justify-center items-center gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={cn(
                "text-2xl font-semibold transition-colors duration-300 py-2 relative",
                pathname === link.href
                  ? 'text-primary'
                  : 'text-muted-foreground hover:text-primary'
              )}
            >
              {link.label}
              {pathname === link.href && (
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 w-8 bg-primary rounded-full" />
              )}
            </Link>
          ))}
        </nav>

        <div className="mt-auto flex flex-col items-center gap-4 py-4">
            <Button asChild onClick={() => setIsOpen(false)} size="lg" className="w-full max-w-xs">
              <Link href="/contact">Hire Me</Link>
            </Button>
            <div className="pt-4">
             <ThemeToggle />
            </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
