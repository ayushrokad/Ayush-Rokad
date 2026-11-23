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
    const sectionIds = ['about', 'experience', 'work', 'skills', 'contact'];
    const sectionElements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((element): element is HTMLElement => element !== null);

    // Observe section visibility instead of measuring every section on every scroll.
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]) {
          setActiveSection(visible[0].target.id);
        }
      },
      {
        rootMargin: '-22% 0px -62% 0px',
        threshold: [0, 0.15, 0.35, 0.6],
      }
    );

    sectionElements.forEach((element) => sectionObserver.observe(element));

    // Only update React state when the header crosses its scroll threshold.
    let previousScrolled = window.scrollY > 30;
    setIsScrolled(previousScrolled);

    const handleScroll = () => {
      const nextScrolled = window.scrollY > 30;
      if (nextScrolled !== previousScrolled) {
        previousScrolled = nextScrolled;
        setIsScrolled(nextScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      sectionObserver.disconnect();
    };
  }, []);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-200 ${
          isScrolled
            ? 'h-16 md:h-[76px] bg-[#111315]/85 backdrop-blur-md border-b border-[#303236]/60 shadow-sm'
            : 'h-16 md:h-[76px] bg-transparent border-b border-transparent'
        }`}
      >
        <div className="max-w-content mx-auto h-full px-5 md:px-16 flex items-center justify-between">
          <Link
            href="/"
            className="text-xs md:text-sm font-medium tracking-[0.14em] text-[#F1F0EC] hover:text-white transition-colors uppercase select-none"
            aria-label="Ayush Rokad Home"
          >
            {portfolioData.navigation.brand}
          </Link>

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

            <a
              href={portfolioData.navigation.cta.href}
              className="ml-2 inline-flex items-center justify-center px-4 py-2 rounded-full text-xs font-medium bg-[#F1F0EC] text-[#111315] hover:bg-white transition-colors duration-200"
            >
              {portfolioData.navigation.cta.label}
            </a>
          </nav>

          <div className="flex items-center gap-3 md:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#929397] hover:text-[#F1F0EC] transition-colors"
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-controls="mobile-navigation"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      {mobileMenuOpen && (
        <div
          id="mobile-navigation"
          className="fixed inset-0 z-40 bg-[#111315] flex flex-col justify-between p-8 pt-28 md:hidden animate-in fade-in duration-200"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
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
              Surat, Gujarat, India · Open to opportunities
            </p>
          </div>
        </div>
      )}
    </>
  );
};
