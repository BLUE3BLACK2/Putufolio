'use client';

import React from 'react';
import { twMerge } from 'tailwind-merge';
import { ArrowRight } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'yellow' | 'blue' | 'outline' | 'dark' | 'ghost' | 'red';
  size?: 'sm' | 'md' | 'lg';
  showArrow?: boolean;
  href?: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
}

export function Button({
  variant = 'yellow',
  size = 'md',
  showArrow = false,
  href,
  icon,
  children,
  className,
  ...props
}: ButtonProps) {
  const baseStyles =
    'group relative inline-flex items-center justify-center font-bold tracking-tight rounded-full transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 active:scale-95 select-none cursor-pointer';

  const sizeStyles = {
    sm: 'text-xs px-4 py-2 gap-1.5',
    md: 'text-sm px-6 py-3 gap-2',
    lg: 'text-base px-8 py-4 gap-2.5',
  }[size];

  const variantStyles = {
    yellow:
      'bg-[#FACC15] text-[#18181B] border-2 border-[#18181B] hover:bg-[#FBBF24] hover:shadow-[4px_4px_0px_#18181B] hover:-translate-y-0.5 focus-visible:ring-amber-500',
    blue: 'bg-[#2563EB] text-white border-2 border-[#18181B] hover:bg-[#1D4ED8] hover:shadow-[4px_4px_0px_#18181B] hover:-translate-y-0.5 focus-visible:ring-blue-600',
    red: 'bg-[#EF4444] text-white border-2 border-[#18181B] hover:bg-[#DC2626] hover:shadow-[4px_4px_0px_#18181B] hover:-translate-y-0.5 focus-visible:ring-red-500',
    outline:
      'bg-white/80 text-[#18181B] border-2 border-[#18181B] hover:bg-[#18181B] hover:text-white hover:shadow-[4px_4px_0px_rgba(0,0,0,0.15)] hover:-translate-y-0.5 focus-visible:ring-stone-400',
    dark: 'bg-[#18181B] text-white border-2 border-[#18181B] hover:bg-stone-800 hover:shadow-[4px_4px_0px_#FACC15] hover:-translate-y-0.5 focus-visible:ring-stone-900',
    ghost:
      'bg-transparent text-[#18181B] hover:bg-black/5 hover:text-blue-600 focus-visible:ring-blue-500',
  }[variant];

  const content = (
    <>
      {icon && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
      {showArrow && (
        <ArrowRight className="w-4 h-4 shrink-0 transition-transform duration-200 group-hover:translate-x-1" />
      )}
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        className={twMerge(baseStyles, sizeStyles, variantStyles, className)}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      className={twMerge(baseStyles, sizeStyles, variantStyles, className)}
      {...props}
    >
      {content}
    </button>
  );
}
