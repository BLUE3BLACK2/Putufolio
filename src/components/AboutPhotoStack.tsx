'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { MousePointerClick } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

const PHOTOS = [
  { src: '/images/about-gallery/photo-01.webp', alt: 'Rubby enjoying a quiet afternoon', position: 'center 48%' },
  { src: '/images/about-gallery/photo-02.webp', alt: 'Rubby sharing a moment with friends', position: 'center' },
  { src: '/images/about-gallery/photo-03.webp', alt: 'Rubby and friends in traditional attire at campus', position: 'center 72%' },
  { src: '/images/about-gallery/photo-04.webp', alt: 'Rubby and friends after playing sports', position: 'center' },
  { src: '/images/about-gallery/photo-05.webp', alt: 'Rubby and friends in a photo booth collage', position: 'center 42%' },
  { src: '/images/about-gallery/photo-06.webp', alt: 'Rubby and friends celebrating Halloween', position: 'center' },
  { src: '/images/about-gallery/photo-07.webp', alt: 'Rubby and classmates at Universitas Pendidikan Ganesha', position: 'center' },
  { src: '/images/about-gallery/photo-08.webp', alt: 'Rubby and friends at an evening campus event', position: 'center 60%' },
  { src: '/images/about-gallery/photo-09.webp', alt: 'Rubby spending an evening outdoors with friends', position: 'center' },
  { src: '/images/about-gallery/photo-10.webp', alt: 'Rubby exploring a mountain landscape', position: 'center 68%' },
  { src: '/images/about-gallery/photo-11.webp', alt: 'Rubby and friends at International Week', position: 'center 55%' },
  { src: '/images/about-gallery/photo-12.webp', alt: 'Rubby taking part in an outdoor team activity', position: 'center' },
  { src: '/images/about-gallery/photo-13.webp', alt: 'A playful portrait of Rubby wearing two pairs of glasses', position: 'center 42%' },
];

const CARD_STATES = [
  { x: 0, y: 0, rotate: 0, scale: 1, zIndex: 30 },
  { x: -13, y: -12, rotate: -2.5, scale: 0.98, zIndex: 20 },
  { x: 12, y: -5, rotate: 2, scale: 0.96, zIndex: 10 },
];

export function AboutPhotoStack() {
  const [activeIndex, setActiveIndex] = useState(0);
  const visiblePhotos = CARD_STATES.map((_, offset) => PHOTOS[(activeIndex + offset) % PHOTOS.length]);

  const showNextPhoto = () => {
    setActiveIndex((currentIndex) => (currentIndex + 1) % PHOTOS.length);
  };

  return (
    <div className="relative aspect-square">
      <AnimatePresence initial={false}>
        {visiblePhotos.map((photo, depth) => {
          const cardState = CARD_STATES[depth];
          const isActive = depth === 0;

          return (
            <motion.button
              key={photo.src}
              type="button"
              onClick={isActive ? showNextPhoto : undefined}
              tabIndex={isActive ? 0 : -1}
              aria-label={isActive ? 'Show the next photo' : undefined}
              initial={{ x: 18, y: -8, rotate: 3, scale: 0.94, opacity: 0 }}
              animate={{ ...cardState, opacity: 1 }}
              exit={{ x: -150, y: 24, rotate: -10, scale: 0.94, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 280, damping: 25 }}
              whileHover={isActive ? { y: -5, rotate: -0.5 } : undefined}
              whileTap={isActive ? { scale: 0.98 } : undefined}
              className={`absolute inset-0 rounded-3xl border-3 border-stone-900 bg-white p-2 text-left ${
                isActive
                  ? 'cursor-pointer shadow-[6px_6px_0px_#18181B] focus-visible:outline-4 focus-visible:outline-offset-4 focus-visible:outline-[#2563EB]'
                  : 'pointer-events-none shadow-[3px_3px_0px_#18181B]'
              }`}
            >
              <span className="relative block w-full h-full overflow-hidden rounded-2xl bg-stone-100">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(max-width: 1024px) 90vw, 38vw"
                  className="object-cover"
                  style={{ objectPosition: photo.position }}
                />
              </span>
            </motion.button>
          );
        })}
      </AnimatePresence>

      <div className="absolute -bottom-5 -right-4 z-40 bg-[#FACC15] px-4 py-2 rounded-2xl border-2 border-stone-900 shadow-[3px_3px_0px_#18181B] flex items-center gap-2 pointer-events-none">
        <MousePointerClick className="w-5 h-5" />
        <span className="text-xs font-black text-stone-900">Click for next photo</span>
      </div>
    </div>
  );
}
