import React from 'react';
import { portfolioData } from '@/data/portfolio';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

export const Toolkit: React.FC = () => {
  const { toolkit } = portfolioData;

  return (
    <section
      id="toolkit"
      className="py-20 md:py-32 border-t border-[#303236]/60 bg-[#111315]"
    >
      <div className="max-w-content mx-auto px-5 md:px-16">
        {/* Eyebrow */}
        <ScrollReveal>
          <div className="text-xs font-mono tracking-widest text-[#929397] uppercase mb-6 md:mb-8">
            {toolkit.eyebrow}
          </div>
        </ScrollReveal>

        {/* Section Heading & Intro */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start mb-12 md:mb-16">
          <ScrollReveal className="lg:col-span-6">
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#F1F0EC] leading-[1.12] tracking-tight">
              {toolkit.headline}
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.08} className="lg:col-span-6 lg:pt-2">
            <p className="text-base sm:text-lg text-[#929397] leading-relaxed max-w-xl font-normal">
              {toolkit.intro}
            </p>
          </ScrollReveal>
        </div>

        {/* Typography-driven Tool Pills */}
        <ScrollReveal delay={0.12} className="flex flex-wrap gap-3 sm:gap-4 pt-6">
          {toolkit.tools.map((tool) => (
            <div
              key={tool}
              className="px-5 py-2.5 sm:px-6 sm:py-3 rounded-full border border-[#303236] bg-[#191B1E]/30 hover:bg-[#191B1E] hover:border-[#AFA4FF]/60 hover:text-white text-sm sm:text-base text-[#F1F0EC] transition-all duration-[180ms] cursor-default select-none shadow-sm"
            >
              <span className="font-normal">{tool}</span>
            </div>
          ))}
        </ScrollReveal>
      </div>
    </section>
  );
};
