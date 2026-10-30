import type { Metadata } from 'next'
import ConsultSection from '@/components/luxury/ConsultSection'
import { SITE_PHONE, SITE_PHONE_HREF } from '@/lib/owner-site'
import { SITE_URL } from '@/lib/site-url'

export const metadata: Metadata = {
  title: { absolute: 'Contact Dr. Jan Duffy | Luxury Home Leasing, Las Vegas' },
  description: `Book a private owner consultation or call ${SITE_PHONE}. Leasing and sales strategy for luxury homes in Las Vegas and Henderson.`,
  alternates: { canonical: `${SITE_URL}/contact` },
}

export default function ContactPage() {
  return (
    <div className="bg-[var(--lux-paper)] text-[var(--lux-ink)]">
      <section className="lux-hero px-4 pb-16 pt-20 text-white sm:pt-24">
        <div className="mx-auto max-w-5xl">
          <p className="lux-eyebrow !text-[var(--lux-gold-soft)]">Contact</p>
          <h1 className="lux-h1 mt-4">Talk about your home</h1>
          <p className="mt-6 max-w-2xl text-lg text-[#ddd5c6]">
            Pick a time below, call{' '}
            <a href={SITE_PHONE_HREF} className="text-white underline decoration-[var(--lux-gold)] underline-offset-4">
              {SITE_PHONE}
            </a>
            , or email{' '}
            <a href="mailto:HomeSales@CallDrDuffy.com" className="text-white underline decoration-[var(--lux-gold)] underline-offset-4">
              HomeSales@CallDrDuffy.com
            </a>
            .
          </p>
        </div>
      </section>
      <ConsultSection heading="Pick a time" />
    </div>
  )
}
