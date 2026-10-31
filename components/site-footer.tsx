import Link from 'next/link'
import { LUXURY_AREAS } from '@/lib/luxury-areas'

export default function SiteFooter() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[var(--lux-ink)] text-[#cfc8bb]">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-1">
            <p className="font-[family-name:var(--font-cormorant)] text-2xl text-white">
              Dr. Jan Duffy
            </p>
            <p className="mt-2 text-sm leading-relaxed">
              Leasing and sales strategy for owners of luxury homes in Las Vegas and Henderson.
            </p>
          </div>

          <div className="md:col-span-2">
            <p className="lux-eyebrow !text-[var(--lux-gold-soft)]">Areas</p>
            <ul className="mt-4 grid grid-cols-2 gap-x-6 gap-y-2 text-sm">
              {LUXURY_AREAS.map((a) => (
                <li key={a.slug}>
                  <Link href={`/areas/${a.slug}`} className="transition-colors hover:text-white">
                    {a.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="lux-eyebrow !text-[var(--lux-gold-soft)]">Owners</p>
            <ul className="mt-4 space-y-2 text-sm">
              <li><Link href="/lease-your-luxury-home" className="hover:text-white">Leasing plan</Link></li>
              <li><Link href="/rent-vs-sell" className="hover:text-white">Rent vs. sell</Link></li>
              <li><Link href="/luxury-lease-report" className="hover:text-white">Luxury Lease Report</Link></li>
              <li><Link href="/las-vegas-property-tax" className="hover:text-white">Property tax</Link></li>
              <li><Link href="/about" className="hover:text-white">About Dr. Jan</Link></li>
              <li><Link href="/#consult" className="hover:text-white">Book a consultation</Link></li>
              <li className="pt-2">
                <a href="mailto:HomeSales@CallDrDuffy.com" className="hover:text-white">HomeSales@CallDrDuffy.com</a>
              </li>
              <li className="pt-2 text-xs leading-relaxed">
                8850 W Sunset Rd, Suite 200
                <br />
                Las Vegas, NV 89148
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 border-t border-white/10 pt-8 text-xs leading-relaxed text-[#9c968b]">
          <p>
            © {currentYear} Dr. Jan Duffy, REALTOR® · Nevada License S.0197614.LLC · Berkshire Hathaway HomeServices
            Nevada Properties · Equal Housing Opportunity
          </p>
          <p className="mt-2">
            Market figures are cited with their source and date. Rules summarized here are general information, not
            legal or tax advice. Confirm your HOA documents and tax status before leasing.
          </p>
        </div>
      </div>
    </footer>
  )
}
