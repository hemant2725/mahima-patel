import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(leftRef.current, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
          once: true,
        },
      });

      gsap.to(rightRef.current, {
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
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative w-full section-dark py-20 md:py-[120px]"
      style={{ zIndex: 2 }}
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-12 flex flex-col md:flex-row gap-10 lg:gap-16">
        {/* Left Column */}
        <div
          ref={leftRef}
          className="w-full md:w-1/2 text-center md:text-left opacity-0 translate-y-10"
        >
          <p className="label-gold">INQUIRIES</p>

          <h2 className="heading-2 text-white text-[clamp(1.75rem,3.5vw,2.75rem)] mt-3">
            Begin a Conversation
          </h2>

          <p className="body-text text-white/70 max-w-[400px] mt-6">
            For press, stockist, and bespoke inquiries, reach our concierge
            team.
          </p>

          {!submitted ? (
            <form onSubmit={handleSubmit} className="mt-10 md:mt-12 space-y-6">
              <input
                type="text"
                placeholder="Name"
                required
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full bg-transparent border-b border-white/30 py-3 text-white font-body text-sm placeholder:text-white/40 focus:border-[#d4a853] focus:outline-none transition-colors duration-300"
              />
              <input
                type="email"
                placeholder="Email"
                required
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full bg-transparent border-b border-white/30 py-3 text-white font-body text-sm placeholder:text-white/40 focus:border-[#d4a853] focus:outline-none transition-colors duration-300"
              />
              <textarea
                placeholder="Message"
                required
                rows={4}
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className="w-full bg-transparent border-b border-white/30 py-3 text-white font-body text-sm placeholder:text-white/40 focus:border-[#d4a853] focus:outline-none transition-colors duration-300 resize-none"
              />
              <button
                type="submit"
                className="font-body text-[11px] uppercase tracking-[0.15em] text-[#d4a853] hover:opacity-70 transition-opacity duration-300 mt-4"
              >
                Send
              </button>
            </form>
          ) : (
            <div className="mt-12 py-8">
              <p className="font-display text-xl text-white/90 italic">
                Thank you. We will be in touch.
              </p>
            </div>
          )}

          <div className="mt-12 space-y-2">
            <p className="font-body text-sm text-white/70">
              contacte@mahimapatel.com
            </p>
            <p className="font-body text-sm text-white/70">+33 1 42 65 00 00</p>
            <p className="font-body text-sm text-white/70">
              12 Rue du Faubourg Saint-Honor&eacute;, 75008 Paris
            </p>
          </div>
        </div>

        {/* Right Column - Image */}
        <div
          ref={rightRef}
          className="w-full md:w-1/2 opacity-0"
          style={{ transform: 'translateX(40px)' }}
        >
          <div className="h-[32vh] sm:h-[40vh] md:h-[60vh] min-h-[240px] overflow-hidden">
            <img
              src="/images/img-contact-facade.jpg"
              alt="MAHIMA PATEL atelier facade at dusk"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
