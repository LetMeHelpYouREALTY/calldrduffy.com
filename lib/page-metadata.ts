import type { Metadata } from 'next'
import { ROUTE_SEO } from './route-seo'
import { SITE_URL } from './site-url'

const defaultSeo = ROUTE_SEO['/']

function normalizePath(pathname: string): string {
  if (!pathname || pathname === '') return '/'
  const path = pathname.startsWith('/') ? pathname : `/${pathname}`
  if (path !== '/' && path.endsWith('/')) return path.slice(0, -1)
  return path
}

export function getMetadataForPath(pathname: string): Metadata {
  const path = normalizePath(pathname)
  const seo = ROUTE_SEO[path] ?? {
    title: defaultSeo.title,
    description: defaultSeo.description,
  }

  const canonical = path === '/' ? `${SITE_URL}/` : `${SITE_URL}${path}`

  return {
    title: seo.title,
    description: seo.description,
    alternates: {
      canonical,
    },
    openGraph: {
      title: seo.title,
      description: seo.description,
      url: canonical,
      siteName: 'Call Dr. Duffy',
      type: 'website',
      locale: 'en_US',
      images: ['/og-image.png'],
    },
    twitter: {
      card: 'summary_large_image',
      title: seo.title,
      description: seo.description,
      images: ['/og-image.png'],
    },
    authors: [{ name: 'Dr. Jan Duffy' }],
    robots: {
      index: true,
      follow: true,
    },
  }
}
