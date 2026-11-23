'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { portfolioData } from '@/data/portfolio';
import { Menu, X } from 'lucide-react';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      const sections = ['about', 'experience', 'highlights', 'expertise', 'contact'];
      const scrollPosition = window.scrollY + 140;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            return;
          }
        }
      }
      if (window.scrollY < 200) {
        setActiveSection('');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'h-16 md:h-[76px] bg-[#111315]/85 backdrop-blur-md border-b border-[#303236]/60 shadow-sm'
            : 'h-16 md:h-[76px] bg-transparent border-b border-transparent'
        }`}
      >
        <div className="max-w-content mx-auto h-full px-5 md:px-16 flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="text-xs md:text-sm font-medium tracking-[0.14em] text-[#F1F0EC] hover:text-white transition-colors uppercase select-none"
            aria-label="Ayush Rokad Home"
          >
            {portfolioData.navigation.brand}
          </Link>

          {/* Desktop Navigation */}
          <nav
            className="hidden md:flex items-center gap-7 lg:gap-8 text-sm"
            aria-label="Main Navigation"
          >
            {portfolioData.navigation.links.map((link) => {
              const sectionId = link.href.replace('#', '');
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  className={`relative text-xs tracking-wide transition-colors py-1 ${
                    isActive
                      ? 'text-[#F1F0EC] font-medium'
                      : 'text-[#929397] hover:text-[#F1F0EC]'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute -bottom-1 left-0 right-0 h-[1.5px] bg-[#AFA4FF] rounded-full" />
                  )}
                </a>
              );
            })}

            {/* CTA button */}
            <a
              href={portfolioData.navigation.cta.href}
              className="ml-2 inline-flex items-center justify-center px-4 py-2 rounded-full text-xs font-medium bg-[#F1F0EC] text-[#111315] hover:bg-white hover:shadow-[0_0_15px_rgba(241,240,236,0.2)] transition-all duration-200"
            >
              {portfolioData.navigation.cta.label}
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-3 md:hidden">
            <a
              href={portfolioData.navigation.cta.href}
              className="inline-flex items-center justify-center px-3.5 py-1.5 rounded-full text-xs font-medium bg-[#F1F0EC] text-[#111315]"
            >
              Talk
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#929397] hover:text-[#F1F0EC] focus:outline-none"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-[#111315] flex flex-col justify-between p-8 pt-28 md:hidden animate-in fade-in duration-200"
          role="dialog"
          aria-modal="true"
        >
          <div className="flex flex-col space-y-6">
            <p className="text-[11px] font-mono tracking-widest text-[#929397] uppercase">
              Navigation
            </p>
            {portfolioData.navigation.links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={closeMobileMenu}
                className="font-serif text-3xl text-[#F1F0EC] hover:text-[#AFA4FF] transition-colors py-1"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-8 border-t border-[#303236]">
            <p className="text-xs text-[#929397] mb-2">Get in touch</p>
            <a
              href={`mailto:${portfolioData.contact.email}`}
              className="text-sm text-[#AFA4FF] hover:underline"
            >
              {portfolioData.contact.email}
            </a>
            <p className="text-[11px] text-[#929397]/60 mt-4">
              {portfolioData.hero.metadata[0].value}
            </p>
          </div>
        </div>
      )}
    </>
  );
};
