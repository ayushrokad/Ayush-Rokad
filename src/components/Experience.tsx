'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '@/data/portfolio';
import { fadeInUp } from '@/lib/animations';

export const Experience: React.FC = () => {
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
          {portfolioData.experience.eyebrow}
        </motion.div>

        {/* Section Heading */}
        <motion.h2
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#F1F0EC] leading-[1.12] tracking-tight mb-14 md:mb-20"
        >
          {portfolioData.experience.headline}
        </motion.h2>

        {/* Timeline Entries List */}
        <div className="border-t border-[#303236]">
          {portfolioData.experience.entries.map((entry, index) => (
            <motion.div
              key={entry.company}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: index * 0.1 }}
              className="group py-8 md:py-12 border-b border-[#303236] hover:bg-[#191B1E]/30 transition-colors duration-300 px-0 md:px-6 -mx-0 md:-mx-6 rounded-lg"
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
                  <span className="font-mono text-xs sm:text-sm text-[#929397] tracking-wider uppercase">
                    {entry.period}
                  </span>
                </div>
              </div>

              {/* Description */}
              <div className="mt-5 max-w-2xl">
                <p className="text-sm sm:text-base text-[#929397] leading-relaxed font-normal">
                  {entry.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
