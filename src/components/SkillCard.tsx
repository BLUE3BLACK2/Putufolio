'use client';

import React from 'react';
import {
  FileCode2,
  Palette,
  Terminal,
  Atom,
  Zap,
  Server,
  Code,
  Database,
  Layout,
  Lightbulb,
  Sparkles,
  GitBranch,
  Code2,
  Image as ImageIcon
} from 'lucide-react';
import { SkillItem } from '@/types';
import { SpotlightCard } from './ui/SpotlightCard';

interface SkillCardProps {
  skill: SkillItem;
  categoryColor: string;
}

export function SkillCard({ skill, categoryColor }: SkillCardProps) {
  const getSkillIcon = (iconName: string) => {
    const iconProps = { className: 'w-5 h-5', style: { color: categoryColor } };
    switch (iconName) {
      case 'FileCode2':
        return <FileCode2 {...iconProps} />;
      case 'Palette':
        return <Palette {...iconProps} />;
      case 'Terminal':
        return <Terminal {...iconProps} />;
      case 'Atom':
        return <Atom {...iconProps} />;
      case 'Zap':
        return <Zap {...iconProps} />;
      case 'Server':
        return <Server {...iconProps} />;
      case 'Code':
        return <Code {...iconProps} />;
      case 'Database':
        return <Database {...iconProps} />;
      case 'Layout':
        return <Layout {...iconProps} />;
      case 'Lightbulb':
        return <Lightbulb {...iconProps} />;
      case 'Sparkles':
        return <Sparkles {...iconProps} />;
      case 'GitBranch':
        return <GitBranch {...iconProps} />;
      case 'Code2':
        return <Code2 {...iconProps} />;
      case 'Image':
        return <ImageIcon {...iconProps} />;
      default:
        return <Code2 {...iconProps} />;
    }
  };

  return (
    <SpotlightCard
      variant="default"
      className="p-5 border-2 border-stone-800/80 bg-white rounded-2xl shadow-[3px_3px_0px_rgba(24,24,27,0.8)] hover:shadow-[5px_5px_0px_#18181B] hover:-translate-y-1 transition-all duration-200"
    >
      <div className="flex items-start justify-between gap-3 mb-2.5">
        <div className="flex items-center gap-3">
          <div
            className="p-2.5 rounded-xl border border-stone-200 bg-stone-50 flex items-center justify-center shrink-0"
            style={{ backgroundColor: `${categoryColor}12` }}
          >
            {getSkillIcon(skill.iconName)}
          </div>
          <div>
            <h4 className="font-extrabold text-stone-900 text-base leading-tight">
              {skill.name}
            </h4>
            {skill.tag && (
              <span className="text-[10px] font-bold uppercase tracking-wider text-stone-600">
                {skill.tag}
              </span>
            )}
          </div>
        </div>
      </div>
      <p className="text-xs text-stone-600 font-medium leading-relaxed mt-2">
        {skill.description}
      </p>
    </SpotlightCard>
  );
}
