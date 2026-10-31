import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import ConsultSection from '@/components/luxury/ConsultSection'
import { JURISDICTION_STR_RULE, LUXURY_AREAS, getArea } from '@/lib/luxury-areas'
import { SITE_URL } from '@/lib/site-url'
import RealScoutRentals from '@/components/luxury/RealScoutRentals'
import HeroBackdrop from '@/components/luxury/HeroBackdrop'
import { AREA_HERO_PHOTOS } from '@/lib/hero-photos'
import { Byline } from '@/components/luxury/Headshot'

/** City label for headings, e.g. "Las Vegas (west)" -> "Las Vegas". */
function placeOf(a: { region: string }) {
  return a.region.replace(/\s*\(.*?\)\s*/g, '').trim()
}

export function generateStaticParams() {
  return LUXURY_AREAS.map((a) => ({ slug: a.slug }))
}

export const dynamicParams = false

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const area = getArea(slug)
  if (!area) return {}
  const title = `${area.name} Rentals: Rent Prices & Lease Rules for Owners`
  const rent = area.facts?.find((f) => /(median|asking) rent/i.test(f.label))
  const description = rent
    ? `${area.name} rentals: ${rent.label.split(',')[0].toLowerCase()} ${rent.value} (${rent.source}, ${rent.asOf}). HOA lease rules and a rent plan for ${placeOf(area)} owners.`
    : `Leasing a home in ${area.name}, ${placeOf(area)} ${area.zip}: HOA dues, lease minimums, short-term rental rules, and how to price rent from closed leases.`
  const url = `${SITE_URL}/areas/${area.slug}`
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: url },
    openGraph: { title, description, url, type: 'website', images: [{ url: `/images/og/${area.slug}.jpg`, width: 1200, height: 630 }] },
    twitter: { card: 'summary_large_image', title, description, images: [`/images/og/${area.slug}.jpg`] },
  }
}

