/**
 * High-rent Las Vegas Valley areas covered by the owner-leasing pages.
 * Every number carries its source and as-of date. Update or remove a
 * figure when it goes stale (60 days for market data) rather than guessing.
 * Copy rule (Fair Housing): describe the home and the rules, never the renter.
 */

export type Jurisdiction = 'las-vegas' | 'henderson' | 'clark-county'

export type MarketFigure = {
  label: string
  value: string
  source: string
  asOf: string
}

export type LuxuryArea = {
  slug: string
  name: string
  region: string
  zip: string
  jurisdiction: Jurisdiction
  tagline: string
  intro: string
  homeFacts: string[]
  leasingNotes: string[]
  figure?: MarketFigure
  /** ISO date the page's facts were last checked. */
  lastReviewed: string
  /** 40-60 word direct answer shown first (answer-engine friendly). */
  answer?: string
  /** Sourced facts for the data box. */
  facts?: MarketFigure[]
  /** Questions specific to this community. */
  faqs?: { q: string; a: string }[]
  /** Related communities to link to (slugs). */
  siblings?: string[]
  video?: { src: string; poster: string; title: string; description: string; uploadDate: string; seconds: number }
}

/** Valley-wide luxury lease benchmarks. */
export const LUXURY_LEASE_BENCHMARKS: MarketFigure[] = [
  {
    label: 'Median asking rent, Las Vegas leases at $5,000+/mo',
    value: '$7,500',
    source: 'Las Vegas REALTORS MLS active-lease data',
    asOf: 'July 2026',
  },
  {
    label: 'Median asking rent, Summerlin leases at $5,000+/mo',
    value: '$7,995',
    source: 'Las Vegas REALTORS MLS active-lease data',
    asOf: 'July 2026',
  },
  {
    label: 'Median asking rent, Las Vegas leases at $10,000+/mo',
    value: '$13,000',
    source: 'Las Vegas REALTORS MLS active-lease data',
    asOf: 'July 2026',
  },
]

export const JURISDICTION_STR_RULE: Record<Jurisdiction, string> = {
  'las-vegas':
    'City of Las Vegas: short-term rentals (under 30 days) need an owner-occupied license, and they are prohibited outright in Summerlin and other master-planned areas. Plan on leases of 30 days or longer.',
  henderson:
    'City of Henderson: short-term rentals are barred in any HOA community unless its governing documents expressly allow transient lodging (HMC 19.9.4.F). Plan on leases of 30 days or longer.',
  'clark-county':
    'Unincorporated Clark County: a short-term rental license is required for stays of 30 days or less, and no new licenses were being issued as of September 2026. Plan on leases of 30 days or longer.',
}

