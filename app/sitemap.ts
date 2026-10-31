import type { MetadataRoute } from 'next'
import { getStaticPageRoutes } from '@/lib/static-page-routes'
import { LUXURY_AREAS } from '@/lib/luxury-areas'

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

function priorityForRoute(route: string): number {
  if (route === '/') return 1
  if (route === '/areas' || route.startsWith('/areas/')) return 0.9
  if (route === '/lease-your-luxury-home' || route === '/rent-vs-sell' || route === '/luxury-lease-report') return 0.9
  if (route.startsWith('/listings/')) return 0.5
  return 0.7
}

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, '') ||
    'https://www.calldrduffy.com'

  const routes = [
    ...getStaticPageRoutes().filter((r) => !r.includes('[') && !r.endsWith('.txt')),
    ...LUXURY_AREAS.map((a) => `/areas/${a.slug}`),
  ]
  const areaDates = Object.fromEntries(LUXURY_AREAS.map((a) => [`/areas/${a.slug}`, a.lastReviewed]))

  return routes.map((route) => ({
    url: route === '/' ? baseUrl : `${baseUrl}${route}`,
    lastModified: new Date(`${areaDates[route] ?? CONTENT_UPDATED[route] ?? DEFAULT_UPDATED}T12:00:00-07:00`),
    changeFrequency: route === '/' || route.startsWith('/areas') ? 'weekly' : 'monthly',
    priority: priorityForRoute(route),
  }))
}
