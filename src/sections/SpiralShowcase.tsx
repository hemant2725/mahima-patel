import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function SpiralShowcase() {
  const sectionRef = useRef<HTMLElement>(null);
  const labelRef = useRef<HTMLParagraphElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const bodyRef = useRef<HTMLParagraphElement>(null);
  const hintRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
          once: true,
        },
      });

      tl.to(labelRef.current, {
        opacity: 1,
        y: 0,
        duration: 1,
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
          '-=0.7'
        )
        .to(
          bodyRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: 'power3.out',
          },
          '-=0.6'
        )
        .to(
          hintRef.current,
          {
            opacity: 1,
            duration: 0.6,
            ease: 'power2.out',
          },
          '-=0.3'
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-[60vh] md:min-h-[80vh] flex flex-col items-center justify-center text-center px-4 sm:px-6 py-24 md:py-0"
      style={{ zIndex: 1 }}
    >
      <p
        ref={labelRef}
        className="label-gold text-white/60 opacity-0 translate-y-10"
      >
        LIVING GEOMETRY
      </p>

      <h2
        ref={headingRef}
        className="heading-display text-white text-[clamp(1.75rem,6vw,3.5rem)] mt-4 text-shadow-spiral opacity-0 translate-y-10"
      >
        The Algorithm Never Sleeps
      </h2>

      <p
        ref={bodyRef}
        className="body-text text-white/70 max-w-[38rem] mt-6 text-shadow-spiral opacity-0 translate-y-10"
      >
        The pattern you see is a continuous morphing between order and chaos. At
        rest, it is a precision radial gear &mdash; every spoke calculated to the
        golden angle. As time flows, it dissolves into an organic wave, then
        reforms. This is the breath of our design.
      </p>

      <span
        ref={hintRef}
        className="absolute bottom-8 right-8 font-body text-[11px] text-white/40 opacity-0 hidden md:block"
      >
        Drag to interact
      </span>
    </section>
  );
}
