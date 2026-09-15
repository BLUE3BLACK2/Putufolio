'use client';

import { useCallback, useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, ExternalLink, Globe2 } from 'lucide-react';

const WEB_PROJECTS = [
  {
    title: 'BTech Web Template',
    category: 'Company Website',
    description: 'A polished business website template with a clear content hierarchy and responsive presentation.',
    url: 'https://btech-web-template-02.vercel.app/',
  },
  {
    title: 'Bunnyverse',
    category: 'Creative Website',
    description: 'An expressive digital experience that combines playful visuals with an editorial web layout.',
    url: 'https://bunnyverse.vercel.app/',
  },
  {
    title: 'Bagus Technologies Request',
    category: 'Web Application',
    description: 'A structured request-management interface designed to keep tasks and progress easy to follow.',
    url: 'https://req.bagustechnologies.com/',
  },
  {
    title: 'Payment Gateway',
    category: 'Fintech Experience',
    description: 'A focused payment flow that presents transaction details and checkout actions clearly.',
    url: 'https://payment-gateway-kappa-one.vercel.app/',
  },
  {
    title: 'Golf Booking',
    category: 'Booking Platform',
    description: 'A modern reservation experience for discovering courses and arranging a golf session.',
    url: 'https://booking-golf.vercel.app/',
  },
  {
    title: 'Villa Booking',
    category: 'Hospitality Website',
    description: 'A visual villa discovery and booking experience designed around destination imagery.',
    url: 'https://booking-villa-2.vercel.app/',
  },
] as const;

const PROJECT_NAV_BUTTON_STYLE = 'w-12 h-12 rounded-xl bg-white border-2 border-stone-900 grid place-items-center shadow-[3px_3px_0px_#18181B] hover:bg-[#FACC15] active:bg-[#FACC15] active:translate-y-0.5 active:shadow-none transition-all cursor-pointer';

export function FeaturedProject() {
  const [activeIndex, setActiveIndex] = useState(0);
  const project = WEB_PROJECTS[activeIndex];

  const showPrevious = useCallback(() => {
    setActiveIndex((index) => (index - 1 + WEB_PROJECTS.length) % WEB_PROJECTS.length);
  }, []);

  const showNext = useCallback(() => {
    setActiveIndex((index) => (index + 1) % WEB_PROJECTS.length);
  }, []);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowLeft') showPrevious();
      if (event.key === 'ArrowRight') showNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [showNext, showPrevious]);

  return (
    <section id="projects" className="py-24 bg-[#F5F1EA]/60 border-y border-stone-200/80 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-stone-300 text-xs font-black uppercase tracking-wider text-blue-600 mb-3 shadow-xs">
              <Globe2 className="w-3.5 h-3.5" />
              WEB PROJECTS
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-stone-900 tracking-tight">
              Websites I&apos;ve brought to life.
            </h2>
            <p className="text-base sm:text-lg text-stone-600 font-medium max-w-2xl mt-3">
              Explore six live projects. Use the arrows, dots, or keyboard to move between them.
            </p>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <button type="button" onClick={showPrevious} className={PROJECT_NAV_BUTTON_STYLE} aria-label="Previous project">
              <ArrowLeft className="w-5 h-5" />
            </button>
            <button type="button" onClick={showNext} className={PROJECT_NAV_BUTTON_STYLE} aria-label="Next project">
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="bg-white rounded-3xl border-3 border-stone-900 shadow-[8px_8px_0px_#18181B] overflow-hidden">
          <div className="flex items-center gap-3 px-4 sm:px-5 py-3 bg-stone-100 border-b-2 border-stone-900">
            <div className="flex gap-1.5" aria-hidden="true">
              <span className="w-3 h-3 rounded-full bg-[#EF4444] border border-stone-900" />
              <span className="w-3 h-3 rounded-full bg-[#FACC15] border border-stone-900" />
              <span className="w-3 h-3 rounded-full bg-[#22C55E] border border-stone-900" />
            </div>
            <div className="flex-1 min-w-0 px-3 py-1.5 rounded-lg bg-white border border-stone-300 text-[11px] sm:text-xs text-stone-500 font-medium truncate">
              {project.url}
            </div>
            <a href={project.url} target="_blank" rel="noopener noreferrer" className="p-1.5 rounded-lg text-stone-600 hover:text-blue-600 hover:bg-white transition-colors" aria-label={`Open ${project.title} in a new tab`}>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          <div className="relative aspect-[16/9] bg-stone-100 overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div key={project.url} initial={{ opacity: 0, x: 28 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -28 }} transition={{ duration: 0.28, ease: 'easeOut' }} className="absolute inset-0">
                <iframe src={project.url} title={`Live preview of ${project.title}`} className="w-full h-full border-0 bg-white" loading="lazy" sandbox="allow-forms allow-modals allow-popups allow-same-origin allow-scripts" />
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-5 items-center p-5 sm:p-7 border-t-2 border-stone-900">
            <AnimatePresence mode="wait">
              <motion.div key={project.title} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.2 }}>
                <div className="flex items-center gap-2 mb-2">
                  <span className="font-mono text-xs font-black text-blue-600">0{activeIndex + 1} / 0{WEB_PROJECTS.length}</span>
                  <span className="w-1 h-1 rounded-full bg-stone-400" />
                  <span className="text-xs font-black uppercase tracking-wider text-stone-500">{project.category}</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-black text-stone-900 tracking-tight">{project.title}</h3>
                <p className="text-sm sm:text-base text-stone-600 font-medium mt-2 max-w-2xl">{project.description}</p>
              </motion.div>
            </AnimatePresence>
            <a href={project.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#2563EB] text-white border-2 border-stone-900 font-black text-sm shadow-[3px_3px_0px_#18181B] hover:bg-[#1D4ED8] active:translate-y-0.5 active:shadow-none transition-all">
              OPEN LIVE SITE <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div className="flex items-center justify-center gap-2.5 mt-8" role="tablist" aria-label="Choose a web project">
          {WEB_PROJECTS.map((item, index) => (
            <button key={item.url} type="button" onClick={() => setActiveIndex(index)} className={`h-3 rounded-full border border-stone-900 transition-all cursor-pointer ${activeIndex === index ? 'w-9 bg-[#2563EB]' : 'w-3 bg-white hover:bg-[#FACC15]'}`} aria-label={`Show project ${index + 1}: ${item.title}`} aria-selected={activeIndex === index} role="tab" />
          ))}
        </div>
      </div>
    </section>
  );
}
