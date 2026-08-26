'use client';

import React, { useState } from 'react';
import {
  Sparkles,
  Scan,
  Search,
  Lightbulb,
  Hammer,
  Recycle,
  Cpu,
  UserCheck,
  ExternalLink,
  ArrowRight
} from 'lucide-react';
import { GithubIcon } from './ui/SocialIcons';
import { FEATURED_PROJECT } from '@/data/portfolioData';
import { SpotlightCard } from './ui/SpotlightCard';
import { ImageWithFallback } from './ui/ImageWithFallback';
import { Button } from './ui/Button';
import { CaseStudyModal } from './CaseStudyModal';
import { UnderlineScribble } from './ui/Doodles';

export function FeaturedProject() {
  const [isCaseStudyOpen, setIsCaseStudyOpen] = useState(false);

  const processIcons = [
    <Scan key="1" className="w-4 h-4" />,
    <Search key="2" className="w-4 h-4" />,
    <Lightbulb key="3" className="w-4 h-4" />,
    <Hammer key="4" className="w-4 h-4" />,
    <Recycle key="5" className="w-4 h-4" />,
  ];

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-[#F5F1EA]/60 border-y border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-stone-300 text-xs font-black uppercase tracking-wider text-blue-600 mb-3 shadow-xs">
            <span className="w-2 h-2 rounded-full bg-blue-600"></span>
            FEATURED PROJECT
          </div>

          <div className="relative">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-stone-900 tracking-tight">
              ROCKY — Creative Waste Upcycling
            </h2>
            <div className="w-44 mt-2">
              <UnderlineScribble className="w-full h-3 text-amber-400" />
            </div>
          </div>
          <p className="text-base sm:text-lg text-stone-600 font-medium max-w-2xl mt-2">
            Transforming everyday discarded materials into functional objects using computer vision and AI-assisted guidance.
          </p>
        </div>

        {/* Large Main Featured Project Spotlight Card */}
        <SpotlightCard
          variant="blue"
          className="p-6 sm:p-10 border-3 border-stone-900 shadow-[8px_8px_0px_#18181B] bg-white rounded-3xl"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Column: Visual Thumbnails & Mockup */}
            <div className="lg:col-span-6 space-y-4">
              <div className="relative rounded-2xl overflow-hidden border-2 border-stone-900 shadow-[4px_4px_0px_#18181B] bg-stone-900 aspect-[16/10] group">
                <ImageWithFallback
                  src={FEATURED_PROJECT.thumbnail}
                  fallbackSrc="/images/Rocky.svg"
                  alt="Rocky Project Main Visual"
                  width={800}
                  height={500}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-3 left-3 bg-[#18181B]/90 backdrop-blur-xs text-yellow-400 font-black text-[11px] px-3 py-1 rounded-full border border-stone-700 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  AI Scanning + Vision
                </div>
              </div>

              {/* Small UI Preview Thumb */}
              <div className="relative rounded-2xl overflow-hidden border-2 border-stone-900 bg-stone-950 p-2 flex items-center gap-3">
                <div className="w-24 h-16 rounded-lg overflow-hidden border border-stone-700 shrink-0 bg-stone-900">
                  <ImageWithFallback
                    src={FEATURED_PROJECT.uiPreview}
                    fallbackSrc="/images/Rocky-ui.svg"
                    alt="Rocky UI Preview Thumbnail"
                    width={160}
                    height={100}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <p className="text-xs font-bold text-stone-300">UI / UX Concept</p>
                  <p className="text-[11px] text-stone-400">Viewfinder &amp; Smart Craft Planner</p>
                </div>
                <button
                  onClick={() => setIsCaseStudyOpen(true)}
                  className="text-xs font-black text-amber-400 hover:text-amber-300 px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 flex items-center gap-1 shrink-0 cursor-pointer"
                >
                  Inspect UI <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>

            {/* Right Column: Details, Problem/Solution, Role & CTAs */}
            <div className="lg:col-span-6 flex flex-col justify-between h-full space-y-6">
              <div>
                {/* Badges */}
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <span className="px-3 py-1 rounded-full bg-blue-100 text-blue-800 font-black text-xs border border-blue-300 flex items-center gap-1">
                    <Cpu className="w-3.5 h-3.5" />
                    {FEATURED_PROJECT.technology}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-amber-100 text-amber-900 font-black text-xs border border-amber-300 flex items-center gap-1">
                    <UserCheck className="w-3.5 h-3.5" />
                    Role: {FEATURED_PROJECT.role}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-900 font-black text-xs border border-emerald-300">
                    {FEATURED_PROJECT.status}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-black text-stone-900 tracking-tight mb-3">
                  {FEATURED_PROJECT.tagline}
                </h3>

                <p className="text-stone-700 text-base leading-relaxed mb-6 font-medium">
                  {FEATURED_PROJECT.description}
                </p>

                {/* Problem & Solution Mini Grids */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                  <div className="p-3.5 bg-stone-50 rounded-xl border border-stone-300">
                    <p className="text-[11px] font-black uppercase tracking-wider text-rose-600 mb-1">
                      Problem
                    </p>
                    <p className="text-xs text-stone-700 font-medium line-clamp-3">
                      {FEATURED_PROJECT.problem}
                    </p>
                  </div>
                  <div className="p-3.5 bg-stone-50 rounded-xl border border-stone-300">
                    <p className="text-[11px] font-black uppercase tracking-wider text-emerald-600 mb-1">
                      Solution
                    </p>
                    <p className="text-xs text-stone-700 font-medium line-clamp-3">
                      {FEATURED_PROJECT.solution}
                    </p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-stone-200">
                <Button
                  onClick={() => setIsCaseStudyOpen(true)}
                  variant="yellow"
                  size="md"
                  showArrow
                >
                  VIEW CASE STUDY
                </Button>

                <Button
                  onClick={() => setIsCaseStudyOpen(true)}
                  variant="outline"
                  size="md"
                >
                  VIEW PROJECT
                </Button>

                {/* Placeholder / Disabled State Buttons with tooltips */}
                <div className="flex items-center gap-2">
                  <button
                    disabled
                    title="Repository: Coming Soon"
                    className="p-2.5 rounded-full bg-stone-100 border border-stone-300 text-stone-400 cursor-not-allowed flex items-center gap-1 text-xs font-bold"
                  >
                    <GithubIcon className="w-4 h-4" />
                    <span className="hidden sm:inline">Repo (Soon)</span>
                  </button>
                  <button
                    disabled
                    title="Live Demo: Coming Soon"
                    className="p-2.5 rounded-full bg-stone-100 border border-stone-300 text-stone-400 cursor-not-allowed flex items-center gap-1 text-xs font-bold"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span className="hidden sm:inline">Demo (Soon)</span>
                  </button>
                </div>
              </div>

            </div>

          </div>

          {/* Interactive Horizontal 5-Step Process Stepper */}
          <div className="mt-12 pt-8 border-t-2 border-stone-200">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h4 className="text-base font-black text-stone-900 uppercase tracking-wider">
                  The Rocky 5-Step Transformation Flow
                </h4>
                <p className="text-xs text-stone-500 font-medium">
                  Step-by-step pipeline from waste detection to tangible crafted objects
                </p>
              </div>
              <button
                onClick={() => setIsCaseStudyOpen(true)}
                className="text-xs font-black text-blue-600 hover:underline hidden sm:block cursor-pointer"
              >
                Expand Details →
              </button>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
              {FEATURED_PROJECT.caseStudy.process.map((step, idx) => (
                <div
                  key={step.number}
                  className="p-3.5 bg-stone-50 hover:bg-white rounded-2xl border border-stone-300 transition-all hover:border-stone-900 hover:shadow-xs group cursor-pointer"
                  onClick={() => setIsCaseStudyOpen(true)}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="w-7 h-7 rounded-xl bg-white border border-stone-300 font-black text-xs flex items-center justify-center text-stone-900 group-hover:bg-[#FACC15] group-hover:border-stone-900 transition-colors">
                      {step.number}
                    </span>
                    <span className="text-stone-600 group-hover:text-blue-600 transition-colors">
                      {processIcons[idx]}
                    </span>
                  </div>
                  <h5 className="font-extrabold text-stone-900 text-sm mb-1">
                    {step.title}
                  </h5>
                  <p className="text-[11px] text-stone-600 line-clamp-2 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </SpotlightCard>

      </div>

      {/* Case Study Modal */}
      <CaseStudyModal
        isOpen={isCaseStudyOpen}
        onClose={() => setIsCaseStudyOpen(false)}
      />
    </section>
  );
}
