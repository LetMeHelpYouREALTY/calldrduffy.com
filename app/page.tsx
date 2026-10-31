import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import ConsultSection from '@/components/luxury/ConsultSection'
import { LUXURY_AREAS, LUXURY_LEASE_BENCHMARKS } from '@/lib/luxury-areas'
import { LEASING_PACE, OWNER_RULES } from '@/lib/owner-site'
import RealScoutRentals from '@/components/luxury/RealScoutRentals'
import RealScoutFeatured from '@/components/luxury/RealScoutFeatured'

export const metadata: Metadata = {
  title: { absolute: 'Lease or Sell Your Luxury Las Vegas Home | Dr. Jan Duffy' },
  description:
    'Owner-side leasing strategy for luxury homes in The Ridges, MacDonald Highlands, Ascaya, Southern Highlands and Las Vegas’s other top-rent areas. Closed lease comps, not estimates.',
}

const STEPS = [
  {
    n: '01',
    title: 'Price from closed leases',
    body: 'Asking rents tell you what owners hope for. Closed leases in your community tell you what the home will actually rent for.',
  },
  {
    n: '02',
    title: 'Present it like a sale',
    body: 'Listing-grade photography, a floor plan and a 3D tour. A home at this level should never be marketed with phone photos.',
  },
  {
    n: '03',
    title: 'Screen by written standards',
    body: 'One written set of criteria for income, credit and rental history, applied to every applicant the same way.',
  },
  {
    n: '04',
    title: 'Decide at every renewal',
    body: 'Re-lease, adjust rent, or sell. You get the numbers for each path before the lease term ends.',
  },
]

