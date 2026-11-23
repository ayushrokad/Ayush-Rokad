'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '@/data/portfolio';
import { fadeInUp } from '@/lib/animations';

export const Philosophy: React.FC = () => {
  const { philosophy } = portfolioData;

  return (
    <section
      id="approach"
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
          {philosophy.eyebrow}
        </motion.div>

        {/* Section Heading */}
        <motion.h2
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#F1F0EC] leading-[1.12] tracking-tight mb-12 md:mb-16"
        >
          {philosophy.headline}
        </motion.h2>

        {/* Featured Editorial Statement */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="py-8 md:py-12 border-y border-[#303236] my-8"
        >
          <blockquote className="font-serif italic text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[#F1F0EC] max-w-4xl leading-[1.2] font-light">
            {philosophy.statement}
          </blockquote>
        </motion.div>

        {/* Narrative & Process Flow */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 pt-8 items-start">
          <div className="lg:col-span-5">
            <motion.p
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              className="text-base sm:text-lg text-[#929397] leading-relaxed font-normal"
            >
              {philosophy.body}
            </motion.p>
          </div>

          {/* Sequential Process Flow */}
          <div className="lg:col-span-7">
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              className="grid grid-cols-2 sm:grid-cols-3 gap-3"
            >
              {philosophy.process.map((step, idx) => (
                <div
                  key={step}
                  className="p-4 rounded-lg border border-[#303236] bg-[#191B1E]/20 flex flex-col justify-between h-24 hover:border-[#AFA4FF]/40 transition-colors"
                >
                  <span className="font-mono text-[11px] text-[#AFA4FF]/80">
                    0{idx + 1}
                  </span>
                  <div className="flex items-center justify-between text-sm sm:text-base text-[#F1F0EC] font-medium">
                    <span>{step}</span>
                    {idx < philosophy.process.length - 1 && (
                      <span className="text-[#929397]/40 text-xs hidden sm:inline">
                        →
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
