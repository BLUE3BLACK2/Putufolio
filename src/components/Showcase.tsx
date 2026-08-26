'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Palette } from 'lucide-react';
import { SHOWCASE_ITEMS } from '@/data/portfolioData';
import { ShowcaseCard } from './ShowcaseCard';
import { UnderlineScribble } from './ui/Doodles';

export function Showcase() {
  return (
    <section id="showcase" className="py-24 relative overflow-hidden bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-stone-300 text-xs font-black uppercase tracking-wider text-blue-600 mb-3 shadow-xs">
            <Palette className="w-3.5 h-3.5" />
            CREATIVE SHOWCASE
          </div>

          <div className="relative mb-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-stone-900 tracking-tight">
              Things I Create Beyond Code
            </h2>
            <div className="w-56 mx-auto mt-2">
              <UnderlineScribble className="w-full h-3 text-amber-400" />
            </div>
          </div>

          <p className="text-base sm:text-lg text-stone-600 font-medium max-w-xl">
            A collection of things I create beyond code — UI design systems, graphic posters, and digital illustrations.
          </p>
        </div>

        {/* 3 Categories Masonry / Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SHOWCASE_ITEMS.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <ShowcaseCard item={item} />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
