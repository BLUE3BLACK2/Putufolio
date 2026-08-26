'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Mail,
  Copy,
  Check,
  ArrowUpRight,
  Sparkles
} from 'lucide-react';
import { PERSONAL_INFO } from '@/data/portfolioData';
import { Button } from './ui/Button';
import { RocketIllustration, SparkleDoodle, StarDoodle, CloudDoodle } from './ui/Doodles';
import { GithubIcon, LinkedinIcon, WhatsappIcon } from './ui/SocialIcons';

export function Contact() {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const copyToClipboard = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2500);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Large Vibrant Blue Banner inspired by the reference design */}
        <div className="relative bg-[#1D4ED8] rounded-3xl border-3 border-stone-900 shadow-[10px_10px_0px_#18181B] p-8 sm:p-12 lg:p-16 text-white overflow-hidden mb-12">
          
          {/* Background Decorative Cloud Doodles */}
          <div className="absolute top-6 left-12 pointer-events-none opacity-20">
            <CloudDoodle className="w-36 h-20 text-white" />
          </div>
          <div className="absolute bottom-4 right-1/3 pointer-events-none opacity-20 hidden md:block">
            <CloudDoodle className="w-44 h-24 text-white" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
            
            {/* Left Column: Heading & CTAs */}
            <div className="lg:col-span-7 flex flex-col items-start">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-800/80 border border-blue-400/40 text-xs font-black uppercase tracking-wider text-yellow-300 mb-6">
                <Sparkles className="w-3.5 h-3.5" />
                LET&apos;S COLLABORATE
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1] mb-6">
                Let&apos;s build{' '}
                <span className="font-handwriting text-4xl sm:text-5xl md:text-6xl text-[#FACC15] block sm:inline">
                  something together.
                </span>
              </h2>

              <p className="text-base sm:text-lg text-blue-100 font-medium max-w-xl mb-8 leading-relaxed">
                Have an idea, project, or collaboration in mind? Let&apos;s connect and turn it into something meaningful.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4">
                <Button
                  href={`mailto:${PERSONAL_INFO.contact.email}`}
                  variant="yellow"
                  size="lg"
                  showArrow
                >
                  CONTACT ME
                </Button>
                <Button
                  href="#projects"
                  variant="outline"
                  size="lg"
                  className="bg-white/10 text-white border-white hover:bg-white hover:text-stone-900"
                >
                  VIEW MY WORK
                </Button>
              </div>
            </div>

            {/* Right Column: Playful Rocket Illustration Composition */}
            <div className="lg:col-span-5 flex items-center justify-center relative">
              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="relative"
              >
                <RocketIllustration className="w-56 h-56 sm:w-64 sm:h-64" />
                
                {/* Floating Stars */}
                <div className="absolute top-4 -left-6 pointer-events-none">
                  <StarDoodle className="w-8 h-8 text-yellow-300 animate-spin" style={{ animationDuration: '10s' }} />
                </div>
                <div className="absolute bottom-8 -right-4 pointer-events-none">
                  <SparkleDoodle className="w-6 h-6 text-yellow-300 animate-pulse" />
                </div>
              </motion.div>
            </div>

          </div>
        </div>

        {/* Interactive Direct Contact Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          
          {/* Email Card */}
          <div className="p-5 bg-white rounded-2xl border-2 border-stone-900 shadow-[3px_3px_0px_#18181B] flex flex-col justify-between group hover:-translate-y-1 transition-all duration-200">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="p-2 rounded-xl bg-blue-50 text-blue-600 border border-blue-200">
                  <Mail className="w-5 h-5" />
                </span>
                <button
                  onClick={() => copyToClipboard(PERSONAL_INFO.contact.email, 'email')}
                  className="text-xs font-bold text-stone-500 hover:text-stone-900 p-1.5 rounded-lg hover:bg-stone-100 flex items-center gap-1"
                  title="Copy email"
                >
                  {copiedKey === 'email' ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="text-emerald-600 font-black">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
              <p className="text-xs font-bold uppercase tracking-wider text-stone-500">Email Address</p>
              <h4 className="font-extrabold text-stone-900 text-sm sm:text-base break-all mt-0.5">
                {PERSONAL_INFO.contact.email}
              </h4>
            </div>
            <a
              href={`mailto:${PERSONAL_INFO.contact.email}`}
              className="mt-4 inline-flex items-center gap-1 text-xs font-black text-blue-600 hover:underline"
            >
              Send an email <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* WhatsApp Card */}
          <div className="p-5 bg-white rounded-2xl border-2 border-stone-900 shadow-[3px_3px_0px_#18181B] flex flex-col justify-between group hover:-translate-y-1 transition-all duration-200">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="p-2 rounded-xl bg-emerald-50 text-emerald-600 border border-emerald-200">
                  <WhatsappIcon className="w-5 h-5" />
                </span>
                <button
                  onClick={() => copyToClipboard(PERSONAL_INFO.contact.whatsapp, 'wa')}
                  className="text-xs font-bold text-stone-500 hover:text-stone-900 p-1.5 rounded-lg hover:bg-stone-100 flex items-center gap-1"
                  title="Copy phone number"
                >
                  {copiedKey === 'wa' ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="text-emerald-600 font-black">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
              <p className="text-xs font-bold uppercase tracking-wider text-stone-500">WhatsApp / Phone</p>
              <h4 className="font-extrabold text-stone-900 text-sm sm:text-base mt-0.5">
                {PERSONAL_INFO.contact.whatsapp}
              </h4>
            </div>
            <a
              href={PERSONAL_INFO.contact.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-1 text-xs font-black text-emerald-600 hover:underline"
            >
              Chat on WhatsApp <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* GitHub Card */}
          <div className="p-5 bg-white rounded-2xl border-2 border-stone-900 shadow-[3px_3px_0px_#18181B] flex flex-col justify-between group hover:-translate-y-1 transition-all duration-200">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="p-2 rounded-xl bg-stone-100 text-stone-900 border border-stone-200">
                  <GithubIcon className="w-5 h-5" />
                </span>
                <span className="text-[11px] font-bold text-stone-400 font-mono">Code</span>
              </div>
              <p className="text-xs font-bold uppercase tracking-wider text-stone-500">GitHub Profile</p>
              <h4 className="font-extrabold text-stone-900 text-sm sm:text-base mt-0.5">
                {PERSONAL_INFO.contact.github}
              </h4>
            </div>
            <a
              href={PERSONAL_INFO.contact.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-1 text-xs font-black text-stone-900 hover:underline"
            >
              View Repositories <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* LinkedIn & Instagram Card */}
          <div className="p-5 bg-white rounded-2xl border-2 border-stone-900 shadow-[3px_3px_0px_#18181B] flex flex-col justify-between group hover:-translate-y-1 transition-all duration-200">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="p-2 rounded-xl bg-blue-50 text-blue-700 border border-blue-200">
                  <LinkedinIcon className="w-5 h-5" />
                </span>
                <span className="text-[11px] font-bold text-rose-500 font-mono">Socials</span>
              </div>
              <p className="text-xs font-bold uppercase tracking-wider text-stone-500">LinkedIn &amp; Instagram</p>
              <h4 className="font-extrabold text-stone-900 text-xs sm:text-sm mt-0.5 truncate" title={PERSONAL_INFO.contact.linkedin}>
                {PERSONAL_INFO.contact.linkedin}
              </h4>
            </div>
            <div className="flex items-center gap-3 mt-4">
              <a
                href={PERSONAL_INFO.contact.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-black text-blue-700 hover:underline inline-flex items-center gap-0.5"
              >
                LinkedIn <ArrowUpRight className="w-3 h-3" />
              </a>
              <span className="text-stone-300">·</span>
              <a
                href={PERSONAL_INFO.contact.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-black text-rose-600 hover:underline inline-flex items-center gap-0.5"
              >
                Instagram <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
