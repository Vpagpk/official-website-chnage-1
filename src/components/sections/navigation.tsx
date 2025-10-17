"use client";

import { useState, useEffect } from 'react';
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
  const [scrolled, setScrolled] = useState(false);
  const activePath = '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
      scrolled 
        ? "backdrop-blur-xl bg-zinc-950/95 border-b border-zinc-800/80 shadow-2xl shadow-black/50" 
        : "backdrop-blur-lg bg-zinc-950/80 border-b border-zinc-800/50"
    )}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className={cn(
          "flex items-center justify-between transition-all duration-500",
          scrolled ? "h-14" : "h-16"
        )}>
          <Link href="/" aria-label="VPAG - Versatile Performing Art Group" className="flex items-center group">
            <div className={cn(
              "relative flex items-center justify-center transition-all duration-500",
              scrolled ? "w-10 h-10" : "w-12 h-12"
            )}>
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/IMAGE00-1759911028053.webp"
                alt="VPAG Logo"
                width={48}
                height={48}
                className="relative w-full h-full object-contain transition-transform duration-500 group-hover:scale-110 group-hover:rotate-12 will-change-transform"
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
                  "relative px-3 py-2 text-sm font-medium transition-all duration-300 rounded-lg hover:bg-zinc-800/50 group",
                  activePath === link.href
                    ? 'text-primary bg-zinc-800/30'
                    : 'text-zinc-300 hover:text-white'
                )}
              >
                <span className="relative z-10">{link.label}</span>
                {activePath === link.href && (
                  <div className="absolute bottom-0 left-1/2 h-0.5 w-3 -translate-x-1/2 rounded-full bg-primary animate-pulse-subtle"></div>
                )}
                <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
              </Link>
            ))}
            <div className="ml-4 pl-4 border-l border-zinc-700">
              <Link
                href="/contact"
                aria-label="Book a cultural dance performance"
                className="group relative inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-all duration-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 hover:scale-105 hover:shadow-lg hover:shadow-primary/30 active:scale-95 h-9 px-4 py-2 overflow-hidden"
              >
                <span className="relative z-10">Book Performance</span>
                <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </Link>
            </div>
          </nav>

          <button
            className="relative p-2 md:hidden hover:bg-zinc-800/50 rounded-lg transition-all duration-300 group"
            aria-label="Open mobile menu"
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className="absolute inset-0 bg-primary/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative flex h-5 w-6 flex-col justify-between">
              <span className={cn("block h-0.5 w-full rounded-sm bg-zinc-300 transition-all duration-500 will-change-transform", isOpen ? 'rotate-45 translate-y-[9px]' : '')}></span>
              <span className={cn("block h-0.5 w-full rounded-sm bg-zinc-300 transition-all duration-300", isOpen ? 'opacity-0' : '')}></span>
              <span className={cn("block h-0.5 w-full rounded-sm bg-zinc-300 transition-all duration-500 will-change-transform", isOpen ? '-rotate-45 -translate-y-[9px]' : '')}></span>
            </div>
          </button>
        </div>
        
        <div id="mobile-menu" className={cn("overflow-hidden transition-all duration-500 ease-in-out md:hidden", isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0')} role="navigation" aria-label="Mobile navigation">
          {isOpen && (
            <nav className="flex flex-col space-y-2 border-t border-zinc-800/50 pt-4 pb-4">
              {navLinks.map((link, index) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "rounded-lg px-3 py-2 text-sm font-medium transition-all duration-300 hover:scale-105 will-change-transform",
                    activePath === link.href
                      ? 'bg-zinc-800/50 text-primary border border-zinc-700/50'
                      : 'text-zinc-300 hover:bg-zinc-800/30 hover:text-white'
                  )}
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-2">
                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  aria-label="Book a cultural dance performance"
                  className="w-full justify-center inline-flex items-center whitespace-nowrap rounded-md text-sm font-medium transition-all duration-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 hover:scale-105 hover:shadow-xl hover:shadow-primary/30 active:scale-95 h-9 px-4 py-2"
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