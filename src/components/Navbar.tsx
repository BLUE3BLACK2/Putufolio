'use client';

import React, { useState, useEffect } from 'react';
import { Sparkles, Menu, X, ArrowUpRight } from 'lucide-react';
import { Button } from './ui/Button';

const NAV_LINKS = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Showcase', href: '#showcase' },
  { name: 'Contact', href: '#contact' },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = NAV_LINKS.map((link) => link.href.substring(1));
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FAF7F2]/90 backdrop-blur-md border-b border-stone-300/70 shadow-sm py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#home"
          className="group flex items-center gap-2 text-xl md:text-2xl font-extrabold tracking-tight text-stone-900 focus:outline-none"
        >
          <span className="relative">
            <span className="text-[#18181B]">Putu</span>{' '}
            <span className="text-[#2563EB]">Rubby</span>
            {/* Playful sun / sparkle doodle on logo */}
            <span className="absolute -top-2 -right-4 inline-block text-amber-500 transform group-hover:rotate-45 transition-transform duration-300">
              <Sparkles className="w-4 h-4 fill-amber-400" />
            </span>
          </span>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-1 bg-white/70 backdrop-blur-sm px-4 py-1.5 rounded-full border border-stone-200 shadow-sm">
          {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                className={`relative px-4 py-1.5 text-sm font-semibold rounded-full transition-all duration-200 ${
                  isActive
                    ? 'text-stone-900 bg-stone-100 font-bold'
                    : 'text-stone-600 hover:text-stone-900 hover:bg-stone-50'
                }`}
              >
                {link.name}
                {isActive && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-[#2563EB] rounded-full" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Button
            href="#contact"
            variant="yellow"
            size="sm"
            showArrow
            className="shadow-sm"
          >
            Let&apos;s Connect
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2.5 rounded-2xl bg-white border border-stone-300 text-stone-900 hover:bg-stone-50 focus:outline-none"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FAF7F2] border-b border-stone-300 px-6 py-6 shadow-xl animate-in slide-in-from-top duration-200">
          <nav className="flex flex-col gap-3">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between text-lg font-bold text-stone-800 py-2.5 px-4 rounded-xl hover:bg-white transition-colors"
              >
                <span>{link.name}</span>
                <ArrowUpRight className="w-4 h-4 text-stone-400" />
              </a>
            ))}
            <div className="pt-4 border-t border-stone-200">
              <Button
                href="#contact"
                variant="yellow"
                size="md"
                showArrow
                className="w-full justify-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                Let&apos;s Connect
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
