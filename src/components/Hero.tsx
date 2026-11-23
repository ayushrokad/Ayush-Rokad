'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '@/data/portfolio';
import { StarField } from './StarField';
import { headlineLineVariant } from '@/lib/animations';
import { ArrowUpRight } from 'lucide-react';

export const Hero: React.FC = () => {
  const { hero } = portfolioData;

  return (
    <section className="relative min-h-[92vh] flex flex-col justify-between pt-28 pb-14 md:pt-36 md:pb-16 overflow-hidden bg-[#111315]">
      {/* Subtle Atmospheric Star Field Canvas */}
      <StarField />

      {/* Main Content Container */}
      <div className="relative z-10 max-w-content mx-auto w-full px-5 md:px-16 flex-1 flex flex-col justify-between">
        {/* Top Eyebrow Row */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center justify-between text-xs text-[#929397] tracking-wider uppercase mb-10 md:mb-16 pb-4 border-b border-[#303236]/40"
        >
          <div className="flex items-center gap-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#AFA4FF]" />
            <span className="font-mono text-[11px] sm:text-xs tracking-widest text-[#F1F0EC]/90 font-medium">
              {hero.badge}
            </span>
          </div>
          <a
            href="#contact"
            className="font-mono text-[11px] sm:text-xs text-[#AFA4FF] hover:text-[#C2BAFF] tracking-widest flex items-center gap-1 transition-colors group"
          >
            <span>{hero.availabilityBadge}</span>
            <ArrowUpRight
              size={13}
              className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
            />
          </a>
        </motion.div>

        {/* Central Core: Headline, Description & CTAs */}
        <div className="my-auto py-4 md:py-8 space-y-8 md:space-y-12">
          {/* Main Headline */}
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
              {hero.subtext}
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-wrap items-center gap-4 sm:gap-6 pt-2"
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

        {/* Bottom Proof / Metadata Row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-12 md:mt-16 pt-6 border-t border-[#303236]/50 grid grid-cols-1 sm:grid-cols-3 gap-6 text-xs"
        >
          {hero.proofPoints.map((point) => (
            <div key={point.label} className="space-y-1">
              <div className="flex items-center gap-2">
                {point.isStatus && (
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                )}
                <span className="font-serif text-2xl sm:text-3xl text-[#F1F0EC] font-normal">
                  {point.value}
                </span>
              </div>
              <span className="text-xs text-[#929397] block font-normal">
                {point.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
