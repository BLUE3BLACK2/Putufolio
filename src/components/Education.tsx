'use client';

import React from 'react';
import { GraduationCap, Calendar, School } from 'lucide-react';
import { EDUCATION_DATA } from '@/data/portfolioData';
import { SpotlightCard } from './ui/SpotlightCard';
import { UnderlineScribble } from './ui/Doodles';

export function Education() {
  return (
    <section id="education" className="py-20 relative overflow-hidden bg-[#F5F1EA]/60 border-y border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-stone-300 text-xs font-black uppercase tracking-wider text-blue-600 mb-3 shadow-xs">
            <GraduationCap className="w-3.5 h-3.5" />
            ACADEMIC BACKGROUND
          </div>

          <div className="relative">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-stone-900 tracking-tight">
              EDUCATION
            </h2>
            <div className="w-32 mt-2">
              <UnderlineScribble className="w-full h-3 text-amber-400" />
            </div>
          </div>
        </div>

        {/* Timeline / Modern Horizontal Card */}
        <SpotlightCard
          variant="yellow"
          className="p-6 sm:p-10 border-3 border-stone-900 shadow-[6px_6px_0px_#18181B] bg-white rounded-3xl"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Col: University Badge & Info */}
            <div className="lg:col-span-5 flex items-start gap-4">
              <div className="w-16 h-16 rounded-2xl bg-[#2563EB] border-2 border-stone-900 flex items-center justify-center text-white shrink-0 shadow-[3px_3px_0px_#18181B]">
                <GraduationCap className="w-8 h-8" />
              </div>

              <div>
                <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-amber-100 border border-amber-300 text-stone-900 text-xs font-black mb-2">
                  <Calendar className="w-3.5 h-3.5 text-amber-600" />
                  {EDUCATION_DATA.startYear} — Present ({EDUCATION_DATA.status})
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-stone-900 leading-tight">
                  {EDUCATION_DATA.institution}
                </h3>
                <p className="text-sm font-bold text-blue-600 mt-1">
                  {EDUCATION_DATA.program}
                </p>
                <p className="text-xs text-stone-500 font-medium mt-0.5">
                  {EDUCATION_DATA.degree}
                </p>
              </div>
            </div>

            <div className="lg:col-span-7 pl-0 lg:pl-8 border-t lg:border-t-0 lg:border-l border-stone-200 pt-6 lg:pt-0">
              <h4 className="text-xs font-black uppercase tracking-wider text-stone-500 mb-4">
                Previous Education
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {EDUCATION_DATA.schools.map((school) => (
                  <div
                    key={school.level}
                    className="p-4 rounded-xl bg-stone-50 border border-stone-200"
                  >
                    <div className="flex items-center gap-2 text-blue-600 mb-3">
                      <School className="w-4 h-4 shrink-0" />
                      <span className="text-xs font-black tracking-wider">{school.level}</span>
                    </div>
                    <p className="text-sm text-stone-900 font-bold leading-relaxed">
                      {school.institution}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </SpotlightCard>

      </div>
    </section>
  );
}
