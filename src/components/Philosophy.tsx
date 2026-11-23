import React from 'react';
import { portfolioData } from '@/data/portfolio';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

export const Philosophy: React.FC = () => {
  const { philosophy } = portfolioData;

  return (
    <section
      id="approach"
      className="py-20 md:py-32 border-t border-[#303236]/60 bg-[#111315]"
    >
      <div className="max-w-content mx-auto px-5 md:px-16">
        {/* Eyebrow */}
        <ScrollReveal>
          <div className="text-xs font-mono tracking-widest text-[#929397] uppercase mb-6 md:mb-8">
            {philosophy.eyebrow}
          </div>
        </ScrollReveal>

        {/* Section Heading */}
        <ScrollReveal delay={0.05}>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#F1F0EC] leading-[1.12] tracking-tight mb-12 md:mb-16">
            {philosophy.headline}
          </h2>
        </ScrollReveal>

        {/* Featured Editorial Statement */}
        <ScrollReveal delay={0.08} className="py-8 md:py-12 border-y border-[#303236] my-8">
          <blockquote className="font-serif italic text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[#F1F0EC] max-w-4xl leading-[1.2] font-light">
            {philosophy.statement}
          </blockquote>
        </ScrollReveal>

        {/* Narrative & Process Flow */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 pt-8 items-start">
          <ScrollReveal delay={0.1} className="lg:col-span-5">
            <p className="text-base sm:text-lg text-[#929397] leading-relaxed font-normal">
              {philosophy.body}
            </p>
          </ScrollReveal>

          {/* Sequential Process Flow */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {philosophy.process.map((step, idx) => (
                <ScrollReveal
                  key={step}
                  delay={0.1 + idx * 0.05}
                  className="p-4 rounded-lg border border-[#303236] bg-[#191B1E]/20 hover:border-[#AFA4FF]/50 hover:bg-[#191B1E]/40 hover:-translate-y-0.5 transition-all duration-[220ms] flex flex-col justify-between h-24 group cursor-default"
                >
                  <span className="font-mono text-[11px] text-[#AFA4FF]/80 group-hover:text-[#AFA4FF] transition-colors duration-[200ms]">
                    0{idx + 1}
                  </span>
                  <div className="flex items-center justify-between text-sm sm:text-base text-[#F1F0EC] group-hover:text-white font-medium transition-colors duration-[200ms]">
                    <span>{step}</span>
                    {idx < philosophy.process.length - 1 && (
                      <span className="text-[#929397]/40 text-xs hidden sm:inline group-hover:text-[#AFA4FF]/60 transition-colors duration-[200ms]">
                        →
                      </span>
                    )}
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
