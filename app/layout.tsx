import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { ThemeProvider } from 'next-themes'
import DeployBanner from '../components/deploy-banner'
import SiteNavigation from '../components/site-nav'
import SiteFooter from '../components/site-footer'
import Analytics from './analytics'
import StructuredData from '../components/structured-data'
import {
  getLocalBusinessSchema,
  getOrganizationSchema,
  getRealEstateAgentSchema,
  getWebSiteSchema
} from '../lib/schema'
import { getMultiLocationBusinessSchema } from '../lib/hyperlocal-schema'
import { SITE_URL } from '../lib/site-url'
import './globals.css'

import { headers } from 'next/headers'
import { getMetadataForPath } from '../lib/page-metadata'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
  display: 'swap',
  preload: true,
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
  display: 'swap',
})

export async function generateMetadata(): Promise<Metadata> {
  const pathname = (await headers()).get('x-pathname') ?? '/'
  return {
    metadataBase: new URL(SITE_URL),
    ...getMetadataForPath(pathname),
    keywords: [
      'sell a tenant-occupied rental Las Vegas',
      'sell rental property with tenants Nevada',
      'NRS 118A tenant notice when selling',
      'Las Vegas investor rental sale',
      'sell a rented condo Las Vegas',
    ],
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <Analytics />
                <StructuredData data={getRealEstateAgentSchema()} id="real-estate-agent-schema" />
                <StructuredData data={getLocalBusinessSchema()} id="local-business-schema" />
                <StructuredData data={getOrganizationSchema()} id="organization-schema" />
                <StructuredData data={getWebSiteSchema()} id="website-schema" />
                <StructuredData data={getMultiLocationBusinessSchema()} id="multi-location-business-schema" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
          storageKey="theme"
        >
          <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-blue-600 focus:text-white focus:rounded-lg">
            Skip to main content
          </a>
          <DeployBanner />
          <SiteNavigation />
          <main id="main-content">
            {children}
          </main>
          <SiteFooter />
        </ThemeProvider>
      </body>
    </html>
  )
}
