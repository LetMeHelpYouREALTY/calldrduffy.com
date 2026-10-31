import CalendlyInline from './CalendlyInline'

export default function ConsultSection({
  heading = 'Book a private owner consultation',
  lead = 'Thirty minutes on your home, your timing, and what it should lease or sell for. Closed lease comps, not online estimates.',
}: {
  heading?: string
  lead?: string
}) {
  return (
    <section id="consult" className="scroll-mt-20 bg-[var(--lux-ivory)] px-4 py-20 sm:py-24">
      <div className="mx-auto max-w-5xl">
        <p className="lux-eyebrow">Owner consultation</p>
        <h2 className="lux-h2 mt-3">{heading}</h2>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-[var(--lux-muted)]">{lead}</p>
        <div className="mt-10 overflow-hidden rounded-sm border border-[var(--lux-line)] bg-white">
          <CalendlyInline />
        </div>
      </div>
    </section>
  )
}
