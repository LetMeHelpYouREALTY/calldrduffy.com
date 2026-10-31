import Link from 'next/link'
import { AGENT } from '@/lib/site-entity'

/** Gold house mark: roofline, walls and an arched door. Uses currentColor. */
export function LogoMark({ className = 'h-9 w-9' }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} fill="none" aria-hidden="true">
      <path d="M5 22 24 7l19 15" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M11 18v22h26V18" stroke="currentColor" strokeWidth="2.4" strokeLinejoin="round" />
      <path d="M20 40v-8.5a4 4 0 0 1 8 0V40" stroke="currentColor" strokeWidth="2.4" strokeLinejoin="round" />
      <path d="M4 40h40" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
    </svg>
  )
}

/**
 * Site logo built from the business name on the Google Business Profile:
 * "Las Vegas Rental Homes - Just Call Dr. Jan Duffy".
 * tone="light" for paper backgrounds, "dark" for the charcoal footer.
 */
export default function Logo({ tone = 'light' }: { tone?: 'light' | 'dark' }) {
  const ink = tone === 'dark' ? 'text-white' : 'text-[var(--lux-ink)]'
  const gold = tone === 'dark' ? 'text-[var(--lux-gold-soft)]' : 'text-[var(--lux-gold)]'
  return (
    <Link href="/" aria-label={`${AGENT.businessName}, home`} className="group flex items-center gap-3">
      <LogoMark className={`h-9 w-9 shrink-0 ${gold}`} />
      <span className="flex flex-col leading-none">
        <span className={`font-[family-name:var(--font-cormorant)] text-[1.35rem] font-semibold tracking-wide sm:text-2xl ${ink}`}>
          Las Vegas Rental Homes
        </span>
        <span className={`mt-1 text-[0.6rem] font-semibold uppercase tracking-[0.22em] ${gold}`}>
          Just Call Dr. Jan Duffy
        </span>
      </span>
    </Link>
  )
}