export default function Homepage() {
  return (
    <div className="bg-[var(--lux-paper)] text-[var(--lux-ink)]">
      {/* Hero */}
      <section className="lux-hero relative overflow-hidden px-4 pb-24 pt-24 text-white sm:pb-32 sm:pt-32">
        <Image
          src="/images/hero-red-rock-canyon.jpg"
          alt="Red Rock Canyon at sunset, on the western edge of Summerlin"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_60%]"
        />
        <div aria-hidden className="absolute inset-0 bg-gradient-to-r from-[#141311]/90 via-[#1c1b19]/70 to-[#1c1b19]/25" />
        <p className="absolute bottom-3 right-4 z-10 text-[10px] text-white/60">Red Rock Canyon · Photo: Cat Parker / Unsplash</p>
        <div className="relative z-10 mx-auto max-w-6xl">
          <p className="lux-eyebrow !text-[var(--lux-gold-soft)]">Luxury home leasing · Las Vegas &amp; Henderson</p>
          <h1 className="lux-h1 mt-6 max-w-4xl">Your luxury home, leased right — or sold right.</h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#ddd5c6]">
            Owner-side strategy for homes in The Ridges, MacDonald Highlands, Ascaya, Southern Highlands and the
            valley’s other top-rent addresses. One clear plan, built on closed leases.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link href="#consult" className="lux-btn lux-btn-gold">
              Book a private consultation
            </Link>
            <Link href="/rent-vs-sell" className="lux-btn lux-btn-ghost text-white">
              Run rent vs. sell
            </Link>
          </div>
        </div>
      </section>

      <RealScoutRentals />

      <RealScoutFeatured />

      {/* Benchmarks */}
      <section className="border-b border-[var(--lux-line)] px-4 py-14">
        <div className="mx-auto grid max-w-6xl gap-10 sm:grid-cols-3">
          {LUXURY_LEASE_BENCHMARKS.map((b) => (
            <div key={b.label}>
              <p className="font-[family-name:var(--font-cormorant)] text-5xl text-[var(--lux-ink)]">{b.value}</p>
              <p className="mt-2 text-sm leading-snug text-[var(--lux-muted)]">{b.label}</p>
            </div>
          ))}
        </div>
        <p className="mx-auto mt-8 max-w-6xl text-xs text-[var(--lux-muted)]">
          Source: {LUXURY_LEASE_BENCHMARKS[0].source}, {LUXURY_LEASE_BENCHMARKS[0].asOf}. Asking rents; closed rents vary
          by home.
        </p>
      </section>

      {/* Areas */}
      <section className="px-4 py-20 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <p className="lux-eyebrow">Where luxury rents run highest</p>
          <h2 className="lux-h2 mt-3 max-w-3xl">Ten communities, each with its own rules</h2>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-[var(--lux-muted)]">
            Gate access, HOA lease approval and short-stay bans change from one community to the next. Pick yours.
          </p>
          <div className="mt-12 grid gap-px overflow-hidden border border-[var(--lux-line)] bg-[var(--lux-line)] sm:grid-cols-2 lg:grid-cols-3">
            {LUXURY_AREAS.map((a) => (
              <Link
                key={a.slug}
                href={`/areas/${a.slug}`}
                className="group bg-[var(--lux-paper)] p-7 transition-colors hover:bg-white"
              >
                <p className="text-xs uppercase tracking-[0.18em] text-[var(--lux-gold)]">
                  {a.region} · {a.zip}
                </p>
                <p className="lux-h3 mt-2 group-hover:underline group-hover:decoration-[var(--lux-gold)] group-hover:underline-offset-4">
                  {a.name}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-[var(--lux-muted)]">{a.tagline}</p>
              </Link>
            ))}
            <Link href="#consult" className="flex flex-col justify-between bg-[var(--lux-ivory)] p-7 sm:col-span-2 lg:col-span-2">
              <p className="lux-h3">Your community isn’t listed?</p>
              <p className="mt-2 text-sm leading-relaxed text-[var(--lux-muted)]">
                The same plan works for any high-end home in the valley. Book a call for closed lease comps on your street.
              </p>
              <span className="mt-4 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--lux-gold)]">Book a consultation →</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Plan */}
      <section className="bg-[var(--lux-ivory)] px-4 py-20 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <p className="lux-eyebrow">The owner’s plan</p>
          <h2 className="lux-h2 mt-3">Four steps from vacant to leased</h2>
          <div className="mt-12 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
            {STEPS.map((s) => (
              <div key={s.n} className="border-t border-[var(--lux-gold)] pt-6">
                <p className="text-sm text-[var(--lux-gold)]">{s.n}</p>
                <p className="lux-h3 mt-2">{s.title}</p>
                <p className="mt-3 leading-relaxed text-[var(--lux-muted)]">{s.body}</p>
              </div>
            ))}
          </div>
          <p className="mt-12 max-w-3xl text-[var(--lux-muted)]">
            <span className="font-medium text-[var(--lux-ink)]">Pace check:</span> {LEASING_PACE.detail}{' '}
            <span className="text-xs">
              ({LEASING_PACE.source}, {LEASING_PACE.asOf})
            </span>
          </p>
          <Link href="/lease-your-luxury-home" className="mt-8 inline-block text-sm font-semibold uppercase tracking-[0.16em] text-[var(--lux-ink)] underline decoration-[var(--lux-gold)] underline-offset-8">
            See the full leasing plan
          </Link>
        </div>
      </section>

      {/* Rules */}
      <section className="px-4 py-20 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <p className="lux-eyebrow">Before you sign a lease</p>
          <h2 className="lux-h2 mt-3">Four Nevada rules owners learn the hard way</h2>
          <div className="mt-12 grid gap-x-12 gap-y-10 md:grid-cols-2">
            {OWNER_RULES.map((r) => (
              <div key={r.title}>
                <p className="lux-h3">{r.title}</p>
                <p className="mt-3 leading-relaxed text-[var(--lux-muted)]">{r.body}</p>
                <p className="mt-2 text-xs uppercase tracking-[0.14em] text-[var(--lux-gold)]">{r.cite}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Rent vs sell */}
      <section className="lux-hero px-4 py-20 text-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div className="max-w-2xl">
            <p className="lux-eyebrow !text-[var(--lux-gold-soft)]">Rent or sell?</p>
            <h2 className="lux-h2 mt-3 !text-white">Put both paths side by side</h2>
            <p className="mt-4 text-lg text-[#ddd5c6]">
              Enter your rent, carrying costs and loan. See monthly cash flow next to what you would net from a sale today.
            </p>
          </div>
          <Link href="/rent-vs-sell" className="lux-btn lux-btn-gold shrink-0">
            Open the calculator
          </Link>
        </div>
      </section>

      <ConsultSection />
    </div>
  )
}
