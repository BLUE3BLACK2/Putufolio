'use client';

import React from 'react';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import { ShowcaseItem } from '@/types';
import { SpotlightCard } from './ui/SpotlightCard';
import { ImageWithFallback } from './ui/ImageWithFallback';

interface ShowcaseCardProps {
  item: ShowcaseItem;
}

export function ShowcaseCard({ item }: ShowcaseCardProps) {
  const fallbackMap: Record<string, string> = {
    'UI Design': '/images/UI-Design.svg',
    'Poster': '/images/Poster-1.svg',
    'Illustration': '/images/Illustration-1.svg',
  };

  return (
    <SpotlightCard
      variant="default"
      className="p-0 border-3 border-stone-900 shadow-[6px_6px_0px_#18181B] bg-white rounded-3xl overflow-hidden group cursor-pointer"
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-stone-100">
        {/* Image */}
        <ImageWithFallback
          src={item.image}
          fallbackSrc={fallbackMap[item.category] || '/images/UI-Design.svg'}
          alt={item.title}
          width={600}
          height={450}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Category Pill Tag */}
        <div className="absolute top-4 left-4 z-10">
          <span
            className="px-3.5 py-1 rounded-full text-xs font-black text-white shadow-sm border border-stone-900 flex items-center gap-1.5"
            style={{ backgroundColor: item.accentColor }}
          >
            <Sparkles className="w-3 h-3" />
            {item.category}
          </span>
        </div>

        {/* Hover Overlay with Arrow */}
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-stone-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
          <div className="w-full flex items-center justify-between text-white">
            <div>
              <p className="text-xs font-bold text-yellow-400 uppercase tracking-wider">
                Creative Asset
              </p>
              <h4 className="text-lg font-black leading-tight text-white">
                {item.title}
              </h4>
            </div>
            <div className="w-10 h-10 rounded-full bg-white text-stone-900 flex items-center justify-center transform translate-y-2 group-hover:translate-y-0 group-hover:translate-x-1 transition-transform duration-300 shadow-md shrink-0">
              <ArrowUpRight className="w-5 h-5" />
            </div>
          </div>
        </div>
      </div>

      {/* Card Body */}
      <div className="p-6">
        <h4 className="font-black text-stone-900 text-lg sm:text-xl mb-2 group-hover:text-blue-600 transition-colors">
          {item.title}
        </h4>
        <p className="text-xs sm:text-sm text-stone-600 font-medium mb-4 leading-relaxed">
          {item.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 pt-3 border-t border-stone-100">
          {item.tags.map((tag) => (
            <span
              key={tag}
              className="text-[11px] font-bold px-2.5 py-0.5 rounded-md bg-stone-100 text-stone-700 border border-stone-200"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </SpotlightCard>
  );
}
