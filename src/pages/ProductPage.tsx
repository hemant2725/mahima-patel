import { useLayoutEffect, useMemo } from 'react';
import { useNavigate, useParams } from 'react-router';

import { getProduct } from '../data/shopCatalog';
import { formatINR } from '../lib/currency';

const buildMailtoUrl = (collectionName: string, productName: string) =>
  `mailto:contact@mahimapatel.com?subject=${encodeURIComponent(`Query about ${productName} from ${collectionName}`)}&body=${encodeURIComponent(`Hello, I would like to ask about ${productName} from the ${collectionName} collection.`)}`;

export default function ProductPage() {
  const navigate = useNavigate();
  const { collectionSlug, productSlug } = useParams();

  useLayoutEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, []);

  const { collection, product } = useMemo(
    () => getProduct(collectionSlug, productSlug),
    [collectionSlug, productSlug]
  );

  if (!collection || !product) {
    return (
      <main className="relative min-h-screen section-dark px-4 sm:px-6 md:px-12 pt-28 pb-24">
        <div className="max-w-[900px] mx-auto text-center">
          <p className="label-gold">PRODUCT NOT FOUND</p>
          <h1 className="heading-2 text-white text-[clamp(1.9rem,4vw,3rem)] mt-4">
            We could not find that piece.
          </h1>
          <button
            type="button"
            onClick={() => navigate('/')}
            className="cta-button mt-8 inline-flex"
          >
            Return Home
          </button>
        </div>
      </main>
    );
  }

  const queryLink = buildMailtoUrl(collection.name, product.name);
  const primaryImage = product.images[0];
  const secondaryImages = product.images.slice(1, 3);

  return (
    <main className="relative min-h-screen section-dark px-4 sm:px-6 md:px-12 pt-28 pb-24">
      <div className="max-w-[1280px] mx-auto">
        <button
          type="button"
          onClick={() => navigate(`/collections/${collection.slug}`)}
          className="font-body text-[11px] uppercase tracking-[0.18em] text-white/55 hover:text-[#d4a853] transition-colors duration-300"
        >
          Back to {collection.name}
        </button>

        <div className="mt-6 grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-10 lg:gap-14">
          <div>
            <div className="grid grid-cols-2 gap-4">
              <div className="col-span-2 overflow-hidden aspect-[4/5] bg-white/[0.03]">
                <img
                  src={primaryImage}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {secondaryImages.map((image, index) => (
                <div
                  key={`${product.slug}-${index}`}
                  className="overflow-hidden aspect-[4/5] bg-white/[0.03]"
                >
                  <img
                    src={image}
                    alt={`${product.name} view ${index + 2}`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="lg:sticky lg:top-28 self-start">
            <p className="label-gold">PRODUCT DETAIL</p>
            <h1 className="heading-2 text-white text-[clamp(2.2rem,5vw,4.2rem)] mt-4">
              {product.name}
            </h1>

            <div className="flex flex-wrap items-center gap-4 mt-4">
              <span className="font-body text-[11px] uppercase tracking-[0.18em] text-white/55">
                {collection.name}
              </span>
              <span className="font-body text-[11px] uppercase tracking-[0.18em] text-[#d4a853]">
                {formatINR(product.price)}
              </span>
            </div>

            <p className="body-text text-white/72 mt-6 max-w-[520px]">
              {product.description}
            </p>

            <div className="mt-8 border-t border-white/[0.08] pt-6">
              <p className="font-body text-[11px] uppercase tracking-[0.18em] text-white/50">
                Fabric Details
              </p>
              <p className="body-text text-white/68 mt-3">
                {product.fabric}
              </p>

              <ul className="mt-4 space-y-3">
                {product.fabricDetails.map((detail) => (
                  <li
                    key={detail}
                    className="body-text text-white/64 pl-4 relative before:content-[''] before:absolute before:left-0 before:top-2 before:h-[1px] before:w-2 before:bg-[#d4a853]"
                  >
                    {detail}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <a href={queryLink} className="cta-button inline-flex">
                Query This Piece
              </a>
              <button
                type="button"
                onClick={() => navigate(`/collections/${collection.slug}`)}
                className="font-body text-[11px] uppercase tracking-[0.15em] text-white/55 hover:text-white transition-colors duration-300"
              >
                Explore collection
              </button>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-3">
              <div className="border border-white/[0.08] p-4">
                <p className="font-body text-[11px] uppercase tracking-[0.18em] text-white/45">
                  Season
                </p>
                <p className="font-display text-xl text-white mt-2">
                  {collection.season}
                </p>
              </div>
              <div className="border border-white/[0.08] p-4">
                <p className="font-body text-[11px] uppercase tracking-[0.18em] text-white/45">
                  Availability
                </p>
                <p className="font-display text-xl text-white mt-2">
                  Made to Order
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
