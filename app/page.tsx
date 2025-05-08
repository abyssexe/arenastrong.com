'use client';

import Hero from '../components/Hero';
import About from '../components/About';
import TrainingPrograms from '../components/TrainingPrograms';
import Recovery from '../components/Recovery';
import Coaches from '../components/Coaches';
import Partnerships from '../components/Partnerships';
import CTA from '../components/CTA';

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <TrainingPrograms />
      <Recovery />
      <Coaches />
      <Partnerships />
      <CTA />
      {/* Footer is included in layout.tsx */}
    </>
  );
}
