'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import { animate, AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { ChevronDown, ChevronUp, Palette } from 'lucide-react';
import { SHOWCASE_ITEMS } from '@/data/portfolioData';
import { ShowcaseCard } from './ShowcaseCard';
import { Button } from './ui/Button';
import { UnderlineScribble } from './ui/Doodles';

const FILTERS = ['All', 'Art', 'Poster'] as const;
const INITIAL_VISIBLE_ITEMS = 3;

type ShowcaseFilter = (typeof FILTERS)[number];

export function Showcase() {
  const [activeFilter, setActiveFilter] = useState<ShowcaseFilter>('All');
  const [showAll, setShowAll] = useState(false);
  const galleryHeadingRef = useRef<HTMLDivElement>(null);
  const scrollAnimationRef = useRef<{ stop: () => void } | null>(null);
  const [isCollapsing, setIsCollapsing] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => () => scrollAnimationRef.current?.stop(), []);

  const filteredItems = useMemo(
    () => activeFilter === 'All' ? SHOWCASE_ITEMS : SHOWCASE_ITEMS.filter((item) => item.category === activeFilter),
    [activeFilter],
  );

  const visibleItems = showAll ? filteredItems : filteredItems.slice(0, INITIAL_VISIBLE_ITEMS);
  const hasMoreItems = filteredItems.length > INITIAL_VISIBLE_ITEMS;

  const selectFilter = (filter: ShowcaseFilter) => {
    setActiveFilter(filter);
    setShowAll(false);
  };

  const toggleGallery = () => {
    if (!showAll) {
      setShowAll(true);
      return;
    }
    const heading = galleryHeadingRef.current;
    if (!heading || isCollapsing) return;

    setIsCollapsing(true);
    const margin = parseFloat(getComputedStyle(heading).scrollMarginTop) || 0;
    const target = Math.max(0, heading.getBoundingClientRect().top + window.scrollY - margin);
    scrollAnimationRef.current = animate(window.scrollY, target, {
      duration: reduceMotion ? 0 : 0.7,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (top) => window.scrollTo({ top, behavior: 'instant' }),
      onComplete: () => {
        heading.focus({ preventScroll: true });
        setShowAll(false);
        setIsCollapsing(false);
        scrollAnimationRef.current = null;
      },
    });
  };

  return (
    <section id="showcase" className="py-24 relative overflow-hidden bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div ref={galleryHeadingRef} tabIndex={-1} className="section-scroll-target flex flex-col items-center text-center max-w-3xl mx-auto mb-12 focus:outline-none">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-stone-300 text-xs font-black uppercase tracking-wider text-blue-600 mb-3 shadow-xs">
            <Palette className="w-3.5 h-3.5" />
            CREATIVE SHOWCASE
          </div>
          <div className="relative mb-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-stone-900 tracking-tight">
              My Gallery
            </h2>
            <div className="w-56 mx-auto mt-2">
              <UnderlineScribble className="w-full h-3 text-amber-400" />
            </div>
          </div>
          <p className="text-base sm:text-lg text-stone-600 font-medium max-w-xl">
            A collection of my illustrations, visual experiments, and graphic posters.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2 mt-7" aria-label="Filter creative work">
            {FILTERS.map((filter) => (
              <Button
                key={filter}
                type="button"
                size="sm"
                variant={activeFilter === filter ? 'yellow' : 'outline'}
                onClick={() => selectFilter(filter)}
                aria-pressed={activeFilter === filter}
              >
                {filter}
              </Button>
            ))}
          </div>
        </div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {visibleItems.map((item) => (
              <motion.div
                layout
                key={item.id}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 16 }}
                transition={{ duration: 0.3 }}
              >
                <ShowcaseCard item={item} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {hasMoreItems && (
          <div className="flex justify-center mt-10">
            <Button
              type="button"
              variant="outline"
              size="md"
              icon={showAll ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
              onClick={toggleGallery}
              aria-expanded={showAll}
              disabled={isCollapsing}
            >
              {showAll ? 'SHOW LESS' : 'SEE OTHER'}
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
