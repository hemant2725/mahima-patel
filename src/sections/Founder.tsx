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
      className="relative w-full section-dark py-24 md:py-[140px] border-t border-white/[0.06]"
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
                src="/images/image.png"
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
              Designing through emotion,
              memory, and the quiet beauty
              of everyday moments.
            </h2>

            <div
              ref={bodyRef}
              className="opacity-0 translate-y-8"
            >
              <p className="body-text text-white/70 mt-8 max-w-[620px]">
                Mahima Patel approaches fashion as a form of storytelling.
                Her inspiration often emerges from memories, conversations,
                architecture, music, poetry, and the subtle movements that
                linger in the mind long after they are experienced.
              </p>

              <p className="body-text text-white/70 mt-6 max-w-[620px]">
                Rather than following a single formula, she allows ideas to
                evolve naturally—becoming bold, dramatic, soft, or expressive
                depending on the story being told. Each collection is built
                through thoughtful layering, refined silhouettes, and an
                intuitive understanding of texture, movement, and presence.
              </p>

              <p className="body-text text-white/70 mt-6 max-w-[620px]">
                For Mahima, clothing is more than fabric. It carries emotion,
                preserves moments, and becomes part of the person who wears it.
                Her vision is to create garments that make women feel powerful,
                beautiful, vulnerable, and confident—all at once.
              </p>

              <div className="mt-10 flex flex-wrap gap-x-8 gap-y-4 text-[11px] uppercase tracking-[0.18em] text-white/45">
                <span>Emotion Driven Design</span>
                <span>Storytelling Through Fashion</span>
                <span>Modern Feminine Luxury</span>
                <span>Craft & Detail</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}