const BASE_AREAS: Omit<LuxuryArea, 'lastReviewed'>[] = [
  {
    slug: 'the-ridges',
    name: 'The Ridges',
    region: 'Summerlin',
    zip: '89135',
    jurisdiction: 'las-vegas',
    tagline: 'Guard-gated custom estates facing Red Rock Canyon',
    intro:
      'The Ridges sits at the western edge of Summerlin, with custom and semi-custom estates around the former Bear’s Best course, now being rebuilt as the private Amara Golf Club, and Red Rock Canyon on the skyline. Homes here compete for lease at the top of the Summerlin market.',
    homeFacts: [
      'Guard-gated entry with roving security',
      'Amara Golf Club (the former Bear’s Best), rebuilding as a private club',
      'Club Ridges amenities',
      'West-facing Red Rock Canyon views on many lots',
      'Minutes to Downtown Summerlin retail and dining',
    ],
    leasingNotes: [
      'Summerlin South master rules call for a written lease of at least one year; confirm The Ridges’ own lease steps with the HOA.',
      'Confirm the association’s lease-registration steps and gate-access process before listing.',
    ],
    figure: {
      label: 'Median asking rent, Summerlin leases at $5,000+/mo',
      value: '$7,995',
      source: 'Las Vegas REALTORS MLS active-lease data',
      asOf: 'July 2026',
    },
  },
  {
    slug: 'red-rock-country-club',
    name: 'Red Rock Country Club',
    region: 'Summerlin',
    zip: '89135',
    jurisdiction: 'las-vegas',
    tagline: 'Guard-gated golf community with two Arnold Palmer courses',
    intro:
      'Red Rock Country Club is a guard-gated community of about 1,100 homes on 738 acres, built around two Arnold Palmer courses. Golf-frontage and Red Rock view homes command the strongest rents inside the gates.',
    homeFacts: [
      'Guard-gated entry',
      'Private Mountain Course and public-play Arroyo Course, both Arnold Palmer designs',
      'Full-service clubhouse',
      'Golf-frontage and mountain-view lots',
      'Club membership is separate from the home; clarify what a lease includes',
    ],
    leasingNotes: [
      'Spell out in the lease whether any club privileges transfer to the resident.',
      'Summerlin prohibits short-term rentals, so price for 12-month and furnished 30-day-plus terms.',
    ],
    figure: {
      label: 'Median asking rent, Summerlin leases at $5,000+/mo',
      value: '$7,995',
      source: 'Las Vegas REALTORS MLS active-lease data',
      asOf: 'July 2026',
    },
  },
  {
    slug: 'the-summit-club',
    name: 'The Summit Club',
    region: 'Summerlin',
    zip: '89135',
    jurisdiction: 'las-vegas',
    tagline: 'Private 600-acre club community with a Tom Fazio course',
    intro:
      'The Summit Club is a 600-acre private club community between Red Rock Canyon and the Strip, built around an 18-hole Tom Fazio course. Finished homes run from about $4M to more than $20M, which puts leases in the valley’s highest rent band.',
    homeFacts: [
      'Private Tom Fazio-designed golf course',
      'Finished homes from roughly $4M to $20M+',
      'Large custom estates with resort-level outdoor living',
      'Gated, low-density streets',
    ],
    leasingNotes: [
      'Club access for a resident is governed by the club, not the lease. Confirm it in writing.',
      'Expect a smaller, slower pool of qualified applicants. Price from closed leases, not asking rents.',
    ],
    figure: {
      label: 'Median asking rent, Las Vegas leases at $10,000+/mo',
      value: '$13,000',
      source: 'Las Vegas REALTORS MLS active-lease data',
      asOf: 'July 2026',
    },
  },
  {
    slug: 'queensridge',
    name: 'Queensridge',
    region: 'Las Vegas (west)',
    zip: '89145',
    jurisdiction: 'las-vegas',
    tagline: 'Guard-gated estates minutes from Summerlin and the Strip',
    intro:
      'Queensridge is a guard-gated community of custom estates plus One Queensridge Place, twin 20-story towers next to Tivoli Village. Its central west-valley location shortens drives to Summerlin and the Strip.',
    homeFacts: [
      'Guard-gated custom-home sections',
      'One Queensridge Place: twin 20-story towers with full-service amenities',
      'Central west-valley location near Summerlin and the Strip',
      'Tivoli Village retail and dining next door',
    ],
    leasingNotes: [
      'Tower units follow their own association lease rules, which can set long minimum terms.',
      'The former Badlands course is approved for Lennar’s gated “The Preserve” project. Disclose nearby construction to applicants.',
      'City of Las Vegas rules apply: no investor short-term rentals.',
    ],
  },
  {
    slug: 'macdonald-highlands',
    name: 'MacDonald Highlands',
    region: 'Henderson',
    zip: '89012',
    jurisdiction: 'henderson',
    tagline: 'Hillside estates with Strip views and DragonRidge golf',
    intro:
      'MacDonald Highlands climbs the hills of southeast Henderson, with custom estates, Strip views and the DragonRidge Country Club. It posts one of the highest median rents in the valley.',
    homeFacts: [
      'Guard-gated hillside sections',
      'DragonRidge Country Club golf course',
      'Panoramic Strip and valley views',
      'Large lots with custom architecture',
    ],
    leasingNotes: [
      'The CC&Rs require written, whole-home leases of at least 30 days and bar transient tenants.',
      'Only 14 homes were listed for rent in August 2026, so a well-presented home stands out.',
    ],
    figure: {
      label: 'Median rent, MacDonald Highlands',
      value: '$8,949/mo',
      source: 'Realtor.com neighborhood data',
      asOf: 'August 2026',
    },
  },
  {
    slug: 'ascaya',
    name: 'Ascaya',
    region: 'Henderson',
    zip: '89012',
    jurisdiction: 'henderson',
    tagline: 'Desert-contemporary custom homes 400–800 feet above the valley',
    intro:
      'Ascaya is a newer hillside community in the McCullough foothills, set 400 to 800 feet above the valley floor. Strict architecture standards produce desert-contemporary custom homes with elevated Strip views.',
    homeFacts: [
      'Custom desert-contemporary architecture only',
      'Elevated Strip-skyline views from the McCullough foothills',
      'No golf course by design',
      'Practical entry price above $4M',
    ],
    leasingNotes: [
      'Henderson bars short-term rentals in HOA communities unless the documents expressly allow them.',
      'Few comparable leases exist. Pricing needs closed-lease comps from MacDonald Highlands and The Ridges.',
    ],
  },
  {
    slug: 'anthem-country-club',
    name: 'Anthem Country Club',
    region: 'Henderson',
    zip: '89052',
    jurisdiction: 'henderson',
    tagline: 'Guard-gated golf community in the Anthem foothills',
    intro:
      'Anthem Country Club is a guard-gated golf community in the Anthem foothills of Henderson, with valley views and a private club. Layered master and sub-associations shape what an owner can do.',
    homeFacts: [
      'Guard-gated entry',
      'Private Hale Irwin–Keith Foster course at 2,600 feet elevation',
      'Clubhouse, fitness center, tennis and pickleball',
      'Elevated valley and Strip views',
      'Quick access to the 215 Beltway',
    ],
    leasingNotes: [
      'Master and sub-association rules both apply. Check each set of documents for lease terms.',
      'Henderson rules apply: no short-term rentals in HOA communities unless expressly allowed.',
    ],
  },
  {
    slug: 'lake-las-vegas',
    name: 'Lake Las Vegas',
    region: 'Henderson',
    zip: '89011',
    jurisdiction: 'henderson',
    tagline: 'Lakefront homes and a resort village 30 minutes from the Strip',
    intro:
      'Lake Las Vegas is a 3,592-acre master plan around a 320-acre private lake, with lakefront and golf homes in the $1.5M to $5M range. Furnished homes here carry a resort feel that suits longer stays.',
    homeFacts: [
      'Lakefront homes with private docks on select lots',
      'Two Jack Nicklaus golf courses, a village center and non-motorized boating',
      'Lakefront homes roughly $1.5M to $5M',
      'Many homes are offered furnished',
    ],
    leasingNotes: [
      'Inventory furniture in writing and attach it to the lease.',
      'Henderson rules apply: plan on leases of 30 days or longer.',
    ],
  },
  {
    slug: 'southern-highlands',
    name: 'Southern Highlands',
    region: 'Southwest Las Vegas',
    zip: '89141',
    jurisdiction: 'clark-county',
    tagline: 'Guard-gated enclaves around a Robert Trent Jones Sr. & Jr. course',
    intro:
      'Southern Highlands runs from family neighborhoods to golf-frontage estates inside one master plan. Rents at the top come from guard-gated enclaves such as The Estates and Olympia Ridge.',
    homeFacts: [
      'Private Southern Highlands Golf Club, co-designed by Robert Trent Jones Sr. and Jr.',
      'Guard-gated enclaves, including The Estates and Olympia Ridge',
      'Quick access to I-15 and the south Strip',
      'Wide range of home sizes inside one master plan',
    ],
    leasingNotes: [
      'Enclave HOAs layer on top of the master association. Check both for lease rules.',
      'Area-wide averages mix in apartments. Price a luxury home only against gated single-family leases.',
    ],
  },
  {
    slug: 'spanish-trail',
    name: 'Spanish Trail',
    region: 'Southwest Las Vegas',
    zip: '89113',
    jurisdiction: 'clark-county',
    tagline: 'Guard-gated golf community close to the Strip',
    intro:
      'Spanish Trail is a guard-gated country club community a short drive from the Strip, with golf-course homes and mature landscaping. Its location keeps lease demand steady year-round.',
    homeFacts: [
      'Guard-gated entry with a private country club',
      '27 private holes designed by Robert Trent Jones Jr.',
      'Golf-course frontage on many lots',
      'Mature trees and larger lots',
      'Minutes to the Strip and the 215',
    ],
    leasingNotes: [
      'Unincorporated Clark County rules apply. No new short-term rental licenses as of September 2026.',
      'Confirm the HOA’s lease registration and gate-access steps before move-in.',
    ],
  },
]

import { AREA_DETAILS } from './area-details'

export const LUXURY_AREAS: LuxuryArea[] = BASE_AREAS.map((a) => ({
  lastReviewed: '2026-10-30',
  ...a,
  ...(AREA_DETAILS[a.slug] ?? {}),
}))

export function getArea(slug: string): LuxuryArea | undefined {
  return LUXURY_AREAS.find((a) => a.slug === slug)
}
