import { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router';
import { Menu, X } from 'lucide-react';

interface NavigationProps {
  onNavigate: (id: string) => void;
}

const navLinks = [
  { label: 'Collections', id: 'collections' },
  { label: 'Algorithm', id: 'algorithm' },
  { label: 'Atelier', id: 'atelier' },
  { label: 'Founder', id: 'founder' },
];

export default function Navigation({ onNavigate }: NavigationProps) {
  const [scrolled, setScrolled] = useState(false);
  const [onLightSection, setOnLightSection] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const navRef = useRef<HTMLElement>(null);
  const location = useLocation();

  const isCollectionFlow = location.pathname.startsWith('/collections');
  const isProductFlow = location.pathname.includes('/products/');
  const isMaterialsFlow = location.pathname.startsWith('/materials');
  const minimalHeader = isCollectionFlow || isProductFlow || isMaterialsFlow;

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      setScrolled(scrollY > window.innerHeight * 0.8);

      const lightSections = document.querySelectorAll(
        '[data-theme="light"]'
      );

      let isOnLight = false;

      lightSections.forEach((section) => {
        const rect = section.getBoundingClientRect();

        if (rect.top < 80 && rect.bottom > 80) {
          isOnLight = true;
        }
      });

      setOnLightSection(isOnLight);
    };

    window.addEventListener('scroll', handleScroll, {
      passive: true,
    });

    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [location.pathname]);

  const forceLightHeader = minimalHeader;

  const textColor =
    forceLightHeader || onLightSection
      ? 'text-[#1a1a1a]'
      : 'text-white';

  const bgClass = forceLightHeader
    ? 'bg-[#f8f8f6]/95 backdrop-blur-[20px] border-b border-black/[0.05]'
    : onLightSection
      ? 'bg-[#f8f8f6]/90 backdrop-blur-[20px]'
      : scrolled
        ? 'bg-[#0a0a0a]/90 backdrop-blur-[20px]'
        : 'bg-transparent';

  const mobilePanelBg =
    forceLightHeader || onLightSection
      ? 'bg-[#f8f8f6]/98'
      : 'bg-[#0a0a0a]/95';

  return (
    <nav
      ref={navRef}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 ${bgClass}`}
      style={{
        opacity: 0,
        animation: 'fadeIn 1s ease 0.5s forwards',
      }}
    >
      <style>{`
        @keyframes fadeIn {
          to {
            opacity: 1;
          }
        }
      `}</style>

      <div
        className={`max-w-[1440px] mx-auto relative py-5 ${
          minimalHeader
            ? 'flex justify-center'
            : 'flex items-center justify-between px-4 sm:px-6 md:px-12'
        }`}
      >
        {/* Contact Button - Homepage Only */}
        {!minimalHeader && (
          <button
            onClick={() => onNavigate('contact')}
            className={`hidden lg:flex items-center gap-3 font-body text-[11px] uppercase tracking-[0.18em] transition-colors duration-500 ${textColor}`}
          >
            <span className="text-[20px] leading-none">+</span>
            <span>Contact Us</span>
          </button>
        )}

        {/* Brand Logo */}
        <div
          className={
            minimalHeader
              ? ''
              : 'absolute left-1/2 -translate-x-1/2'
          }
        >
          <button
            onClick={() => onNavigate('hero')}
            className={`font-display text-sm uppercase tracking-[0.28em] transition-colors duration-500 ${textColor}`}
          >
            MAHIMA PATEL
          </button>
        </div>

        {/* Desktop Navigation - Homepage Only */}
        {!minimalHeader && (
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
        )}

        {/* Mobile Menu Button - Homepage Only */}
        {!minimalHeader && (
          <button
            type="button"
            aria-label={
              menuOpen
                ? 'Close navigation menu'
                : 'Open navigation menu'
            }
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMenuOpen((open) => !open)}
            className={`md:hidden inline-flex h-10 w-10 items-center justify-center rounded-full border transition-colors duration-300 ${textColor} ${
              onLightSection
                ? 'border-[#1a1a1a]/15 bg-white/60'
                : scrolled
                  ? 'border-white/15 bg-black/20'
                  : 'border-white/20 bg-black/10'
            }`}
          >
            {menuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        )}
      </div>

      {/* Mobile Menu - Homepage Only */}
      {!minimalHeader && (
        <div
          id="mobile-navigation"
          className={`md:hidden overflow-hidden border-t transition-all duration-300 ${
            menuOpen
              ? 'max-h-[320px] opacity-100'
              : 'max-h-0 opacity-0'
          } ${mobilePanelBg} ${
            onLightSection
              ? 'border-[#1a1a1a]/10'
              : 'border-white/10'
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
      )}
    </nav>
  );
}
