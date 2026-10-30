'use client'

import { useMemo, useState } from 'react'

type Field = {
  key: keyof Inputs
  label: string
  prefix?: string
  suffix?: string
  step?: number
  help?: string
}

type Inputs = {
  homeValue: number
  loanBalance: number
  monthlyPI: number
  monthlyRent: number
  monthlyHoa: number
  annualTax: number
  annualInsurance: number
  vacancyPct: number
  managementPct: number
  maintenancePct: number
  sellingCostPct: number
}

// Illustrative defaults only. The rent default is the July 2026 median asking
// rent for Las Vegas leases at $5,000+/mo (Las Vegas REALTORS MLS).
const DEFAULTS: Inputs = {
  homeValue: 1500000,
  loanBalance: 600000,
  monthlyPI: 2900,
  monthlyRent: 7500,
  monthlyHoa: 400,
  annualTax: 9000,
  annualInsurance: 4500,
  vacancyPct: 6,
  managementPct: 8,
  maintenancePct: 1,
  sellingCostPct: 6,
}

const RENT_FIELDS: Field[] = [
  { key: 'monthlyRent', label: 'Expected monthly rent', prefix: '$', step: 100 },
  { key: 'monthlyPI', label: 'Mortgage principal & interest / mo', prefix: '$', step: 50 },
  { key: 'monthlyHoa', label: 'HOA dues / mo (all associations)', prefix: '$', step: 25 },
  { key: 'annualTax', label: 'Property tax / yr', prefix: '$', step: 100 },
  { key: 'annualInsurance', label: 'Landlord insurance / yr', prefix: '$', step: 100 },
  { key: 'vacancyPct', label: 'Vacancy reserve', suffix: '% of rent', step: 1 },
  { key: 'managementPct', label: 'Management', suffix: '% of rent', step: 1, help: 'Use 0 if you self-manage.' },
  { key: 'maintenancePct', label: 'Maintenance', suffix: '% of value / yr', step: 0.25 },
]

const SELL_FIELDS: Field[] = [
  { key: 'homeValue', label: 'Likely sale price today', prefix: '$', step: 10000 },
  { key: 'loanBalance', label: 'Loan payoff', prefix: '$', step: 5000 },
  {
    key: 'sellingCostPct',
    label: 'All-in selling costs',
    suffix: '% of price',
    step: 0.5,
    help: 'Commissions are negotiable. Include title, transfer tax and any concessions.',
  },
]

const usd = (n: number) =>
  n.toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 })

function NumberField({ f, value, onChange }: { f: Field; value: number; onChange: (v: number) => void }) {
  const id = `rvs-${f.key}`
  return (
    <label htmlFor={id} className="block">
      <span className="text-sm text-[var(--lux-muted)]">{f.label}</span>
      <span className="mt-1 flex items-center border-b border-[var(--lux-line)] focus-within:border-[var(--lux-gold)]">
        {f.prefix && <span className="pr-1 text-[var(--lux-muted)]">{f.prefix}</span>}
        <input
          id={id}
          type="number"
          inputMode="decimal"
          min={0}
          step={f.step}
          value={Number.isFinite(value) ? value : 0}
          onChange={(e) => onChange(e.target.value === '' ? 0 : Number(e.target.value))}
          className="w-full bg-transparent py-2 text-lg text-[var(--lux-ink)] outline-none"
        />
        {f.suffix && <span className="whitespace-nowrap pl-2 text-xs text-[var(--lux-muted)]">{f.suffix}</span>}
      </span>
      {f.help && <span className="mt-1 block text-xs text-[var(--lux-muted)]">{f.help}</span>}
    </label>
  )
}

export default function RentVsSellCalculator() {
  const [v, setV] = useState<Inputs>(DEFAULTS)
  const set = (k: keyof Inputs) => (n: number) => setV((prev) => ({ ...prev, [k]: n }))

  const r = useMemo(() => {
    const rent = v.monthlyRent
    const vacancy = rent * (v.vacancyPct / 100)
    const management = rent * (v.managementPct / 100)
    const maintenance = (v.homeValue * (v.maintenancePct / 100)) / 12
    const fixed = v.monthlyHoa + v.annualTax / 12 + v.annualInsurance / 12
    const operating = vacancy + management + maintenance + fixed
    const noiMonthly = rent - operating
    const cashFlow = noiMonthly - v.monthlyPI
    const capRate = v.homeValue > 0 ? ((noiMonthly * 12) / v.homeValue) * 100 : 0
    const netProceeds = v.homeValue * (1 - v.sellingCostPct / 100) - v.loanBalance
    return { operating, noiMonthly, cashFlow, capRate, netProceeds }
  }, [v])

  return (
    <div className="grid gap-12 lg:grid-cols-[1fr_22rem]">
      <div className="grid gap-12 md:grid-cols-2">
        <fieldset>
          <legend className="lux-h3">If you lease</legend>
          <div className="mt-6 space-y-5">
            {RENT_FIELDS.map((f) => (
              <NumberField key={f.key} f={f} value={v[f.key]} onChange={set(f.key)} />
            ))}
          </div>
        </fieldset>
        <fieldset>
          <legend className="lux-h3">If you sell</legend>
          <div className="mt-6 space-y-5">
            {SELL_FIELDS.map((f) => (
              <NumberField key={f.key} f={f} value={v[f.key]} onChange={set(f.key)} />
            ))}
          </div>
          <button
            type="button"
            onClick={() => setV(DEFAULTS)}
            className="mt-8 text-xs uppercase tracking-[0.16em] text-[var(--lux-muted)] underline underline-offset-4"
          >
            Reset to sample numbers
          </button>
        </fieldset>
      </div>

      <aside className="lux-hero self-start p-8 text-white lg:sticky lg:top-24" aria-live="polite">
        <p className="lux-eyebrow !text-[var(--lux-gold-soft)]">Leasing</p>
        <p className="mt-3 font-[family-name:var(--font-cormorant)] text-5xl">{usd(r.cashFlow)}</p>
        <p className="text-sm text-[#ddd5c6]">monthly cash flow after the mortgage</p>
        <dl className="mt-5 space-y-1 text-sm text-[#ddd5c6]">
          <div className="flex justify-between"><dt>Operating costs / mo</dt><dd>{usd(r.operating)}</dd></div>
          <div className="flex justify-between"><dt>Net operating income / mo</dt><dd>{usd(r.noiMonthly)}</dd></div>
          <div className="flex justify-between"><dt>Cap rate on today’s value</dt><dd>{r.capRate.toFixed(1)}%</dd></div>
        </dl>
        <div className="my-7 h-px bg-white/15" />
        <p className="lux-eyebrow !text-[var(--lux-gold-soft)]">Selling today</p>
        <p className="mt-3 font-[family-name:var(--font-cormorant)] text-5xl">{usd(r.netProceeds)}</p>
        <p className="text-sm text-[#ddd5c6]">estimated net proceeds before taxes</p>
        <p className="mt-7 text-xs leading-relaxed text-[#bdb4a3]">
          Sample numbers only; enter your own. Not tax advice: capital gains, depreciation and the property-tax cap
          change the answer. Leasing at market rent can move the home from a 3% to an up-to-8% tax-abatement cap
          (NRS 361.4722).
        </p>
      </aside>
    </div>
  )
}
