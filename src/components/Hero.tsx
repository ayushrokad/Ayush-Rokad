'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '@/data/portfolio';
import { StarField } from './StarField';
import { headlineLineVariant } from '@/lib/animations';
import { ArrowDown } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[92vh] flex flex-col justify-between pt-28 pb-14 md:pt-36 md:pb-16 overflow-hidden bg-[#111315]">
      {/* Subtle Atmospheric Star Field Canvas */}
      <StarField />

      {/* Main Content Container */}
      <div className="relative z-10 max-w-content mx-auto w-full px-5 md:px-16 flex-1 flex flex-col justify-between">
        {/* Top Eyebrow row */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center justify-between text-xs text-[#929397] tracking-wider uppercase mb-10 md:mb-16 pb-4 border-b border-[#303236]/40"
        >
          <div className="flex items-center gap-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#AFA4FF]" />
            <span className="font-mono text-[11px] sm:text-xs tracking-widest text-[#F1F0EC]/90 font-medium">
              {portfolioData.hero.badge}
            </span>
          </div>
          <span className="font-mono text-[11px] sm:text-xs text-[#929397]/80 tracking-widest">
            {portfolioData.hero.locationYear}
          </span>
        </motion.div>

        {/* Spacious Typography-Led Core */}
        <div className="my-auto py-4 md:py-8 space-y-12 md:space-y-16">
          {/* Main Headline */}
          <div className="max-w-5xl">
            <motion.h1
              variants={headlineLineVariant}
              initial="hidden"
              animate="visible"
              className="font-serif text-[2.85rem] sm:text-6xl md:text-7xl lg:text-[5.5rem] xl:text-[6.25rem] leading-[1.04] tracking-[-0.015em] text-[#F1F0EC]"
            >
              <span>{portfolioData.hero.headline.line1}</span>
              <span className="italic font-normal text-[#AFA4FF] inline-block ml-1 sm:ml-2">
                {portfolioData.hero.headline.highlight}
              </span>
              <br />
              <span>{portfolioData.hero.headline.line2}</span>
              <br />
              <span>{portfolioData.hero.headline.line3}</span>
            </motion.h1>
          </div>

          {/* Editorial Subtext & Typographic Metadata Highlights */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-end pt-4 md:pt-6">
            {/* Supporting Narrative (7 cols) */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-7"
            >
              <p className="text-base sm:text-lg md:text-xl text-[#929397] font-normal leading-relaxed max-w-xl">
                {portfolioData.hero.subtext}
              </p>
            </motion.div>

            {/* Typographic Stats & Availability (5 cols) */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-5 grid grid-cols-2 gap-8 lg:pl-6 border-t lg:border-t-0 lg:border-l border-[#303236]/60 pt-6 lg:pt-0"
            >
              <div>
                <span className="block text-[10px] font-mono uppercase text-[#929397]/70 tracking-widest mb-1.5">
                  EXPERIENCE
                </span>
                <span className="font-serif text-2xl sm:text-3xl md:text-4xl text-[#F1F0EC] font-light">
                  3+ Years
                </span>
              </div>

              <div>
                <span className="block text-[10px] font-mono uppercase text-[#929397]/70 tracking-widest mb-1.5">
                  AVAILABILITY
                </span>
                <span className="font-serif text-2xl sm:text-3xl text-[#AFA4FF] font-light flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse inline-block" />
                  Open to Work
                </span>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Refined Bottom Metadata Row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-12 md:mt-16 pt-5 border-t border-[#303236]/50 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs font-mono text-[#929397]/80"
        >
          <div className="flex items-center gap-6">
            <span className="text-[#F1F0EC]/90">
              LOCATION: Surat, Gujarat, India
            </span>
            <span className="hidden sm:inline text-[#303236]">·</span>
            <span className="hidden sm:inline">REMOTE WORLDWIDE</span>
          </div>

          <a
            href="#about"
            className="inline-flex items-center gap-1.5 text-xs text-[#929397] hover:text-[#F1F0EC] transition-colors group"
          >
            <span>Explore overview</span>
            <ArrowDown
              size={12}
              className="group-hover:translate-y-0.5 transition-transform"
            />
          </a>
        </motion.div>
      </div>
    </section>
  );
};
