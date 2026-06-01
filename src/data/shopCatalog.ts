export type Product = {
  slug: string;
  name: string;
  price: number;
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
  price: number,
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
    'Echoes Beneath the Tide',
    'AW25',
    'Draped memory, softened geometry, and a quiet sense of aftermath.',
    '/images/Karunya_(1).png',
    '/images/IMG_20260526_210501.png',
    [
      makeProduct(
        'Look 1',
        432000,
        'An evening gown with a long line and carefully folded volume.',
        'Silk crepe, organza lining, hand-finished seams',
        ['Matte outer surface', 'Layered organza support', 'Invisible side closure'],
        ['/images/Karunya_(1).png', '/images/Karunya_(2).png', '/images/Karunya_(5).png']
      ),
      makeProduct(
        'Look 2',
        189000,
        'A structured corset that balances restraint and softness.',
        'Bodice mesh, silk satin facing, boned structure',
        ['Internal boning', 'Silk facing at neckline', 'Lace-up back with reinforcement'],
        ['/images/Aditi_ (1).png', '/images/Aditi_ (5).png', '/images/Aditi_ (2).png']
      ),
      makeProduct(
        'Look 3',
        432000,
        'An evening gown with a long line and carefully folded volume.',
        'Silk crepe, organza lining, hand-finished seams',
        ['Matte outer surface', 'Layered organza support', 'Invisible side closure'],
        ['/images/Kavya_ (2).png', '/images/Kavya_ (3).png', '/images/Kavya_ (4).png']
      ),
      makeProduct(
        'Look 4',
        432000,
        'An evening gown with a long line and carefully folded volume.',
        'Silk crepe, organza lining, hand-finished seams',
        ['Matte outer surface', 'Layered organza support', 'Invisible side closure'],
        ['/images/Komal_ (1).png', '/images/Komal_ (5).png']
      ),
      makeProduct(
        'Look 5',
        432000,
        'An evening gown with a long line and carefully folded volume.',
        'Silk crepe, organza lining, hand-finished seams',
        ['Matte outer surface', 'Layered organza support', 'Invisible side closure'],
        ['/images/Karunya_(1).png', '/images/img-collection-1a.jpg', '/images/img-atelier-3.jpg']
      ),
    ]
  ),
  makeCollection(
    'Crimson Spotlight',
    'AW25',
    'Sharp, polished tailoring with a midnight calm.',
    '/images/Red.jpg',
    '/images/Red2.jpg',
    [
      makeProduct(
        'Look 1',
        324000,
        'A sharp jacket with softened shoulders and a precise closure line.',
        'Italian wool suiting, silk lining, horn buttons',
        ['Single-breasted closure', 'Tailored shoulder structure', 'Fully lined in silk'],
        ['/images/Red.jpg', '/images/Red2.jpg']
      ),
      makeProduct(
        'Look 2',
        171000,
        'A mid-length skirt with clean volume and a reflective finish.',
        'Silk taffeta, cotton waistband, soft netting',
        ['Hidden fastening', 'Structured pleats', 'Internal netting for shape'],
        ['/images/img-collection-2b.jpg', '/images/Group 5 front.png', '/images/img-contact-facade.jpg']
      ),
    ]
  ),
  makeCollection(
    'Petals in Motion',
    'AW25',
    'Spiral tension translated into tactile knit structures.',
    '/images/img-collection-3a.jpg',
    '/images/img-collection-3b.jpg',
    [
      makeProduct(
        'Helix Knit Top',
        130500,
        'A close-fitting knit top with spiral rib detailing.',
        'Fine merino wool, stretch rib knit, silk trim',
        ['Gentle elasticity', 'Spiral rib panels', 'Silk-bound neckline'],
        ['/images/img-collection-3a.jpg', '/images/img-collection-3b.jpg', '/images/img-manifesto.png']
      ),
      makeProduct(
        'Current Coat',
        459000,
        'A long knit coat with a grounded, editorial silhouette.',
        'Wool blend knit, structured collar, jersey lining',
        ['Longline cut', 'Jersey lining', 'Hidden placket and matte buttons'],
        ['/images/img-collection-3b.jpg', '/images/img-atelier-1.jpg', '/images/img-atelier-4.jpg']
      ),
    ]
  ),
  makeCollection(
    'Pearls of the Tide',
    'AW25',
    'Metallic light, mesh, sheen, and quiet structure.',
    '/images/img-collection-4a.jpg',
    '/images/img-collection-4b.jpg',
    [
      makeProduct(
        'Lattice Gown',
        486000,
        'A long gown built from layered lattice sections that catch light softly.',
        'Metallic mesh, silk underdress, invisible support seams',
        ['Controlled transparency', 'Bias-cut underdress', 'Interior support seams'],
        ['/images/img-collection-4a.jpg', '/images/img-collection-4b.jpg', '/images/img-contact-facade.jpg']
      ),
      makeProduct(
        'Mesh Column Dress',
        355500,
        'A sleek column dress with a luminous surface and a clean vertical line.',
        'Sheer mesh, silk jersey lining, tonal binding',
        ['Gentle stretch', 'Sheer outer mesh', 'Matched trim at armhole and hem'],
        ['/images/img-collection-4b.jpg', '/images/img-atelier-4.jpg', '/images/Group 5 front.png']
      ),
    ]
  ),
  makeCollection(
    'The Last Leaf',
    'SS26',
    'Light folds and softened movement caught mid-breath.',
    '/images/img-collection-1a.jpg',
    '/images/img-collection-1b.jpg',
    [
      makeProduct(
        'Aster Gown',
        405000,
        'A fluid gown with a lifted neckline and long drape lines.',
        'Silk satin, viscose lining, hand-rolled hem',
        ['Bias-cut silhouette', 'Hand-rolled hem', 'Refined inner lining'],
        ['/images/img-collection-1a.jpg', '/images/img-collection-1b.jpg', '/images/img-atelier-3.jpg']
      ),
      makeProduct(
        'Petal Blouse',
        144000,
        'A blouse with a fluid shoulder line and a soft closed neckline.',
        'Silk georgette, mother-of-pearl buttons, cotton voile lining',
        ['Gentle gathers', 'Lightweight outer layer', 'Hidden placket'],
        ['/images/img-collection-1b.jpg', '/images/img-atelier-2.jpg', '/images/img-contact-facade.jpg']
      ),
    ]
  ),
  makeCollection(
    'Sea Glass Dreams',
    'SS26',
    'A brighter, more graphic line with a disciplined quiet.',
    '/images/image.png',
    '/images/Group 5 front.png',
    [
      makeProduct(
        'Archive Coat',
        468000,
        'A tailored coat with crisp edges and a luminous interior finish.',
        'Wool twill, silk lining, brushed horn buttons',
        ['Sharp collar', 'Vertical line through body', 'Smooth silk interior'],
        ['/images/image.png', '/images/Group 5 front.png', '/images/img-atelier-1.jpg']
      ),
      makeProduct(
        'Frame Top',
        121500,
        'A compact top with a framed neckline and a precise fit.',
        'Cotton silk blend, light stretch, self lining',
        ['Minimal seam lines', 'Gentle stretch', 'Easy layering'],
        ['/images/image.png', '/images/img-contact-facade.jpg', '/images/img-atelier-2.jpg']
      ),
    ]
  ),
  makeCollection(
    'Digital Romance',
    'AW26',
    'Handwork, repetition, and a slower tactile expression.',
    '/images/img-atelier-1.jpg',
    '/images/img-atelier-2.jpg',
    [
      makeProduct(
        'Echo Blazer',
        346500,
        'A softly structured blazer with hand-finished edges.',
        'Virgin wool, silk lining, hand-finished seams',
        ['Relaxed tailoring', 'Artisanal edge finish', 'Fully lined interior'],
        ['/images/img-atelier-1.jpg', '/images/img-atelier-2.jpg', '/images/img-atelier-3.jpg']
      ),
      makeProduct(
        'Thread Dress',
        265500,
        'A long dress defined by fine stitch lines across the surface.',
        'Cotton silk blend, textured weave, soft lining',
        ['Surface texture through body', 'Ease in the skirt', 'Balanced underlayer'],
        ['/images/img-atelier-2.jpg', '/images/img-atelier-4.jpg', '/images/img-atelier-5.jpg']
      ),
    ]
  ),
  makeCollection(
    'Petal Lounge',
    'AW26',
    'Gloss, movement, and a soft electronic pulse.',
    '/images/img-atelier-3.jpg',
    '/images/img-atelier-4.jpg',
    [
      makeProduct(
        'Signal Dress',
        382500,
        'A bias-cut dress with a reflective surface that catches light in motion.',
        'Silk satin, stretch lining, concealed zip',
        ['Fluid drape', 'Soft glow under light', 'Comfortable inner lining'],
        ['/images/img-atelier-3.jpg', '/images/img-atelier-4.jpg', '/images/img-manifesto.png']
      ),
      makeProduct(
        'Pulse Slip',
        193500,
        'A lightweight slip with a subtle liquid sheen.',
        'Silk charmeuse, mesh support, fine straps',
        ['Minimal neckline', 'Body-skimming fit', 'Support mesh interior'],
        ['/images/img-atelier-4.jpg', '/images/img-atelier-5.jpg', '/images/img-contact-facade.jpg']
      ),
    ]
  ),
  makeCollection(
    '9th Collection',
    'AW26',
    'A hushed capsule balancing precision with softness.',
    '/images/img-atelier-5.jpg',
    '/images/img-contact-facade.jpg',
    [
      makeProduct(
        'Meridian Gown',
        441000,
        'A floor-length gown traced with long vertical lines.',
        'Silk crepe, satin lining, hidden side zip',
        ['Elongated line', 'Refined interior finish', 'Clean hem and closure'],
        ['/images/img-atelier-5.jpg', '/images/img-contact-facade.jpg', '/images/img-manifesto.png']
      ),
      makeProduct(
        'North Coat',
        504000,
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
