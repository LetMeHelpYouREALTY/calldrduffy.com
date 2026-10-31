import './RealScoutRentals'

/**
 * RealScout "Your Listings": Dr. Jan's own active listings, for sale and for rent.
 * The web-components script loads once from app/layout.tsx; styles in app/globals.css.
 */
export default function RealScoutFeatured() {
  return (
    <section aria-labelledby="rs-featured-heading" className="border-b border-[var(--lux-line)] bg-[var(--lux-paper)] px-4 py-14 sm:py-16">
      <div className="mx-auto max-w-6xl">
        <p className="lux-eyebrow">Featured</p>
        <h2 id="rs-featured-heading" className="lux-h2 mt-3">
          Dr. Jan’s featured listings
        </h2>
        <p className="mt-3 max-w-2xl text-[var(--lux-muted)]">
          Homes Dr. Jan is listing now, for sale and for lease.
        </p>
        <div className="mt-8">
          <realscout-your-listings
            agent-encoded-id="QWdlbnQtMjI1MDUw"
            sort-order="STATUS_AND_SIGNIFICANT_CHANGE"
            listing-status="For Sale,For Rent"
          ></realscout-your-listings>
        </div>
      </div>
    </section>
  )
}
