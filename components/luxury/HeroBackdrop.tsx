import Image from 'next/image'
import type { HeroPhoto } from '@/lib/hero-photos'

/**
 * Full-bleed photo behind a page hero, with a charcoal overlay so white text
 * keeps contrast on bright photos, and a small photo credit.
 * The parent section needs `relative overflow-hidden`; its content `relative z-10`.
 */
export default function HeroBackdrop({ photo, priority = true }: { photo: HeroPhoto; priority?: boolean }) {
  return (
    <>
      <Image
        src={photo.src}
        alt={photo.alt}
        fill
        priority={priority}
        sizes="100vw"
        className="object-cover"
        style={{ objectPosition: photo.position ?? 'center' }}
      />
      <div aria-hidden className="absolute inset-0 bg-[#141311]/55" />
      <div aria-hidden className="absolute inset-0 bg-gradient-to-r from-[#141311]/85 via-[#1c1b19]/45 to-transparent" />
      <p className="absolute bottom-3 right-4 z-10 text-[10px] text-white/60">{photo.credit}</p>
    </>
  )
}
