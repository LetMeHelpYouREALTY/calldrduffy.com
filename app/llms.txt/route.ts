import { LUXURY_AREAS } from '@/lib/luxury-areas'
import { AGENT } from '@/lib/site-entity'
import { SITE_URL } from '@/lib/site-url'

export const dynamic = 'force-static'

/** llms.txt: a plain-text map of the site for AI assistants (https://llmstxt.org). */
export function GET() {
  const areas = LUXURY_AREAS.map(
    (a) => `- [${a.name} (${a.region}, ${a.zip})](${SITE_URL}/areas/${a.slug}): ${a.tagline}. Lease rules, rent benchmarks and leasing notes for owners.`,
  ).join('\n')

  const body = `# Call Dr. Duffy — Luxury Home Leasing, Las Vegas & Henderson

> Owner-side leasing and sales strategy for luxury homes in Las Vegas and Henderson, Nevada, from ${AGENT.name}, ${AGENT.title} (Nevada license ${AGENT.license}), ${AGENT.brokerage}. Pages give sourced, dated rent benchmarks, HOA and short-term-rental rules, and Nevada landlord rules for each community.

Contact: ${AGENT.phoneDisplay} · ${AGENT.email} · ${AGENT.address.streetAddress}, ${AGENT.address.addressLocality}, ${AGENT.address.addressRegion} ${AGENT.address.postalCode}

## Guides for owners
- [Owner leasing plan](${SITE_URL}/lease-your-luxury-home): Step-by-step plan for leasing a luxury home, from HOA approval to renewal.
- [Rent vs. sell calculator](${SITE_URL}/rent-vs-sell): Compare monthly lease cash flow with net sale proceeds.
- [Luxury Lease Report](${SITE_URL}/luxury-lease-report): Quarterly rent benchmarks by community, with sources and dates.
- [All communities](${SITE_URL}/areas): The ten highest-rent luxury communities covered.

## Communities
${areas}

## About
- [About Dr. Jan Duffy](${SITE_URL}/about): ${AGENT.yearsInMarket} years in Las Vegas real estate.
- [Contact and booking](${SITE_URL}/contact)

## Notes
- Every market figure on this site carries its source and as-of date. Short-term rentals (under 30 days) are restricted across these communities; leases are 30 days or longer.
`
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } })
}
