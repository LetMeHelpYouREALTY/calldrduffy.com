'use client'

import { useState } from 'react'
import Link from 'next/link'

const LINKS = [
  { href: '/areas', label: 'Areas' },
  { href: '/lease-your-luxury-home', label: 'Leasing Plan' },
  { href: '/rent-vs-sell', label: 'Rent vs. Sell' },
  { href: '/luxury-lease-report', label: 'Lease Report' },
  { href: '/about', label: 'About' },
]

export default function SiteNavigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 border-b border-[var(--lux-line)] bg-[var(--lux-paper)]/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-baseline gap-3">
          <span className="font-[family-name:var(--font-cormorant)] text-2xl font-semibold tracking-wide text-[var(--lux-ink)]">
            Dr. Jan Duffy
          </span>
          <span className="hidden text-[0.7rem] uppercase tracking-[0.2em] text-[var(--lux-gold)] lg:inline">
            Luxury Home Leasing
          </span>
        </Link>

        <div className="hidden items-center gap-7 md:flex">
          {LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm text-[var(--lux-muted)] transition-colors hover:text-[var(--lux-ink)]"
            >
              {l.label}
            </Link>
          ))}
          <Link href="/#consult" className="lux-btn lux-btn-gold !px-5 !py-2.5">
            Book
          </Link>
        </div>

        <button
          type="button"
          className="p-2 text-[var(--lux-ink)] md:hidden"
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </div>

      {isMenuOpen && (
        <div className="border-t border-[var(--lux-line)] bg-[var(--lux-paper)] md:hidden">
          <div className="space-y-1 px-4 py-4">
            {LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="block py-2 text-[var(--lux-ink)]"
                onClick={() => setIsMenuOpen(false)}
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/#consult"
              className="lux-btn lux-btn-gold mt-2 w-full"
              onClick={() => setIsMenuOpen(false)}
            >
              Book a consultation
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
