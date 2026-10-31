/**
 * Hero photos: one unique image per page, all from Unsplash under the
 * Unsplash License (free commercial use), self-hosted in public/images/heroes.
 * Captions describe what the photo actually shows. Community pages use
 * landscapes or views from that part of the valley, never a specific house,
 * so no photo implies a home is in that community or available.
 * Sourced 2026-10-30.
 */
export type HeroPhoto = {
  src: string
  alt: string
  credit: string
  /** CSS object-position, e.g. 'center 60%' */
  position?: string
}

const h = (file: string, alt: string, credit: string, position?: string): HeroPhoto => ({
  src: `/images/heroes/${file}.jpg`,
  alt,
  credit,
  position,
})

/** Keyed by area slug (lib/luxury-areas.ts). */
export const AREA_HERO_PHOTOS: Record<string, HeroPhoto> = {
  'the-ridges': h('the-ridges', 'Red Rock Canyon peaks at sunrise, west of Summerlin', 'Red Rock Canyon at sunrise · Photo: Halie West / Unsplash', 'center 65%'),
  'red-rock-country-club': h('red-rock-country-club', 'Red Rock Canyon cliffs above desert scrub, west of Summerlin', 'Red Rock Canyon · Photo: R. Christian Anderson / Unsplash', 'center 45%'),
  'the-summit-club': h('the-summit-club', 'The Red Rock Canyon escarpment at sunset', 'Red Rock Canyon at sunset · Photo: Aaron Burden / Unsplash', 'center 60%'),
  queensridge: h('queensridge', 'The Las Vegas skyline at dusk with the mountains behind', 'Las Vegas skyline at dusk · Photo: Tyler Hardie / Unsplash', 'center 55%'),
  'macdonald-highlands': h('macdonald-highlands', 'Las Vegas city lights at sunset seen from the hills', 'Las Vegas lights at sunset · Photo: Alicia Franklin / Unsplash', 'center 70%'),
  ascaya: h('ascaya', 'Desert foothills above Henderson, Nevada', 'Henderson foothills · Photo: Yifu Wu / Unsplash', 'center 50%'),
  'anthem-country-club': h('anthem-country-club', 'Sunlight breaking through clouds over mountains near Las Vegas', 'Las Vegas Valley sunset · Photo: Marcy Leechgrave / Unsplash', 'center 60%'),
  'lake-las-vegas': h('lake-las-vegas', 'The moon rising at sunset over Lake Las Vegas in Henderson', 'Moonrise over Lake Las Vegas · Photo: Ryne Anderson / Unsplash', 'center 60%'),
  'southern-highlands': h('southern-highlands', 'Aerial view of a desert community with golf courses around a lake', 'Desert golf community from above · Photo: Fujiphilm / Unsplash', 'center 50%'),
  'spanish-trail': h('spanish-trail', 'A green golf course below desert mountains, seen from a balcony', 'Golf course view · Photo: Cathy Poland / Unsplash', 'center 55%'),
}

/** Keyed by page. */
export const PAGE_HERO_PHOTOS = {
  areas: h('areas', 'Las Vegas Valley city lights under a twilight sky with mountains', 'Las Vegas Valley at twilight · Photo: Tyler Hardie / Unsplash', 'center 60%'),
  lease: h('lease-your-luxury-home', 'A warm, modern living room with large windows', 'Photo: Spacejoy / Unsplash', 'center 55%'),
  rentVsSell: h('rent-vs-sell', 'A modern home with a lit swimming pool at dusk', 'Photo: Cesar Cid / Unsplash', 'center 60%'),
  about: h('about', 'The Las Vegas Strip from above at dusk', 'The Las Vegas Strip at dusk · Photo: Leo_Visions / Unsplash', 'center 55%'),
  contact: h('contact', 'A bright living room with a white sofa and wood furniture', 'Photo: Cat Han / Unsplash', 'center 55%'),
  propertyTax: h('las-vegas-property-tax', 'The Las Vegas skyline against the mountains, homes in the foreground', 'Las Vegas skyline · Photo: Tyler Hardie / Unsplash', 'center 55%'),
} satisfies Record<string, HeroPhoto>
