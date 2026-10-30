import type { MetadataRoute } from 'next'
import { getStaticPageRoutes } from '@/lib/static-page-routes'
import { LUXURY_AREAS } from '@/lib/luxury-areas'

function priorityForRoute(route: string): number {
  if (route === '/') return 1
  if (route === '/areas' || route.startsWith('/areas/')) return 0.9
  if (route === '/lease-your-luxury-home' || route === '/rent-vs-sell') return 0.9
  if (route.startsWith('/listings/')) return 0.5
  return 0.7
}

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, '') ||
    'https://www.calldrduffy.com'
  const now = new Date()

  const routes = [
    ...getStaticPageRoutes().filter((r) => !r.includes('[')),
    ...LUXURY_AREAS.map((a) => `/areas/${a.slug}`),
  ]

  return routes.map((route) => ({
    url: route === '/' ? baseUrl : `${baseUrl}${route}`,
    lastModified: now,
    changeFrequency: route === '/' || route.startsWith('/areas') ? 'weekly' : 'monthly',
    priority: priorityForRoute(route),
  }))
}
