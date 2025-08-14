import Link from 'next/link';
import { Logo } from './logo';
import { Github, Twitter, Linkedin } from 'lucide-react';
import { Button } from '../ui/button';

const navLinks = [
  { href: '/about', label: 'About' },
  { href: '/projects', label: 'Projects' },
  { href: '/services', label: 'Services' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
];

const socialLinks = [
  { href: 'https://github.com/mastherock', icon: Github, label: 'GitHub' },
  { href: 'https://twitter.com/mastherock15', icon: Twitter, label: 'Twitter' },
  { href: 'https://www.linkedin.com/in/mas-huk-a9a41137a/', icon: Linkedin, label: 'LinkedIn' },
];

export default function Footer() {
  return (
    <footer className="bg-card border-t">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <Logo />
            <p className="mt-2 text-muted-foreground">Full-Stack Developer</p>
          </div>
          <nav className="flex flex-wrap justify-center gap-4 md:gap-6">
            {navLinks.map((link) => (
              <Button key={link.href} variant="link" asChild className="text-muted-foreground hover:text-foreground">
                <Link href={link.href}>{link.label}</Link>
              </Button>
            ))}
          </nav>
          <div className="flex gap-4">
            {socialLinks.map((link) => (
              <Button key={link.label} variant="ghost" size="icon" asChild>
                <a href={link.href} target="_blank" rel="noopener noreferrer" aria-label={link.label}>
                  <link.icon className="h-5 w-5" />
                </a>
              </Button>
            ))}
          </div>
        </div>
        <div className="mt-8 pt-8 border-t text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Mashuk. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
