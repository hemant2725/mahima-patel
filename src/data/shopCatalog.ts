export type Product = {
  slug: string;
  name: string;
  price: string;
  description: string;
  fabric: string;
  fabricDetails: string[];
  images: string[];
};

export type Collection = {
  slug: string;
  name: string;
  season: string;
  summary: string;
  imageA: string;
  imageB: string;
  products: Product[];
};

const slugify = (value: string) =>
  value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');

const makeProduct = (
  name: string,
  price: string,
  description: string,
  fabric: string,
  fabricDetails: string[],
  images: string[]
): Product => ({
  slug: slugify(name),
  name,
  price,
  description,
  fabric,
  fabricDetails,
  images,
});

const makeCollection = (
  name: string,
  season: string,
  summary: string,
  imageA: string,
  imageB: string,
  products: Product[]
): Collection => ({
  slug: slugify(name),
  name,
  season,
  summary,
  imageA,
  imageB,
  products,
});

export const collections: Collection[] = [
  makeCollection(
    'Carrying What Remains',
    'AW25',
    'Draped memory, softened geometry, and a quiet sense of aftermath.',
    '/images/Karunya_(1).png',
    '/images/Karunya_(6).png',
    [
      makeProduct(
        'Memory Fold Gown',
        'EUR 4,800',
        'An evening gown with a long line and carefully folded volume.',
        'Silk crepe, organza lining, hand-finished seams',
        ['Matte outer surface', 'Layered organza support', 'Invisible side closure'],
        ['/images/Karunya_(1).png', '/images/img-collection-1a.jpg', '/images/img-atelier-3.jpg']
      ),
      makeProduct(
        'Residual Corset',
        'EUR 2,100',
        'A structured corset that balances restraint and softness.',
        'Bodice mesh, silk satin facing, boned structure',
        ['Internal boning', 'Silk facing at neckline', 'Lace-up back with reinforcement'],
        ['/images/Karunya_(6).png', '/images/img-collection-1b.jpg', '/images/img-atelier-2.jpg']
      ),
    ]
  ),
  makeCollection(
    'Nocturne Tailoring',
    'AW25',
    'Sharp, polished tailoring with a midnight calm.',
    '/images/img-collection-2a.jpg',
    '/images/img-collection-2b.jpg',
    [
      makeProduct(
        'Lyric Tailored Jacket',
        'EUR 3,600',
        'A sharp jacket with softened shoulders and a precise closure line.',
        'Italian wool suiting, silk lining, horn buttons',
        ['Single-breasted closure', 'Tailored shoulder structure', 'Fully lined in silk'],
        ['/images/img-collection-2a.jpg', '/images/img-collection-2b.jpg', '/images/image.png']
      ),
      makeProduct(
        'Chorus Skirt',
        'EUR 1,900',
        'A mid-length skirt with clean volume and a reflective finish.',
        'Silk taffeta, cotton waistband, soft netting',
        ['Hidden fastening', 'Structured pleats', 'Internal netting for shape'],
        ['/images/img-collection-2b.jpg', '/images/Group 5 front.png', '/images/img-contact-facade.jpg']
      ),
    ]
  ),
  makeCollection(
    'Vortex Knitwear',
    'AW25',
    'Spiral tension translated into tactile knit structures.',
    '/images/img-collection-3a.jpg',
    '/images/img-collection-3b.jpg',
    [
      makeProduct(
        'Helix Knit Top',
        'EUR 1,450',
        'A close-fitting knit top with spiral rib detailing.',
        'Fine merino wool, stretch rib knit, silk trim',
        ['Gentle elasticity', 'Spiral rib panels', 'Silk-bound neckline'],
        ['/images/img-collection-3a.jpg', '/images/img-collection-3b.jpg', '/images/img-manifesto.png']
      ),
      makeProduct(
        'Current Coat',
        'EUR 5,100',
        'A long knit coat with a grounded, editorial silhouette.',
        'Wool blend knit, structured collar, jersey lining',
        ['Longline cut', 'Jersey lining', 'Hidden placket and matte buttons'],
        ['/images/img-collection-3b.jpg', '/images/img-atelier-1.jpg', '/images/img-atelier-4.jpg']
      ),
    ]
  ),
  makeCollection(
    'Golden Mesh',
    'AW25',
    'Metallic light, mesh, sheen, and quiet structure.',
    '/images/img-collection-4a.jpg',
    '/images/img-collection-4b.jpg',
    [
      makeProduct(
        'Lattice Gown',
        'EUR 5,400',
        'A long gown built from layered lattice sections that catch light softly.',
        'Metallic mesh, silk underdress, invisible support seams',
        ['Controlled transparency', 'Bias-cut underdress', 'Interior support seams'],
        ['/images/img-collection-4a.jpg', '/images/img-collection-4b.jpg', '/images/img-contact-facade.jpg']
      ),
      makeProduct(
        'Mesh Column Dress',
        'EUR 3,950',
        'A sleek column dress with a luminous surface and a clean vertical line.',
        'Sheer mesh, silk jersey lining, tonal binding',
        ['Gentle stretch', 'Sheer outer mesh', 'Matched trim at armhole and hem'],
        ['/images/img-collection-4b.jpg', '/images/img-atelier-4.jpg', '/images/Group 5 front.png']
      ),
    ]
  ),
  makeCollection(
    'Aster Drape',
    'SS26',
    'Light folds and softened movement caught mid-breath.',
    '/images/img-collection-1a.jpg',
    '/images/img-collection-1b.jpg',
    [
      makeProduct(
        'Aster Gown',
        'EUR 4,500',
        'A fluid gown with a lifted neckline and long drape lines.',
        'Silk satin, viscose lining, hand-rolled hem',
        ['Bias-cut silhouette', 'Hand-rolled hem', 'Refined inner lining'],
        ['/images/img-collection-1a.jpg', '/images/img-collection-1b.jpg', '/images/img-atelier-3.jpg']
      ),
      makeProduct(
        'Petal Blouse',
        'EUR 1,600',
        'A blouse with a fluid shoulder line and a soft closed neckline.',
        'Silk georgette, mother-of-pearl buttons, cotton voile lining',
        ['Gentle gathers', 'Lightweight outer layer', 'Hidden placket'],
        ['/images/img-collection-1b.jpg', '/images/img-atelier-2.jpg', '/images/img-contact-facade.jpg']
      ),
    ]
  ),
  makeCollection(
    'Lumen Archive',
    'SS26',
    'A brighter, more graphic line with a disciplined quiet.',
    '/images/image.png',
    '/images/Group 5 front.png',
    [
      makeProduct(
        'Archive Coat',
        'EUR 5,200',
        'A tailored coat with crisp edges and a luminous interior finish.',
        'Wool twill, silk lining, brushed horn buttons',
        ['Sharp collar', 'Vertical line through body', 'Smooth silk interior'],
        ['/images/image.png', '/images/Group 5 front.png', '/images/img-atelier-1.jpg']
      ),
      makeProduct(
        'Frame Top',
        'EUR 1,350',
        'A compact top with a framed neckline and a precise fit.',
        'Cotton silk blend, light stretch, self lining',
        ['Minimal seam lines', 'Gentle stretch', 'Easy layering'],
        ['/images/image.png', '/images/img-contact-facade.jpg', '/images/img-atelier-2.jpg']
      ),
    ]
  ),
  makeCollection(
    'Atelier Echo',
    'AW26',
    'Handwork, repetition, and a slower tactile expression.',
    '/images/img-atelier-1.jpg',
    '/images/img-atelier-2.jpg',
    [
      makeProduct(
        'Echo Blazer',
        'EUR 3,850',
        'A softly structured blazer with hand-finished edges.',
        'Virgin wool, silk lining, hand-finished seams',
        ['Relaxed tailoring', 'Artisanal edge finish', 'Fully lined interior'],
        ['/images/img-atelier-1.jpg', '/images/img-atelier-2.jpg', '/images/img-atelier-3.jpg']
      ),
      makeProduct(
        'Thread Dress',
        'EUR 2,950',
        'A long dress defined by fine stitch lines across the surface.',
        'Cotton silk blend, textured weave, soft lining',
        ['Surface texture through body', 'Ease in the skirt', 'Balanced underlayer'],
        ['/images/img-atelier-2.jpg', '/images/img-atelier-4.jpg', '/images/img-atelier-5.jpg']
      ),
    ]
  ),
  makeCollection(
    'Silk Signal',
    'AW26',
    'Gloss, movement, and a soft electronic pulse.',
    '/images/img-atelier-3.jpg',
    '/images/img-atelier-4.jpg',
    [
      makeProduct(
        'Signal Dress',
        'EUR 4,250',
        'A bias-cut dress with a reflective surface that catches light in motion.',
        'Silk satin, stretch lining, concealed zip',
        ['Fluid drape', 'Soft glow under light', 'Comfortable inner lining'],
        ['/images/img-atelier-3.jpg', '/images/img-atelier-4.jpg', '/images/img-manifesto.png']
      ),
      makeProduct(
        'Pulse Slip',
        'EUR 2,150',
        'A lightweight slip with a subtle liquid sheen.',
        'Silk charmeuse, mesh support, fine straps',
        ['Minimal neckline', 'Body-skimming fit', 'Support mesh interior'],
        ['/images/img-atelier-4.jpg', '/images/img-atelier-5.jpg', '/images/img-contact-facade.jpg']
      ),
    ]
  ),
  makeCollection(
    'Quiet Meridian',
    'AW26',
    'A hushed capsule balancing precision with softness.',
    '/images/img-atelier-5.jpg',
    '/images/img-contact-facade.jpg',
    [
      makeProduct(
        'Meridian Gown',
        'EUR 4,900',
        'A floor-length gown traced with long vertical lines.',
        'Silk crepe, satin lining, hidden side zip',
        ['Elongated line', 'Refined interior finish', 'Clean hem and closure'],
        ['/images/img-atelier-5.jpg', '/images/img-contact-facade.jpg', '/images/img-manifesto.png']
      ),
      makeProduct(
        'North Coat',
        'EUR 5,600',
        'A sculpted coat with a calm, architectural surface.',
        'Wool melton, silk lining, horn closure',
        ['Structured collar', 'Warm outer shell', 'Minimal front fastening'],
        ['/images/img-contact-facade.jpg', '/images/img-atelier-1.jpg', '/images/img-atelier-4.jpg']
      ),
    ]
  ),
];

export const getCollection = (collectionSlug: string | undefined) =>
  collections.find((item) => item.slug === collectionSlug);

export const getProduct = (
  collectionSlug: string | undefined,
  productSlug: string | undefined
) => {
  const collection = getCollection(collectionSlug);
  const product = collection?.products.find((item) => item.slug === productSlug);

  return { collection, product };
};
