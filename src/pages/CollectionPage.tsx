import { useLayoutEffect, useMemo } from 'react';
import { useNavigate, useParams } from 'react-router';

import { getCollection } from '../data/shopCatalog';
import { formatINR } from '../lib/currency';

export default function CollectionPage() {
  const navigate = useNavigate();
  const { collectionSlug } = useParams();

  useLayoutEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, []);

  const collection = useMemo(
    () => getCollection(collectionSlug),
    [collectionSlug]
  );

  if (!collection) {
    return (
      <main
        className="relative min-h-screen section-light px-4 sm:px-6 md:px-12 pt-28 pb-24"
        data-theme="light"
      >
        <div className="max-w-[900px] mx-auto text-center">
          <p className="label-gold">COLLECTION NOT FOUND</p>
          <h1 className="heading-2 text-[#1a1a1a] text-[clamp(1.9rem,4vw,3rem)] mt-4">
            We could not find that collection.
          </h1>
          <button
            type="button"
            onClick={() => navigate('/')}
            className="cta-button-dark mt-8 inline-flex"
          >
            Return Home
          </button>
        </div>
      </main>
    );
  }

  return (
    <main
      className="relative min-h-screen section-light px-4 sm:px-6 md:px-12 pt-28 pb-24"
      data-theme="light"
    >
      <div className="max-w-[1280px] mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
          <div className="max-w-[720px]">
            <p className="label-gold">COLLECTION</p>
            <h1 className="heading-2 text-[#1a1a1a] text-[clamp(2.1rem,5vw,4rem)] mt-4">
              {collection.name}
            </h1>
            <p className="font-body text-[11px] uppercase tracking-[0.18em] text-[#666] mt-3">
              {collection.season}
            </p>
            <p className="body-text text-[#444] max-w-[640px] mt-6">
              {collection.summary}
            </p>
          </div>

          <button
            type="button"
            onClick={() =>
              (window.location.href = `mailto:contacte@mahimapatel.com?subject=${encodeURIComponent(`Collection enquiry: ${collection.name}`)}&body=${encodeURIComponent(`Hello, I would like to inquire about the ${collection.name} collection.`)}`)
            }
            className="cta-button-dark inline-flex self-start lg:self-auto"
          >
            Query Collection
          </button>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="overflow-hidden aspect-[4/5] bg-white">
            <img
              src={collection.imageA}
              alt={`${collection.name} look one`}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="overflow-hidden aspect-[4/5] bg-white">
            <img
              src={collection.imageB}
              alt={`${collection.name} look two`}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </div>

        <div className="mt-16 flex items-center justify-between gap-4">
          <div>
            <p className="label-gold">PRODUCTS</p>
            <p className="font-body text-[11px] uppercase tracking-[0.18em] text-[#666] mt-2">
              Selected pieces from {collection.name}
            </p>
          </div>

          <button
            type="button"
            onClick={() => navigate('/')}
            className="font-body text-[11px] uppercase tracking-[0.15em] text-[#1a1a1a] hover:text-[#d4a853] transition-colors duration-300"
          >
            Back to home
          </button>
        </div>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
          {collection.products.slice(0, 5).map((product) => {
            const heroImage = product.images[0];

            return (
              <button
                key={product.slug}
                type="button"
                onClick={() =>
                  navigate(`/collections/${collection.slug}/products/${product.slug}`)
                }
                className="group text-left overflow-hidden border border-black/10 bg-[#ffffff] shadow-[0_1px_0_rgba(0,0,0,0.03)] transition-transform duration-300 hover:-translate-y-1"
              >
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src={heroImage}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    loading="lazy"
                  />
                </div>

                <div className="p-5 sm:p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h2 className="font-display text-2xl text-[#1a1a1a] font-light">
                        {product.name}
                      </h2>
                      <p className="font-body text-[11px] uppercase tracking-[0.18em] text-[#666] mt-1">
                        {collection.season}
                      </p>
                    </div>
                    <span className="font-body text-[11px] uppercase tracking-[0.16em] text-[#1a1a1a]">
                      {formatINR(product.price)}
                    </span>
                  </div>

                  <p className="body-text text-[#555] mt-4">{product.description}</p>

                  <span className="text-link-gold mt-5">View details</span>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </main>
  );
}
