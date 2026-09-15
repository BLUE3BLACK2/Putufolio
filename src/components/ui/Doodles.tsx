'use client';

import React from 'react';

interface DoodleProps {
  className?: string;
  style?: React.CSSProperties;
}

export function CrownDoodle({ className = 'w-12 h-10 text-yellow-400', style }: DoodleProps) {
  return (
    <svg viewBox="0 0 100 70" fill="currentColor" stroke="#18181B" strokeWidth="4" strokeLinejoin="round" className={className} style={style}>
      <path d="M10 60 L20 20 L45 45 L50 15 L70 45 L90 20 L95 60 Z" />
      <circle cx="20" cy="20" r="5" fill="#EF4444" stroke="#18181B" strokeWidth="3" />
      <circle cx="50" cy="15" r="5" fill="#3B82F6" stroke="#18181B" strokeWidth="3" />
      <circle cx="90" cy="20" r="5" fill="#10B981" stroke="#18181B" strokeWidth="3" />
    </svg>
  );
}

export function UnderlineScribble({ className = 'w-full h-4 text-yellow-400', style }: DoodleProps) {
  return (
    <svg viewBox="0 0 300 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} style={style}>
      <path
        d="M 4 16 C 50 6, 120 22, 170 12 C 220 2, 270 20, 296 10"
        stroke="currentColor"
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function DoubleUnderline({ className = 'w-full h-5 text-blue-500', style }: DoodleProps) {
  return (
    <svg viewBox="0 0 280 20" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} style={style}>
      <path
        d="M 3 8 C 80 2, 180 14, 275 6"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <path
        d="M 15 15 C 90 10, 190 20, 265 13"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        opacity="0.85"
      />
    </svg>
  );
}

export function SparkleDoodle({ className = 'w-6 h-6 text-yellow-400', style }: DoodleProps) {
  return (
    <svg viewBox="0 0 36 36" fill="currentColor" stroke="#18181B" strokeWidth="2.5" strokeLinejoin="round" className={className} style={style}>
      <path d="M 18 2 L 21 13 L 34 18 L 21 23 L 18 34 L 15 23 L 2 18 L 15 13 Z" />
    </svg>
  );
}

export function StarDoodle({ className = 'w-8 h-8 text-yellow-400', style }: DoodleProps) {
  return (
    <svg viewBox="0 0 50 50" fill="currentColor" stroke="#18181B" strokeWidth="3" strokeLinejoin="round" className={className} style={style}>
      <polygon points="25,2 32,18 49,18 35,29 40,46 25,36 10,46 15,29 1,18 18,18" />
    </svg>
  );
}

export function ArrowDoodle({ className = 'w-16 h-12 text-blue-500', style }: DoodleProps) {
  return (
    <svg viewBox="0 0 100 80" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" className={className} style={style}>
      <path d="M 15 65 C 35 15, 75 20, 85 45" />
      <path d="M 68 45 L 85 45 L 85 28" />
    </svg>
  );
}

export function CurvedArrow({ className = 'w-16 h-12 text-yellow-400', style }: DoodleProps) {
  return (
    <svg viewBox="0 0 100 60" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" className={className} style={style}>
      <path d="M 10 30 Q 50 5 80 35" />
      <path d="M 65 35 L 80 35 L 80 20" />
    </svg>
  );
}

export function HeartDoodle({ className = 'w-8 h-8 text-rose-500', style }: DoodleProps) {
  return (
    <svg viewBox="0 0 40 40" fill="currentColor" stroke="#18181B" strokeWidth="2.5" strokeLinejoin="round" className={className} style={style}>
      <path d="M 20 34 C 20 34 5 24 5 13 C 5 7 10 3 15 6 C 18 8 20 12 20 12 C 20 12 22 8 25 6 C 30 3 35 7 35 13 C 35 24 20 34 20 34 Z" />
    </svg>
  );
}

export function SmileyDoodle({ className = 'w-10 h-10 text-yellow-400', style }: DoodleProps) {
  return (
    <svg viewBox="0 0 50 50" fill="none" className={className} style={style}>
      <circle cx="25" cy="25" r="21" fill="#FACC15" stroke="#18181B" strokeWidth="3.5" />
      <circle cx="17" cy="20" r="3" fill="#18181B" />
      <circle cx="33" cy="20" r="3" fill="#18181B" />
      <path d="M 16 30 Q 25 40 34 30" stroke="#18181B" strokeWidth="3.5" strokeLinecap="round" />
    </svg>
  );
}

export function RocketIllustration({ className = 'w-48 h-48', style }: DoodleProps) {
  return (
    <svg viewBox="-20 -15 240 230" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} style={style}>
      {/* Flame trail */}
      <g transform="translate(30, 110) rotate(-45)">
        <path d="M 30 0 C 15 35, 45 45, 30 75 C 15 45, 0 35, 30 0 Z" fill="#EF4444" stroke="#18181B" strokeWidth="2.5" />
        <path d="M 30 10 C 20 30, 40 38, 30 55 C 20 38, 10 30, 30 10 Z" fill="#FACC15" />
      </g>
      
      {/* Rocket Body */}
      <g transform="translate(60, 30) rotate(45)">
        {/* Fins */}
        <path d="M 15 70 L -10 100 L 20 95 Z" fill="#EF4444" stroke="#18181B" strokeWidth="3.5" strokeLinejoin="round" />
        <path d="M 65 70 L 90 100 L 60 95 Z" fill="#EF4444" stroke="#18181B" strokeWidth="3.5" strokeLinejoin="round" />
        <path d="M 35 75 L 45 75 L 45 105 L 35 105 Z" fill="#FACC15" stroke="#18181B" strokeWidth="3" />

        {/* Main Hull */}
        <path d="M 10 70 C 10 25, 40 -10, 40 -10 C 40 -10, 70 25, 70 70 L 70 85 L 10 85 Z" fill="#FFFFFF" stroke="#18181B" strokeWidth="4" strokeLinejoin="round" />
        
        {/* Rocket Nose Tip */}
        <path d="M 23 20 C 30 5, 40 -10, 40 -10 C 40 -10, 50 5, 57 20 Z" fill="#EF4444" stroke="#18181B" strokeWidth="3.5" />

        {/* Porthole */}
        <circle cx="40" cy="45" r="16" fill="#3B82F6" stroke="#18181B" strokeWidth="3.5" />
        <circle cx="40" cy="45" r="11" fill="#93C5FD" />
        <circle cx="36" cy="41" r="3" fill="#FFFFFF" />
      </g>

      {/* Decorative stars */}
      <circle cx="160" cy="30" r="3" fill="#FDE047" />
      <circle cx="180" cy="65" r="4" fill="#FDE047" />
      <circle cx="40" cy="35" r="3" fill="#FDE047" />
    </svg>
  );
}

export function CloudDoodle({ className = 'w-32 h-16 text-white/30', style }: DoodleProps) {
  return (
    <svg viewBox="0 0 120 60" fill="currentColor" className={className} style={style}>
      <path d="M 20 45 C 10 45 5 35 12 28 C 10 18 22 10 35 14 C 42 5 60 5 68 15 C 78 8 95 12 95 24 C 105 25 110 38 100 45 Z" />
    </svg>
  );
}

export function ThanksStamp({ className = 'w-36 h-36', style }: DoodleProps) {
  return (
    <div
      style={style}
      className={`relative inline-flex items-center justify-center p-4 rounded-full border-4 border-dashed border-stone-800 bg-[#FAF7F2] rotate-[-8deg] shadow-lg ${className}`}
    >
      <div className="text-center font-handwriting">
        <p className="text-xl font-bold text-stone-900 leading-tight">Thanks for</p>
        <p className="text-2xl font-bold text-blue-600 leading-tight">scrolling!</p>
        <span className="text-xs font-sans font-bold bg-yellow-300 text-stone-900 px-2 py-0.5 rounded-full mt-1 inline-block border border-stone-900">
          🚀 100% Passion
        </span>
      </div>
    </div>
  );
}
