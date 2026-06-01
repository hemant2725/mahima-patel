import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const atelierImages = [
  {
    src: '/images/img-atelier-1.jpg',
    alt: 'Wide shot of atelier interior bathed in warm Delhi afternoon light',
  },
  {
    src: '/images/img-atelier-2.jpg',
    alt: 'Close-up of hands weaving zari thread into black georgette',
  },
  {
    src: '/images/img-atelier-3.jpg',
    alt: 'Model fitting session with structured ivory column gown',
  },
  {
    src: '/images/img-atelier-4.jpg',
    alt: 'Overhead flat-lay of fabric swatches arranged in a Fibonacci spiral',
  },
  {
    src: '/images/img-atelier-5.jpg',
    alt: 'Artisan hand-finishing the hem of a draped silk charmeuse coat',
  },
];

export default function Atelier() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const galleryRef = useRef<HTMLDivElement>(null);
  const paragraphRef = useRef<HTMLParagraphElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const dragStartRef = useRef({ x: 0, scrollLeft: 0 });

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(headerRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          once: true,
        },
      });

      if (galleryRef.current) {
        const images = galleryRef.current.querySelectorAll('.atelier-img');
        gsap.to(images, {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: 'power3.out',
          stagger: 0.08,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 60%',
            once: true,
          },
        });
      }

      gsap.to(paragraphRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: paragraphRef.current,
          start: 'top 85%',
          once: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!galleryRef.current) return;
    setIsDragging(true);
    dragStartRef.current = {
      x: e.pageX - galleryRef.current.offsetLeft,
      scrollLeft: galleryRef.current.scrollLeft,
    };
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !galleryRef.current) return;
    e.preventDefault();
    const x = e.pageX - galleryRef.current.offsetLeft;
    const walk = (x - dragStartRef.current.x) * 1.5;
    galleryRef.current.scrollLeft = dragStartRef.current.scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    if (!galleryRef.current) return;
    setIsDragging(true);
    dragStartRef.current = {
      x: e.touches[0].pageX - galleryRef.current.offsetLeft,
      scrollLeft: galleryRef.current.scrollLeft,
    };
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || !galleryRef.current) return;
    const x = e.touches[0].pageX - galleryRef.current.offsetLeft;
    const walk = (x - dragStartRef.current.x) * 1.5;
    galleryRef.current.scrollLeft = dragStartRef.current.scrollLeft - walk;
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  return (
    <section
      ref={sectionRef}
      id="atelier"
      data-theme="light"
      className="relative w-full section-light py-20 md:py-[120px]"
      style={{ zIndex: 2 }}
    >
      {/* Header */}
      <div
        ref={headerRef}
        className="text-center mb-10 md:mb-12 px-4 sm:px-6 opacity-0 translate-y-8"
      >
        <p className="label-gold">NEW DELHI ATELIER</p>
        <h2 className="heading-2 text-[#1a1a1a] text-[clamp(1.75rem,3.5vw,2.75rem)] mt-3">
          Where Geometry Meets Thread
        </h2>
      </div>

      {/* Gallery */}
      <div
        ref={galleryRef}
        className={`flex gap-3 sm:gap-4 overflow-x-auto scrollbar-hide px-4 sm:px-6 md:px-12 ${isDragging ? 'cursor-grabbing' : 'cursor-grab'}`}
        style={{
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
          WebkitOverflowScrolling: 'touch',
        }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {atelierImages.map((img, i) => (
          <div
            key={i}
            className="atelier-img flex-shrink-0 opacity-0"
            style={{
              width: '82vw',
              minWidth: '260px',
              maxWidth: '900px',
              aspectRatio: '4 / 3',
              transform: 'translateX(40px)',
            }}
          >
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-full object-cover select-none"
              draggable={false}
              loading="lazy"
            />
          </div>
        ))}
      </div>

      {/* Paragraph */}
      <p
        ref={paragraphRef}
        className="body-text text-[#666666] text-center max-w-[600px] mx-auto mt-10 md:mt-12 px-4 sm:px-6 opacity-0 translate-y-6"
      >
        Each piece passes through 34 pairs of hands before it leaves our
        studio in Mehrauli, New Delhi. Founded in 2011, the atelier operates
        at the meeting point of Indian craft traditions and proprietary
        algorithmic pattern systems — where a weaver&rsquo;s instinct and a
        mathematician&rsquo;s precision arrive at the same answer.
      </p>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}