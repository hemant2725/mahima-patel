import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { collections } from '../data/shopCatalog';

gsap.registerPlugin(ScrollTrigger);

export default function Collections() {
  const navigate = useNavigate();
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLButtonElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(headerRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
          once: true,
        },
      });

      cardsRef.current.forEach((card, i) => {
        if (!card) return;

        gsap.to(card, {
          opacity: 1,
          scale: 1,
          duration: 0.8,
          ease: 'power3.out',
          delay: i * 0.08,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 60%',
            once: true,
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="collections"
      data-theme="light"
      className="relative w-full section-light"
      style={{ zIndex: 2, padding: '120px 0' }}
    >
      <div
        ref={headerRef}
        className="text-center mb-16 opacity-0 translate-y-8"
      >
        <p className="label-gold">COLLECTIONS</p>
        <h2 className="heading-2 text-[#1a1a1a] text-[clamp(1.75rem,3.5vw,2.75rem)] mt-3">
          Nine Collections, Infinite Garments
        </h2>
      </div>

      <div className="max-w-[1280px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[2px]">
          {collections.map((collection, i) => (
            <button
              key={collection.slug}
              ref={(el) => {
                cardsRef.current[i] = el;
              }}
              type="button"
              onClick={() => navigate(`/collections/${collection.slug}`)}
              className="group relative aspect-[3/4] overflow-hidden cursor-pointer opacity-0 text-left"
              style={{ transform: 'scale(0.95)' }}
              data-cursor="expand"
              aria-label={`Open collection ${collection.name}`}
            >
              <img
                src={collection.imageA}
                alt={collection.name}
                className="absolute inset-0 w-full h-full object-cover transition-opacity duration-600 ease-in-out group-hover:opacity-0"
                loading="lazy"
              />

              <img
                src={collection.imageB}
                alt={`${collection.name} detail`}
                className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-600 ease-in-out group-hover:opacity-100"
                loading="lazy"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />

              <div className="absolute inset-x-0 bottom-0 p-6 transition-transform duration-300 ease-out group-hover:-translate-y-1">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <h3 className="font-display text-2xl text-white font-light">
                      {collection.name}
                    </h3>
                    <p className="font-body text-[11px] uppercase tracking-[0.15em] text-white/70 mt-1">
                      {collection.season}
                    </p>
                  </div>
                  <span className="hidden sm:inline-flex font-body text-[10px] uppercase tracking-[0.18em] text-white/80 border border-white/20 px-3 py-2">
                    View
                  </span>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
