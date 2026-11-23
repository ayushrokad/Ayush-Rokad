import React from 'react';
import { portfolioData } from '@/data/portfolio';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

export const About: React.FC = () => {
  const { about } = portfolioData;

  return (
    <section
      id="about"
      className="py-20 md:py-32 border-t border-[#303236]/60 bg-[#111315]"
    >
      <div className="max-w-content mx-auto px-5 md:px-16">
        {/* Eyebrow */}
        <ScrollReveal>
          <div className="text-xs font-mono tracking-widest text-[#929397] uppercase mb-8 md:mb-12">
            {about.eyebrow}
          </div>
        </ScrollReveal>

        {/* 12-column editorial grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Big Headline & Typographic Metrics */}
          <ScrollReveal className="lg:col-span-6 flex flex-col justify-between">
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#F1F0EC] leading-[1.12] tracking-tight mb-12">
              {about.headline}
            </h2>

            {/* Metrics */}
            <div className="grid grid-cols-2 gap-8 pt-8 border-t border-[#303236]">
              {about.metrics.map((metric, idx) => (
                <div key={metric.label} className="space-y-1">
                  <span className="font-serif text-4xl sm:text-5xl md:text-6xl font-normal text-[#AFA4FF] tabular-nums block">
                    {metric.value}
                  </span>
                  <span className="text-xs sm:text-sm text-[#929397] block leading-snug">
                    {metric.label}
                  </span>
                </div>
              ))}
            </div>
          </ScrollReveal>

          {/* Right Column: Narrative Paragraphs */}
          <ScrollReveal delay={0.1} className="lg:col-span-6 flex flex-col justify-center space-y-6 lg:pl-6">
            {about.paragraphs.map((paragraph, idx) => (
              <p
                key={idx}
                className="text-base sm:text-lg md:text-xl text-[#929397] leading-relaxed font-normal"
              >
                {paragraph}
              </p>
            ))}

            <div className="pt-6">
              <div className="inline-flex items-center gap-2 text-xs font-mono text-[#AFA4FF] tracking-wider uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-[#AFA4FF]" />
                {about.tagline}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};
