'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '@/data/portfolioData';
import { Button } from './ui/Button';
import { RocketIllustration, SparkleDoodle, StarDoodle, CloudDoodle } from './ui/Doodles';

export function Contact() {
  return (
    <section id="contact" className="pt-24 pb-16 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Large Vibrant Blue Banner inspired by the reference design */}
        <div className="relative bg-[#1D4ED8] rounded-3xl border-3 border-stone-900 shadow-[10px_10px_0px_#18181B] p-8 sm:p-12 lg:p-16 text-white overflow-hidden">
          
          {/* Background Decorative Cloud Doodles */}
          <div className="absolute top-6 left-12 pointer-events-none opacity-20">
            <CloudDoodle className="w-36 h-20 text-white" />
          </div>
          <div className="absolute bottom-4 right-1/3 pointer-events-none opacity-20 hidden md:block">
            <CloudDoodle className="w-44 h-24 text-white" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
            
            {/* Left Column: Heading & CTAs */}
            <div className="lg:col-span-7 flex flex-col items-start">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-800/80 border border-blue-400/40 text-xs font-black uppercase tracking-wider text-yellow-300 mb-6">
                <Sparkles className="w-3.5 h-3.5" />
                LET&apos;S COLLABORATE
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1] mb-6">
                Let&apos;s build{' '}
                <span className="font-handwriting text-4xl sm:text-5xl md:text-6xl text-[#FACC15] block sm:inline">
                  something together.
                </span>
              </h2>

              <p className="text-base sm:text-lg text-blue-100 font-medium max-w-xl mb-8 leading-relaxed">
                Have an idea, project, or collaboration in mind? Let&apos;s connect and turn it into something meaningful.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4">
                <Button
                  href={`mailto:${PERSONAL_INFO.contact.email}`}
                  variant="yellow"
                  size="lg"
                  showArrow
                >
                  CONTACT ME
                </Button>
                <Button
                  href="#projects"
                  variant="outline"
                  size="lg"
                  className="bg-white/10 text-white border-white hover:bg-white hover:text-stone-900"
                >
                  VIEW MY WORK
                </Button>
              </div>
            </div>

            {/* Right Column: Playful Rocket Illustration Composition */}
            <div className="lg:col-span-5 flex items-center justify-center relative">
              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="relative"
              >
                <RocketIllustration className="w-56 h-56 sm:w-64 sm:h-64" />
                
                {/* Floating Stars */}
                <div className="absolute top-4 -left-6 pointer-events-none">
                  <StarDoodle className="w-8 h-8 text-yellow-300 animate-spin" style={{ animationDuration: '10s' }} />
                </div>
                <div className="absolute bottom-8 -right-4 pointer-events-none">
                  <SparkleDoodle className="w-6 h-6 text-yellow-300 animate-pulse" />
                </div>
              </motion.div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
