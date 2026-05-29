import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Manifesto() {
  const sectionRef = useRef<HTMLElement>(null);
  const labelRef = useRef<HTMLParagraphElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const bodyRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLAnchorElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          once: true,
        },
      });

      tl.to(labelRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power3.out',
      })
        .to(
          headingRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: 'power3.out',
          },
          '-=0.5'
        )
        .to(
          bodyRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power3.out',
          },
          '-=0.5'
        )
        .to(
          ctaRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power3.out',
          },
          '-=0.4'
        )
        .to(
          imageRef.current,
          {
            opacity: 1,
            x: 0,
            rotation: 0,
            duration: 1.2,
            ease: 'power3.out',
          },
          '-=1'
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full section-dark py-20 md:py-[120px]"
      style={{ zIndex: 2 }}
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-12 flex flex-col md:flex-row items-start gap-10 lg:gap-16">
        {/* Text Column - 55% */}
        <div className="w-full md:w-[55%] text-center md:text-left">
          <p
            ref={labelRef}
            className="label-gold mb-5 sm:mb-6 opacity-0 translate-y-8"
          >
            OUR PHILOSOPHY
          </p>

          <h2
            ref={headingRef}
            className="heading-2 text-white text-[clamp(1.75rem,5vw,2.75rem)] max-w-[520px] mx-auto md:mx-0 opacity-0 translate-y-8"
          >
            Fashion is not decoration. It is computation made visible.
          </h2>

          <p
            ref={bodyRef}
            className="body-text text-white/70 max-w-[460px] mx-auto md:mx-0 mt-6 sm:mt-8 opacity-0 translate-y-8"
          >
            MAHIMA PATEL creates garments through the lens of algorithmic
            design &mdash; each collection born from a single mathematical
            formula, woven into fabric by artisans in our Paris atelier. The
            golden spiral you see is not merely decoration. It is the DNA of our
            process: the golden angle of 137.5 degrees that governs every
            pattern, every drape, every seam.
          </p>

          <a
            ref={ctaRef}
            href="#algorithm"
            className="text-link-gold mt-8 inline-block opacity-0 translate-y-8"
          >
            Discover Our Process
          </a>
        </div>

        {/* Image Column - 45% */}
        <div className="w-full md:w-[45%] md:-mt-[48px]">
          <div
            ref={imageRef}
            className="max-w-[560px] mx-auto md:mx-0 opacity-0 translate-x-8 md:translate-x-12"
            style={{ transform: 'translateX(48px) rotate(-3deg)' }}
          >
            <img
              src="/images/img-manifesto.png"
              alt="Model wearing architectural golden silk dress"
              className="w-full h-auto object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
