"use client";

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { cn } from '@/lib/utils';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/faq', label: 'FAQ' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
];

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const activePath = '/';

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-zinc-950/80 border-b border-zinc-800/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" aria-label="VPAG - Versatile Performing Art Group" className="flex items-center group">
            <div className="relative w-12 h-12 flex items-center justify-center">
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/IMAGE00-1759911028053.webp"
                alt="VPAG Logo"
                width={48}
                height={48}
                className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110"
                priority
              />
            </div>
          </Link>

          <nav className="hidden md:flex items-center space-x-4" role="navigation" aria-label="Main navigation">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "relative px-3 py-2 text-sm font-medium transition-all duration-300 rounded-lg hover:bg-zinc-800/50",
                  activePath === link.href
                    ? 'text-primary bg-zinc-800/30'
                    : 'text-zinc-300 hover:text-white'
                )}
              >
                {link.label}
                {activePath === link.href && (
                  <div className="absolute bottom-0 left-1/2 h-0.5 w-3 -translate-x-1/2 rounded-full bg-primary"></div>
                )}
              </Link>
            ))}
            <div className="ml-4 pl-4 border-l border-zinc-700">
              <Link
                href="/contact"
                aria-label="Book a cultural dance performance"
                className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 hover:scale-105 hover:shadow-lg hover:shadow-primary/20 active:scale-95 h-9 px-4 py-2"
              >
                Book Performance
              </Link>
            </div>
          </nav>

          <button
            className="relative p-2 md:hidden hover:bg-zinc-800/50 rounded-lg transition-colors"
            aria-label="Open mobile menu"
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className="flex h-5 w-6 flex-col justify-between">
              <span className={cn("block h-0.5 w-full rounded-sm bg-zinc-300 transition-all duration-300", isOpen ? 'rotate-45 translate-y-[5px]' : '')}></span>
              <span className={cn("block h-0.5 w-full rounded-sm bg-zinc-300 transition-all duration-300", isOpen ? 'opacity-0' : '')}></span>
              <span className={cn("block h-0.5 w-full rounded-sm bg-zinc-300 transition-all duration-300", isOpen ? '-rotate-45 -translate-y-[5px]' : '')}></span>
            </div>
          </button>
        </div>
        
        <div id="mobile-menu" className={cn("overflow-hidden transition-all duration-300 ease-in-out md:hidden", isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0')} role="navigation" aria-label="Mobile navigation">
          {isOpen && (
            <nav className="flex flex-col space-y-2 border-t border-zinc-800/50 pt-4 pb-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                   className={cn(
                    "rounded-lg px-3 py-2 text-sm font-medium transition-all duration-200",
                    activePath === link.href
                      ? 'bg-zinc-800/50 text-primary border border-zinc-700/50'
                      : 'text-zinc-300 hover:bg-zinc-800/30 hover:text-white'
                  )}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-2">
                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  aria-label="Book a cultural dance performance"
                  className="w-full justify-center inline-flex items-center whitespace-nowrap rounded-md text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 hover:scale-105 active:scale-95 h-9 px-4 py-2"
                >
                  Book Performance
                </Link>
              </div>
            </nav>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navigation;