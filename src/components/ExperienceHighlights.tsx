'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '@/data/portfolio';
import { fadeInUp } from '@/lib/animations';

export const ExperienceHighlights: React.FC = () => {
  const { experienceHighlights } = portfolioData;

  return (
    <section
      id="highlights"
      className="py-20 md:py-32 border-t border-[#303236]/60 bg-[#111315]"
    >
      <div className="max-w-content mx-auto px-5 md:px-16">
        {/* Eyebrow & Timeline Span */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="flex items-center justify-between text-xs font-mono tracking-widest text-[#929397] uppercase mb-6 md:mb-8 pb-4 border-b border-[#303236]/40"
        >
          <span>{experienceHighlights.eyebrow}</span>
          <span className="text-[#AFA4FF]/80">{experienceHighlights.timelineSpan}</span>
        </motion.div>

        {/* Section Heading & Intro */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start mb-16 md:mb-24">
          <div className="lg:col-span-7">
            <motion.h2
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#F1F0EC] leading-[1.12] tracking-tight"
            >
              {experienceHighlights.headline}
            </motion.h2>
          </div>

          <div className="lg:col-span-5 lg:pt-3">
            <motion.p
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              className="text-base sm:text-lg text-[#929397] leading-relaxed max-w-lg"
            >
              {experienceHighlights.introduction}
            </motion.p>
          </div>
        </div>

        {/* Numbered Project Blocks */}
        <div className="border-t border-[#303236]">
          {experienceHighlights.projects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: index * 0.1 }}
              className="group py-12 md:py-16 border-b border-[#303236] hover:bg-[#191B1E]/30 transition-colors duration-300 px-0 md:px-8 -mx-0 md:-mx-8 rounded-xl"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                {/* Large Oversized Serif Number (2 cols) */}
                <div className="lg:col-span-2">
                  <span className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-[#AFA4FF]/90 font-light leading-none block select-none group-hover:text-[#C2BAFF] transition-colors">
                    {project.number}
                  </span>
                </div>

                {/* Main Content Column (7 cols) */}
                <div className="lg:col-span-7 space-y-5">
                  {/* Company & Role subheader */}
                  <div className="text-[11px] sm:text-xs font-mono tracking-widest uppercase text-[#AFA4FF] flex items-center gap-2">
                    <span>{project.company}</span>
                    <span className="text-[#303236]">·</span>
                    <span className="text-[#F1F0EC]/80">{project.role}</span>
                  </div>

                  {/* Large Project Title */}
                  <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl text-[#F1F0EC] group-hover:text-white transition-colors leading-snug">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm sm:text-base text-[#929397] leading-relaxed font-normal max-w-2xl">
                    {project.description}
                  </p>

                  {/* Category Outlined Tags */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.categories.map((category) => (
                      <span
                        key={category}
                        className="px-3 py-1 rounded-full border border-[#303236] bg-[#111315]/60 text-[11px] font-mono text-[#929397] group-hover:border-[#AFA4FF]/40 group-hover:text-[#F1F0EC] transition-all"
                      >
                        {category}
                      </span>
                    ))}
                  </div>

                  {/* Focus Areas / Confidential Notice */}
                  {project.focusAreas && (
                    <div className="pt-3 border-t border-[#303236]/50">
                      <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-3 text-xs">
                        <span className="font-mono text-[10px] uppercase tracking-wider text-[#929397]/70 shrink-0">
                          Focus areas:
                        </span>
                        <span className="text-[#F1F0EC]/80 leading-relaxed font-normal">
                          {project.focusAreas}
                        </span>
                      </div>
                    </div>
                  )}

                  {project.confidentialNotice && (
                    <div className="pt-2">
                      <span className="text-xs text-[#929397]/70 italic">
                        {project.confidentialNotice}
                      </span>
                    </div>
                  )}
                </div>

                {/* Period / Timeline Date (3 cols, right aligned on desktop) */}
                <div className="lg:col-span-3 lg:text-right">
                  <span className="font-mono text-xs sm:text-sm text-[#929397] tracking-wider uppercase inline-block py-1 px-3 rounded-full border border-[#303236]/60 bg-[#111315]/40">
                    {project.period}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
