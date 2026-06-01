import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface FooterProps {
  onNavigate: (id: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const footerRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(contentRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: footerRef.current,
          start: 'top 90%',
          once: true,
        },
      });
    }, footerRef);

    return () => ctx.revert();
  }, []);

  return (
    <footer
      ref={footerRef}
      className="relative w-full overflow-hidden section-dark border-t border-white/[0.08]"
      style={{ zIndex: 2, padding: '56px 0 32px' }}
    >
      <div
        ref={contentRef}
        className="relative max-w-[1440px] mx-auto px-4 sm:px-6 md:px-12 opacity-0 translate-y-4"
      >
        <div className="flex flex-col gap-10 sm:gap-12 md:gap-16">

          {/* Nav + socials — above wordmark */}
          <div className="grid gap-8 md:grid-cols-[1.2fr_0.8fr] md:items-center">
            <div className="flex flex-wrap gap-x-5 gap-y-4 sm:gap-x-6">
              {['Collections', 'Algorithm', 'Atelier', 'Contact'].map(
                (label) => (
                  <button
                    key={label}
                    onClick={() => onNavigate(label.toLowerCase())}
                    className="font-body text-[11px] uppercase tracking-[0.14em] sm:tracking-[0.18em] text-white/45 hover:text-[#d4a853] transition-colors duration-300"
                  >
                    {label}
                  </button>
                )
              )}
            </div>

            <div className="flex flex-wrap gap-x-5 gap-y-4 md:justify-end">
              {['Instagram', 'Pinterest'].map((social) => (
                <span
                  key={social}
                  className="font-body text-[11px] uppercase tracking-[0.14em] sm:tracking-[0.18em] text-white/45 hover:text-[#d4a853] transition-colors duration-300 cursor-pointer"
                >
                  {social}
                </span>
              ))}
            </div>
          </div>

          {/* Wordmark — single line */}
          <button
            onClick={() => onNavigate('hero')}
            className="group text-center w-full"
            aria-label="Back to top"
          >
            <h2
              className="font-display whitespace-nowrap text-white uppercase leading-[0.86] tracking-[-0.03em] mx-auto"
              style={{ fontSize: 'clamp(3rem, 10.5vw, 11rem)' }}
            >
              Mahima Patel
            </h2>
          </button>

        </div>

        {/* Copyright */}
        <div className="mt-12 sm:mt-14 md:mt-16 pt-6 border-t border-white/[0.06] flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
          <p className="font-body text-[10px] sm:text-[11px] uppercase tracking-[0.14em] sm:tracking-[0.18em] text-white/30">
            &copy; 2026 Mahima Patel. All rights reserved.
          </p>
          <p className="font-body text-[10px] sm:text-[11px] uppercase tracking-[0.14em] sm:tracking-[0.18em] text-white/30">
            Made in India
          </p>
        </div>
      </div>
    </footer>
  );
}