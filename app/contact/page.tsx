import type { Metadata } from 'next'
import ConsultSection from '@/components/luxury/ConsultSection'
import { SITE_URL } from '@/lib/site-url'
import RealScoutRentals from '@/components/luxury/RealScoutRentals'
import HeroBackdrop from '@/components/luxury/HeroBackdrop'
import { PAGE_HERO_PHOTOS } from '@/lib/hero-photos'
import { AGENT, MAP_URL } from '@/lib/site-entity'

export const metadata: Metadata = {
  title: { absolute: 'Book a Las Vegas Luxury Leasing Consultation | Dr. Jan Duffy' },
  description: `Book a private, 30-minute owner consultation online: what your luxury Las Vegas or Henderson home should rent for, the HOA lease steps, and rent vs. sell.`,
  alternates: { canonical: `${SITE_URL}/contact` },
}

export default function ContactPage() {
  return (
    <div className="bg-[var(--lux-paper)] text-[var(--lux-ink)]">
      <section className="lux-hero px-4 pb-16 pt-20 text-white sm:pt-24 relative overflow-hidden">
        <HeroBackdrop photo={PAGE_HERO_PHOTOS.contact} />
        <div className="relative z-10 mx-auto max-w-5xl">
          <p className="lux-eyebrow !text-[var(--lux-gold-soft)]">Contact</p>
          <h1 className="lux-h1 mt-4">Book a luxury leasing consultation</h1>
          <p className="mt-6 max-w-2xl text-lg text-[#ddd5c6]">
            Pick a time below or email{' '}
            <a href="mailto:HomeSales@CallDrDuffy.com" className="text-white underline decoration-[var(--lux-gold)] underline-offset-4">
              HomeSales@CallDrDuffy.com
            </a>
            .
          </p>
        </div>
      </section>

      <section className="border-b border-[var(--lux-line)] bg-white px-4 py-14">
        <div className="mx-auto grid max-w-5xl gap-10 md:grid-cols-2">
          <div>
            <p className="lux-eyebrow">The office</p>
            <h2 className="lux-h3 mt-3 !text-3xl">Meet at the office, by appointment</h2>
            <address className="mt-5 not-italic leading-relaxed text-[var(--lux-ink)]">
              {AGENT.businessName}
              <br />
              {AGENT.address.streetAddress}
              <br />
              {AGENT.address.addressLocality}, {AGENT.address.addressRegion} {AGENT.address.postalCode}
            </address>
            <p className="mt-4 text-[var(--lux-muted)]">
              Meetings are by appointment. Book a time below, then use the map link for directions.
            </p>
            <a href={MAP_URL} rel="noopener" className="mt-5 inline-block font-semibold uppercase tracking-[0.14em] text-sm underline decoration-[var(--lux-gold)] underline-offset-8">
              Directions on Google Maps
            </a>
          </div>
          <div className="text-[var(--lux-muted)]">
            <p className="lux-eyebrow">Brokerage</p>
            <p className="mt-4 leading-relaxed">
              {AGENT.name}, {AGENT.title} · Nevada license {AGENT.license}
              <br />
              {AGENT.brokerage}
            </p>
            <p className="mt-4">
              Email{' '}
              <a href={`mailto:${AGENT.email}`} className="text-[var(--lux-ink)] underline decoration-[var(--lux-gold)] underline-offset-4">
                {AGENT.email}
              </a>
            </p>
          </div>
        </div>
      </section>

      <RealScoutRentals />
      <ConsultSection heading="Pick a time for your owner consultation" />
    </div>
  )
}
