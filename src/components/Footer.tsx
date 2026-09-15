'use client';

import React from 'react';
import { ArrowUp, Mail, MessageCircle, Pin } from 'lucide-react';
import { PERSONAL_INFO, SOCIAL_LINKS } from '@/data/portfolioData';
import { ThanksStamp } from './ui/Doodles';
import { Logo } from './ui/Logo';
import { GithubIcon, LinkedinIcon, InstagramIcon, WhatsappIcon } from './ui/SocialIcons';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Showcase', href: '#showcase' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-white border-t-2 border-stone-900/80 pt-16 pb-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-stone-200 items-start">
          
          {/* Brand & Bio */}
          <div className="md:col-span-5 flex flex-col items-start">
            <a href="#home" className="mb-3" aria-label="PutuFolio home">
              <Logo size="sm" />
            </a>
            <p className="text-sm font-medium text-stone-600 max-w-sm mb-5 leading-relaxed">
              Fullstack Developer exploring AI, Web, IoT &amp; Game Development. Computer Science student at Universitas Pendidikan Ganesha.
            </p>

            <div className="flex flex-col gap-2 mb-5">
              <a
                href={`mailto:${PERSONAL_INFO.contact.email}`}
                className="inline-flex items-center gap-2 text-sm font-bold text-stone-700 hover:text-[#2563EB] transition-colors"
              >
                <Mail className="w-4 h-4 text-[#2563EB]" />
                {PERSONAL_INFO.contact.email}
              </a>
              <a
                href={PERSONAL_INFO.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-bold text-stone-700 hover:text-emerald-600 transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-emerald-600" />
                {PERSONAL_INFO.contact.whatsapp}
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3">
              {SOCIAL_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-stone-50 border border-stone-300 text-stone-700 hover:bg-[#2563EB] hover:text-white hover:border-stone-900 transition-all duration-200 shadow-xs cursor-pointer"
                  aria-label={link.name}
                  title={`${link.name}: ${link.username}`}
                >
                  {link.icon === 'Github' && <GithubIcon className="w-4 h-4" />}
                  {link.icon === 'Linkedin' && <LinkedinIcon className="w-4 h-4" />}
                  {link.icon === 'Instagram' && <InstagramIcon className="w-4 h-4" />}
                  {link.icon === 'MessageCircle' && <WhatsappIcon className="w-4 h-4" />}
                  {link.icon === 'Pin' && <Pin className="w-4 h-4" />}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-black uppercase tracking-wider text-stone-400 mb-4 font-mono">
              Navigation
            </h4>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm font-bold text-stone-700 hover:text-[#2563EB] transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Stamp / Playful Note */}
          <div className="md:col-span-4 flex flex-col items-center md:items-end justify-center">
            <ThanksStamp />
          </div>

        </div>

        {/* Bottom Bar & Scroll to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-medium text-stone-500">
          <p>
            © 2026 <span className="font-bold text-stone-800">Putu Rubby Aprilia Artana</span>. All rights reserved.
          </p>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-stone-100 border border-stone-300 text-stone-700 font-bold hover:bg-stone-200 transition-colors cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}
