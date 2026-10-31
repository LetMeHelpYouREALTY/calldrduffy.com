import type { NextConfig } from 'next'
import legacyRedirects from './lib/legacy-redirects.json'

const nextConfig: NextConfig = {
  compiler: {
    // Remove console logs in production
    removeConsole: process.env.NODE_ENV === 'production' ? {
      exclude: ['error', 'warn'],
    } : false,
  },
  images: {
    // AVIF first, WebP fallback; heroes request quality 70.
    formats: ['image/avif', 'image/webp'],
    qualities: [70, 75],
    minimumCacheTTL: 2678400,
  },
  experimental: {
    optimizePackageImports: ['@radix-ui/react-icons'],
  },
  // Pages retired when the site moved to luxury owner leasing (2026-10-30).
  async redirects() {
    return Object.entries(legacyRedirects as Record<string, string>).map(([source, destination]) => ({
      source,
      destination,
      permanent: true,
    }))
  },
}

export default nextConfig
