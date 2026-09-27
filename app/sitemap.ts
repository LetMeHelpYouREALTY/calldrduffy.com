import type { MetadataRoute } from 'next'
import { getStaticPageRoutes } from '@/lib/static-page-routes'

function priorityForRoute(route: string): number {
  if (route === '/') return 1
  if (
    route === '/didnt-sell' ||
    route === '/expired-listing-help' ||
    route === '/seller-consultation' ||
    route === '/contact'
  ) {
    return 0.9
  }
  if (route.startsWith('/zipcodes/')) return 0.75
  return 0.85
}

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, '') ||
    'https://www.calldrduffy.com'
  const now = new Date()

  return getStaticPageRoutes().map((route) => ({
    url: route === '/' ? baseUrl : `${baseUrl}${route}`,
    lastModified: now,
    changeFrequency: route === '/' ? 'weekly' : 'monthly',
    priority: priorityForRoute(route),
  }))
}
