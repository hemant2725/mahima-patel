import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface FooterProps {
  onNavigate: (id: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const footerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(footerRef.current, {
        opacity: 1,
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
      className="relative w-full bg-[#0a0a0a] border-t border-white/[0.08]"
      style={{ zIndex: 2, padding: '48px 0 32px' }}
    >
      <div
        className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-12 opacity-0"
        ref={(el) => {
          if (el) {
            // Store reference for animation
            const parent = el.parentElement;
            if (parent) {
              (parent as HTMLElement).dataset.footerContent = 'true';
            }
          }
        }}
      >
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-8 relative">
          {/* Navigation */}
          <div className="flex flex-wrap justify-center gap-6 w-full md:w-1/3 md:justify-start order-2 md:order-1">
            {['Collections', 'Algorithm', 'Atelier', 'Contact'].map(
              (label) => (
                <button
                  key={label}
                  onClick={() => onNavigate(label.toLowerCase())}
                  className="font-body text-[11px] uppercase tracking-[0.1em] text-white/50 hover:text-[#d4a853] transition-colors duration-300"
                >
                  {label}
                </button>
              )
            )}
          </div>

          {/* Brand */}
          <button
            onClick={() => onNavigate('hero')}
            className="font-display text-sm uppercase tracking-[0.2em] text-white order-1 md:order-2 md:absolute md:left-1/2 md:-translate-x-1/2"
          >
            MAHIMA PATEL
          </button>

          {/* Social */}
          <div className="flex gap-6 w-full md:w-1/3 justify-center md:justify-end order-3">
            {['Instagram', 'Pinterest'].map((social) => (
              <span
                key={social}
                className="font-body text-[11px] uppercase tracking-[0.1em] text-white/50 hover:text-[#d4a853] transition-colors duration-300 cursor-pointer"
              >
                {social}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-6 border-t border-white/[0.05]">
          <p className="font-body text-[11px] text-white/30">
            &copy; 2025 MAHIMA PATEL. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
