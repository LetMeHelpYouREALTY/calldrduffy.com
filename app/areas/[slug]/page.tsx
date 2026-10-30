import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import ConsultSection from '@/components/luxury/ConsultSection'
import { JURISDICTION_STR_RULE, LUXURY_AREAS, getArea } from '@/lib/luxury-areas'
import { OWNER_RULES } from '@/lib/owner-site'
import { SITE_URL } from '@/lib/site-url'

export function generateStaticParams() {
  return LUXURY_AREAS.map((a) => ({ slug: a.slug }))
}

export const dynamicParams = false

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const area = getArea(slug)
  if (!area) return {}
  const title = `Lease Your Home in ${area.name} | ${area.region} ${area.zip} | Dr. Jan Duffy`
  const description = `Owner leasing guide for ${area.name} (${area.region}, ${area.zip}): rent benchmarks, HOA and short-stay rules, and a closed-lease pricing plan.`
  const url = `${SITE_URL}/areas/${area.slug}`
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: url },
    openGraph: { title, description, url, type: 'website', images: ['/og-image.png'] },
  }
}

export default async function AreaPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const area = getArea(slug)
  if (!area) notFound()

  const strRule = JURISDICTION_STR_RULE[area.jurisdiction]
  const faqs = [
    {
      q: `Can I rent my home in ${area.name} short-term?`,
      a: strRule,
    },
    {
      q: `How do I price a lease in ${area.name}?`,
      a: `Start from closed leases of comparable homes inside ${area.name}, then adjust for view, lot, furnishing and term. Asking rents run ahead of signed rents, so they are a ceiling, not a target.`,
    },
    {
      q: 'How much security deposit can I collect in Nevada?',
      a: 'Security deposit plus last month’s rent cannot exceed three months’ rent (NRS 118A.242). A tenant may offer a surety bond instead, which you may accept or decline.',
    },
  ]

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
    ],
  }

  const others = LUXURY_AREAS.filter((a) => a.slug !== area.slug).slice(0, 4)

  return (
    <div className="bg-[var(--lux-paper)] text-[var(--lux-ink)]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }}
      />

      <section className="lux-hero px-4 pb-20 pt-20 text-white sm:pb-24 sm:pt-24">
        <div className="mx-auto max-w-5xl">
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
          <h1 className="lux-h1 mt-4">Leasing your home in {area.name}</h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-[#ddd5c6]">{area.intro}</p>
          <Link href="#consult" className="lux-btn lux-btn-gold mt-10">
            Get a closed-lease rent read
          </Link>
        </div>
      </section>

      {area.figure && (
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
            <h2 className="lux-h3 mt-3 !text-3xl">Features renters pay for here</h2>
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
            <h2 className="lux-h3 mt-3 !text-3xl">What shapes your lease</h2>
            <ul className="mt-6 space-y-3">
              <li className="flex gap-3 leading-relaxed text-[var(--lux-muted)]">
                <span aria-hidden className="mt-2.5 h-px w-4 shrink-0 bg-[var(--lux-gold)]" />
                {strRule}
              </li>
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

      <section className="bg-[var(--lux-ivory)] px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-5xl">
          <p className="lux-eyebrow">Nevada rules for every owner</p>
          <div className="mt-8 grid gap-x-12 gap-y-8 md:grid-cols-2">
            {OWNER_RULES.filter((r) => !r.title.startsWith('Short stays')).map((r) => (
              <div key={r.title}>
                <p className="lux-h3">{r.title}</p>
                <p className="mt-2 leading-relaxed text-[var(--lux-muted)]">{r.body}</p>
                <p className="mt-1 text-xs uppercase tracking-[0.14em] text-[var(--lux-gold)]">{r.cite}</p>
              </div>
            ))}
            <div>
              <p className="lux-h3">Rent or sell?</p>
              <p className="mt-2 leading-relaxed text-[var(--lux-muted)]">
                Compare monthly cash flow with what a sale would net today.
              </p>
              <Link href="/rent-vs-sell" className="mt-3 inline-block text-sm font-semibold uppercase tracking-[0.14em] underline decoration-[var(--lux-gold)] underline-offset-8">
                Open the calculator
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-5xl">
          <p className="lux-eyebrow">Questions owners ask</p>
          <div className="mt-8 divide-y divide-[var(--lux-line)] border-y border-[var(--lux-line)]">
            {faqs.map((f) => (
              <details key={f.q} className="group py-5">
                <summary className="cursor-pointer list-none font-[family-name:var(--font-cormorant)] text-2xl">
                  {f.q}
                </summary>
                <p className="mt-3 leading-relaxed text-[var(--lux-muted)]">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <ConsultSection
        heading={`Talk through your ${area.name} lease`}
        lead={`Thirty minutes on your home: closed lease comps from ${area.name}, the HOA steps, and whether leasing or selling nets you more.`}
      />

      <section className="border-t border-[var(--lux-line)] px-4 py-14">
        <div className="mx-auto max-w-5xl">
          <p className="lux-eyebrow">Nearby high-rent communities</p>
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
