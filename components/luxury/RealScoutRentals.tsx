import type { DetailedHTMLProps, HTMLAttributes } from 'react'

type RealScoutOfficeListingsProps = DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> & {
  'agent-encoded-id'?: string
  'sort-order'?: string
  'listing-status'?: string
  'property-types'?: string
  'price-min'?: string
}

declare module 'react' {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace JSX {
    interface IntrinsicElements {
      'realscout-office-listings': RealScoutOfficeListingsProps
      'realscout-your-listings': RealScoutOfficeListingsProps
    }
  }
}

/**
 * RealScout office listings: single-family homes for rent at $3,500+/mo.
 * Shown directly below the hero on every page. The web-components script
 * loads once from app/layout.tsx; element styles live in app/globals.css.
 */
export default function RealScoutRentals({
  heading = 'Luxury homes for lease in Las Vegas now',
}: {
  heading?: string
}) {
  return (
    <section aria-labelledby="rs-rentals-heading" className="border-b border-[var(--lux-line)] bg-white px-4 py-14 sm:py-16">
      <div className="mx-auto max-w-6xl">
        <p className="lux-eyebrow">Live from the MLS</p>
        <h2 id="rs-rentals-heading" className="lux-h2 mt-3">
          {heading}
        </h2>
        <p className="mt-3 max-w-2xl text-[var(--lux-muted)]">
          Single-family luxury rentals in Las Vegas and Henderson at $3,500 a month and up, live from the MLS.
        </p>
        <div className="mt-8">
          <realscout-office-listings
            agent-encoded-id="QWdlbnQtMjI1MDUw"
            sort-order="STATUS_AND_SIGNIFICANT_CHANGE"
            listing-status=",For Rent"
            property-types="SFR"
            price-min="3500"
          ></realscout-office-listings>
        </div>
      </div>
    </section>
  )
}
