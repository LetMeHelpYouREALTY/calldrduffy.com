import type { Metadata } from 'next'
import Script from 'next/script'
import { Geist, Geist_Mono, Cormorant_Garamond } from 'next/font/google'
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

const cormorant = Cormorant_Garamond({
  variable: '--font-cormorant',
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  display: 'swap',
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
      'lease my luxury home Las Vegas',
      'luxury home leasing Summerlin',
      'The Ridges home for lease owner',
      'MacDonald Highlands lease my home',
      'rent or sell luxury home Las Vegas',
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
        {/* RealScout web components (loaded once for every widget on the page) */}
        <script src="https://em.realscout.com/widgets/realscout-web-components.umd.js" type="module" async />
        <Analytics />
                <StructuredData data={getRealEstateAgentSchema()} id="real-estate-agent-schema" />
                <StructuredData data={getLocalBusinessSchema()} id="local-business-schema" />
                <StructuredData data={getOrganizationSchema()} id="organization-schema" />
                <StructuredData data={getWebSiteSchema()} id="website-schema" />
                <StructuredData data={getMultiLocationBusinessSchema()} id="multi-location-business-schema" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${cormorant.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          forcedTheme="light"
          disableTransitionOnChange
          storageKey="theme"
        >
          <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-[var(--lux-ink)] focus:text-white focus:rounded-lg">
            Skip to main content
          </a>
          <DeployBanner />
          <SiteNavigation />
          <main id="main-content">
            {children}
          </main>
          <SiteFooter />
        </ThemeProvider>
        {/* Widget Tracker */}
        <Script id="widget-tracker" strategy="afterInteractive">{`
          (function(w,i,d,g,e,t){w["WidgetTrackerObject"]=g;(w[g]=w[g]||function()
          {(w[g].q=w[g].q||[]).push(arguments);}),(w[g].ds=1*new Date());(e="script"),
          (t=d.createElement(e)),(e=d.getElementsByTagName(e)[0]);t.async=1;t.src=i;
          e.parentNode.insertBefore(t,e);})
          (window,"https://widgetbe.com/agent",document,"widgetTracker");
          window.widgetTracker("create", "WT-XQHVYQWW");
          window.widgetTracker("send", "pageview");
        `}</Script>
      </body>
    </html>
  )
}
