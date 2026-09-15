import React from 'react';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Skills } from '@/components/Skills';
import { FeaturedProject } from '@/components/FeaturedProject';
import { Showcase } from '@/components/Showcase';
import { Education } from '@/components/Education';
import { Interests } from '@/components/Interests';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FAF7F2] text-[#18181B] selection:bg-[#FACC15] selection:text-[#18181B] relative">
      <Navbar />
      <ScrollReveal><Hero /></ScrollReveal>
      <ScrollReveal><About /></ScrollReveal>
      <ScrollReveal><Skills /></ScrollReveal>
      <ScrollReveal><FeaturedProject /></ScrollReveal>
      <ScrollReveal><Showcase /></ScrollReveal>
      <ScrollReveal><Education /></ScrollReveal>
      <ScrollReveal><Interests /></ScrollReveal>
      <ScrollReveal><Contact /></ScrollReveal>
      <ScrollReveal><Footer /></ScrollReveal>
    </main>
  );
}
