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
        {/* Eyebrow */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="text-xs font-mono tracking-widest text-[#929397] uppercase mb-6 md:mb-8"
        >
          {experienceHighlights.eyebrow}
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
              className="text-base sm:text-lg text-[#929397] leading-relaxed max-w-lg font-normal"
            >
              {experienceHighlights.introduction}
            </motion.p>
          </div>
        </div>

        {/* Numbered Editorial Project Blocks */}
        <div className="border-t border-[#303236]">
          {experienceHighlights.projects.map((project, index) => (
            <motion.article
              key={project.id}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: index * 0.08 }}
              className="group py-14 md:py-20 border-b border-[#303236] transition-colors duration-300"
            >
              {/* Top Meta Bar within project */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs font-mono text-[#929397] tracking-wider uppercase mb-6 pb-3 border-b border-[#303236]/30">
                <div className="flex items-center gap-2">
                  <span className="text-[#AFA4FF] font-medium">
                    {project.number} / {project.tag}
                  </span>
                </div>
                <div className="flex items-center gap-3 text-[11px] sm:text-xs text-[#929397]/80">
                  <span>{project.company}</span>
                  <span className="text-[#303236]">·</span>
                  <span>{project.period}</span>
                </div>
              </div>

              {/* 12-Column Grid Layout */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
                {/* Large Serif Number (2 cols desktop) */}
                <div className="lg:col-span-2">
                  <span className="font-serif text-6xl sm:text-7xl lg:text-8xl text-[#AFA4FF] font-light leading-none block select-none group-hover:text-[#C2BAFF] transition-colors">
                    {project.number}
                  </span>
                  <div className="mt-3 text-[11px] font-mono tracking-widest text-[#929397]/70 uppercase hidden lg:block">
                    {project.discipline}
                  </div>
                </div>

                {/* Main Content Column (7 cols desktop) */}
                <div className="lg:col-span-7 space-y-6">
                  {/* Discipline on mobile/tablet */}
                  <div className="text-[11px] font-mono tracking-widest text-[#AFA4FF] uppercase lg:hidden">
                    {project.discipline}
                  </div>

                  {/* Project Title */}
                  <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl text-[#F1F0EC] group-hover:text-white transition-colors leading-tight">
                    {project.title}
                  </h3>

                  {/* Narrative Description */}
                  <p className="text-base sm:text-lg text-[#929397] leading-relaxed font-normal max-w-2xl">
                    {project.description}
                  </p>

                  {/* Optional Key Product Experiences (e.g. for Customer App) */}
                  {project.keyExperiences && project.keyExperiences.length > 0 && (
                    <div className="pt-2">
                      <h4 className="text-xs font-mono uppercase tracking-widest text-[#F1F0EC]/90 mb-3">
                        Key product experiences
                      </h4>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-[#929397]">
                        {project.keyExperiences.map((exp, i) => (
                          <li key={i} className="flex items-baseline gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#AFA4FF]/70 shrink-0 mt-1" />
                            <span>{exp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* What I Worked On */}
                  <div className="pt-4 border-t border-[#303236]/40">
                    <h4 className="text-xs font-mono uppercase tracking-widest text-[#F1F0EC]/90 mb-4 flex items-center gap-2">
                      <span>What I worked on</span>
                      <span className="w-8 h-[1px] bg-[#303236]" />
                    </h4>
                    <ul className="space-y-2.5">
                      {project.responsibilities.map((resp, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-3 text-xs sm:text-sm text-[#929397] leading-relaxed"
                        >
                          <span className="font-mono text-[11px] text-[#AFA4FF]/80 shrink-0 mt-0.5">
                            0{i + 1}
                          </span>
                          <span className="text-[#929397] group-hover:text-[#F1F0EC]/90 transition-colors">
                            {resp}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Right Column: Scope & Status Metadata (3 cols desktop) */}
                <div className="lg:col-span-3 space-y-6 pt-6 lg:pt-0 border-t lg:border-t-0 lg:border-l border-[#303236]/50 lg:pl-8">
                  {/* Scope Metric */}
                  <div>
                    <span className="block text-[10px] font-mono uppercase tracking-widest text-[#929397]/70 mb-1">
                      PRODUCT SCOPE
                    </span>
                    <span className="font-serif text-3xl sm:text-4xl text-[#F1F0EC] font-normal block tabular-nums">
                      {project.scope.metric}
                    </span>
                    <span className="text-xs text-[#929397] block mt-0.5 font-normal">
                      {project.scope.label}
                    </span>
                    <span className="text-[11px] text-[#929397]/60 block mt-1 leading-snug">
                      {project.scope.detail}
                    </span>
                  </div>

                  {/* Status Badge */}
                  <div className="pt-4 border-t border-[#303236]/40">
                    <span className="block text-[10px] font-mono uppercase tracking-widest text-[#929397]/70 mb-1.5">
                      STATUS
                    </span>
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#303236] bg-[#191B1E]/60 text-xs text-[#F1F0EC]">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      <span>{project.status}</span>
                    </div>
                  </div>

                  {/* Focus Areas (if available) */}
                  {project.focus && (
                    <div className="pt-4 border-t border-[#303236]/40">
                      <span className="block text-[10px] font-mono uppercase tracking-widest text-[#929397]/70 mb-1.5">
                        CORE FOCUS
                      </span>
                      <p className="text-xs text-[#929397] leading-relaxed">
                        {project.focus}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};
