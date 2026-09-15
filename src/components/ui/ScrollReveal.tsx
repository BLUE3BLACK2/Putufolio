'use client';

import { motion, useReducedMotion } from 'framer-motion';
import type { ReactNode } from 'react';

interface ScrollRevealProps {
  children: ReactNode;
}

export function ScrollReveal({ children }: ScrollRevealProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={reduceMotion ? false : { opacity: 0, y: 28 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ amount: 0.08, once: false, margin: '-4% 0px -4% 0px' }}
      transition={{ duration: 0.62, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}
