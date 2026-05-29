import { useEffect, useRef, useState } from 'react';
import { Menu, X } from 'lucide-react';

interface NavigationProps {
  onNavigate: (id: string) => void;
}

const navLinks = [
  { label: 'Collections', id: 'collections' },
  { label: 'Algorithm', id: 'algorithm' },
  { label: 'Atelier', id: 'atelier' },
  // { label: 'Contact', id: 'contact' },
];

export default function Navigation({ onNavigate }: NavigationProps) {
  const [scrolled, setScrolled] = useState(false);
  const [onLightSection, setOnLightSection] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setScrolled(scrollY > window.innerHeight * 0.8);
      setMenuOpen(false);

      // Check if we're over a light section
      const lightSections = document.querySelectorAll('[data-theme="light"]');
      let isOnLight = false;
      lightSections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top < 80 && rect.bottom > 80) {
          isOnLight = true;
        }
      });
      setOnLightSection(isOnLight);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const textColor = onLightSection && scrolled ? 'text-[#1a1a1a]' : 'text-white';
  const bgClass = scrolled
    ? onLightSection
      ? 'bg-[#f8f8f6]/90 backdrop-blur-[20px]'
      : 'bg-[#0a0a0a]/90 backdrop-blur-[20px]'
    : 'bg-transparent';
  const mobilePanelBg =
    onLightSection && scrolled
      ? 'bg-[#f8f8f6]/95'
      : 'bg-[#0a0a0a]/95';

  return (
    <nav
      ref={navRef}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 ${bgClass}`}
      style={{ opacity: 0, animation: 'fadeIn 1s ease 0.5s forwards' }}
    >
      <style>{`
        @keyframes fadeIn {
          to { opacity: 1; }
        }
      `}</style>
      <div className="flex items-center justify-between px-4 sm:px-6 md:px-12 py-5 max-w-[1440px] mx-auto relative">
        <button
          onClick={() => onNavigate('contact')}
          className={`hidden lg:flex items-center gap-3 font-body text-[11px] uppercase tracking-[0.18em] transition-colors duration-500 ${textColor}`}
        >
          <span className="text-[20px] leading-none">+</span>
          <span>Contact Us</span>
        </button>

        {/* Brand */}
        <button
          onClick={() => onNavigate('hero')}
          className={`absolute left-1/2 -translate-x-1/2 font-display text-sm uppercase tracking-[0.2em] transition-colors duration-500 ${textColor}`}
        >
          MAHIMA PATEL
        </button>

        {/* Nav Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => onNavigate(link.id)}
              className={`font-body text-[11px] uppercase tracking-[0.15em] transition-colors duration-300 hover:opacity-70 ${textColor}`}
            >
              {link.label}
            </button>
          ))}
        </div>

        <button
          type="button"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((open) => !open)}
          className={`md:hidden inline-flex h-10 w-10 items-center justify-center rounded-full border transition-colors duration-300 ${textColor} ${
            scrolled
              ? onLightSection
                ? 'border-[#1a1a1a]/15 bg-white/60'
                : 'border-white/15 bg-black/20'
              : 'border-white/20 bg-black/10'
          }`}
        >
          {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <div
        id="mobile-navigation"
        className={`md:hidden overflow-hidden border-t transition-all duration-300 ${
          menuOpen ? 'max-h-[320px] opacity-100' : 'max-h-0 opacity-0'
        } ${mobilePanelBg} ${
          onLightSection && scrolled ? 'border-[#1a1a1a]/10' : 'border-white/10'
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-6 py-5 flex flex-col gap-4">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => {
                onNavigate(link.id);
                setMenuOpen(false);
              }}
              className={`text-left font-body text-[11px] uppercase tracking-[0.2em] transition-colors duration-300 ${textColor}`}
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => {
              onNavigate('contact');
              setMenuOpen(false);
            }}
            className={`text-left font-body text-[11px] uppercase tracking-[0.2em] transition-colors duration-300 ${textColor}`}
          >
            Contact Us
          </button>
        </div>
      </div>
    </nav>
  );
}
