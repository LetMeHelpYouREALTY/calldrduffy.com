'use client'

import Script from 'next/script'
import { CALENDLY_OWNER_URL } from '@/lib/owner-site'

/** Inline Calendly booking widget. No forms on this site: owners book directly. */
export default function CalendlyInline({ url = CALENDLY_OWNER_URL }: { url?: string }) {
  return (
    <div className="w-full">
      <div
        className="calendly-inline-widget w-full"
        data-url={url}
        style={{ minWidth: '320px', height: '700px' }}
      />
      <Script src="https://assets.calendly.com/assets/external/widget.js" strategy="lazyOnload" />
      <noscript>
        <a href={url}>Book a private owner consultation</a>
      </noscript>
    </div>
  )
}
