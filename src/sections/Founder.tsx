import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Founder() {
  const sectionRef = useRef<HTMLElement>(null);
  const labelRef = useRef<HTMLParagraphElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const bodyRef = useRef<HTMLDivElement>(null);
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

      tl.to(imageRef.current, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out',
      })
        .to(
          labelRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: 'power3.out',
          },
          '-=0.7'
        )
        .to(
          headingRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            ease: 'power3.out',
          },
          '-=0.4'
        )
        .to(
          bodyRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            ease: 'power3.out',
          },
          '-=0.5'
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="founder"
      className="relative w-full section-dark py-20 md:py-[112px] border-t border-white/[0.06]"
      style={{ zIndex: 2 }}
    >
      <div className="max-w-[1320px] mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-14 lg:gap-20 items-center">

          {/* Founder Image */}
          <div
            ref={imageRef}
            className="opacity-0 translate-y-8"
            style={{ transform: 'translateY(32px)' }}
          >
            <div className="relative overflow-hidden">
              <img
                src="/images/mahima.jpeg"
                alt="Mahima Patel"
                className="w-full h-[650px] object-cover"
              />

              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent p-8">
                <p className="text-[11px] uppercase tracking-[0.22em] text-[#d4a853]">
                  Founder & Creative Director
                </p>

                <h3 className="font-display text-3xl md:text-4xl text-white mt-3">
                  Mahima Patel
                </h3>
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <p
              ref={labelRef}
              className="label-gold opacity-0 translate-y-8"
            >
              ABOUT THE FOUNDER
            </p>

            <h2
              ref={headingRef}
              className="heading-2 text-white text-[clamp(2rem,4vw,4rem)] leading-[1.05] mt-5 opacity-0 translate-y-8"
            >
              Where the algorithm ends, instinct begins.
            </h2>

            <div
              ref={bodyRef}
              className="opacity-0 translate-y-8"
            >
              <p className="body-text text-white/70 mt-8 max-w-[620px]">
                Mahima Patel builds collections the way a composer writes
                music &mdash; with precise structure and felt emotion,
                inseparable from each other.
              </p>

              <p className="body-text text-white/70 mt-6 max-w-[620px]">
                Her process begins in research: architecture, poetry, molecular
                geometry, the way light moves through fabric at a specific
                hour. What emerges is never accidental. Each silhouette is
                designed to carry weight &mdash; not in volume, but in meaning.
              </p>

              <p className="body-text text-white/70 mt-6 max-w-[620px]">
                For Mahima, a garment is not finished when the pattern is
                solved. It is finished when it makes the woman who wears it
                feel simultaneously powerful, present, and herself.
              </p>

              <div className="mt-10 flex flex-wrap gap-x-8 gap-y-4 text-[11px] uppercase tracking-[0.18em] text-white/45">
                <span>Algorithmic Craft</span>
                <span>Structured Emotion</span>
                <span>Modern Feminine Luxury</span>
                <span>Precision & Detail</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
