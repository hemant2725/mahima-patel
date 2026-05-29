import { useEffect, useRef } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import SpiralVortex from './components/SpiralVortex';
import CustomCursor from './components/CustomCursor';
import Navigation from './components/Navigation';
import Hero from './sections/Hero';
import Manifesto from './sections/Manifesto';
import SpiralShowcase from './sections/SpiralShowcase';
import Collections from './sections/Collections';
import AlgorithmDetail from './sections/AlgorithmDetail';
import Atelier from './sections/Atelier';
import Press from './sections/Press';
import Contact from './sections/Contact';
import Footer from './sections/Footer';

gsap.registerPlugin(ScrollTrigger);

function App() {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    // Initialize Lenis smooth scroll
    const lenis = new Lenis({
      lerp: 0.08,
      smoothWheel: true,
    });
    lenisRef.current = lenis;

    // Connect Lenis to GSAP ScrollTrigger
    lenis.on('scroll', ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.destroy();
      gsap.ticker.remove(lenis.raf);
    };
  }, []);

  const handleNavigate = (id: string) => {
    const element = document.getElementById(id);
    if (element && lenisRef.current) {
      lenisRef.current.scrollTo(element, { offset: 0 });
    }
  };

  return (
    <div className="relative min-h-screen">
      {/* WebGL Spiral Background - Fixed behind everything */}
      <SpiralVortex />

      {/* Custom Cursor */}
      <CustomCursor />

      {/* Navigation */}
      <Navigation onNavigate={handleNavigate} />

      {/* Content layers above the spiral */}
      <div className="relative" style={{ zIndex: 1 }}>
        {/* Hero - transparent, spiral visible behind */}
        <Hero onNavigate={handleNavigate} />

        {/* Manifesto - dark background covers spiral */}
        <Manifesto />

        {/* Spiral Showcase - transparent, spiral visible */}
        <SpiralShowcase />

        {/* Collections - light background covers spiral */}
        <Collections />

        {/* Algorithm Detail - dark background covers spiral */}
        <AlgorithmDetail />

        {/* Atelier - light background covers spiral */}
        <Atelier />

        {/* Press - dark background covers spiral */}
        <Press />

        {/* Contact - dark background covers spiral */}
        <Contact />

        {/* Footer */}
        <Footer onNavigate={handleNavigate} />
      </div>
    </div>
  );
}

export default App;
