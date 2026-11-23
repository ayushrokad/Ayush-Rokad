'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '@/data/portfolio';
import { StarField } from './StarField';
import { headlineLineVariant, fadeInUp } from '@/lib/animations';
import { ArrowDown, ArrowUpRight } from 'lucide-react';

export const Hero: React.FC = () => {
  const { hero } = portfolioData;

  return (
    <section className="relative min-h-[92vh] flex flex-col justify-between pt-28 sm:pt-32 md:pt-36 lg:pt-40 pb-12 md:pb-16 overflow-hidden bg-[#111315]">
      {/* Subtle Atmospheric Star Field Canvas */}
      <StarField />

      {/* Main Content Container */}
      <div className="relative z-10 max-w-content mx-auto w-full px-5 md:px-16 flex-1 flex flex-col justify-between">
        {/* Central Core: Eyebrow, Headline, Description & CTAs */}
        <div className="my-auto py-2 md:py-6 space-y-6 md:space-y-10">
          {/* Eyebrow / Name & Role for SEO and clear identity */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            className="flex items-center gap-2.5 text-xs sm:text-sm font-mono tracking-widest text-[#AFA4FF] uppercase"
          >
            <span className="w-2 h-2 rounded-full bg-[#AFA4FF] animate-pulse" />
            <span>{hero.eyebrow}</span>
          </motion.div>

          {/* Main Value Proposition Headline */}
          <div className="max-w-5xl">
            <motion.h1
              variants={headlineLineVariant}
              initial="hidden"
              animate="visible"
              className="font-serif text-[2.75rem] sm:text-6xl md:text-7xl lg:text-[5.25rem] xl:text-[6rem] leading-[1.05] tracking-[-0.015em] text-[#F1F0EC]"
            >
              <span>{hero.headline.line1}</span>
              <br />
              <span>{hero.headline.line2}</span>
              <br />
              <span className="italic font-normal text-[#AFA4FF]">
                {hero.headline.highlight}
              </span>
            </motion.h1>
          </div>

          {/* Supporting Narrative & CTAs */}
          <div className="space-y-8 max-w-2xl">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-base sm:text-lg md:text-xl text-[#929397] font-normal leading-relaxed"
            >
              {hero.intro}
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-wrap items-center gap-4 sm:gap-6 pt-1"
            >
              <a
                href={hero.ctas.primary.href}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-medium bg-[#F1F0EC] text-[#111315] hover:bg-white hover:shadow-[0_0_20px_rgba(241,240,236,0.25)] transition-all duration-200 group"
              >
                <span>{hero.ctas.primary.label}</span>
                <ArrowUpRight
                  size={15}
                  className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                />
              </a>

              <a
                href={hero.ctas.secondary.href}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-medium text-[#F1F0EC] border border-[#303236] hover:border-[#AFA4FF]/60 hover:bg-[#191B1E]/40 transition-all duration-200 group"
              >
                <span>{hero.ctas.secondary.label}</span>
                <ArrowUpRight
                  size={15}
                  className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform text-[#929397] group-hover:text-[#F1F0EC]"
                />
              </a>
            </motion.div>
          </div>
        </div>

        {/* Bottom Section: Experience, Availability, Focus, Location */}
        <div className="space-y-6 pt-8 md:pt-12">
          {/* Typographic Metadata Cards */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="pt-6 border-t border-[#303236]/40 grid grid-cols-2 md:grid-cols-4 gap-6 text-xs"
          >
            {/* Experience */}
            <div>
              <span className="block text-[10px] font-mono uppercase text-[#929397]/70 tracking-widest mb-1">
                EXPERIENCE
              </span>
              <span className="font-serif text-2xl sm:text-3xl text-[#F1F0EC] font-normal">
                3+ years
              </span>
            </div>

            {/* Availability */}
            <div>
              <span className="block text-[10px] font-mono uppercase text-[#929397]/70 tracking-widest mb-1">
                AVAILABILITY
              </span>
              <span className="font-serif text-2xl sm:text-3xl text-[#AFA4FF] font-normal flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Open to work
              </span>
            </div>

            {/* Product Focus */}
            <div>
              <span className="block text-[10px] font-mono uppercase text-[#929397]/70 tracking-widest mb-1">
                FOCUS
              </span>
              <span className="font-serif text-2xl sm:text-3xl text-[#F1F0EC] font-normal">
                Mobile & web
              </span>
            </div>

            {/* Location */}
            <div>
              <span className="block text-[10px] font-mono uppercase text-[#929397]/70 tracking-widest mb-1">
                LOCATION
              </span>
              <span className="font-serif text-2xl sm:text-3xl text-[#F1F0EC] font-normal">
                Surat, India
              </span>
              <span className="block text-[11px] font-mono text-[#929397]/70 mt-0.5">
                (remote anywhere)
              </span>
            </div>
          </motion.div>

          {/* Bottom Bar: Explore overview anchor */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="pt-4 border-t border-[#303236]/30 flex items-center justify-end text-xs font-mono text-[#929397]/80"
          >
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
      </div>
    </section>
  );
};
