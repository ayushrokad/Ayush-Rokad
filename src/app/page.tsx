import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Experience } from '@/components/Experience';
import { ExperienceHighlights } from '@/components/ExperienceHighlights';
import { Expertise } from '@/components/Expertise';
import { Toolkit } from '@/components/Toolkit';
import { Philosophy } from '@/components/Philosophy';
import { Contact } from '@/components/Contact';

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#111315] text-[#F1F0EC] flex flex-col justify-between">
      <Header />
      <main id="main-content">
        <Hero />
        <About />
        <Experience />
        <ExperienceHighlights />
        <Expertise />
        <Toolkit />
        <Philosophy />
      </main>
      <Contact />
    </div>
  );
}
