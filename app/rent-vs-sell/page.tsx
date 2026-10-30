import type { Metadata } from 'next'
import ConsultSection from '@/components/luxury/ConsultSection'
import RentVsSellCalculator from '@/components/luxury/RentVsSellCalculator'
import { SITE_URL } from '@/lib/site-url'

export const metadata: Metadata = {
  title: { absolute: 'Rent or Sell Your Luxury Las Vegas Home? Calculator | Dr. Jan Duffy' },
  description:
    'Compare monthly cash flow from leasing your luxury Las Vegas home with your net proceeds from selling it today. Enter your own rent, HOA, tax, insurance and loan numbers.',
  alternates: { canonical: `${SITE_URL}/rent-vs-sell` },
}

export default function RentVsSellPage() {
  return (
    <div className="bg-[var(--lux-paper)] text-[var(--lux-ink)]">
      <section className="lux-hero px-4 pb-16 pt-20 text-white sm:pt-24">
        <div className="mx-auto max-w-6xl">
          <p className="lux-eyebrow !text-[var(--lux-gold-soft)]">Rent vs. sell</p>
          <h1 className="lux-h1 mt-4">Lease it, or sell it?</h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-[#ddd5c6]">
            Put your monthly cash flow from leasing next to what a sale nets you today. The sample rent is the July 2026
            median asking rent for Las Vegas leases at $5,000 a month and up.
          </p>
        </div>
      </section>

      <section className="px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <RentVsSellCalculator />
        </div>
      </section>

      <ConsultSection
        heading="Get your real numbers"
        lead="Thirty minutes with closed lease comps and closed sales from your community, so both columns use real figures."
      />
    </div>
  )
}
