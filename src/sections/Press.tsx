import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const pressQuotes = [
  {
    quote: "MAHIMA PATEL doesn't just design clothes. They compute them.",
    publication: 'Vogue Paris',
  },
  {
    quote:
      'The most intellectually rigorous couture house operating today.',
    publication: 'The Business of Fashion',
  },
  {
    quote:
      'When mathematics and fashion collide, the result is breathtaking.',
    publication: 'Wallpaper',
  },
  {
    quote: 'A new language for luxury.',
    publication: 'Elle',
  },
];

export default function Press() {
  const sectionRef = useRef<HTMLElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const entriesRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Left column
      gsap.to(leftRef.current, {
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

      // Press entries
      entriesRef.current.forEach((entry, i) => {
        if (!entry) return;
        gsap.to(entry, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          delay: i * 0.12,
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
      className="relative w-full section-dark py-16 md:py-[96px]"
      style={{ zIndex: 2 }}
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-12 flex flex-col md:flex-row gap-10 lg:gap-16">
        {/* Left Column - 40% */}
        <div
          ref={leftRef}
          className="w-full md:w-[40%] text-center md:text-left opacity-0 translate-y-8"
        >
          <p className="label-gold">RECOGNITION</p>
          <h2 className="heading-2 text-white text-[clamp(1.75rem,3.5vw,2.75rem)] mt-3">
            As Recognised By
          </h2>
        </div>

        {/* Right Column - 60% */}
        <div className="w-full md:w-[60%]">
          {pressQuotes.map((item, i) => (
            <div
              key={i}
              ref={(el) => {
                entriesRef.current[i] = el;
              }}
              className={`py-6 opacity-0 translate-y-6 ${
                i < pressQuotes.length - 1 ? 'border-b border-white/10' : ''
              }`}
            >
              <div className="flex items-start gap-3 sm:gap-4">
                {/* Gold accent line */}
                <div className="w-[3px] h-10 sm:h-12 bg-[#d4a853] flex-shrink-0 mt-1" />
                <div>
                  <p className="font-display text-[clamp(1.05rem,2vw,1.375rem)] text-white/90 italic font-light leading-relaxed">
                    &ldquo;{item.quote}&rdquo;
                  </p>
                  <p className="label-gold mt-3">{item.publication}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
