import type { NextConfig } from 'next'
import legacyRedirects from './lib/legacy-redirects.json'

const nextConfig: NextConfig = {
  compiler: {
    // Remove console logs in production
    removeConsole: process.env.NODE_ENV === 'production' ? {
      exclude: ['error', 'warn'],
    } : false,
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
