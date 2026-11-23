'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '@/data/portfolio';
import { StarField } from './StarField';
import { headlineLineVariant, portraitVariant } from '@/lib/animations';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[92vh] flex flex-col justify-between pt-28 pb-16 md:pt-36 md:pb-20 overflow-hidden bg-[#111315]">
      {/* Subtle Atmospheric Star Field Canvas */}
      <StarField />

      {/* Main Content Container */}
      <div className="relative z-10 max-w-content mx-auto w-full px-5 md:px-16 flex-1 flex flex-col justify-between">
        {/* Top Eyebrow row */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center justify-between text-xs text-[#929397] tracking-wider uppercase mb-12 md:mb-16 pb-4 border-b border-[#303236]/40"
        >
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#AFA4FF]" />
            <span>{portfolioData.hero.badge}</span>
          </div>
          <span className="font-mono text-[11px] text-[#929397]/80">
            {portfolioData.hero.locationYear}
          </span>
        </motion.div>

        {/* Central Asymmetric Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-end my-auto">
          {/* Headline & Subtext Column (7 cols desktop) */}
          <div className="lg:col-span-8 flex flex-col space-y-8">
            <div className="space-y-1">
              <motion.h1
                variants={headlineLineVariant}
                initial="hidden"
                animate="visible"
                className="font-serif text-[2.75rem] sm:text-5xl md:text-7xl lg:text-[5.15rem] leading-[1.06] tracking-tight text-[#F1F0EC]"
              >
                <span>{portfolioData.hero.headline.line1}</span>
                <span className="italic font-normal text-[#AFA4FF] inline-block ml-1">
                  {portfolioData.hero.headline.highlight}
                </span>
                <br className="hidden sm:inline" />
                <span>{portfolioData.hero.headline.line2}</span>
                <br className="hidden sm:inline" />
                <span>{portfolioData.hero.headline.line3}</span>
              </motion.h1>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-sm sm:text-base md:text-lg text-[#929397] max-w-xl font-normal leading-relaxed"
            >
              {portfolioData.hero.subtext}
            </motion.p>
          </div>

          {/* Portrait Column (4-5 cols desktop, positioned lower-right) */}
          <motion.div
            variants={portraitVariant}
            initial="hidden"
            animate="visible"
            className="lg:col-span-4 flex justify-start lg:justify-end"
          >
            <div className="relative w-full max-w-[320px] sm:max-w-[340px] aspect-square rounded-2xl border border-[#303236] bg-[#191B1E] p-4 flex flex-col justify-between overflow-hidden group shadow-2xl">
              {/* Inner subtle frame and geometric composition */}
              <div className="absolute inset-0 bg-gradient-to-b from-[#191B1E] via-[#151719] to-[#111315] opacity-90" />
              <div className="absolute inset-0 bg-[radial-gradient(#AFA4FF_1px,transparent_1px)] [background-size:16px_16px] opacity-10" />

              {/* Portrait Top Meta */}
              <div className="relative z-10 flex items-center justify-between text-[11px] font-mono text-[#929397]">
                <span className="tracking-widest">PORTRAIT</span>
                <span className="flex items-center gap-1.5 text-xs text-[#F1F0EC]/70">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Available
                </span>
              </div>

              {/* Central Monogram / Portrait silhouette */}
              <div className="relative z-10 flex flex-col items-center justify-center my-auto py-8">
                <div className="w-20 h-20 rounded-full border border-[#303236] bg-[#111315]/80 flex items-center justify-center mb-3 shadow-inner">
                  <span className="font-serif text-3xl font-light text-[#F1F0EC] tracking-wider">
                    AR
                  </span>
                </div>
                <div className="text-center">
                  <p className="font-serif text-lg text-[#F1F0EC]">
                    {portfolioData.hero.portraitPlaceholder.caption}
                  </p>
                  <p className="text-xs text-[#929397] mt-0.5">
                    {portfolioData.hero.portraitPlaceholder.subcaption}
                  </p>
                </div>
              </div>

              {/* Bottom Meta Bar */}
              <div className="relative z-10 pt-3 border-t border-[#303236]/60 flex items-center justify-between text-[11px] font-mono text-[#929397]">
                <span>SURAT, IN</span>
                <span className="text-[#AFA4FF]">3+ YRS EXP</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Small Bottom Metadata Row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-14 md:mt-16 pt-6 border-t border-[#303236]/50 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs"
        >
          <div>
            <span className="block text-[10px] font-mono uppercase text-[#929397]/70 tracking-widest mb-1">
              LOCATION
            </span>
            <span className="text-[#F1F0EC] font-normal">
              {portfolioData.hero.metadata[0].value}
            </span>
          </div>

          <div>
            <span className="block text-[10px] font-mono uppercase text-[#929397]/70 tracking-widest mb-1">
              EXPERIENCE
            </span>
            <span className="text-[#F1F0EC] font-normal">
              {portfolioData.hero.metadata[1].value}
            </span>
          </div>

          <div>
            <span className="block text-[10px] font-mono uppercase text-[#929397]/70 tracking-widest mb-1">
              CURRENT STATUS
            </span>
            <span className="text-[#F1F0EC] flex items-center gap-1.5 font-normal">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              {portfolioData.hero.metadata[2].value}
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
