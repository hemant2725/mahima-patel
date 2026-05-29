import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const collections = [
  {
    name: 'Fibonacci Silks',
    season: 'AW25',
    imageA: '/images/img-collection-1a.jpg',
    imageB: '/images/img-collection-1b.jpg',
  },
  {
    name: 'Radial Tailoring',
    season: 'AW25',
    imageA: '/images/img-collection-2a.jpg',
    imageB: '/images/img-collection-2b.jpg',
  },
  {
    name: 'Vortex Knitwear',
    season: 'AW25',
    imageA: '/images/img-collection-3a.jpg',
    imageB: '/images/img-collection-3b.jpg',
  },
  {
    name: 'Golden Mesh',
    season: 'AW25',
    imageA: '/images/img-collection-4a.jpg',
    imageB: '/images/img-collection-4b.jpg',
  },
];

export default function Collections() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header animation
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

      // Cards animation
      cardsRef.current.forEach((card, i) => {
        if (!card) return;
        gsap.to(card, {
          opacity: 1,
          scale: 1,
          duration: 0.8,
          ease: 'power3.out',
          delay: i * 0.1,
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
      className="relative w-full section-light py-20 md:py-[120px]"
      style={{ zIndex: 2 }}
    >
      {/* Header */}
      <div
        ref={headerRef}
        className="text-center mb-12 md:mb-16 opacity-0 translate-y-8 px-4 sm:px-6"
      >
        <p className="label-gold">COLLECTIONS</p>
        <h2 className="heading-2 text-[#1a1a1a] text-[clamp(1.75rem,3.5vw,2.75rem)] mt-3">
          Four Algorithms, Infinite Garments
        </h2>
      </div>

      {/* Grid */}
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-[2px]">
          {collections.map((collection, i) => (
            <div
              key={collection.name}
              ref={(el) => {
                cardsRef.current[i] = el;
              }}
              className="group relative aspect-[4/5] sm:aspect-[3/4] overflow-hidden cursor-pointer opacity-0"
              style={{ transform: 'scale(0.95)' }}
              data-cursor="expand"
            >
              {/* Image A (default) */}
              <img
                src={collection.imageA}
                alt={collection.name}
                className="absolute inset-0 w-full h-full object-cover transition-opacity duration-600 ease-in-out group-hover:opacity-0"
                loading="lazy"
              />

              {/* Image B (hover) */}
              <img
                src={collection.imageB}
                alt={`${collection.name} detail`}
                className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-600 ease-in-out group-hover:opacity-100"
                loading="lazy"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

              {/* Text */}
              <div className="absolute bottom-0 left-0 p-5 sm:p-6 transition-transform duration-300 ease-out group-hover:-translate-y-1">
                <h3 className="font-display text-xl sm:text-2xl text-white font-light">
                  {collection.name}
                </h3>
                <p className="font-body text-[11px] uppercase tracking-[0.15em] text-white/70 mt-1">
                  {collection.season}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
