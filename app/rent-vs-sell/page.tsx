import type { Metadata } from 'next'
import ConsultSection from '@/components/luxury/ConsultSection'
import RentVsSellCalculator from '@/components/luxury/RentVsSellCalculator'
import { SITE_URL } from '@/lib/site-url'
import RealScoutRentals from '@/components/luxury/RealScoutRentals'
import HeroBackdrop from '@/components/luxury/HeroBackdrop'
import { PAGE_HERO_PHOTOS } from '@/lib/hero-photos'

export const metadata: Metadata = {
  title: { absolute: 'Rent or Sell Your Luxury Las Vegas Home? Calculator | Dr. Jan Duffy' },
  description:
    'Compare monthly cash flow from leasing your luxury Las Vegas home with your net proceeds from selling it today. Enter your own rent, HOA, tax, insurance and loan numbers.',
  alternates: { canonical: `${SITE_URL}/rent-vs-sell` },
}


const READ_NOTES = [
  {
    title: 'The 2-of-5-year clock on your tax-free gain',
    body: 'If you owned and lived in the home for at least 2 of the 5 years before the sale, up to $250,000 of gain ($500,000 for a married couple filing jointly) can be excluded. Lease the home for more than about 3 years and that window can close.',
    cite: 'IRS Publication 523 · 26 U.S.C. § 121',
  },
  {
    title: 'Depreciation comes back at the sale',
    body: 'Once a home is a rental, depreciation is deducted over 27.5 years. When you sell, that depreciation is taxed as unrecaptured Section 1250 gain at up to 25% federally, even when the rest of the gain is excluded.',
    cite: 'IRS Publication 523 · IRS Topic 409',
  },
  {
    title: 'Your property-tax cap can change',
    body: 'A primary residence gets a 3% cap on annual tax increases. Leasing the home at market rent can move it to a cap of up to 8%.',
    cite: 'NRS 361.4722',
  },
  {
    title: 'Vacancy is a cost, not a rounding error',
    body: 'Clean, rent-ready, correctly priced homes were leasing in about 14 to 21 days in fall 2026. Each month empty costs a full month of rent plus HOA dues and utilities.',
    cite: 'Rice Real Estate & Property Management, Oct. 1, 2026',
  },
]

const RVS_FAQS = [
  {
    q: 'Is it better to rent or sell a luxury home in Las Vegas?',
    a: 'It depends on three numbers: your mortgage rate, your tax-free gain window and your net rent after HOA, taxes, insurance, vacancy and management. A low-rate mortgage favors keeping the home. A large gain that would lose its exclusion favors selling within the 2-of-5-year window.',
  },
  {
    q: 'What cap rate does a luxury rental earn?',
    a: 'Luxury homes usually earn lower yields than entry-level rentals, because rents rise more slowly than prices. Enter your own figures above: the calculator shows net operating income and the cap rate on today’s value.',
  },
  {
    q: 'Can I rent my home short-term instead?',
    a: 'Not in these communities. Summerlin bans short-term rentals, Henderson bars them in most HOA communities, and Clark County was issuing no new licenses as of September 2026. Plan on leases of 30 days or longer.',
  },
  {
    q: 'How much deposit can I collect?',
    a: 'In Nevada, the security deposit plus last month’s rent cannot exceed three months’ rent (NRS 118A.242). A tenant may offer a surety bond instead, which you may accept or decline.',
  },
]

export default function RentVsSellPage() {
  return (
    <div className="bg-[var(--lux-paper)] text-[var(--lux-ink)]">
      <section className="lux-hero px-4 pb-16 pt-20 text-white sm:pt-24 relative overflow-hidden">
        <HeroBackdrop photo={PAGE_HERO_PHOTOS.rentVsSell} />
        <div className="relative z-10 mx-auto max-w-6xl">
          <p className="lux-eyebrow !text-[var(--lux-gold-soft)]">Rent vs. sell</p>
          <h1 className="lux-h1 mt-4">Lease it, or sell it?</h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-[#ddd5c6]">
            Put your monthly cash flow from leasing next to what a sale nets you today. The sample rent is the July 2026
            median asking rent for Las Vegas leases at $5,000 a month and up.
          </p>
        </div>
      </section>

      <RealScoutRentals />

      <section className="px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <RentVsSellCalculator />
        </div>
      </section>


      <section className="border-t border-[var(--lux-line)] bg-white px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-5xl">
          <p className="lux-eyebrow">How to read your numbers</p>
          <h2 className="lux-h2 mt-3">Four things the calculator can’t see</h2>
          <div className="mt-10 grid gap-x-12 gap-y-10 md:grid-cols-2">
            {READ_NOTES.map((n) => (
              <div key={n.title}>
                <h3 className="lux-h3">{n.title}</h3>
                <p className="mt-3 leading-relaxed text-[var(--lux-muted)]">{n.body}</p>
                <p className="mt-2 text-xs uppercase tracking-[0.14em] text-[var(--lux-gold)]">{n.cite}</p>
              </div>
            ))}
          </div>
          <p className="mt-10 text-sm text-[var(--lux-muted)]">
            General information, not tax or legal advice. Run your own numbers with a CPA before deciding.
          </p>
        </div>
      </section>

      <section className="px-4 py-16">
        <div className="mx-auto max-w-5xl">
          <p className="lux-eyebrow">Questions owners ask</p>
          <div className="mt-8 divide-y divide-[var(--lux-line)] border-y border-[var(--lux-line)]">
            {RVS_FAQS.map((f) => (
              <details key={f.q} className="py-5">
                <summary className="cursor-pointer list-none font-[family-name:var(--font-cormorant)] text-2xl">{f.q}</summary>
                <p className="mt-3 leading-relaxed text-[var(--lux-muted)]">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <ConsultSection
        heading="Get your real numbers"
        lead="Thirty minutes with closed lease comps and closed sales from your community, so both columns use real figures."
      />
    </div>
  )
}