export default async function AreaPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const area = getArea(slug)
  if (!area) notFound()

  const strRule = JURISDICTION_STR_RULE[area.jurisdiction]
  const faqs = [
    ...(area.faqs ?? []),
    {
      q: `Can I rent my home in ${area.name} short-term?`,
      a: strRule,
    },
  ]
  const reviewed = new Date(`${area.lastReviewed}T12:00:00-07:00`).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  })

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
          { '@type': 'ListItem', position: 2, name: 'Areas', item: `${SITE_URL}/areas` },
          { '@type': 'ListItem', position: 3, name: area.name, item: `${SITE_URL}/areas/${area.slug}` },
        ],
      },
      {
        '@type': 'FAQPage',
        mainEntity: faqs.map((f) => ({
          '@type': 'Question',
          name: f.q,
          acceptedAnswer: { '@type': 'Answer', text: f.a },
        })),
      },
      {
        '@type': 'Place',
        name: area.name,
        address: {
          '@type': 'PostalAddress',
          addressLocality: area.jurisdiction === 'henderson' ? 'Henderson' : 'Las Vegas',
          addressRegion: 'NV',
          postalCode: area.zip,
          addressCountry: 'US',
        },
      },
      {
        '@type': 'WebPage',
        '@id': `${SITE_URL}/areas/${area.slug}`,
        name: `${area.name} rentals: rent prices and lease rules for owners`,
        dateModified: area.lastReviewed,
        author: { '@id': `${SITE_URL}/#jan-duffy` },
        publisher: { '@id': `${SITE_URL}/#agent` },
        about: { '@type': 'Place', name: area.name },
      },
      ...(area.video
        ? [
            {
              '@type': 'VideoObject',
              name: area.video.title,
              description: area.video.description,
              thumbnailUrl: area.video.poster,
              contentUrl: area.video.src,
              uploadDate: area.video.uploadDate,
              duration: `PT${area.video.seconds}S`,
              publisher: { '@id': `${SITE_URL}/#agent` },
            },
          ]
        : []),
    ],
  }

  const siblingSlugs = area.siblings ?? []
  const others = [
    ...siblingSlugs.map((s) => LUXURY_AREAS.find((a) => a.slug === s)).filter((a): a is NonNullable<typeof a> => !!a),
    ...LUXURY_AREAS.filter((a) => a.slug !== area.slug && !siblingSlugs.includes(a.slug)),
  ].slice(0, 4)

  return (
    <div className="bg-[var(--lux-paper)] text-[var(--lux-ink)]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }}
      />

      <section className="lux-hero px-4 pb-20 pt-20 text-white sm:pb-24 sm:pt-24 relative overflow-hidden">
        <HeroBackdrop photo={AREA_HERO_PHOTOS[area.slug]} />
        <div className="relative z-10 mx-auto max-w-5xl">
          <nav aria-label="Breadcrumb" className="text-xs uppercase tracking-[0.16em] text-[#bdb4a3]">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/areas" className="hover:text-white">Areas</Link>
            <span className="mx-2">/</span>
            <span className="text-[var(--lux-gold-soft)]">{area.name}</span>
          </nav>
          <p className="lux-eyebrow mt-10 !text-[var(--lux-gold-soft)]">
            {area.region} · {area.zip}
          </p>
          <h1 className="lux-h1 mt-4">Leasing your home in {area.name}, {placeOf(area)}</h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-[#ddd5c6]">{area.intro}</p>
          <Link href="#consult" className="lux-btn lux-btn-gold mt-10">
            Get a closed-lease rent read
          </Link>
        </div>
      </section>

      {area.answer && (
        <section className="border-b border-[var(--lux-line)] bg-white px-4 py-12">
          <div className="mx-auto max-w-5xl">
            <p className="lux-eyebrow">The short answer</p>
            <h2 className="lux-h3 mt-3 !text-2xl">How much does a home in {area.name} rent for?</h2>
            <p className="mt-4 max-w-3xl font-[family-name:var(--font-cormorant)] text-2xl leading-snug text-[var(--lux-ink)] sm:text-3xl">
              {area.answer}
            </p>
            <Byline>
              By Dr. Jan Duffy, REALTOR® · Last reviewed <time dateTime={area.lastReviewed}>{reviewed}</time>
            </Byline>
          </div>
        </section>
      )}

      <RealScoutRentals heading="Luxury homes for lease across Las Vegas and Henderson" />

      {area.facts && area.facts.length > 0 && (
        <section className="border-b border-[var(--lux-line)] px-4 py-14">
          <div className="mx-auto max-w-5xl">
            <p className="lux-eyebrow">{area.name} by the numbers</p>
            <h2 className="lux-h3 mt-3 !text-3xl">{area.name} rent prices, HOA dues and lease terms</h2>
            <div className="mt-8 overflow-x-auto">
              <table className="w-full min-w-[560px] border-collapse text-left text-sm">
                <caption className="sr-only">Leasing facts for {area.name}, with sources and dates</caption>
                <thead>
                  <tr className="border-b border-[var(--lux-ink)] text-xs uppercase tracking-[0.12em] text-[var(--lux-muted)]">
                    <th scope="col" className="py-3 pr-4 font-semibold">Measure</th>
                    <th scope="col" className="py-3 pr-4 font-semibold">Figure</th>
                    <th scope="col" className="py-3 font-semibold">Source and date</th>
                  </tr>
                </thead>
                <tbody>
                  {area.facts.map((f) => (
                    <tr key={f.label} className="border-b border-[var(--lux-line)] align-top">
                      <th scope="row" className="py-3 pr-4 font-normal text-[var(--lux-muted)]">{f.label}</th>
                      <td className="py-3 pr-4 font-medium text-[var(--lux-ink)]">{f.value}</td>
                      <td className="py-3 text-xs text-[var(--lux-muted)]">{f.source}, {f.asOf}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      )}

      {area.video && (
        <section className="border-b border-[var(--lux-line)] bg-[var(--lux-ivory)] px-4 py-14">
          <div className="mx-auto grid max-w-5xl items-center gap-10 md:grid-cols-[minmax(0,320px)_1fr]">
            <video
              className="w-full max-w-[320px] rounded-sm bg-black"
              controls
              muted
              playsInline
              preload="none"
              poster={area.video.poster}
              aria-label={area.video.title}
            >
              <source src={area.video.src} type="video/mp4" />
            </video>
            <div>
              <p className="lux-eyebrow">Watch · {area.video.seconds} seconds</p>
              <h2 className="lux-h3 mt-3 !text-3xl">{area.video.title}</h2>
              <p className="mt-4 leading-relaxed text-[var(--lux-muted)]">{area.video.description}</p>
            </div>
          </div>
        </section>
      )}

      {!area.facts && area.figure && (
        <section className="border-b border-[var(--lux-line)] px-4 py-12">
          <div className="mx-auto max-w-5xl">
            <p className="font-[family-name:var(--font-cormorant)] text-5xl">{area.figure.value}</p>
            <p className="mt-2 text-[var(--lux-muted)]">{area.figure.label}</p>
            <p className="mt-1 text-xs text-[var(--lux-muted)]">
              Source: {area.figure.source}, {area.figure.asOf}. Your home’s rent depends on its view, lot, finish and
              furnishing.
            </p>
          </div>
        </section>
      )}

      <section className="px-4 py-16 sm:py-20">
        <div className="mx-auto grid max-w-5xl gap-14 md:grid-cols-2">
          <div>
            <p className="lux-eyebrow">What the home offers</p>
            <h2 className="lux-h3 mt-3 !text-3xl">What renters pay more for in {area.name}</h2>
            <ul className="mt-6 space-y-3">
              {area.homeFacts.map((f) => (
                <li key={f} className="flex gap-3 leading-relaxed text-[var(--lux-muted)]">
                  <span aria-hidden className="mt-2.5 h-px w-4 shrink-0 bg-[var(--lux-gold)]" />
                  {f}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="lux-eyebrow">Leasing rules</p>
            <h2 className="lux-h3 mt-3 !text-3xl">{area.name} HOA and lease rules</h2>
            <ul className="mt-6 space-y-3">
              {area.leasingNotes.map((n) => (
                <li key={n} className="flex gap-3 leading-relaxed text-[var(--lux-muted)]">
                  <span aria-hidden className="mt-2.5 h-px w-4 shrink-0 bg-[var(--lux-gold)]" />
                  {n}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-[var(--lux-ivory)] px-4 py-10">
        <div className="mx-auto flex max-w-5xl flex-col gap-4 text-sm sm:flex-row sm:gap-10">
          <Link href="/lease-your-luxury-home" className="font-semibold uppercase tracking-[0.14em] underline decoration-[var(--lux-gold)] underline-offset-8">
            Nevada rules for every owner
          </Link>
          <Link href="/rent-vs-sell" className="font-semibold uppercase tracking-[0.14em] underline decoration-[var(--lux-gold)] underline-offset-8">
            Rent vs. sell calculator
          </Link>
          <Link href="/luxury-lease-report" className="font-semibold uppercase tracking-[0.14em] underline decoration-[var(--lux-gold)] underline-offset-8">
            Luxury Lease Report
          </Link>
        </div>
      </section>

      <section className="px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-5xl">
          <p className="lux-eyebrow">Questions owners ask</p>
          <h2 className="lux-h3 mt-3 !text-3xl">Leasing in {area.name}: owner FAQ</h2>
          <div className="mt-8 divide-y divide-[var(--lux-line)] border-y border-[var(--lux-line)]">
            {faqs.map((f) => (
              <details key={f.q} className="group py-5">
                <summary className="cursor-pointer list-none">
                  <h3 className="inline font-[family-name:var(--font-cormorant)] text-2xl font-normal">{f.q}</h3>
                </summary>
                <p className="mt-3 leading-relaxed text-[var(--lux-muted)]">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <ConsultSection
        heading={`Get a closed-lease rent read for your ${area.name} home`}
        lead={`Thirty minutes on your home: closed lease comps from ${area.name}, the HOA steps, and whether leasing or selling nets you more.`}
      />

      <section className="border-t border-[var(--lux-line)] px-4 py-14">
        <div className="mx-auto max-w-5xl">
          <p className="lux-eyebrow">Related communities</p>
          <h2 className="lux-h3 mt-3 !text-2xl">More high-rent luxury communities in Las Vegas and Henderson</h2>
          <div className="mt-6 flex flex-wrap gap-x-8 gap-y-3">
            {others.map((o) => (
              <Link key={o.slug} href={`/areas/${o.slug}`} className="font-[family-name:var(--font-cormorant)] text-xl underline decoration-[var(--lux-line)] underline-offset-8 hover:decoration-[var(--lux-gold)]">
                {o.name}
              </Link>
            ))}
            <Link href="/areas" className="font-[family-name:var(--font-cormorant)] text-xl text-[var(--lux-gold)]">
              All areas →
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
