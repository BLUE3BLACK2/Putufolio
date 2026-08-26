'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Globe, Cpu, Gamepad2, Sparkles, Compass } from 'lucide-react';
import { INTERESTS_DATA } from '@/data/portfolioData';
import { UnderlineScribble } from './ui/Doodles';

export function Interests() {
  const getInterestIcon = (icon: string) => {
    switch (icon) {
      case 'Brain':
        return <Brain className="w-8 h-8 text-blue-600" />;
      case 'Globe':
        return <Globe className="w-8 h-8 text-emerald-600" />;
      case 'Cpu':
        return <Cpu className="w-8 h-8 text-amber-600" />;
      case 'Gamepad2':
        return <Gamepad2 className="w-8 h-8 text-purple-600" />;
      default:
        return <Sparkles className="w-8 h-8 text-blue-600" />;
    }
  };

  return (
    <section id="interests" className="py-24 relative overflow-hidden bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-stone-300 text-xs font-black uppercase tracking-wider text-blue-600 mb-3 shadow-xs">
            <Compass className="w-3.5 h-3.5" />
            PASSION &amp; EXPLORATION
          </div>

          <div className="relative mb-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-stone-900 tracking-tight">
              CURIOUS ABOUT
            </h2>
            <div className="w-48 mx-auto mt-2">
              <UnderlineScribble className="w-full h-3 text-amber-400" />
            </div>
          </div>

          <p className="text-base sm:text-lg text-stone-600 font-medium max-w-xl">
            Domains where I experiment, build prototypes, and explore cutting-edge engineering possibilities.
          </p>
        </div>

        {/* 4 Distinct Interactive Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {INTERESTS_DATA.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="h-full"
            >
              <div className="h-full bg-white rounded-3xl border-3 border-stone-900 shadow-[5px_5px_0px_#18181B] p-6 flex flex-col justify-between relative overflow-hidden group">
                
                {/* Subtle colored accent glow in top right */}
                <div
                  className="absolute -top-12 -right-12 w-28 h-28 rounded-full blur-2xl opacity-30 transition-opacity group-hover:opacity-60"
                  style={{ backgroundColor: item.color }}
                />

                <div>
                  {/* Icon Container */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-14 h-14 rounded-2xl bg-stone-50 border-2 border-stone-900 flex items-center justify-center shadow-[3px_3px_0px_#18181B] group-hover:scale-105 transition-transform duration-200">
                      {getInterestIcon(item.icon)}
                    </div>
                    <span className="text-xs font-mono font-bold text-stone-400">
                      0{index + 1}
                    </span>
                  </div>

                  <h3 className="text-xl font-black text-stone-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-stone-600 font-medium leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-stone-100">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-bold px-2.5 py-1 rounded-md bg-stone-100 text-stone-800 border border-stone-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
