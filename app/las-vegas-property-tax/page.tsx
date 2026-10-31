import type { Metadata } from 'next'
import Link from 'next/link'
import ConsultSection from '@/components/luxury/ConsultSection'
import HeroBackdrop from '@/components/luxury/HeroBackdrop'
import RealScoutRentals from '@/components/luxury/RealScoutRentals'
import { PAGE_HERO_PHOTOS } from '@/lib/hero-photos'
import { SITE_URL } from '@/lib/site-url'

/**
 * Owner-focused property tax guide. Every figure is from the Clark County
 * Assessor's tax abatement pages and Nevada Tax Commission regulation R098-26,
 * checked 2026-10-30. Refresh each July when the new HUD rent limits post.
 */
const CHECKED = '2026-10-30'
const SOURCE = 'Clark County Assessor, tax abatement, checked October 30, 2026'

const HUD_LIMITS = [
  { beds: '3 bedrooms', max: '$2,139' },
  { beds: '4 bedrooms', max: '$2,456' },
  { beds: '5 bedrooms', max: '$2,824' },
]

const FAQS = [
  {
    q: 'Does renting out my Las Vegas home raise my property tax?',
    a: 'Usually, yes. A home you live in as your primary residence gets a 3% cap on how much its tax bill can rise each year. A home you lease out gets a cap of up to 8%, unless the rent is at or below the county’s HUD limit, which no luxury rental meets.',
  },
  {
    q: 'What is the 2026–27 rent limit for keeping the 3% cap on a rental?',
    a: 'For the 2026–27 tax year, Clark County lists $2,139 a month for three bedrooms, $2,456 for four and $2,824 for five. A luxury lease at $3,500 or more is above every limit, so the home moves to the up-to-8% cap.',
  },
  {
    q: 'Does the cap limit my home’s value or my tax bill?',
    a: 'Your tax bill. The cap limits how much the bill can rise over last year’s bill. It does not limit the assessed value.',
  },
  {
    q: 'Can I get the 3% cap back if I move back in?',
    a: 'Yes. Once the home is your primary residence again, claim it with the Clark County Assessor. For the 2026–27 tax year, the county says owners have until June 30, 2027, to correct their cap.',
  },
  {
    q: 'Can moving my house into a trust change my property tax cap?',
    a: 'It can. Clark County says any recorded ownership document removes the owner-occupied 3% cap until you return the assessor’s new postcard. A refinance that records no ownership document does not affect it.',
  },
  {
    q: 'Can I keep the 3% cap on two homes?',
    a: 'No. Only one property in Nevada can be your primary residence for the 3% cap.',
  },
]

export const metadata: Metadata = {
  title: { absolute: 'Las Vegas Property Tax When You Rent Out Your Home: 3% vs 8%' },
  description:
    'Renting out your Las Vegas home can move its property tax cap from 3% to up to 8% a year. The 2026–27 Clark County rent limits, what else resets the cap, and how to get 3% back.',
  alternates: { canonical: `${SITE_URL}/las-vegas-property-tax` },
}

export default function LasVegasPropertyTaxPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        headline: 'Las Vegas property tax when you rent out your home: the 3% and 8% caps',
        datePublished: '2024-07-20',
        dateModified: CHECKED,
        author: { '@id': `${SITE_URL}/#jan-duffy` },
        publisher: { '@id': `${SITE_URL}/#agent` },
        mainEntityOfPage: `${SITE_URL}/las-vegas-property-tax`,
        about: ['Nevada property tax abatement', 'NRS 361.4722', 'Clark County property tax'],
      },
      {
        '@type': 'FAQPage',
        mainEntity: FAQS.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
          { '@type': 'ListItem', position: 2, name: 'Property tax', item: `${SITE_URL}/las-vegas-property-tax` },
        ],
      },
    ],
  }

  return (
    <div className="bg-[var(--lux-paper)] text-[var(--lux-ink)]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }} />

      <section className="lux-hero relative overflow-hidden px-4 pb-20 pt-20 text-white sm:pb-24 sm:pt-24">
        <HeroBackdrop photo={PAGE_HERO_PHOTOS.propertyTax} />
        <div className="relative z-10 mx-auto max-w-5xl">
          <p className="lux-eyebrow !text-[var(--lux-gold-soft)]">Property tax · Clark County</p>
          <h1 className="lux-h1 mt-4">Las Vegas property tax when you rent out your home</h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-[#ddd5c6]">
            Leasing your home can change how fast its tax bill is allowed to grow. Here is how Nevada’s 3% and 8% caps
            work for an owner who leases, using the county’s own 2026–27 figures.
          </p>
        </div>
      </section>

      <section className="border-b border-[var(--lux-line)] bg-white px-4 py-12">
        <div className="mx-auto max-w-5xl">
          <p className="lux-eyebrow">The short answer</p>
          <h2 className="lux-h3 mt-3 !text-2xl">Does renting out my home raise my property tax?</h2>
          <p className="mt-4 max-w-3xl font-[family-name:var(--font-cormorant)] text-2xl leading-snug sm:text-3xl">
            Usually, yes. Your primary residence gets a 3% cap on yearly tax-bill increases. A leased luxury home moves to
            a cap of up to 8%, because its rent is above the county’s limit for keeping 3%.
          </p>
          <p className="mt-4 text-xs text-[var(--lux-muted)]">
            By Dr. Jan Duffy, REALTOR® · Last reviewed <time dateTime={CHECKED}>October 30, 2026</time> · {SOURCE}
          </p>
        </div>
      </section>

      <RealScoutRentals />

      <section className="px-4 py-16 sm:py-20">
        <div className="mx-auto grid max-w-5xl gap-14 md:grid-cols-2">
          <div>
            <p className="lux-eyebrow">How it works</p>
            <h2 className="lux-h3 mt-3 !text-3xl">How the Nevada property tax cap works</h2>
            <ul className="mt-6 space-y-3 leading-relaxed text-[var(--lux-muted)]">
              <li>A single-family home that is your primary residence gets a 3% cap: the bill can rise at most 3% over last year’s.</li>
              <li>Homes that are not owner-occupied get a cap of up to 8%. Land and commercial property use the same up-to-8% cap.</li>
              <li>The cap limits the tax bill, not the assessed value.</li>
              <li>Only one home in Nevada can be your primary residence.</li>
            </ul>
            <p className="mt-4 text-xs uppercase tracking-[0.14em] text-[var(--lux-gold)]">NRS 361.4722–361.4724</p>
          </div>
          <div>
            <p className="lux-eyebrow">For landlords</p>
            <h2 className="lux-h3 mt-3 !text-3xl">Why a luxury rental lands on the 8% cap</h2>
            <p className="mt-6 leading-relaxed text-[var(--lux-muted)]">
              A rental keeps the 3% cap only if the rent is at or below the HUD limit the county publishes each year.
              These are the 2026–27 Clark County limits:
            </p>
            <table className="mt-5 w-full border-collapse text-left text-sm">
              <caption className="sr-only">Clark County 2026–27 maximum rents for the 3% rental cap</caption>
              <thead>
                <tr className="border-b border-[var(--lux-ink)] text-xs uppercase tracking-[0.12em] text-[var(--lux-muted)]">
                  <th scope="col" className="py-2 pr-4 font-semibold">Home size</th>
                  <th scope="col" className="py-2 font-semibold">Maximum monthly rent</th>
                </tr>
              </thead>
              <tbody>
                {HUD_LIMITS.map((r) => (
                  <tr key={r.beds} className="border-b border-[var(--lux-line)]">
                    <th scope="row" className="py-2 pr-4 font-normal text-[var(--lux-muted)]">{r.beds}</th>
                    <td className="py-2 font-medium">{r.max}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="mt-3 text-sm text-[var(--lux-muted)]">
              Luxury leases in the{' '}
              <Link href="/luxury-lease-report" className="underline decoration-[var(--lux-gold)] underline-offset-4">Luxury Lease Report</Link>{' '}
              start well above $3,500 a month, so plan on the up-to-8% cap.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[var(--lux-ivory)] px-4 py-16 sm:py-20">
        <div className="mx-auto grid max-w-5xl gap-14 md:grid-cols-2">
          <div>
            <p className="lux-eyebrow">Watch for this</p>
            <h2 className="lux-h3 mt-3 !text-3xl">What else resets your 3% cap</h2>
            <ul className="mt-6 space-y-3 leading-relaxed text-[var(--lux-muted)]">
              <li>Recording any ownership document, such as a deed into a trust, removes the 3% cap until you return the assessor’s new postcard.</li>
              <li>A refinance that records no ownership document leaves the cap alone.</li>
              <li>New construction gets no cap in its first fiscal year, then 3% or up to 8% after that.</li>
            </ul>
          </div>
          <div>
            <p className="lux-eyebrow">Moving back in</p>
            <h2 className="lux-h3 mt-3 !text-3xl">How to get the 3% cap back</h2>
            <p className="mt-6 leading-relaxed text-[var(--lux-muted)]">
              When the home is your primary residence again, claim it with the Clark County Assessor by signing the tax
              cap postcard or notice, by mail, online or in person. For the 2026–27 tax year, the county says owners have
              until June 30, 2027, to correct the cap.
            </p>
            <p className="mt-4 leading-relaxed text-[var(--lux-muted)]">
              Weighing a lease against a sale? The{' '}
              <Link href="/rent-vs-sell" className="underline decoration-[var(--lux-gold)] underline-offset-4">rent vs. sell calculator</Link>{' '}
              shows where the higher tax lands in your monthly numbers.
            </p>
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-5xl">
          <p className="lux-eyebrow">Questions owners ask</p>
          <h2 className="lux-h3 mt-3 !text-3xl">Las Vegas property tax for landlords: FAQ</h2>
          <div className="mt-8 divide-y divide-[var(--lux-line)] border-y border-[var(--lux-line)]">
            {FAQS.map((f) => (
              <details key={f.q} className="py-5">
                <summary className="cursor-pointer list-none">
                  <h3 className="inline font-[family-name:var(--font-cormorant)] text-2xl font-normal">{f.q}</h3>
                </summary>
                <p className="mt-3 leading-relaxed text-[var(--lux-muted)]">{f.a}</p>
              </details>
            ))}
          </div>
          <p className="mt-6 text-xs text-[var(--lux-muted)]">
            General information, not tax advice. Confirm your parcel’s cap with the Clark County Assessor or your tax
            adviser.
          </p>
        </div>
      </section>

      <ConsultSection
        heading="Check the tax cost before you lease"
        lead="Thirty minutes on your home: what it should rent for, what the cap change adds to your tax bill, and whether leasing or selling nets you more."
      />
    </div>
  )
}
