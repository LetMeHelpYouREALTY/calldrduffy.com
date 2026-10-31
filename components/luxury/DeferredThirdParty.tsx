'use client'

import { useEffect } from 'react'

/**
 * Third-party scripts, loaded after the visitor's first scroll, tap, key or
 * mouse move, or 4 s after the page has loaded, whichever comes first. They
 * never compete with the hero image or first paint (PageSpeed, 2026-10-30).
 *
 * - Google Analytics 4 (G-4PR7PYZM0S): the dataLayer and gtag stub run at once,
 *   so the page view is queued immediately and sent when gtag.js arrives.
 * - Follow Up Boss widget tracker (WT-XQHVYQWW): its command queue starts at
 *   once; the tracker script arrives with the others. Keep it installed.
 *   Production only (fubPixel), so Vercel previews don't register with FUB.
 * - RealScout web components: only on pages that render a RealScout widget.
 */
const GA_ID = 'G-4PR7PYZM0S'
const REALSCOUT_SRC = 'https://em.realscout.com/widgets/realscout-web-components.umd.js'

type Queued = ((...args: unknown[]) => void) & { q?: unknown[][]; ds?: number }

declare global {
  interface Window {
    dataLayer: unknown[]
    gtag: (...args: unknown[]) => void
    widgetTracker: Queued
    WidgetTrackerObject: string
  }
}

function addScript(src: string, module = false) {
  if (document.querySelector(`script[src="${src}"]`)) return
  const s = document.createElement('script')
  s.src = src
  s.async = true
  if (module) s.type = 'module'
  document.head.appendChild(s)
}

export default function DeferredThirdParty({ fubPixel = false }: { fubPixel?: boolean }) {
  useEffect(() => {
    // Queue analytics and the tracker now; their scripts load later.
    window.dataLayer = window.dataLayer || []
    window.gtag = function gtag() {
      // eslint-disable-next-line prefer-rest-params
      window.dataLayer.push(arguments)
    }
    window.gtag('js', new Date())
    window.gtag('config', GA_ID, { page_path: window.location.pathname })

    if (fubPixel) {
      window.WidgetTrackerObject = 'widgetTracker'
      if (!window.widgetTracker) {
        const wt: Queued = (...args: unknown[]) => {
          ;(wt.q = wt.q || []).push(args)
        }
        wt.ds = Date.now()
        window.widgetTracker = wt
      }
      window.widgetTracker('create', 'WT-XQHVYQWW')
      window.widgetTracker('send', 'pageview')
    }

    let done = false
    const load = () => {
      if (done) return
      done = true
      addScript(`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`)
      if (fubPixel) addScript('https://widgetbe.com/agent')
      if (document.querySelector('realscout-office-listings, realscout-your-listings')) addScript(REALSCOUT_SRC, true)
    }

    const events = ['scroll', 'pointerdown', 'touchstart', 'keydown', 'mousemove'] as const
    let timer: ReturnType<typeof setTimeout> | undefined
    const trigger = () => {
      load()
      cleanup()
    }
    const startTimer = () => {
      timer = setTimeout(trigger, 4000)
    }
    const cleanup = () => {
      events.forEach((e) => window.removeEventListener(e, trigger))
      window.removeEventListener('load', startTimer)
      if (timer) clearTimeout(timer)
    }
    events.forEach((e) => window.addEventListener(e, trigger, { once: true, passive: true }))
    if (document.readyState === 'complete') startTimer()
    else window.addEventListener('load', startTimer, { once: true })
    return cleanup
  }, [fubPixel])

  return null
}
