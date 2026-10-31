import type { Metadata } from 'next'
import Link from 'next/link'
import ConsultSection from '@/components/luxury/ConsultSection'
import HeroBackdrop from '@/components/luxury/HeroBackdrop'
import { PAGE_HERO_PHOTOS } from '@/lib/hero-photos'
import { LUXURY_AREAS, LUXURY_LEASE_BENCHMARKS } from '@/lib/luxury-areas'
import { SITE_URL } from '@/lib/site-url'

const EDITION = 'Q4 2026'
const PUBLISHED = '2026-10-30'
const NEXT_UPDATE = 'January 2027'

export const metadata: Metadata = {
  title: { absolute: `Las Vegas Luxury Rent Prices by Community: ${EDITION} Report` },
  description:
    'What luxury homes rent for in Las Vegas and Henderson, Q4 2026: median and asking rents, HOA dues and lease rules for 10 communities, each with its source and date.',
  alternates: { canonical: `${SITE_URL}/luxury-lease-report` },
}

function rentFor(a: (typeof LUXURY_AREAS)[number]) {
  const f =
    a.facts?.find((x) => /median.*rent|rent.*median/i.test(x.label)) ??
    a.facts?.find((x) => /rent/i.test(x.label)) ??
    a.figure
  return f
}

export default function LuxuryLeaseReportPage() {
  const rows = LUXURY_AREAS.map((a) => ({ a, rent: rentFor(a) }))
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Dataset',
    name: `Las Vegas Luxury Lease Report, ${EDITION}`,
    description:
      'Rent benchmarks and leasing rules for single-family homes in ten high-rent luxury communities in Las Vegas and Henderson, Nevada, compiled from cited public sources.',
    url: `${SITE_URL}/luxury-lease-report`,
    datePublished: PUBLISHED,
    dateModified: PUBLISHED,
    creator: { '@id': `${SITE_URL}/#jan-duffy` },
    publisher: { '@id': `${SITE_URL}/#agent` },
    spatialCoverage: { '@type': 'Place', name: 'Las Vegas Valley, Nevada' },
    isAccessibleForFree: true,
    license: 'https://creativecommons.org/licenses/by/4.0/',
    variableMeasured: ['Median monthly rent', 'Asking rent range', 'HOA dues', 'Lease rules'],
  }

  return (
    <div className="bg-[var(--lux-paper)] text-[var(--lux-ink)]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }} />

      <section className="lux-hero relative overflow-hidden px-4 pb-20 pt-20 text-white sm:pb-24 sm:pt-24">
        <HeroBackdrop photo={PAGE_HERO_PHOTOS.report} />
        <div className="relative z-10 mx-auto max-w-5xl">
          <p className="lux-eyebrow !text-[var(--lux-gold-soft)]">Luxury Lease Report · {EDITION}</p>
          <h1 className="lux-h1 mt-4">What luxury homes lease for, community by community</h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-[#ddd5c6]">
            Rent benchmarks and leasing rules for ten of the valley’s highest-rent communities. Every figure shows its
            source and date. Published October 30, 2026; next update {NEXT_UPDATE}.
          </p>
        </div>
      </section>

      <section className="border-b border-[var(--lux-line)] bg-white px-4 py-12">
        <div className="mx-auto max-w-5xl">
          <p className="lux-eyebrow">Key findings</p>
          <h2 className="lux-h3 mt-3 !text-3xl">What do luxury homes rent for in Las Vegas?</h2>
          <ul className="mt-5 space-y-3 text-lg leading-relaxed text-[var(--lux-ink)]">
            {LUXURY_LEASE_BENCHMARKS.map((b) => (
              <li key={b.label} className="flex gap-3">
                <span aria-hidden className="mt-3 h-px w-4 shrink-0 bg-[var(--lux-gold)]" />
                <span>
                  {b.label}: <strong>{b.value}</strong>{' '}
                  <span className="text-sm text-[var(--lux-muted)]">({b.source}, {b.asOf})</span>
                </span>
              </li>
            ))}
            <li className="flex gap-3">
              <span aria-hidden className="mt-3 h-px w-4 shrink-0 bg-[var(--lux-gold)]" />
              <span>
                Short-term rentals under 30 days are restricted in all ten communities, so every lease here is 30 days or
                longer.
              </span>
            </li>
          </ul>
        </div>
      </section>

      <section className="px-4 py-14">
        <div className="mx-auto max-w-6xl">
          <p className="lux-eyebrow">By community</p>
          <h2 className="lux-h3 mt-3 !text-3xl">Luxury rent prices and lease rules by community</h2>
          <div className="mt-6 overflow-x-auto">
            <table className="w-full min-w-[760px] border-collapse text-left text-sm">
              <caption className="sr-only">Luxury lease benchmarks by community, {EDITION}</caption>
              <thead>
                <tr className="border-b border-[var(--lux-ink)] text-xs uppercase tracking-[0.12em] text-[var(--lux-muted)]">
                  <th scope="col" className="py-3 pr-4 font-semibold">Community</th>
                  <th scope="col" className="py-3 pr-4 font-semibold">Rent benchmark</th>
                  <th scope="col" className="py-3 pr-4 font-semibold">Source and date</th>
                  <th scope="col" className="py-3 font-semibold">Lease rules</th>
                </tr>
              </thead>
              <tbody>
                {rows.map(({ a, rent }) => {
                  const rules = a.facts?.find((f) => /lease|rental/i.test(f.label) && !/rent\b|median|range/i.test(f.label))
                  return (
                    <tr key={a.slug} className="border-b border-[var(--lux-line)] align-top">
                      <th scope="row" className="py-4 pr-4 font-normal">
                        <Link href={`/areas/${a.slug}`} className="font-medium text-[var(--lux-ink)] underline decoration-[var(--lux-line)] underline-offset-4 hover:decoration-[var(--lux-gold)]">
                          {a.name}
                        </Link>
                        <span className="block text-xs text-[var(--lux-muted)]">{a.region} · {a.zip}</span>
                      </th>
                      <td className="py-4 pr-4">
                        {rent ? (
                          <>
                            <span className="font-medium">{rent.value}</span>
                            <span className="block text-xs text-[var(--lux-muted)]">{rent.label}</span>
                          </>
                        ) : (
                          <span className="text-[var(--lux-muted)]">No published figure; priced from closed leases</span>
                        )}
                      </td>
                      <td className="py-4 pr-4 text-xs text-[var(--lux-muted)]">{rent ? `${rent.source}, ${rent.asOf}` : '—'}</td>
                      <td className="py-4 text-xs leading-relaxed text-[var(--lux-muted)]">{rules ? rules.value : a.leasingNotes[0]}</td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="bg-[var(--lux-ivory)] px-4 py-14">
        <div className="mx-auto max-w-3xl space-y-4 text-[var(--lux-muted)]">
          <p className="lux-eyebrow">Method</p>
          <h2 className="lux-h3 !text-2xl text-[var(--lux-ink)]">How this rent report is built</h2>
          <p>
            Figures come from the public sources named beside each one, checked October 30, 2026. Asking rents are what
            owners list for; signed rents usually land below them, and small communities can have few listings at any
            time. Where no credible figure exists, the table says so instead of estimating.
          </p>
          <p>
            Data may be cited with a link to this page. For a rent figure on a specific home, a closed-lease comparison
            from the MLS is the right tool.
          </p>
        </div>
      </section>

      <ConsultSection
        heading="Get the closed-lease number for your home"
        lead="Thirty minutes on your home: closed lease comps from your community, HOA steps, and lease versus sale."
      />
    </div>
  )
}
