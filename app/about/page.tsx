import type { Metadata } from 'next'
import Link from 'next/link'
import ConsultSection from '@/components/luxury/ConsultSection'
import { SITE_URL } from '@/lib/site-url'
import RealScoutRentals from '@/components/luxury/RealScoutRentals'

export const metadata: Metadata = {
  title: { absolute: 'About Dr. Jan Duffy | Luxury Home Leasing & Sales, Las Vegas' },
  description:
    'Dr. Jan Duffy, REALTOR® with Berkshire Hathaway HomeServices Nevada Properties: 35 years in Las Vegas real estate, $127M+ in career sales, owner-side leasing and sales strategy.',
  alternates: { canonical: `${SITE_URL}/about` },
}

const FACTS = [
  { value: '35', label: 'years in Las Vegas real estate' },
  { value: '$127M+', label: 'in career sales' },
  { value: '500+', label: 'clients served' },
]

export default function AboutPage() {
  return (
    <div className="bg-[var(--lux-paper)] text-[var(--lux-ink)]">
      <section className="lux-hero px-4 pb-20 pt-20 text-white sm:pb-24 sm:pt-24">
        <div className="mx-auto max-w-5xl">
          <p className="lux-eyebrow !text-[var(--lux-gold-soft)]">About</p>
          <h1 className="lux-h1 mt-4">Dr. Jan Duffy</h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-[#ddd5c6]">
            Owner-side leasing and sales strategy for luxury homes in Las Vegas and Henderson, with Berkshire Hathaway
            HomeServices Nevada Properties.
          </p>
        </div>
      </section>

      <RealScoutRentals />

      <section className="border-b border-[var(--lux-line)] px-4 py-14">
        <div className="mx-auto grid max-w-5xl gap-10 sm:grid-cols-3">
          {FACTS.map((f) => (
            <div key={f.label}>
              <p className="font-[family-name:var(--font-cormorant)] text-5xl">{f.value}</p>
              <p className="mt-2 text-sm text-[var(--lux-muted)]">{f.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-3xl space-y-6 text-lg leading-relaxed text-[var(--lux-muted)]">
          <p>
            Thirty-five years of Las Vegas sales history means every recommendation starts from what actually closed:
            the address, the price, the days on market. Not an online estimate.
          </p>
          <p>
            Owners of luxury homes face a choice most agents only see from one side. Lease the home and keep the asset,
            or sell it and take the equity. Each path has its own numbers, HOA rules and tax effects, and the right
            answer changes from one community to the next.
          </p>
          <p>
            The work here is owner-first: price from closed leases and closed sales, present the home at the level it
            deserves, and revisit the decision at every renewal.
          </p>
        </div>
        <div className="mx-auto mt-12 max-w-3xl border-t border-[var(--lux-line)] pt-8 text-sm text-[var(--lux-muted)]">
          <p>Dr. Jan Duffy, REALTOR® · Nevada License S.0197614.LLC</p>
          <p className="mt-1">Berkshire Hathaway HomeServices Nevada Properties</p>
          <div className="mt-6 flex flex-wrap gap-6">
            <Link href="/areas" className="font-semibold uppercase tracking-[0.14em] text-[var(--lux-ink)] underline decoration-[var(--lux-gold)] underline-offset-8">
              Communities
            </Link>
            <Link href="/lease-your-luxury-home" className="font-semibold uppercase tracking-[0.14em] text-[var(--lux-ink)] underline decoration-[var(--lux-gold)] underline-offset-8">
              Leasing plan
            </Link>
          </div>
        </div>
      </section>

      <ConsultSection />
    </div>
  )
}
