import Image from 'next/image'

/** Dr. Jan Duffy's round headshot (gold ring, transparent corners). */
export const HEADSHOT_SRC = '/images/dr-jan-duffy.png'

export default function Headshot({
  size = 96,
  className = '',
  priority = false,
}: {
  size?: number
  className?: string
  priority?: boolean
}) {
  return (
    <Image
      src={HEADSHOT_SRC}
      alt="Dr. Jan Duffy, REALTOR®"
      width={size}
      height={size}
      sizes={`${size}px`}
      priority={priority}
      className={`shrink-0 rounded-full ${className}`}
    />
  )
}

/** Small "By Dr. Jan Duffy" byline with the headshot, for guides and area pages. */
export function Byline({ children }: { children: React.ReactNode }) {
  return (
    <p className="mt-5 flex items-center gap-3 text-xs text-[var(--lux-muted)]">
      <Headshot size={36} />
      <span>{children}</span>
    </p>
  )
}
