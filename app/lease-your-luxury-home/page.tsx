import type { Metadata } from 'next'
import Link from 'next/link'
import ConsultSection from '@/components/luxury/ConsultSection'
import { LEASING_PACE, OWNER_RULES } from '@/lib/owner-site'
import { SITE_URL } from '@/lib/site-url'
import RealScoutRentals from '@/components/luxury/RealScoutRentals'
import HeroBackdrop from '@/components/luxury/HeroBackdrop'
import { PAGE_HERO_PHOTOS } from '@/lib/hero-photos'

export const metadata: Metadata = {
  title: { absolute: 'How to Rent Out Your Luxury Home in Las Vegas: Owner Plan' },
  description:
    'How to rent out a luxury home in Las Vegas or Henderson: price from closed leases, present it like a sale, screen by written standards, and follow Nevada deposit and tax rules.',
  alternates: { canonical: `${SITE_URL}/lease-your-luxury-home` },
}

const PHASES = [
  {
    title: 'Before you list: HOA, tax and insurance checks',
    items: [
      'Read your CC&Rs and rules for minimum lease terms, lease registration and gate-access steps.',
      'Check your property-tax status. Leasing at market rent can move the home from a 3% to an up-to-8% abatement cap (NRS 361.4722).',
      'Decide furnished or unfurnished, and inventory every furnished item in writing.',
      'Confirm landlord insurance replaces your owner-occupied policy before move-in.',
    ],
  },
  {
    title: 'How to price a luxury rental from closed leases',
    items: [
      'Pull closed leases of comparable homes inside the same community, not valley-wide averages.',
      'Adjust for view, lot, pool, finish level, furnishing and lease term.',
      'Treat asking rents as a ceiling. Signed rents usually land below them.',
    ],
  },
  {
    title: 'Presenting a luxury rental like a sale',
    items: [
      'Professional twilight and interior photography, a measured floor plan and a 3D tour.',
      'A listing description that leads with the home and its setting, then the specs.',
      'Showings scheduled with gate access arranged in advance.',
    ],
  },
  {
    title: 'Tenant screening and the lease',
    items: [
      'One written set of criteria for income, credit and rental history, applied to every applicant the same way.',
      'Security deposit plus last month’s rent capped at three months’ rent (NRS 118A.242).',
      'A prospective tenant may ask for a copy of the lease before signing (NRS 118A.235). Have it ready.',
      'Spell out who pays HOA fees, landscaping, pool service and utilities.',
    ],
  },
  {
    title: 'At every renewal: re-lease or sell',
    items: [
      'Re-check rent against fresh closed leases 90 days before the term ends.',
      'Compare re-leasing with selling, using the same numbers each time.',
      'If you plan to sell with a tenant in place, plan showing notice under NRS 118A from day one.',
    ],
  },
]

export default function LeaseYourLuxuryHomePage() {
  return (
    <div className="bg-[var(--lux-paper)] text-[var(--lux-ink)]">
      <section className="lux-hero px-4 pb-20 pt-20 text-white sm:pb-24 sm:pt-24 relative overflow-hidden">
        <HeroBackdrop photo={PAGE_HERO_PHOTOS.lease} />
        <div className="relative z-10 mx-auto max-w-5xl">
          <p className="lux-eyebrow !text-[var(--lux-gold-soft)]">Leasing plan</p>
          <h1 className="lux-h1 mt-4">How to lease your luxury Las Vegas home the right way</h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-[#ddd5c6]">
            The plan for owners in Las Vegas’s guard-gated and club communities, from HOA paperwork to the renewal
            decision.
          </p>
        </div>
      </section>

      <RealScoutRentals />

      <section className="px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-5xl space-y-14">
          {PHASES.map((p, i) => (
            <div key={p.title} className="grid gap-6 md:grid-cols-[12rem_1fr]">
              <div>
                <p className="text-sm text-[var(--lux-gold)]">{String(i + 1).padStart(2, '0')}</p>
                <h2 className="lux-h3 mt-1 !text-3xl">{p.title}</h2>
              </div>
              <ul className="space-y-3 border-t border-[var(--lux-line)] pt-5 md:border-t-0 md:border-l md:pl-8 md:pt-0">
                {p.items.map((it) => (
                  <li key={it} className="flex gap-3 leading-relaxed text-[var(--lux-muted)]">
                    <span aria-hidden className="mt-2.5 h-px w-4 shrink-0 bg-[var(--lux-gold)]" />
                    {it}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[var(--lux-ivory)] px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-5xl">
          <p className="lux-eyebrow">Nevada rules at a glance</p>
          <h2 className="lux-h2 mt-3">Nevada landlord rules for luxury home owners</h2>
          <div className="mt-8 grid gap-x-12 gap-y-8 md:grid-cols-2">
            {OWNER_RULES.map((r) => (
              <div key={r.title}>
                <h3 className="lux-h3">{r.title}</h3>
                <p className="mt-2 leading-relaxed text-[var(--lux-muted)]">{r.body}</p>
                <p className="mt-1 text-xs uppercase tracking-[0.14em] text-[var(--lux-gold)]">{r.cite}</p>
              </div>
            ))}
          </div>
          <p className="mt-10 max-w-3xl text-[var(--lux-muted)]">
            <span className="font-medium text-[var(--lux-ink)]">Pace check:</span> {LEASING_PACE.detail}{' '}
            <span className="text-xs">
              ({LEASING_PACE.source}, {LEASING_PACE.asOf})
            </span>
          </p>
          <p className="mt-6 text-sm text-[var(--lux-muted)]">
            Fair Housing: Nevada law protects race, religious creed, color, national origin, disability, sexual
            orientation, gender identity or expression, ancestry, familial status and sex (NRS 118.100). Listings
            describe the home, never the ideal resident.
          </p>
          <Link href="/rent-vs-sell" className="mt-8 inline-block text-sm font-semibold uppercase tracking-[0.16em] underline decoration-[var(--lux-gold)] underline-offset-8">
            Compare renting with selling
          </Link>
        </div>
      </section>

      <ConsultSection />
    </div>
  )
}
