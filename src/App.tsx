import { useEffect, useRef } from 'react';
import { Route, Routes, useLocation, useNavigate } from 'react-router';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import SpiralVortex from './components/SpiralVortex';
import CustomCursor from './components/CustomCursor';
import Navigation from './components/Navigation';
import HomePage from './pages/HomePage';
import CollectionPage from './pages/CollectionPage';
import ProductPage from './pages/ProductPage';
import NotFound from './pages/NotFound';

gsap.registerPlugin(ScrollTrigger);

function App() {
  const lenisRef = useRef<Lenis | null>(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.08,
      smoothWheel: true,
    });
    lenisRef.current = lenis;

    lenis.on('scroll', ScrollTrigger.update);

    const tick = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(tick);
      lenis.destroy();
    };
  }, []);

  useEffect(() => {
    if (location.pathname === '/') {
      return;
    }

    const frame = window.requestAnimationFrame(() => {
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
      lenisRef.current?.scrollTo(0, { immediate: true });
    });

    return () => window.cancelAnimationFrame(frame);
  }, [location.pathname, location.key]);

  useEffect(() => {
    if (location.pathname !== '/') {
      return;
    }

    let frame = 0;
    let attempts = 0;

    const targetId = location.hash ? location.hash.slice(1) : '';

    const tryScroll = () => {
      if (!targetId || targetId === 'hero') {
        lenisRef.current?.scrollTo(0, { immediate: true });
        return;
      }

      const element = document.getElementById(targetId);

      if (!element) {
        if (attempts < 20) {
          attempts += 1;
          frame = window.requestAnimationFrame(tryScroll);
        }
        return;
      }

      lenisRef.current?.scrollTo(element, { offset: 0 });
    };

    frame = window.requestAnimationFrame(tryScroll);

    return () => window.cancelAnimationFrame(frame);
  }, [location.hash, location.pathname]);

  const handleNavigate = (id: string) => {
    if (location.pathname === '/' && id === 'hero') {
      lenisRef.current?.scrollTo(0, { immediate: true });
      return;
    }

    navigate(id === 'hero' ? '/' : `/#${id}`);
  };

  return (
    <div className="relative min-h-screen">
      <SpiralVortex />
      <CustomCursor />
      <Navigation onNavigate={handleNavigate} />

      <div className="relative" style={{ zIndex: 1 }}>
        <Routes>
          <Route path="/" element={<HomePage onNavigate={handleNavigate} />} />
          <Route
            path="/collections/:collectionSlug"
            element={<CollectionPage />}
          />
          <Route
            path="/collections/:collectionSlug/products/:productSlug"
            element={<ProductPage />}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
