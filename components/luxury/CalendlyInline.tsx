'use client'

import CalendlyInlineWidget from '@/components/calendly-inline-widget'
import { CALENDLY_OWNER_URL } from '@/lib/owner-site'

/**
 * Owner booking widget. No forms on this site: owners book directly.
 * Uses the shared widget, which re-initializes Calendly on every mount so the
 * scheduler also renders after client-side navigation between pages.
 */
export default function CalendlyInline({ url = CALENDLY_OWNER_URL }: { url?: string }) {
  return <CalendlyInlineWidget url={url} height="700px" />
}
