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
    'AW26',
    'Not everything leaves us completely. Some emotions stay quietly within us — softened by time, yet still present, like traces left behind by water after the tide recedes. Inspired by the fluid nature of water and the emotional weight of memory, this graduation collection explores how feelings continue to live within the body long after moments have passed. The garments are designed not to represent loss, but remembrance — the quiet act of carrying fragments of experience, emotion, and identity as we continue moving forward.',
    '/images/Karunya_(1).png',
    '/images/A&K_1.jpg',
    [
      makeProduct(
        'Look 1',
        432000,
        'An evening gown with a long line and carefully folded volume, evoking the gentle movement of water and the softness of memory. The draped silhouette captures the fluid nature of tide traces left on sand — emotions softened by time yet still present within the body.',
        'Silk crepe, organza lining, hand-finished seams',
        ['Matte outer surface', 'Layered organza support', 'Invisible side closure'],
        ['/images/Karunya_(1).png', '/images/Karunya_(2).png', '/images/Karunya_(5).png']
      ),
      makeProduct(
        'Look 2',
        189000,
        'A structured corset that balances restraint and softness, embodying the tension between holding on and letting go. The boned structure represents the strength needed to carry memory, while the silk satin facing offers a gentle, vulnerable surface.',
        'Bodice mesh, silk satin facing, boned structure',
        ['Internal boning', 'Silk facing at neckline', 'Lace-up back with reinforcement'],
        ['/images/Aditi_ (1).png', '/images/Aditi_ (5).png', '/images/Aditi_ (2).png']
      ),
      makeProduct(
        'Look 3',
        432000,
        'An evening gown with a long line and carefully folded volume, where fabric falls like water remembering its path. The layered construction speaks to how identity is built from accumulated moments — each fold a fragment of experience carried forward.',
        'Silk crepe, organza lining, hand-finished seams',
        ['Matte outer surface', 'Layered organza support', 'Invisible side closure'],
        ['/images/Kavya_ (2).png', '/images/Kavya_ (3).png', '/images/Kavya_ (4).png']
      ),
      makeProduct(
        'Look 4',
        432000,
        'An evening gown with a long line and carefully folded volume, reflecting the quiet aftermath of emotional tides. The garment holds energy and remembers moments — becoming a part of the person wearing it, making them feel seen before they even understand why.',
        'Silk crepe, organza lining, hand-finished seams',
        ['Matte outer surface', 'Layered organza support', 'Invisible side closure'],
        ['/images/Komal_ (1).png', '/images/Komal_ (5).png']
      ),
      makeProduct(
        'Look 5',
        432000,
        'An evening gown with a long line and carefully folded volume, capturing the beauty of having felt deeply. What remains is not the weight of memory, but the beauty of having felt it deeply — draped, softened, and transformed into something wearable and alive.',
        'Silk crepe, organza lining, hand-finished seams',
        ['Matte outer surface', 'Layered organza support', 'Invisible side closure'],
        ['/images/Vasundhara_ (3).png', '/images/Vasundhara_ (1) (1).png', '/images/Vasundhara_ (4).png']
      ),
    ]
  ),
  makeCollection(
    'Crimson Spotlight',
    'AW26',
    `Inspired by Taylor Swift's Showgirl Era, where glamour meets confidence. This collection focuses on sparkles, bold silhouettes, and fun stage-like drama — a mood that is playful, powerful, and full of star energy. It brings the feeling of performing under bright lights into everyday fashion, mixing old-school showgirl charm with a fresh, modern attitude. High-glamour, show-girl inspired couture with modern pop-star drama.`,
    '/images/Red.jpg',
    '/images/Red2.jpg',
    [
      makeProduct(
        'Look 1',
        324000,
        'A sharp jacket with softened shoulders and a precise closure line, designed for stage-ready silhouettes with strong movement and performance stability. Embellished and theatrical, this piece reflects the bold, narrative-driven energy of the Showgirl Era — jewel tones and spotlight shimmer captured in structured form.',
        'Italian wool suiting, silk lining, horn buttons',
        ['Single-breasted closure', 'Tailored shoulder structure', 'Fully lined in silk'],
        ['/images/Red.jpg', '/images/Red2.jpg']
      ),
      makeProduct(
        'Look 2',
        171000,
        'A mid-length skirt with clean volume and a reflective finish, created for a global music icon who needs comfort and performance stability without sacrificing glamour. The structured pleats and internal netting provide shape and movement — stage-ready yet wearable.',
        'Silk taffeta, cotton waistband, soft netting',
        ['Hidden fastening', 'Structured pleats', 'Internal netting for shape'],
        ['/images/img-collection-2b.jpg', '/images/Group 5 front.png', '/images/img-contact-facade.jpg']
      ),
    ]
  ),
  makeCollection(
    'Petals in Motion',
    'SS25',
    'Inspired by the first bloom of spring, this collection captures the essence of renewal and bold femininity. Delicately embroidered poppies and petunias unfold across a soft pastel ombré base, evoking a painted garden in motion. The tailored silhouettes merge structure with whimsy, offering a fresh take on contemporary power dressing — ideal for confident, expressive city wear. Floral fantasy palette meets expressive artistry.',
    '/images/img-collection-3a.jpg',
    '/images/img-collection-3b.jpg',
    [
      makeProduct(
        'First Bloom Coat',
        130500,
        'A close-fitting statement coat with surface embellishment that celebrates the harmony of nature and colors. Hand-painted and stone-embroidered motifs create vibrant textures across a 100% cotton plain weave base, using tie-dye techniques for a budget-friendly yet luxurious finish.',
        '100% cotton plain weave, hand-painted base, stone embroidery',
        ['Hand-painted ombré base', 'Stone-embroidered floral motifs', 'Metal button closure', 'Shoulder pad structure'],
        ['/images/img-collection-3a.jpg', '/images/img-collection-3b.jpg', '/images/img-manifesto.png']
      ),
      makeProduct(
        'Garden Blazer',
        459000,
        'A tailored blazer that merges structure with whimsy, featuring delicately embroidered poppies and petunias across a soft pastel ombré base. Designed for fashion-forward women who love artistic, pastel statement pieces with a modern spring-summer vibe — perfect for brunches, events, and unique designer wear.',
        'Cotton base, hand-painted details, stone embroidery, fusing interlining',
        ['Center back embroidery with stones', 'Side panel detailing', 'Transparent yellow and white color story', 'Tie-dye bottoms coordination'],
        ['/images/img-collection-3b.jpg', '/images/img-atelier-1.jpg', '/images/img-atelier-4.jpg']
      ),
    ]
  ),
  makeCollection(
    'Pearls of the Tide',
    'SS26',
    `Oceanic Mythology — The Spirit of the Sea. Inspired by Sandro Botticelli's "The Birth of Venus," this collection depicts the goddess of love and beauty rising gracefully from sea foam — a powerful symbol of purity, rebirth, and divine femininity. The ocean represents calmness, depth, and strength, while Venus reflects elegance, grace, and fluidity. This symbolism connects to structural fluidity, where movement and form exist in harmony.`,
    '/images/img-collection-4a.jpg',
    '/images/img-collection-4b.jpg',
    [
      makeProduct(
        'Venus Saree Gown',
        486000,
        'A modern rebirth of elegance — merging the traditional drape of a saree with the contemporary structure of a gown. The flow of Livaeco Modal Satin and Livaeco Chiffon captures the gentle waves of the ocean, while the form gives it strength and poise. Soft aqua, pearl white, and blush tones mirror sea foam and twilight skies.',
        'Livaeco Modal Satin, Livaeco Chiffon, recycled thread embroidery, upcycled shell details',
        ['Sustainable fabric choice', 'Recycled thread embroidery', 'Upcycled shell embellishments', 'Saree-gown hybrid drape'],
        ['/images/img-collection-4a.jpg', '/images/img-collection-4b.jpg', '/images/img-contact-facade.jpg']
      ),
      makeProduct(
        'Oceana Column Dress',
        355500,
        `A sleek column dress with a luminous surface and a clean vertical line, inspired by the ethereal beauty of Venus and the ocean's eternal rhythm. The sheer outer mesh creates controlled transparency over a bias-cut silk jersey underdress, celebrating the harmony of movement and form.`,
        'Sheer mesh, silk jersey lining, tonal binding, recycled thread details',
        ['Gentle stretch', 'Sheer outer mesh', 'Matched trim at armhole and hem', 'Ocean-inspired color palette'],
        ['/images/img-collection-4b.jpg', '/images/img-atelier-4.jpg', '/images/Group 5 front.png']
      ),
    ]
  ),
  makeCollection(
    'The Last Leaf',
    'AW25',
    `Autumnal Allure — The Transformation. Inspired by the transformation of maple leaves from green to brown, this collection features hand-painted, maple leaf-shaped welts and delicate stone embroidery. The rich autumnal palette and structured silhouettes blend seasonal storytelling with craftsmanship, capturing nature's fleeting beauty in wearable, elegant, and artistic outerwear.`,
    '/images/img-collection-1a.jpg',
    '/images/img-collection-1b.jpg',
    [
      makeProduct(
        'Maple Trench Coat',
        405000,
        'A fluid gown with a lifted neckline and long drape lines, reimagined through the lens of autumnal transformation. Hand-painted maple leaf motifs and stone embroidery trace the surface, while the structured silhouette offers sophisticated seasonal fashion for the woman who appreciates nature-inspired statement outerwear.',
        'Wool twill base, hand-painted maple leaf welts, stone embroidery, black lining',
        ['Hand-painted autumnal motifs', 'Stone embroidery detailing', 'Structured collar', 'Hidden side closure'],
        ['/images/img-collection-1a.jpg', '/images/img-collection-1b.jpg', '/images/img-atelier-3.jpg']
      ),
      makeProduct(
        'Falling Leaf Blouse',
        144000,
        'A blouse with a fluid shoulder line and a soft closed neckline, capturing the gentle descent of the last leaf. The lightweight silk georgette outer layer moves like wind through autumn branches, while mother-of-pearl buttons add a quiet, natural luxury — perfect for the frequent traveler to colder regions.',
        'Silk georgette, mother-of-pearl buttons, cotton voile lining, hand-embroidered details',
        ['Gentle gathers', 'Lightweight outer layer', 'Hidden placket', 'Hand-painted leaf accents'],
        ['/images/img-collection-1b.jpg', '/images/img-atelier-2.jpg', '/images/img-contact-facade.jpg']
      ),
    ]
  ),
  makeCollection(
    'Sea Glass Dreams',
    'SS26',
    `Inspired by jellyfish, this pastel-toned collection features flowing ruffles and layered mesh in hues of green, purple, and blue. The translucent texture and soft structure evoke underwater fluidity, making it a dreamy blend of casual and occasion wear with a whimsical, oceanic aesthetic. Vacation-ready women's wear for trend-driven young women who prefer dreamy, pastel, ethereal fashion.`,
    '/images/image.png',
    '/images/Group 5 front.png',
    [
      makeProduct(
        'Jellyfish Corset Set',
        468000,
        'A corset set inspired by the graceful movement of jellyfish through ocean currents. Flowing ruffles and layered mesh in pastel hues of green, purple, and blue create a translucent texture that evokes underwater fluidity. Perfect for birthdays, resort parties, cocktail nights, and special celebrations.',
        'Mesh fabric, lining, pastel-dyed layers, ruffle construction',
        ['Layered mesh ruffles', 'Translucent texture', 'Pastel color story', 'Soft structured fit'],
        ['/images/image.png', '/images/Group 5 front.png', '/images/img-atelier-1.jpg']
      ),
      makeProduct(
        'Ocean Ruffle Top',
        121500,
        'A compact top with a framed neckline and a precise fit, inspired by the dreamy pink hues of sea glass and underwater light. The minimal seam lines and gentle stretch make it easy to layer — ideal for college students, young professionals, and fashion-forward shoppers seeking ethereal, Instagram-worthy moments.',
        'Cotton silk blend, light stretch, mesh overlay, self lining',
        ['Minimal seam lines', 'Gentle stretch', 'Easy layering', 'Dreamy pink ocean aesthetic'],
        ['/images/image.png', '/images/img-contact-facade.jpg', '/images/img-atelier-2.jpg']
      ),
    ]
  ),
  makeCollection(
    'Digital Romance',
    'AW26',
    'A collection born from CLO3D digital craftsmanship, where structural fluidity meets virtual precision. These designs explore how digital tools can capture the same emotion, movement, and presence as hand-worked garments. Polygon tools, sewing simulations, and fabric property editors become the new atelier — creating pieces that exist at the intersection of technology and tactile expression.',
    '/images/img-atelier-1.jpg',
    '/images/img-atelier-2.jpg',
    [
      makeProduct(
        'Echo Blazer',
        346500,
        'A softly structured blazer with hand-finished edges, designed through CLO3D using polygon and internal line tools, segment sewing, and simulation. The virgin wool exterior meets a fully lined silk interior — proving that digital precision and artisanal edge finish can coexist beautifully.',
        'Virgin wool, silk lining, hand-finished seams',
        ['Relaxed tailoring', 'Artisanal edge finish', 'Fully lined interior', 'CLO3D constructed pattern'],
        ['/images/img-atelier-1.jpg', '/images/img-atelier-2.jpg', '/images/img-atelier-3.jpg']
      ),
      makeProduct(
        'Thread Dress',
        265500,
        'A long dress defined by fine stitch lines across the surface, created using CLO3D detailing tools — elastic ratios, topstitch simulation, and fabric property editors. The surface texture through the body and ease in the skirt demonstrate how digital construction can achieve the same depth and layering as traditional methods.',
        'Cotton silk blend, textured weave, soft lining, digital pattern engineering',
        ['Surface texture through body', 'Ease in the skirt', 'Balanced underlayer', '3D simulated drape'],
        ['/images/img-atelier-2.jpg', '/images/img-atelier-4.jpg', '/images/img-atelier-5.jpg']
      ),
    ]
  ),
  makeCollection(
    'Petal Lounge',
    'SS26',
    `Ditsy Dreams — soft, romantic comfort that's easy to wear. Inspired by SS26 trends for flowing shapes and floral stories, the ivory mini-floral print feels gently vintage. Lace-trimmed camis with supportive mesh and matching microshorts create a cozy, dreamy loungewear set you'll want to live in. For urban, modern, socially active women who value comfort with style.`,
    '/images/img-atelier-3.jpg',
    '/images/img-atelier-4.jpg',
    [
      makeProduct(
        'Signal Dress',
        382500,
        'A bias-cut dress with a reflective surface that catches light in motion — reimagined as a loungewear piece that carries the same emotional weight as evening wear. The fluid drape and soft glow under light make it perfect for cozy nights in, intimate gatherings, and moments of self-indulgence.',
        'Silk satin, stretch lining, concealed zip, lace trim',
        ['Fluid drape', 'Soft glow under light', 'Comfortable inner lining', 'Lace-trimmed detailing'],
        ['/images/img-atelier-3.jpg', '/images/img-atelier-4.jpg', '/images/img-manifesto.png']
      ),
      makeProduct(
        'Pulse Slip',
        193500,
        'A lightweight slip with a subtle liquid sheen, designed as part of the Ditsy Dreams loungewear story. The minimal neckline and body-skimming fit offer gentle support through mesh interior, while the ivory mini-floral print and lace trim create a vintage-inspired, self-care ritual piece.',
        'Silk charmeuse, mesh support, fine straps, lace trim, mini-floral print',
        ['Minimal neckline', 'Body-skimming fit', 'Support mesh interior', 'Ivory floral print with lace edging'],
        ['/images/img-atelier-4.jpg', '/images/img-atelier-5.jpg', '/images/img-contact-facade.jpg']
      ),
    ]
  ),
  makeCollection(
    '9th Collection',
    'AW26',
    `A hushed capsule balancing precision with softness — bridging Mahima's handworked graduation pieces with her digital explorations. This collection represents the designer's ongoing dialogue between traditional craftsmanship and modern technique, where every garment holds energy, remembers moments, and becomes a part of the person wearing it.`,
    '/images/img-atelier-5.jpg',
    '/images/img-contact-facade.jpg',
    [
      makeProduct(
        'Meridian Gown',
        441000,
        `A floor-length gown traced with long vertical lines, embodying the elongated elegance that runs through all of Mahima's work. The refined interior finish and clean hem represent her belief that clothing is never just clothing — it holds energy, remembers moments, and becomes a part of the person wearing it.`,
        'Silk crepe, satin lining, hidden side zip, hand-finished seams',
        ['Elongated line', 'Refined interior finish', 'Clean hem and closure', 'Emotionally weighted design'],
        ['/images/img-atelier-5.jpg', '/images/img-contact-facade.jpg', '/images/img-manifesto.png']
      ),
      makeProduct(
        'North Coat',
        504000,
        `A sculpted coat with a calm, architectural surface — the warm outer shell and minimal front fastening reflect Mahima's design philosophy of starting from a place of feeling. The structured collar and silk lining demonstrate how a single detail can completely change the mood of a garment, making the wearer feel powerful, vulnerable, beautiful, and seen — sometimes all at once.`,
        'Wool melton, silk lining, horn closure, hand-finished structure',
        ['Structured collar', 'Warm outer shell', 'Minimal front fastening', 'Architectural silhouette with emotional depth'],
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
