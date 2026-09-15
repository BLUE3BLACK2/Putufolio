'use client';

import React, { useCallback, useState } from 'react';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import { ShowcaseItem } from '@/types';
import { SpotlightCard } from './ui/SpotlightCard';
import { ImageWithFallback } from './ui/ImageWithFallback';
import { ArtworkLightbox } from './ArtworkLightbox';

interface ShowcaseCardProps {
  item: ShowcaseItem;
}

export function ShowcaseCard({ item }: ShowcaseCardProps) {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const closeLightbox = useCallback(() => setIsLightboxOpen(false), []);
  const fallbackMap: Record<string, string> = {
    'Art': '/images/Illustration-1.svg',
    'Poster': '/images/Poster-1.svg',
  };

  return (
    <SpotlightCard
      variant="default"
      className="p-0 border-3 border-stone-900 shadow-[6px_6px_0px_#18181B] bg-white rounded-3xl overflow-hidden group cursor-pointer"
    >
      <div className="relative aspect-[4/5] w-full overflow-hidden bg-stone-100">
        <ImageWithFallback
          src={item.image}
          fallbackSrc={fallbackMap[item.category] || '/images/UI-Design.svg'}
          alt={item.title}
          width={600}
          height={450}
          className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
        />

        <div className="absolute top-4 left-4 z-10">
          <span
            className="px-3.5 py-1 rounded-full text-xs font-black text-white shadow-sm border border-stone-900 flex items-center gap-1.5"
            style={{ backgroundColor: item.accentColor }}
          >
            <Sparkles className="w-3 h-3" />
            {item.category}
          </span>
        </div>

        <div className="absolute inset-0 bg-stone-950/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
          <div className="w-full flex items-center justify-between text-white">
            <div>
              <p className="text-xs font-bold text-yellow-400 uppercase tracking-wider">
                Creative Asset
              </p>
              <h4 className="text-lg font-black leading-tight text-white">
                {item.title}
              </h4>
            </div>
            <button type="button" onClick={() => setIsLightboxOpen(true)} className="w-10 h-10 rounded-full bg-white text-stone-900 flex items-center justify-center transform translate-y-2 group-hover:translate-y-0 group-hover:translate-x-1 hover:bg-[#FACC15] transition-all duration-300 shadow-md shrink-0 cursor-pointer" aria-label={`View ${item.title} in full`}>
              <ArrowUpRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      <div className="p-6">
        <h4 className="font-black text-stone-900 text-lg sm:text-xl mb-2 group-hover:text-blue-600 transition-colors">
          {item.title}
        </h4>
        <p className="text-xs sm:text-sm text-stone-600 font-medium mb-4 leading-relaxed">
          {item.description}
        </p>

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
      <ArtworkLightbox isOpen={isLightboxOpen} image={item.image} title={item.title} onClose={closeLightbox} />
    </SpotlightCard>
  );
}
