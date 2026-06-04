import { useLayoutEffect } from 'react';
import { useNavigate } from 'react-router';

const materialPrinciples = [
  {
    label: 'Fiber',
    value: 'Silk crepe, Livaeco Modal Satin, virgin wool, and hand-painted cotton',
  },
  {
    label: 'Color',
    value: 'Hand-painted ombré, tie-dye techniques, and low-impact dye systems',
  },
  {
    label: 'Surface',
    value: 'Stone embroidery, recycled thread work, and upcycled shell detailing',
  },
  {
    label: 'Finish',
    value: 'Hand-finished seams, boned structures, and human-led final shaping',
  },
];

const materialCards = [
  {
    name: 'Fluid Silks & Sustainable Drapes',
    image: '/images/img-manifesto.png',
    description:
      'Foundational textiles chosen for how they fall, speak, and hold memory. Silk crepe, organza, and Livaeco Modal Satin are selected not just for their tactile depth, but for their ability to carry emotion and movement — supporting soft architectural volume while telling a story through every fold.',
    details: [
      'Silk crepe with organza lining for layered support',
      'Livaeco Modal Satin and Chiffon for sustainable fluidity',
      'Hand-rolled hems and invisible closures',
      'Designed to hold energy and remember moments',
    ],
  },
  {
    name: 'Hand-Painted & Embellished Surfaces',
    image: '/images/img-atelier-2.jpg',
    description:
      'Surface work that begins with feeling. Hand-painted ombré bases, stone embroidery, and recycled thread detailing transform fabric into a canvas of expression. Each embellishment is deliberate — a single detail that completely changes the mood of the garment, from maple leaf welts to oceanic shell textures.',
    details: [
      'Hand-painted ombré and tie-dye techniques',
      'Stone embroidery on cotton plain weave',
      'Recycled thread and upcycled shell details',
      'Every motif carries emotional weight and intention',
    ],
  },
  {
    name: 'Structured & Hand-Finished Construction',
    image: '/images/img-contact-facade.jpg',
    description:
      'Every garment is built from a place of feeling — paying attention to the way fabric falls, the way colors speak, and the way structure gives strength. Internal boning, silk facings, horn buttons, and reinforced seams create pieces that feel precise to the body and powerful to the wearer.',
    details: [
      'Boned corset structures with silk satin facing',
      'Horn buttons and mother-of-pearl closures',
      'Reinforced seams and hand-finished edges',
      'Built to make the wearer feel powerful, vulnerable, beautiful, seen',
    ],
  },
];

const buildMailtoUrl = () =>
  `mailto:mahimapatel8985@gmail.com?subject=${encodeURIComponent('Materials inquiry for MAHIMA PATEL')}&body=${encodeURIComponent('Hello, I would like to know more about your materials, sourcing, and finishing process.')}`;

