'use client';

import Image from 'next/image';
import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { X } from 'lucide-react';

interface ArtworkLightboxProps {
  isOpen: boolean;
  image: string;
  title: string;
  onClose: () => void;
}

export function ArtworkLightbox({ isOpen, image, title, onClose }: ArtworkLightboxProps) {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return createPortal(
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6 bg-stone-950/90" role="dialog" aria-modal="true" aria-label={`Full view of ${title}`} onClick={onClose}>
      <div className="relative flex max-w-[96vw] max-h-[94vh] items-center justify-center" onClick={(event) => event.stopPropagation()}>
        <Image src={image} alt={title} width={1600} height={2000} className="w-auto h-auto max-w-[94vw] max-h-[92vh] object-contain rounded-[14px] shadow-[0_12px_28px_rgba(0,0,0,0.28)]" priority />
        <button type="button" onClick={onClose} className="absolute top-3 right-3 w-11 h-11 rounded-xl bg-white text-stone-900 border-2 border-stone-900 grid place-items-center hover:bg-[#FACC15] active:bg-[#FACC15] transition-colors cursor-pointer" aria-label="Close full image">
          <X className="w-5 h-5" />
        </button>
      </div>
    </div>,
    document.body,
  );
}
