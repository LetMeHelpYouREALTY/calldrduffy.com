import { LUXURY_AREAS } from '@/lib/luxury-areas'
import { AGENT } from '@/lib/site-entity'
import { SITE_URL } from '@/lib/site-url'

export const dynamic = 'force-static'

/** llms.txt: a plain-text map of the site for AI assistants (https://llmstxt.org). */
export function GET() {
  const areas = LUXURY_AREAS.map(
    (a) => `- [${a.name} (${a.region}, ${a.zip})](${SITE_URL}/areas/${a.slug}): ${a.tagline}. Lease rules, rent benchmarks and leasing notes for owners.`,
  ).join('\n')

  const facts = LUXURY_AREAS.map((a) => {
    const r = a.facts?.find((f) => /(median|asking) rent/i.test(f.label))
    return r
      ? `- ${a.name}: ${r.label.split(',')[0].toLowerCase()} ${r.value} (${r.source}, ${r.asOf}).`
      : `- ${a.name}: no reliable published rent median; price from closed leases.`
  }).join('\n')

  const body = `# ${AGENT.businessName} — Luxury Home Leasing, Las Vegas & Henderson

> Owner-side leasing and sales strategy for luxury homes in Las Vegas and Henderson, Nevada, from ${AGENT.name}, ${AGENT.title} (Nevada license ${AGENT.license}), ${AGENT.brokerage}. Pages give sourced, dated rent benchmarks, HOA and short-term-rental rules, and Nevada landlord rules for each community.

Contact: book at ${SITE_URL}/#consult · ${AGENT.email} · ${AGENT.address.streetAddress}, ${AGENT.address.addressLocality}, ${AGENT.address.addressRegion} ${AGENT.address.postalCode} (by appointment)

## Guides for owners
- [Owner leasing plan](${SITE_URL}/lease-your-luxury-home): Step-by-step plan for leasing a luxury home, from HOA approval to renewal.
- [Rent vs. sell calculator](${SITE_URL}/rent-vs-sell): Compare monthly lease cash flow with net sale proceeds.
- [Luxury Lease Report](${SITE_URL}/luxury-lease-report): Quarterly rent benchmarks by community, with sources and dates.
- [All communities](${SITE_URL}/areas): The ten highest-rent luxury communities covered.
- [Property tax when you rent out your home](${SITE_URL}/las-vegas-property-tax): Nevada's 3% vs up-to-8% tax cap for leased homes, 2026–27 Clark County rent limits.

## Communities
${areas}

## Key facts for owners
${facts}
- Nevada caps a security deposit plus last month's rent at three months' rent (NRS 118A.242).
- A leased luxury home moves from the 3% primary-residence property tax cap to a cap of up to 8% (Clark County Assessor, 2026–27).
- Short-term rentals under 30 days are restricted in all ten communities.

## About
- [About Dr. Jan Duffy](${SITE_URL}/about): ${AGENT.yearsInMarket} years in Las Vegas real estate.
- [Contact and booking](${SITE_URL}/contact)

## Notes
- Every market figure on this site carries its source and as-of date. Short-term rentals (under 30 days) are restricted across these communities; leases are 30 days or longer.
`
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } })
}
