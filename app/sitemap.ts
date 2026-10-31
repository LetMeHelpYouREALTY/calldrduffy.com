import type { MetadataRoute } from 'next'
import { getStaticPageRoutes } from '@/lib/static-page-routes'
import { LUXURY_AREAS } from '@/lib/luxury-areas'
import { AREA_HERO_PHOTOS, PAGE_HERO_PHOTOS } from '@/lib/hero-photos'

/**
 * Real last-changed dates. Update a date only when that page's content
 * changes, so search engines can trust lastmod.
 */
const CONTENT_UPDATED: Record<string, string> = {
  '/': '2026-10-30',
  '/areas': '2026-10-30',
  '/lease-your-luxury-home': '2026-10-30',
  '/rent-vs-sell': '2026-10-30',
  '/about': '2026-10-30',
  '/contact': '2026-10-30',
  '/luxury-lease-report': '2026-10-30',
  '/las-vegas-property-tax': '2026-10-30',
  '/listings/9528-rainfall-avenue': '2026-10-29',
}
const DEFAULT_UPDATED = '2026-10-30'

/** Hero image per page, listed so the photos can surface in image search. */
const PAGE_IMAGE: Record<string, string> = {
  '/': '/images/hero-red-rock-canyon.jpg',
  '/areas': PAGE_HERO_PHOTOS.areas.src,
  '/lease-your-luxury-home': PAGE_HERO_PHOTOS.lease.src,
  '/rent-vs-sell': PAGE_HERO_PHOTOS.rentVsSell.src,
  '/about': PAGE_HERO_PHOTOS.about.src,
  '/contact': PAGE_HERO_PHOTOS.contact.src,
  '/luxury-lease-report': PAGE_HERO_PHOTOS.report.src,
  '/las-vegas-property-tax': PAGE_HERO_PHOTOS.propertyTax.src,
}

/** Most important pages first; Google reads lastmod, not priority or changefreq. */
const ORDER = ['/', '/areas', '/luxury-lease-report', '/lease-your-luxury-home', '/rent-vs-sell', '/las-vegas-property-tax', '/about', '/contact']

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, '') ||
    'https://www.calldrduffy.com'
  const abs = (u: string) => (u.startsWith('http') ? u : `${baseUrl}${u}`)
  // Next.js writes video text into the XML unescaped, so escape it here.
  const esc = (t: string) => t.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')

  const pages = getStaticPageRoutes().filter((r) => !r.includes('[') && !r.endsWith('.txt') && r !== '/areas' && !r.startsWith('/areas/'))
  const ordered = [...ORDER.filter((r) => pages.includes(r)), ...pages.filter((r) => !ORDER.includes(r))]

  const pageEntries: MetadataRoute.Sitemap = ordered.map((route) => ({
    url: route === '/' ? baseUrl : `${baseUrl}${route}`,
    lastModified: new Date(`${CONTENT_UPDATED[route] ?? DEFAULT_UPDATED}T12:00:00-07:00`),
    ...(PAGE_IMAGE[route] ? { images: [abs(PAGE_IMAGE[route])] } : {}),
  }))

  // /areas sits right after the home page.
  pageEntries.splice(1, 0, {
    url: `${baseUrl}/areas`,
    lastModified: new Date(`${CONTENT_UPDATED['/areas'] ?? DEFAULT_UPDATED}T12:00:00-07:00`),
    images: [abs(PAGE_IMAGE['/areas'])],
  })

  const areaEntries: MetadataRoute.Sitemap = LUXURY_AREAS.map((a) => ({
    url: `${baseUrl}/areas/${a.slug}`,
    lastModified: new Date(`${a.lastReviewed}T12:00:00-07:00`),
    images: AREA_HERO_PHOTOS[a.slug] ? [abs(AREA_HERO_PHOTOS[a.slug].src)] : undefined,
    videos: a.video
      ? [
          {
            title: esc(a.video.title),
            description: esc(a.video.description),
            thumbnail_loc: abs(a.video.poster),
            content_loc: abs(a.video.src),
            duration: a.video.seconds,
            publication_date: `${a.video.uploadDate}T12:00:00-07:00`,
            family_friendly: 'yes' as const,
          },
        ]
      : undefined,
  }))

  return [...pageEntries.slice(0, 2), ...areaEntries, ...pageEntries.slice(2)]
}
