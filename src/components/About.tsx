'use client';

import React from 'react';
import { GraduationCap, Code, BookOpen, Layers } from 'lucide-react';
import { SpotlightCard } from './ui/SpotlightCard';
import { UnderlineScribble } from './ui/Doodles';
import { PERSONAL_INFO } from '@/data/portfolioData';
import { AboutPhotoStack } from './AboutPhotoStack';

export function About() {
  const statIcons = [
    <GraduationCap key="grad" className="w-6 h-6 text-amber-500" />,
    <Code key="cs" className="w-6 h-6 text-blue-500" />,
    <BookOpen key="undiksha" className="w-6 h-6 text-emerald-500" />,
    <Layers key="fullstack" className="w-6 h-6 text-rose-500" />,
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-[#F5F1EA]/60 border-y border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-stone-300 text-xs font-black uppercase tracking-wider text-blue-600 mb-3 shadow-xs">
            <span className="w-2 h-2 rounded-full bg-blue-600"></span>
            ABOUT ME
          </div>
          
          <div className="relative">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-stone-900 tracking-tight leading-tight">
              Turning curiosity into{' '}
              <span className="relative inline-block text-[#2563EB]">
                things I can build.
                <span className="absolute -bottom-2.5 left-0 w-full">
                  <UnderlineScribble className="w-full h-3 text-amber-400" />
                </span>
              </span>
            </h2>
          </div>
        </div>

        {/* Asymmetrical Grid Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Image & Visual Composition */}
          <div className="lg:col-span-5 relative">
            <AboutPhotoStack />
          </div>

          {/* Right Column: Bio & 4 Stat Cards */}
          <div className="lg:col-span-7 flex flex-col gap-8">
            
            {/* Bio Paragraph Card */}
            <div className="bg-white p-6 sm:p-8 rounded-3xl border-2 border-stone-900 shadow-[4px_4px_0px_#18181B]">
              <p className="text-lg sm:text-xl text-stone-800 font-medium leading-relaxed mb-4">
                {PERSONAL_INFO.aboutBio}
              </p>
              <div className="flex flex-wrap items-center gap-2 pt-4 border-t border-stone-200">
                <span className="text-xs font-bold text-stone-500 uppercase tracking-wider mr-2">Focus Areas:</span>
                {PERSONAL_INFO.interests.map((item, idx) => (
                  <span
                    key={idx}
                    className="text-xs font-black px-3 py-1 bg-stone-100 text-stone-800 rounded-full border border-stone-300"
                  >
                    #{item}
                  </span>
                ))}
              </div>
            </div>

            {/* 4 Information / Stat Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-2 gap-4">
              {PERSONAL_INFO.stats.map((stat, idx) => (
                <SpotlightCard
                  key={stat.label}
                  variant={idx % 2 === 0 ? 'blue' : 'yellow'}
                  className="p-5 border-2 border-stone-900 shadow-[3px_3px_0px_#18181B] rounded-2xl"
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="p-2 rounded-xl bg-stone-100 border border-stone-200">
                      {statIcons[idx]}
                    </span>
                    <span className="text-[11px] font-bold text-stone-500 uppercase tracking-wider">
                      {stat.detail}
                    </span>
                  </div>
                  <h4 className="text-xl sm:text-2xl font-black text-stone-900 tracking-tight">
                    {stat.value}
                  </h4>
                  <p className="text-xs font-bold text-stone-600 mt-1">
                    {stat.label}
                  </p>
                </SpotlightCard>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
