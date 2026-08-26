'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Terminal, Code2 } from 'lucide-react';
import { Button } from './ui/Button';
import { ImageWithFallback } from './ui/ImageWithFallback';
import { CrownDoodle, UnderlineScribble, SparkleDoodle, StarDoodle } from './ui/Doodles';
import { GithubIcon, LinkedinIcon, InstagramIcon, WhatsappIcon } from './ui/SocialIcons';
import { PERSONAL_INFO, SOCIAL_LINKS } from '@/data/portfolioData';

export function Hero() {
  const getSocialIcon = (iconName: string) => {
    switch (iconName) {
      case 'Github':
        return <GithubIcon className="w-5 h-5" />;
      case 'Linkedin':
        return <LinkedinIcon className="w-5 h-5" />;
      case 'Instagram':
        return <InstagramIcon className="w-5 h-5" />;
      case 'MessageCircle':
        return <WhatsappIcon className="w-5 h-5" />;
      default:
        return <Code2 className="w-5 h-5" />;
    }
  };

  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      {/* Background Subtle Grid & Dots */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute top-1/4 left-10 w-72 h-72 bg-blue-200/40 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-amber-200/40 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Heading & Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col items-start"
          >
            {/* Fullstack Developer Pill Tag */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white border-2 border-stone-900 shadow-[3px_3px_0px_#18181B] mb-6">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-black tracking-wider uppercase text-stone-900">
                FULLSTACK DEVELOPER
              </span>
            </div>

            {/* Main Headline */}
            <div className="relative mb-6">
              <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-black text-stone-900 tracking-tight leading-[1.08]">
                Building ideas with{' '}
                <span className="relative inline-block text-[#2563EB]">
                  code, AI
                  <span className="absolute -top-6 -right-6 hidden sm:inline-block">
                    <SparkleDoodle className="w-8 h-8 text-amber-400 animate-spin" style={{ animationDuration: '8s' }} />
                  </span>
                </span>
                <br className="hidden sm:inline" /> &amp;{' '}
                <span className="relative inline-block">
                  creativity.
                  {/* Handwritten Underline Doodle */}
                  <span className="absolute -bottom-3 left-0 w-full text-amber-400">
                    <UnderlineScribble className="w-full h-4 sm:h-5 text-amber-400" />
                  </span>
                </span>
              </h1>
            </div>

            {/* Supporting Text */}
            <p className="text-lg sm:text-xl text-stone-700 font-medium max-w-xl mb-8 leading-relaxed mt-2">
              {PERSONAL_INFO.heroBio}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 mb-10">
              <Button href="#projects" variant="yellow" size="lg" showArrow>
                VIEW MY WORK
              </Button>
              <Button href="#contact" variant="outline" size="lg">
                CONTACT ME
              </Button>
            </div>

            {/* Social Links Row */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-6 pt-4 border-t border-stone-200/80 w-full">
              <span className="text-xs font-bold uppercase tracking-widest text-stone-600 font-mono">
                Connect With Me:
              </span>
              <div className="flex items-center gap-3">
                {SOCIAL_LINKS.map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-full bg-white border-2 border-stone-900 text-stone-800 shadow-[2px_2px_0px_#18181B] hover:bg-[#2563EB] hover:text-white hover:-translate-y-1 hover:shadow-[3px_3px_0px_#18181B] transition-all duration-200"
                    aria-label={`${link.name} profile (${link.username})`}
                    title={`${link.name}: ${link.username}`}
                  >
                    {getSocialIcon(link.icon)}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column: Editorial Profile Composition */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-md">
              {/* Yellow Decorative Shape in background */}
              <div className="absolute -top-6 -left-6 w-36 h-36 bg-[#FACC15] rounded-3xl -rotate-6 z-0 border-2 border-stone-900" />
              
              {/* Blue Backdrop Block */}
              <div className="absolute -bottom-6 -right-4 w-48 h-48 bg-[#2563EB] rounded-3xl rotate-3 z-0 border-2 border-stone-900" />

              {/* Hand-drawn Crown on top of avatar */}
              <div className="absolute -top-8 left-1/2 -translate-x-1/2 z-20 pointer-events-none">
                <CrownDoodle className="w-16 h-14 text-amber-400 drop-shadow-md" />
              </div>

              {/* Main Avatar Container */}
              <div className="relative z-10 bg-white rounded-3xl border-3 border-stone-900 overflow-hidden shadow-[8px_8px_0px_#18181B] aspect-[4/5] flex items-center justify-center">
                <ImageWithFallback
                  src="/images/Rubby.png"
                  fallbackSrc="/images/Rubby.svg"
                  alt="Putu Rubby Aprilia Artana - Fullstack Developer"
                  width={500}
                  height={625}
                  className="w-full h-full object-cover object-center"
                  priority
                />
              </div>

              {/* Floating Badge 1: Top Right */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-3 -right-6 z-20 bg-white px-4 py-2.5 rounded-2xl border-2 border-stone-900 shadow-[4px_4px_0px_#18181B] flex items-center gap-2"
              >
                <span className="p-1.5 rounded-lg bg-blue-100 text-blue-700">
                  <Terminal className="w-4 h-4" />
                </span>
                <div>
                  <p className="text-xs font-black text-stone-900">Fullstack Developer</p>
                  <p className="text-[10px] font-bold text-stone-500">React · Next.js · Node</p>
                </div>
              </motion.div>

              {/* Floating Badge 2: Bottom Left */}
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                className="absolute -bottom-5 -left-6 z-20 bg-[#FACC15] px-4 py-2.5 rounded-2xl border-2 border-stone-900 shadow-[4px_4px_0px_#18181B] flex items-center gap-2"
              >
                <span className="p-1.5 rounded-lg bg-stone-900 text-yellow-400">
                  <Sparkles className="w-4 h-4" />
                </span>
                <span className="text-xs font-black text-stone-900">
                  AI · Web · IoT · Game
                </span>
              </motion.div>

              {/* Doodled Star Decoration */}
              <div className="absolute bottom-16 -right-8 z-20 pointer-events-none hidden sm:block">
                <StarDoodle className="w-10 h-10 text-amber-400 drop-shadow" />
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
