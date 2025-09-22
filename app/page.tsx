'use client';

import Home from '@/components/Home';
import Projects from '@/components/Projects';
import Resume from '@/components/Resume';
import Services from '@/components/Services';
import Contact from '@/components/Contact';

export default function HomePage() {
  return (
    <div>
      <Home />
      <Services />
      <Projects />
      <Resume />
      <Contact />
    </div>
  );
}