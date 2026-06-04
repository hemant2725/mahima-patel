import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function AlgorithmDetail() {
  const sectionRef = useRef<HTMLElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(leftRef.current, {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
          once: true,
        },
      });

      gsap.to(svgRef.current, {
        opacity: 1,
        scale: 1,
        duration: 1.2,
        ease: 'power3.out',
        delay: 0.2,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
          once: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="algorithm"
      className="relative w-full section-dark py-16 md:py-[96px]"
      style={{ zIndex: 2 }}
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-12 flex flex-col md:flex-row items-center gap-10 lg:gap-16">
        {/* Left Column */}
        <div
          ref={leftRef}
          className="w-full md:w-1/2 text-center md:text-left opacity-0"
          style={{ transform: 'translateX(-40px)' }}
        >
          <p className="label-gold">THE MATHEMATICS</p>

          <h2 className="heading-display text-white text-[clamp(2.5rem,10vw,5rem)] tracking-[-0.04em] mt-4">
            137.5°
          </h2>

          <p className="body-text text-white/70 max-w-[400px] mx-auto md:mx-0 mt-6 sm:mt-8">
            The golden angle. Found in the spiral of a sunflower. The
            branching of a fern. The chambered nautilus. For millennia, this
            irrational number has quietly structured the natural world &mdash;
            and gone unnoticed precisely because it feels inevitable.
            <br />
            <br />
            At MAHIMA PATEL, 137.5&deg; is not an aesthetic reference. It is a
            construction rule. Every seam placement, dart angle, and hem drop
            is derived from it &mdash; producing silhouettes the body
            recognises before the mind does.
          </p>

          {/* <button className="cta-button mt-8 w-full sm:w-auto">
            View Technical Process
          </button> */}
        </div>

        {/* Right Column - SVG Spiral */}
        <div className="w-full md:w-1/2 flex items-center justify-center">
          <svg
            ref={svgRef}
            viewBox="0 0 200 200"
            className="spiral-rotate w-full max-w-[240px] sm:max-w-[300px] md:max-w-[360px] opacity-0"
            style={{ transform: 'scale(0.8)' }}
          >
            <defs>
              <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#d4a853" />
                <stop offset="100%" stopColor="#b8932f" />
              </linearGradient>
            </defs>
            <path
              d="M100 100 
                 L100 60 
                 A40 40 0 0 1 140 100 
                 A40 40 0 0 1 100 140 
                 A40 40 0 0 1 60 100
                 A60 60 0 0 1 120 100
                 A60 60 0 0 1 100 160
                 A80 80 0 0 1 20 100
                 A80 80 0 0 1 100 20
                 A100 100 0 0 1 200 100
                 A100 100 0 0 1 100 200"
              fill="none"
              stroke="url(#goldGrad)"
              strokeWidth="1"
              strokeLinecap="round"
            />
            <g opacity="0.3">
              {[...Array(12)].map((_, i) => {
                const angle = (i * 137.5 * Math.PI) / 180;
                const x2 = 100 + 95 * Math.cos(angle);
                const y2 = 100 + 95 * Math.sin(angle);
                return (
                  <line
                    key={i}
                    x1="100"
                    y1="100"
                    x2={x2}
                    y2={y2}
                    stroke="#d4a853"
                    strokeWidth="0.5"
                  />
                );
              })}
            </g>
            <circle cx="100" cy="100" r="3" fill="#d4a853" />
          </svg>
        </div>
      </div>
    </section>
  );
}
