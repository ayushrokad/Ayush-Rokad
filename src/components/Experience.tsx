'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '@/data/portfolio';
import { fadeInUp } from '@/lib/animations';

export const Experience: React.FC = () => {
  const { experience } = portfolioData;

  return (
    <section
      id="experience"
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
          {experience.eyebrow}
        </motion.div>

        {/* Section Heading */}
        <motion.h2
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#F1F0EC] leading-[1.12] tracking-tight mb-14 md:mb-20"
        >
          {experience.headline}
        </motion.h2>

        {/* Timeline Entries List */}
        <div className="border-t border-[#303236]">
          {experience.entries.map((entry, index) => (
            <motion.div
              key={entry.company}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: index * 0.1 }}
              className="group py-10 md:py-14 border-b border-[#303236] transition-colors duration-300"
            >
              <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-baseline">
                {/* Company Name & Role (7 cols) */}
                <div className="md:col-span-7 space-y-1.5">
                  <h3 className="font-serif text-2xl sm:text-3xl text-[#F1F0EC] group-hover:text-white transition-colors">
                    {entry.company}
                  </h3>
                  <div className="inline-block text-sm text-[#AFA4FF] font-medium tracking-wide">
                    {entry.role}
                  </div>
                </div>

                {/* Period (5 cols, right aligned on desktop) */}
                <div className="md:col-span-5 md:text-right">
                  <span className="font-mono text-xs sm:text-sm text-[#929397] tracking-wider uppercase inline-block py-1 px-3 rounded-full border border-[#303236]/60 bg-[#191B1E]/40">
                    {entry.period}
                  </span>
                </div>
              </div>

              {/* Summary */}
              <div className="mt-4 max-w-2xl">
                <p className="text-sm sm:text-base text-[#929397] leading-relaxed font-normal">
                  {entry.summary}
                </p>
              </div>

              {/* Bullets */}
              {entry.bullets && entry.bullets.length > 0 && (
                <ul className="mt-5 space-y-2.5 max-w-2xl">
                  {entry.bullets.map((bullet, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2.5 text-xs sm:text-sm text-[#929397]"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#AFA4FF]/70 shrink-0 mt-1.5" />
                      <span className="leading-relaxed">{bullet}</span>
                    </li>
                  ))}
                </ul>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
