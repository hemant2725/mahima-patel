import { useEffect, useRef } from 'react';
import gsap from 'gsap';

interface HeroProps {
  onNavigate: (id: string) => void;
}

export default function Hero({ onNavigate }: HeroProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const labelRef = useRef<HTMLParagraphElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLButtonElement>(null);
  const chevronRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.8 });

    tl.to(labelRef.current, {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: 'power3.out',
    })
      .to(
        titleRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: 'power3.out',
        },
        '-=0.7'
      )
      .to(
        subtitleRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
        },
        '-=0.7'
      )
      .to(
        ctaRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
        },
        '-=0.5'
      )
      .to(
        chevronRef.current,
        {
          opacity: 1,
          duration: 0.6,
          ease: 'power2.out',
        },
        '-=0.3'
      );

    return () => {
      tl.kill();
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const vh = window.innerHeight;
      const progress = Math.min(scrollY / vh, 1);

      if (sectionRef.current) {
        sectionRef.current.style.opacity = String(1 - progress * 0.8);
        sectionRef.current.style.transform = `translateY(${progress * 50}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative w-full min-h-[100dvh] overflow-hidden bg-black flex flex-col items-center justify-center text-center px-4 sm:px-6"
      style={{ zIndex: 1 }}
    >
      <img
        src="/images/Group 5 front.png"
        alt="Editorial fashion portrait in a flowing organic linen gown"
        className="absolute inset-0 h-full w-full object-cover object-center"
        loading="eager"
        fetchPriority="high"
      />

      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/25 to-black/55" />

      <div className="absolute inset-x-0 bottom-12 sm:bottom-16 md:bottom-24 z-10 flex justify-center px-4 sm:px-6">
        <div className="relative z-10 flex flex-col items-center max-w-[92vw] md:max-w-[760px]">
          <p
            ref={labelRef}
            className="label-gold text-white/90 mb-4 sm:mb-6 opacity-0 translate-y-4"
          >
            SPRING / SUMMER 2026
          </p>

          <h1
            ref={titleRef}
            className="heading-display text-white text-[clamp(2.5rem,8vw,5rem)] leading-[0.95] text-shadow-hero opacity-0 translate-y-6"
          >
            The Weight
            <br />
            of Light
          </h1>

          <p
            ref={subtitleRef}
            className="body-text text-white/90 mt-4 sm:mt-6 max-w-[24rem] sm:max-w-none opacity-0 translate-y-4"
          >
            Where nature meets intention.
          </p>

          <button
            ref={ctaRef}
            onClick={() => onNavigate('collections')}
            className="cta-button mt-8 sm:mt-12 w-full sm:w-auto opacity-0 translate-y-4"
          >
            Explore Collection
          </button>
        </div>
      </div>

      <div
        ref={chevronRef}
        className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 opacity-0 z-10"
      >
        <svg
          className="bounce-gentle"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="rgba(255,255,255,0.5)"
          strokeWidth="1.5"
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
      </div>
    </section>
  );
}