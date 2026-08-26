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

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FAF7F2] text-[#18181B] selection:bg-[#FACC15] selection:text-[#18181B] relative">
      {/* Sticky Navigation */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* About Me Section */}
      <About />

      {/* Skills Section ("WHAT I WORK WITH") */}
      <Skills />

      {/* Featured Project Section ("ROCKY") */}
      <FeaturedProject />

      {/* Creative Showcase Section */}
      <Showcase />

      {/* Education Section */}
      <Education />

      {/* Interests Section ("CURIOUS ABOUT") */}
      <Interests />

      {/* Contact Section */}
      <Contact />

      {/* Footer */}
      <Footer />
    </main>
  );
}
