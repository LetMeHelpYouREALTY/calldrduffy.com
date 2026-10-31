import type { Metadata } from 'next'
import Link from 'next/link'
import ConsultSection from '@/components/luxury/ConsultSection'
import { LUXURY_AREAS } from '@/lib/luxury-areas'
import { SITE_URL } from '@/lib/site-url'
import RealScoutRentals from '@/components/luxury/RealScoutRentals'
import HeroBackdrop from '@/components/luxury/HeroBackdrop'
import { PAGE_HERO_PHOTOS } from '@/lib/hero-photos'

export const metadata: Metadata = {
  title: { absolute: 'Highest-Rent Luxury Communities in Las Vegas | Owner Leasing Guide' },
  description:
    'Owner leasing guides for The Ridges, Red Rock Country Club, The Summit Club, Queensridge, MacDonald Highlands, Ascaya, Anthem Country Club, Lake Las Vegas, Southern Highlands and Spanish Trail.',
  alternates: { canonical: `${SITE_URL}/areas` },
}

const GROUPS = ['Summerlin', 'Las Vegas (west)', 'Henderson', 'Southwest Las Vegas']

export default function AreasPage() {
  return (
    <div className="bg-[var(--lux-paper)] text-[var(--lux-ink)]">
      <section className="lux-hero px-4 pb-20 pt-20 text-white sm:pb-24 sm:pt-24 relative overflow-hidden">
        <HeroBackdrop photo={PAGE_HERO_PHOTOS.areas} />
        <div className="relative z-10 mx-auto max-w-5xl">
          <p className="lux-eyebrow !text-[var(--lux-gold-soft)]">Areas</p>
          <h1 className="lux-h1 mt-4">Where Las Vegas luxury rents run highest</h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-[#ddd5c6]">
            Ten guard-gated and club communities across Summerlin, Henderson and the southwest valley. Each page covers
            the home features renters pay for, the lease rules that apply, and a rent benchmark where one is published.
          </p>
        </div>
      </section>

      <RealScoutRentals />

      <section className="px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-5xl space-y-16">
          {GROUPS.map((g) => {
            const areas = LUXURY_AREAS.filter((a) => a.region === g)
            if (!areas.length) return null
            return (
              <div key={g}>
                <p className="lux-eyebrow">{g}</p>
                <div className="mt-6 divide-y divide-[var(--lux-line)] border-y border-[var(--lux-line)]">
                  {areas.map((a) => (
                    <Link
                      key={a.slug}
                      href={`/areas/${a.slug}`}
                      className="group flex flex-col gap-2 py-6 sm:flex-row sm:items-baseline sm:justify-between"
                    >
                      <span>
                        <span className="lux-h3 group-hover:underline group-hover:decoration-[var(--lux-gold)] group-hover:underline-offset-4">
                          {a.name}
                        </span>
                        <span className="ml-3 text-sm text-[var(--lux-muted)]">{a.zip}</span>
                        <span className="mt-1 block text-[var(--lux-muted)]">{a.tagline}</span>
                      </span>
                      {a.figure && (
                        <span className="shrink-0 text-sm text-[var(--lux-ink)]">
                          {a.figure.value}{' '}
                          <span className="text-[var(--lux-muted)]">({a.figure.asOf})</span>
                        </span>
                      )}
                    </Link>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </section>

      <ConsultSection />
    </div>
  )
}
