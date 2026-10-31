'use client'

import { useEffect, useRef } from 'react'

export const CALENDLY_URL = 'https://calendly.com/drjanduffy'

const CALENDLY_WIDGET_CSS = 'https://assets.calendly.com/assets/external/widget.css'
const CALENDLY_WIDGET_JS = 'https://assets.calendly.com/assets/external/widget.js'

type CalendlyApi = {
  initInlineWidget: (options: { url: string; parentElement: HTMLElement }) => void
}

declare global {
  interface Window {
    Calendly?: CalendlyApi
  }
}

/** Inject Calendly CSS and JS once per page, regardless of how many widgets mount. */
function ensureCalendlyAssets(onReady: () => void): void {
  if (typeof document === 'undefined') return

  if (!document.querySelector('link[data-calendly-css]')) {
    const link = document.createElement('link')
    link.rel = 'stylesheet'
    link.href = CALENDLY_WIDGET_CSS
    link.setAttribute('data-calendly-css', 'true')
    document.head.appendChild(link)
  }

  if (window.Calendly) {
    onReady()
    return
  }

  const existing = document.querySelector<HTMLScriptElement>('script[data-calendly-js]')
  if (existing) {
    existing.addEventListener('load', onReady, { once: true })
    return
  }

  const script = document.createElement('script')
  script.src = CALENDLY_WIDGET_JS
  script.async = true
  script.setAttribute('data-calendly-js', 'true')
  script.addEventListener('load', onReady, { once: true })
  document.body.appendChild(script)
}

type CalendlyInlineWidgetProps = {
  url?: string
  height?: string
  className?: string
}

/**
 * Calendly inline scheduler. Replaces every lead/contact form on this site:
 * visitors book directly on Dr. Jan Duffy's calendar and nothing is posted
 * to a form handler or CRM from the site itself.
 */
export default function CalendlyInlineWidget({
  url = CALENDLY_URL,
  height = '700px',
  className = '',
}: CalendlyInlineWidgetProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const parent = containerRef.current
    if (!parent) return

    let cancelled = false
    const init = () =>
      ensureCalendlyAssets(() => {
        if (cancelled || !window.Calendly) return
        parent.innerHTML = ''
        window.Calendly.initInlineWidget({ url, parentElement: parent })
      })

    // Load Calendly only when the scheduler is about to scroll into view,
    // so its scripts do not slow the first paint of the page.
    let observer: IntersectionObserver | undefined
    if ('IntersectionObserver' in window) {
      observer = new IntersectionObserver(
        (entries) => {
          if (entries.some((e) => e.isIntersecting)) {
            observer?.disconnect()
            init()
          }
        },
        { rootMargin: '600px 0px' },
      )
      observer.observe(parent)
    } else {
      init()
    }

    return () => {
      cancelled = true
      observer?.disconnect()
    }
  }, [url])

  return (
    <div
      ref={containerRef}
      className={`calendly-inline-widget w-full min-w-[320px] ${className}`.trim()}
      style={{ height }}
      data-url={url}
    >
      <noscript>
        <a href={url} target="_blank" rel="noopener noreferrer">
          Schedule a time with Dr. Jan Duffy on Calendly
        </a>
      </noscript>
    </div>
  )
}
