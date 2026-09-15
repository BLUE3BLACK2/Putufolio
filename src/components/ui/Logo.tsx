import { Sparkles } from 'lucide-react';

type LogoProps = {
  className?: string;
  size?: 'sm' | 'md';
};

export function Logo({ className = '', size = 'md' }: LogoProps) {
  const sizeClassName = size === 'sm' ? 'text-xl' : 'text-2xl md:text-[1.7rem]';

  return (
    <span className={`group/logo inline-flex items-center font-black tracking-[-0.045em] ${sizeClassName} ${className}`}>
      <span className="text-stone-900">Putu</span>
      <span className="relative text-[#2563EB]">
        Folio
        <Sparkles
          aria-hidden="true"
          className="absolute -right-4 -top-2.5 w-4 h-4 text-amber-500 fill-amber-400 transition-transform duration-300 group-hover/logo:rotate-45"
        />
      </span>
    </span>
  );
}
