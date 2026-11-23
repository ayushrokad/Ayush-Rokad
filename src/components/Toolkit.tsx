'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '@/data/portfolio';
import { fadeInUp } from '@/lib/animations';

export const Toolkit: React.FC = () => {
  const { toolkit } = portfolioData;

  return (
    <section
      id="toolkit"
      className="py-20 md:py-32 border-t border-[#303236]/60 bg-[#111315]"
    >
      <div className="max-w-content mx-auto px-5 md:px-16">
        {/* Eyebrow */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="text-xs font-mono tracking-widest text-[#929397] uppercase mb-6 md:mb-8"
        >
          {toolkit.eyebrow}
        </motion.div>

        {/* Section Heading & Intro */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start mb-12 md:mb-16">
          <div className="lg:col-span-6">
            <motion.h2
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#F1F0EC] leading-[1.12] tracking-tight"
            >
              {toolkit.headline}
            </motion.h2>
          </div>

          <div className="lg:col-span-6 lg:pt-2">
            <motion.p
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              className="text-base sm:text-lg text-[#929397] leading-relaxed max-w-xl font-normal"
            >
              {toolkit.intro}
            </motion.p>
          </div>
        </div>

        {/* Typography-driven Tool Pills */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="flex flex-wrap gap-3 sm:gap-4 pt-6"
        >
          {toolkit.tools.map((tool) => (
            <motion.div
              key={tool}
              whileHover={{ y: -2 }}
              transition={{ duration: 0.2 }}
              className="px-5 py-2.5 sm:px-6 sm:py-3 rounded-full border border-[#303236] bg-[#191B1E]/30 hover:bg-[#191B1E] hover:border-[#AFA4FF]/60 text-sm sm:text-base text-[#F1F0EC] transition-all duration-200 cursor-default select-none shadow-sm"
            >
              <span className="font-normal">{tool}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
