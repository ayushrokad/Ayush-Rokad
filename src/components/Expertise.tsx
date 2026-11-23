'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '@/data/portfolio';
import { fadeInUp } from '@/lib/animations';
import { ArrowUpRight } from 'lucide-react';

export const Expertise: React.FC = () => {
  const { skills } = portfolioData;

  return (
    <section
      id="skills"
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
          {skills.eyebrow}
        </motion.div>

        {/* Section Heading */}
        <motion.h2
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#F1F0EC] leading-[1.12] tracking-tight mb-14 md:mb-20"
        >
          {skills.headline}
        </motion.h2>

        {/* 3 cols desktop x 2 rows, 2 cols tablet, 1 col mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-l border-[#303236]">
          {skills.items.map((item, index) => (
            <motion.div
              key={item.id}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: index * 0.08 }}
              className="group p-8 sm:p-10 border-r border-b border-[#303236] bg-[#111315] hover:bg-[#191B1E]/40 transition-colors duration-300 flex flex-col justify-between min-h-[220px]"
            >
              <div>
                {/* Number & Arrow Icon */}
                <div className="flex items-center justify-between mb-8">
                  <span className="font-mono text-xs text-[#AFA4FF] font-medium tracking-wider">
                    {item.number}
                  </span>
                  <ArrowUpRight
                    size={16}
                    className="text-[#929397]/50 group-hover:text-[#AFA4FF] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200"
                  />
                </div>

                {/* Title */}
                <h3 className="font-serif text-2xl text-[#F1F0EC] group-hover:text-white transition-colors mb-3">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-[#929397] leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
