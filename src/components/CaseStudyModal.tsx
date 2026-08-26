'use client';

import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Scan, Search, Lightbulb, Hammer, Sparkles, AlertCircle, CheckCircle2, UserCheck, Cpu } from 'lucide-react';
import { FEATURED_PROJECT } from '@/data/portfolioData';
import { ImageWithFallback } from './ui/ImageWithFallback';
import { Button } from './ui/Button';

interface CaseStudyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CaseStudyModal({ isOpen, onClose }: CaseStudyModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  const stepIcons = [
    <Scan key="scan" className="w-5 h-5" />,
    <Search key="search" className="w-5 h-5" />,
    <Lightbulb key="lightbulb" className="w-5 h-5" />,
    <Hammer key="hammer" className="w-5 h-5" />,
    <Sparkles key="sparkles" className="w-5 h-5" />,
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop Blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-stone-950/70 backdrop-blur-sm"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-4xl bg-[#FAF7F2] rounded-3xl border-3 border-stone-900 shadow-[8px_8px_0px_#18181B] z-10 overflow-hidden my-8 max-h-[90vh] flex flex-col"
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-5 bg-white border-b-2 border-stone-900 shrink-0">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 bg-blue-600 text-white font-black text-xs uppercase tracking-wider rounded-full">
                  Case Study
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-stone-900">
                  ROCKY — Project Deep Dive
                </h3>
              </div>
              <button
                onClick={onClose}
                className="p-2 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-900 border border-stone-300 transition-colors"
                aria-label="Close Case Study"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Scrollable Content Body */}
            <div className="p-6 sm:p-8 overflow-y-auto space-y-8">
              
              {/* Overview & Metadata */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 bg-white rounded-2xl border-2 border-stone-900 shadow-xs">
                  <div className="flex items-center gap-2 text-blue-600 font-bold text-xs uppercase mb-1">
                    <UserCheck className="w-4 h-4" />
                    Role
                  </div>
                  <p className="font-extrabold text-stone-900 text-lg">Project Leader</p>
                  <p className="text-xs text-stone-500 mt-0.5">Architecture &amp; Strategy</p>
                </div>

                <div className="p-4 bg-white rounded-2xl border-2 border-stone-900 shadow-xs">
                  <div className="flex items-center gap-2 text-emerald-600 font-bold text-xs uppercase mb-1">
                    <Cpu className="w-4 h-4" />
                    Technology
                  </div>
                  <p className="font-extrabold text-stone-900 text-lg">Image Scanning + AI</p>
                  <p className="text-xs text-stone-500 mt-0.5">Computer Vision &amp; LLM</p>
                </div>

                <div className="p-4 bg-white rounded-2xl border-2 border-stone-900 shadow-xs">
                  <div className="flex items-center gap-2 text-amber-600 font-bold text-xs uppercase mb-1">
                    <Sparkles className="w-4 h-4" />
                    Core Mission
                  </div>
                  <p className="font-extrabold text-stone-900 text-lg">Circular Upcycling</p>
                  <p className="text-xs text-stone-500 mt-0.5">Sustainable Tech Impact</p>
                </div>
              </div>

              {/* Problem vs Idea Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 bg-red-50/80 rounded-2xl border-2 border-red-300">
                  <div className="flex items-center gap-2 text-red-600 font-black text-sm uppercase tracking-wider mb-2">
                    <AlertCircle className="w-4 h-4" />
                    The Challenge / Problem
                  </div>
                  <p className="text-stone-800 text-sm font-medium leading-relaxed">
                    {FEATURED_PROJECT.caseStudy.problem}
                  </p>
                </div>

                <div className="p-6 bg-emerald-50/80 rounded-2xl border-2 border-emerald-300">
                  <div className="flex items-center gap-2 text-emerald-700 font-black text-sm uppercase tracking-wider mb-2">
                    <CheckCircle2 className="w-4 h-4" />
                    The AI Solution / Concept
                  </div>
                  <p className="text-stone-800 text-sm font-medium leading-relaxed">
                    {FEATURED_PROJECT.caseStudy.idea}
                  </p>
                </div>
              </div>

              {/* 5-Step Process Flow */}
              <div className="space-y-4">
                <h4 className="text-lg font-black text-stone-900 tracking-tight flex items-center gap-2">
                  <span>How Rocky Works — 5-Step Workflow</span>
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
                  {FEATURED_PROJECT.caseStudy.process.map((step, idx) => (
                    <div
                      key={step.number}
                      className="p-4 bg-white rounded-2xl border-2 border-stone-900 shadow-[2px_2px_0px_#18181B] flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex items-center justify-between mb-3">
                          <span className="w-8 h-8 rounded-xl bg-[#FACC15] border border-stone-900 font-black text-xs flex items-center justify-center text-stone-900">
                            {step.number}
                          </span>
                          <span className="p-1.5 rounded-lg bg-stone-100 text-stone-700">
                            {stepIcons[idx]}
                          </span>
                        </div>
                        <h5 className="font-extrabold text-stone-900 text-base mb-1.5">
                          {step.title}
                        </h5>
                        <p className="text-xs text-stone-600 leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* UI Preview Area */}
              <div className="bg-stone-900 p-4 sm:p-6 rounded-2xl border-2 border-stone-900">
                <p className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-3">
                  UI Architecture &amp; Scan Flow Preview
                </p>
                <div className="rounded-xl overflow-hidden border border-stone-700 aspect-[16/9] max-h-80 w-full flex items-center justify-center">
                  <ImageWithFallback
                    src="/images/Rocky-ui.png"
                    fallbackSrc="/images/Rocky-ui.svg"
                    alt="Rocky UI preview"
                    width={700}
                    height={400}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>

            </div>

            {/* Modal Footer */}
            <div className="p-4 bg-white border-t-2 border-stone-900 flex justify-end">
              <Button onClick={onClose} variant="dark" size="sm">
                Close Case Study
              </Button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
