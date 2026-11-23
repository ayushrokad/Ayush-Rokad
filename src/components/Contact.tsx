'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '@/data/portfolio';
import { fadeInUp } from '@/lib/animations';
import { ArrowUp, ArrowUpRight, Copy, Check } from 'lucide-react';

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [copyError, setCopyError] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(portfolioData.contact.email);
      setCopied(true);
      setCopyError(false);
      setTimeout(() => {
        setCopied(false);
      }, 1800);
    } catch (err) {
      console.error('Failed to copy email:', err);
      setCopyError(true);
      setTimeout(() => {
        setCopyError(false);
      }, 2500);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      id="contact"
      className="pt-24 pb-12 md:pt-36 md:pb-16 border-t border-[#303236]/60 bg-[#111315] text-[#F1F0EC]"
    >
      <div className="max-w-content mx-auto px-5 md:px-16 flex flex-col justify-between">
        {/* Contact Upper Section */}
        <div className="pb-20 md:pb-32">
          {/* Eyebrow */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            className="text-xs font-mono tracking-widest text-[#929397] uppercase mb-6 md:mb-8"
          >
            {portfolioData.contact.eyebrow}
          </motion.div>

          {/* Headline */}
          <motion.h2
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-[#F1F0EC] leading-[1.08] tracking-tight mb-4 max-w-4xl"
          >
            {portfolioData.contact.headline}
          </motion.h2>

          {/* Subheadline / Availability */}
          <motion.p
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            className="text-base sm:text-lg text-[#929397] font-normal leading-relaxed mb-10 md:mb-14 max-w-2xl"
          >
            {portfolioData.contact.subheadline}
          </motion.p>

          {/* One-Click Copy-to-Clipboard Email Interaction */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            className="space-y-3"
          >
            <div className="inline-flex items-center gap-4 flex-wrap">
              <button
                type="button"
                onClick={handleCopyEmail}
                aria-label="Copy email address"
                className="group inline-flex items-center gap-3.5 sm:gap-5 font-serif text-2xl sm:text-4xl md:text-5xl lg:text-6xl text-[#AFA4FF] hover:text-[#C2BAFF] transition-colors relative cursor-pointer text-left bg-transparent border-0 p-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#AFA4FF] focus-visible:ring-offset-4 focus-visible:ring-offset-[#111315] rounded-lg"
              >
                <span className="relative">
                  {portfolioData.contact.email}
                  <span className="absolute bottom-0 left-0 w-full h-[1.5px] md:h-[2px] bg-[#AFA4FF] scale-x-100 group-hover:scale-x-105 origin-left transition-transform duration-300" />
                </span>

                {/* Copy Icon with Success Feedback State */}
                <span className="inline-flex items-center justify-center p-2 rounded-full border border-[#303236] bg-[#191B1E]/60 text-[#AFA4FF] group-hover:border-[#AFA4FF]/60 group-hover:text-[#F1F0EC] transition-all">
                  {copied ? (
                    <Check size={20} className="text-emerald-400 stroke-[2.2]" />
                  ) : (
                    <Copy size={20} className="group-hover:scale-105 transition-transform" />
                  )}
                </span>
              </button>

              {/* Success / Copied Badge */}
              {copied && (
                <span
                  role="status"
                  aria-live="polite"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono text-emerald-400 bg-emerald-400/10 border border-emerald-400/25 animate-in fade-in duration-200"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  Email copied!
                </span>
              )}

              {copyError && (
                <span
                  role="status"
                  aria-live="polite"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono text-amber-300 bg-amber-400/10 border border-amber-400/25"
                >
                  Please copy manually: {portfolioData.contact.email}
                </span>
              )}
            </div>

            {/* Subtle Helper Text */}
            <p className="text-xs text-[#929397]/70 font-mono">
              Click the email to copy it.
            </p>
          </motion.div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="pt-8 md:pt-12 border-t border-[#303236] flex flex-col md:flex-row items-start md:items-center justify-between gap-6 text-xs text-[#929397]">
          {/* Copyright & Location */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 font-mono text-[11px]">
            <span>{portfolioData.contact.copyright}</span>
            <span className="hidden sm:inline text-[#303236]">·</span>
            <span>Surat, Gujarat, India</span>
          </div>

          {/* Social Links & Back to Top */}
          <div className="flex items-center gap-6 sm:gap-8 font-medium">
            {portfolioData.contact.socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.isExternal ? '_blank' : undefined}
                rel={link.isExternal ? 'noopener noreferrer' : undefined}
                className="hover:text-[#F1F0EC] transition-colors flex items-center gap-1 group"
              >
                <span>{link.label}</span>
                {link.isExternal && (
                  <ArrowUpRight
                    size={13}
                    className="text-[#929397] group-hover:text-[#F1F0EC] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                  />
                )}
              </a>
            ))}

            {/* Back to top button */}
            <button
              type="button"
              onClick={scrollToTop}
              className="hover:text-[#F1F0EC] transition-colors flex items-center gap-1.5 focus:outline-none"
              aria-label="Back to top of page"
            >
              <span>Back to top</span>
              <ArrowUp size={13} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