export default function MaterialsPage() {
  const navigate = useNavigate();

  useLayoutEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, []);

  const queryLink = buildMailtoUrl();
  const primaryImage = materialCards[0].image;
  const secondaryImages = [materialCards[1].image, materialCards[2].image];

  return (
    <main className="relative min-h-screen section-dark px-4 sm:px-6 md:px-12 pt-28 pb-24">
      <div className="max-w-[1280px] mx-auto">
        <button
          type="button"
          onClick={() => navigate('/')}
          className="font-body text-[11px] uppercase tracking-[0.18em] text-white/55 hover:text-[#d4a853] transition-colors duration-300"
        >
          Back to home
        </button>

        <div className="mt-6 grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-10 lg:gap-14">
          <div>
            <div className="grid grid-cols-2 gap-4">
              <div className="col-span-2 overflow-hidden aspect-[4/5] bg-white/[0.03]">
                <img
                  src={primaryImage}
                  alt="MAHIMA PATEL material studies and fabric handling"
                  className="w-full h-full object-cover"
                />
              </div>

              {secondaryImages.map((image, index) => (
                <div
                  key={`${image}-${index}`}
                  className="overflow-hidden aspect-[4/5] bg-white/[0.03]"
                >
                  <img
                    src={image}
                    alt={`Material detail ${index + 2}`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="lg:sticky lg:top-28 self-start">
            <p className="label-gold">MATERIALS</p>
            <h1 className="heading-2 text-white text-[clamp(2.2rem,5vw,4.2rem)] mt-4">
              Discover Our Materials
            </h1>

            <div className="flex flex-wrap items-center gap-4 mt-4">
              <span className="font-body text-[11px] uppercase tracking-[0.18em] text-white/55">
                Hand-painted surfaces
              </span>
              <span className="font-body text-[11px] uppercase tracking-[0.18em] text-[#d4a853]">
                Sustainable sourcing
              </span>
            </div>

            <p className="body-text text-white/72 mt-6 max-w-[520px]">
              Every textile begins with the same rule: material should carry
              intention, emotion, and presence from the first cut. I pay attention
              to the way a fabric falls, the way colors speak to each other, and
              the way a single detail can completely change the mood of a garment.
              What emerges is not decorative excess, but cloth that holds energy,
              remembers moments, and becomes a part of the person wearing it.
            </p>

            <div className="mt-8 border-t border-white/[0.08] pt-6">
              <p className="font-body text-[11px] uppercase tracking-[0.18em] text-white/50">
                Material Principles
              </p>

              <ul className="mt-4 space-y-3">
                {materialPrinciples.map((item) => (
                  <li
                    key={item.label}
                    className="body-text text-white/64 pl-4 relative before:content-[''] before:absolute before:left-0 before:top-2 before:h-[1px] before:w-2 before:bg-[#d4a853]"
                  >
                    <span className="text-white/85">{item.label}:</span>{' '}
                    {item.value}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <a href={queryLink} className="cta-button inline-flex">
                Request Materials
              </a>
              <button
                type="button"
                onClick={() => navigate('/#collections')}
                className="font-body text-[11px] uppercase tracking-[0.15em] text-white/55 hover:text-white transition-colors duration-300"
              >
                Explore collections
              </button>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-3">
              <div className="border border-white/[0.08] p-4">
                <p className="font-body text-[11px] uppercase tracking-[0.18em] text-white/45">
                  Source
                </p>
                <p className="font-display text-xl text-white mt-2">
                  Expressive
                </p>
              </div>
              <div className="border border-white/[0.08] p-4">
                <p className="font-body text-[11px] uppercase tracking-[0.18em] text-white/45">
                  Finish
                </p>
                <p className="font-display text-xl text-white mt-2">
                  Hand-Crafted
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 flex items-center justify-between gap-4">
          <div>
            <p className="label-gold">MATERIAL SYSTEM</p>
            <p className="font-body text-[11px] uppercase tracking-[0.18em] text-white/45 mt-2">
              Selected textiles, techniques, and finishing logic
            </p>
          </div>

          <button
            type="button"
            onClick={() => navigate('/')}
            className="font-body text-[11px] uppercase tracking-[0.15em] text-white/55 hover:text-white transition-colors duration-300"
          >
            Back to home
          </button>
        </div>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
          {materialCards.map((card) => (
            <article
              key={card.name}
              className="overflow-hidden border border-white/[0.08] bg-white/[0.03]"
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={card.image}
                  alt={card.name}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>

              <div className="p-5 sm:p-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h2 className="font-display text-2xl text-white font-light">
                      {card.name}
                    </h2>
                    <p className="font-body text-[11px] uppercase tracking-[0.18em] text-white/45 mt-1">
                      Material study
                    </p>
                  </div>
                </div>

                <p className="body-text text-white/68 mt-4">
                  {card.description}
                </p>

                <ul className="mt-5 space-y-3">
                  {card.details.map((detail) => (
                    <li
                      key={detail}
                      className="body-text text-white/58 pl-4 relative before:content-[''] before:absolute before:left-0 before:top-2 before:h-[1px] before:w-2 before:bg-[#d4a853]"
                    >
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}