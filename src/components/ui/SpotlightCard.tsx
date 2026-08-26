'use client';

import React, { useRef } from 'react';
import { twMerge } from 'tailwind-merge';

interface SpotlightCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  variant?: 'blue' | 'yellow' | 'red' | 'default';
  hoverLift?: boolean;
}

export function SpotlightCard({
  children,
  className,
  variant = 'default',
  hoverLift = true,
  ...props
}: SpotlightCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    // Check if pointer is touch
    if (!cardRef.current) return;
    if (window.matchMedia && window.matchMedia('(pointer: coarse)').matches) return;

    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    cardRef.current.style.setProperty('--mouse-x', `${x}px`);
    cardRef.current.style.setProperty('--mouse-y', `${y}px`);
    cardRef.current.style.setProperty('--spotlight-opacity', '1');
  };

  const handleMouseLeave = () => {
    if (!cardRef.current) return;
    cardRef.current.style.setProperty('--spotlight-opacity', '0');
  };

  const variantClass = {
    blue: 'spotlight-card',
    yellow: 'spotlight-card spotlight-card-yellow',
    red: 'spotlight-card spotlight-card-red',
    default: 'spotlight-card',
  }[variant];

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={twMerge(
        variantClass,
        hoverLift && 'hover:-translate-y-1.5 hover:shadow-xl transition-all duration-300',
        'bg-white relative rounded-3xl p-6 md:p-8',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
