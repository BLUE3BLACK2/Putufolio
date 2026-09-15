'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Code2, Database, Layout, Plug, Server, Wrench } from 'lucide-react';
import { SKILL_CATEGORIES } from '@/data/portfolioData';
import { SkillCard } from './SkillCard';
import { UnderlineScribble } from './ui/Doodles';

export function Skills() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categoryFilterIcons: Record<string, React.ReactNode> = {
    'All': <Sparkles className="w-3.5 h-3.5" />,
    'Frontend Development': <Code2 className="w-3.5 h-3.5" />,
    'Backend Development': <Server className="w-3.5 h-3.5" />,
    'Database Management': <Database className="w-3.5 h-3.5" />,
    'Platforms & Integrations': <Plug className="w-3.5 h-3.5" />,
    'UI/UX Design': <Layout className="w-3.5 h-3.5" />,
    'Developer Tools': <Wrench className="w-3.5 h-3.5" />,
  };

  const categories = ['All', ...SKILL_CATEGORIES.map((c) => c.title)];

  const displayedCategories =
    selectedCategory === 'All'
      ? SKILL_CATEGORIES
      : SKILL_CATEGORIES.filter((c) => c.title === selectedCategory);

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-stone-300 text-xs font-black uppercase tracking-wider text-blue-600 mb-3 shadow-xs">
            <span className="w-2 h-2 rounded-full bg-blue-600"></span>
            TECHNICAL SKILLS
          </div>

          <div className="relative mb-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-stone-900 tracking-tight">
              WHAT I WORK WITH
            </h2>
            <div className="w-48 mx-auto mt-2">
              <UnderlineScribble className="w-full h-3 text-amber-400" />
            </div>
          </div>

          <p className="text-base sm:text-lg text-stone-600 font-medium max-w-xl">
            Tools and technologies I use to turn ideas into digital products.
          </p>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {categories.map((cat) => {
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-black transition-all duration-200 border-2 cursor-pointer ${
                    isActive
                      ? 'bg-stone-900 text-white border-stone-900 shadow-[3px_3px_0px_#FACC15] -translate-y-0.5'
                      : 'bg-white text-stone-700 border-stone-300 hover:border-stone-900 hover:bg-stone-50'
                  }`}
                >
                  {categoryFilterIcons[cat]}
                  <span>{cat.replace(' Development', '').replace(' Management', '')}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Categories & Skill Cards Grid */}
        <div className="space-y-12">
          {displayedCategories.map((category) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white/70 backdrop-blur-sm p-6 sm:p-8 rounded-3xl border-2 border-stone-900/40 shadow-xs"
            >
              {/* Category Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-5 mb-6 border-b border-stone-200">
                <div className="flex items-center gap-3">
                  <span
                    className="w-3.5 h-3.5 rounded-full border-2 border-stone-900"
                    style={{ backgroundColor: category.color }}
                  />
                  <h3 className="text-xl sm:text-2xl font-black text-stone-900 tracking-tight">
                    {category.title}
                  </h3>
                </div>
                <p className="text-xs sm:text-sm font-medium text-stone-500 max-w-md">
                  {category.description}
                </p>
              </div>

              {/* Skills Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {category.skills.map((skill) => (
                  <SkillCard
                    key={skill.name}
                    skill={skill}
                    categoryColor={category.color}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
