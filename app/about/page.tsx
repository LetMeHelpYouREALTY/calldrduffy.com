import type { Metadata } from 'next'
import Link from 'next/link'
import ConsultSection from '@/components/luxury/ConsultSection'
import { SITE_URL } from '@/lib/site-url'
import { LUXURY_AREAS } from '@/lib/luxury-areas'
import RealScoutRentals from '@/components/luxury/RealScoutRentals'
import HeroBackdrop from '@/components/luxury/HeroBackdrop'
import { PAGE_HERO_PHOTOS } from '@/lib/hero-photos'

export const metadata: Metadata = {
  title: { absolute: 'Dr. Jan Duffy, Las Vegas Luxury Leasing REALTOR® | BHHS Nevada' },
  description:
    'Dr. Jan Duffy, REALTOR® with Berkshire Hathaway HomeServices Nevada Properties: 35 years in Las Vegas real estate, $127M+ in career sales, owner-side leasing and sales strategy.',
  alternates: { canonical: `${SITE_URL}/about` },
}

const FACTS = [
  { value: '35', label: 'years in Las Vegas real estate' },
  { value: '$127M+', label: 'in career sales' },
  { value: '500+', label: 'clients served' },
]


const STEPS = [
  { title: 'A rent read from closed leases', body: 'I pull signed leases of comparable homes inside your community, then adjust for view, lot, finish, furnishing and term. Asking rents set the ceiling, not the target.' },
  { title: 'The HOA and tax checks', body: 'Minimum lease terms, lease registration, gate access, and whether leasing changes your property-tax cap or your tax-free gain window. All of it before a listing goes live.' },
  { title: 'Presentation at sale quality', body: 'Professional photography, a floor plan and a 3D tour, with showings arranged through the gate. A luxury lease is marketed the way a luxury sale is.' },
  { title: 'One written screening standard', body: 'Income, credit and rental history criteria written down and applied to every applicant the same way, with deposits kept within Nevada’s three-month cap.' },
]

export default function AboutPage() {
  return (
    <div className="bg-[var(--lux-paper)] text-[var(--lux-ink)]">
      <section className="lux-hero px-4 pb-20 pt-20 text-white sm:pb-24 sm:pt-24 relative overflow-hidden">
        <HeroBackdrop photo={PAGE_HERO_PHOTOS.about} />
        <div className="relative z-10 mx-auto max-w-5xl">
          <p className="lux-eyebrow !text-[var(--lux-gold-soft)]">About</p>
          <h1 className="lux-h1 mt-4">Dr. Jan Duffy, luxury leasing and sales REALTOR® in Las Vegas</h1>
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


      <section className="bg-[var(--lux-ivory)] px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-5xl">
          <p className="lux-eyebrow">How the work goes</p>
          <h2 className="lux-h2 mt-3">How I lease luxury homes in Las Vegas and Henderson</h2>
          <ol className="mt-10 grid gap-10 md:grid-cols-2">
            {STEPS.map((st, i) => (
              <li key={st.title} className="border-t border-[var(--lux-gold)] pt-5">
                <p className="text-sm text-[var(--lux-gold)]">{String(i + 1).padStart(2, '0')}</p>
                <h3 className="lux-h3 mt-1">{st.title}</h3>
                <p className="mt-3 leading-relaxed text-[var(--lux-muted)]">{st.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="px-4 py-16">
        <div className="mx-auto grid max-w-5xl gap-12 md:grid-cols-2">
          <div>
            <p className="lux-eyebrow">Where I work</p>
            <h2 className="lux-h3 mt-3 !text-2xl">Luxury communities I lease and sell in</h2>
            <ul className="mt-5 space-y-2">
              {LUXURY_AREAS.map((a) => (
                <li key={a.slug}>
                  <Link href={`/areas/${a.slug}`} className="font-[family-name:var(--font-cormorant)] text-xl underline decoration-[var(--lux-line)] underline-offset-8 hover:decoration-[var(--lux-gold)]">
                    {a.name}
                  </Link>
                  <span className="ml-2 text-sm text-[var(--lux-muted)]">{a.region}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="lux-eyebrow">Credentials</p>
            <h2 className="lux-h3 mt-3 !text-2xl">Nevada license and brokerage</h2>
            <dl className="mt-5 space-y-4 text-[var(--lux-muted)]">
              <div><dt className="text-xs uppercase tracking-[0.14em]">License</dt><dd className="text-[var(--lux-ink)]">Nevada S.0197614.LLC</dd></div>
              <div><dt className="text-xs uppercase tracking-[0.14em]">Brokerage</dt><dd className="text-[var(--lux-ink)]">Berkshire Hathaway HomeServices Nevada Properties</dd></div>
              <div><dt className="text-xs uppercase tracking-[0.14em]">Office</dt><dd className="text-[var(--lux-ink)]">145 E Harmon Ave, Unit E, Las Vegas, NV 89109</dd></div>
              
              <div><dt className="text-xs uppercase tracking-[0.14em]">Brokerage profile</dt><dd><a className="text-[var(--lux-ink)] underline decoration-[var(--lux-gold)] underline-offset-4" href="https://janetduffy.bhhsnv.com" rel="noopener">janetduffy.bhhsnv.com</a></dd></div>
            </dl>
          </div>
        </div>
      </section>

      <ConsultSection />
    </div>
  )
}
