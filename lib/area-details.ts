import type { LuxuryArea } from './luxury-areas'

/**
 * Per-community details layered onto lib/luxury-areas.ts.
 * Research: Parallel task group run 2026-10-30 plus earlier verified searches.
 * Low-confidence figures were left out rather than published. Every fact has
 * its source and as-of date. Refresh every 60 days.
 */
const REVIEWED = '2026-10-30'

const video = (slug: string, name: string, description: string) => ({
  src: `/videos/${slug}.mp4`,
  poster: `/videos/${slug}.jpg`,
  title: `Leasing your home in ${name}, in 28 seconds`,
  description,
  uploadDate: REVIEWED,
  seconds: 28,
})


export const AREA_DETAILS: Record<string, Partial<LuxuryArea>> = {
  'the-ridges': {
    lastReviewed: REVIEWED,
    answer:
      'Single-family homes in The Ridges were asking a median of about $9,000 a month in October 2026, across four active listings from $7,500 to $15,000 (Redfin). Summerlin South rules call for a written lease of at least one year, so price for a 12-month term.',
    facts: [
      { label: 'Median asking rent, 4 active house listings', value: '$8,999/mo', source: 'Redfin', asOf: 'October 2026' },
      { label: 'Asking rent range', value: '$7,500–$15,000/mo', source: 'Redfin', asOf: 'October 2026' },
      { label: 'Median days on market, rentals', value: '112 days', source: 'Realtor.com', asOf: 'October 2026' },
      { label: 'HOA dues, master plus village', value: '$395–$1,396/mo', source: 'The Ridges Summerlin 2026 Buyer’s Guide (MLS sample)', asOf: 'September 2026' },
      { label: 'Minimum lease term', value: 'Written lease of at least 1 year (Summerlin South master rules); village rules can add steps', source: 'Summerlin South Community Association Rules', asOf: 'October 2026' },
      { label: 'Village size', value: '793 acres', source: 'Summerlin (Howard Hughes)', asOf: 'October 2026' },
      { label: 'Drive to the Strip / airport', value: 'About 25 / 30 minutes', source: 'The Scofield Group', asOf: '2026' },
    ],
    faqs: [
      {
        q: 'Does leasing a home in The Ridges include golf?',
        a: 'No. The former Bear’s Best course is being rebuilt as the private Amara Golf & Social Club, and membership is separate from owning a home. Club Ridges is the separate residents’ fitness, tennis and pool facility; confirm with the HOA what a tenant may use.',
      },
      {
        q: 'How long does a luxury rental in The Ridges take to lease?',
        a: 'Rentals in The Ridges showed a median of 112 days on market in October 2026 (Realtor.com), with only four houses for rent at once. Homes priced near closed comparables lease faster; the top of the range sits longest.',
      },
    ],
    siblings: ['red-rock-country-club', 'the-summit-club', 'queensridge'],
    video: video('the-ridges', 'The Ridges', 'What homes in The Ridges ask to lease, the Summerlin South one-year lease rule, and how to price from closed leases.'),
  },

  'red-rock-country-club': {
    lastReviewed: REVIEWED,
    answer:
      'Red Rock Country Club posted a median rent of $5,990 a month in August 2026 (Realtor.com), with October asking rents from $3,500 to $10,900. Rentals there averaged 32 days on market. Tenants must give the HOA a copy of the lease and their vehicle registration or insurance.',
    facts: [
      { label: 'Median rent', value: '$5,990/mo', source: 'Realtor.com', asOf: 'August 2026' },
      { label: 'Asking rent range', value: '$3,500–$10,900/mo', source: 'Realtor.com', asOf: 'October 2026' },
      { label: 'Average days on market, rentals', value: '32 days', source: 'Realtor.com', asOf: 'October 2026' },
      { label: 'Rental properties listed', value: '5', source: 'Realtor.com', asOf: 'August 2026' },
      { label: 'Red Rock association dues', value: '$300/mo ($900 a quarter) on most 2026 listings', source: 'Nevada Real Estate Group, 2026 MLS entries', asOf: '2026' },
      { label: 'Tenant setup', value: 'Copy of the lease plus vehicle registration or insurance to the HOA', source: 'Red Rock Country Club HOA welcome packet', asOf: 'October 2026' },
      { label: 'Drive to the Strip / airport', value: 'About 20 / 30 minutes', source: 'Nevada Real Estate Group', asOf: '2026' },
    ],
    faqs: [
      {
        q: 'Does a Red Rock Country Club lease include golf?',
        a: 'No. Club membership is separate from owning a home and is not automatic. The Arroyo Course is open to public play; the Mountain Course is private.',
      },
      {
        q: 'What does the HOA need from a tenant?',
        a: 'The HOA asks for a copy of the lease agreement plus registration or insurance for every vehicle, so the gates can set the resident up. Send these before move-in day.',
      },
    ],
    siblings: ['the-ridges', 'the-summit-club', 'spanish-trail'],
    video: video('red-rock-country-club', 'Red Rock Country Club', 'Median rent, the HOA’s tenant setup steps, and why club membership is separate from the lease.'),
  },

  'the-summit-club': {
    lastReviewed: REVIEWED,
    answer:
      'Leases in The Summit Club are rare. The one active listing in October 2026 asked $35,000 a month (Douglas Elliman). HOA assessments run about $2,073 to $2,823 a month, short-term rentals are not allowed, and a lease does not give the resident club or golf access.',
    facts: [
      { label: 'Asking rent, active lease listings', value: '$35,000/mo (1 listing)', source: 'Douglas Elliman', asOf: 'October 2026' },
      { label: 'HOA assessments, including Summerlin South', value: '$2,073–$2,823/mo', source: 'Rob Jensen Company neighborhood guide (published schedule undated)', asOf: 'October 2026' },
      { label: 'Lease terms', value: 'No short-term rentals; occasional 6–12-month corporate leases', source: 'Nevada Real Estate Group, Summit Club guide', asOf: '2026' },
      { label: 'Clubhouse', value: 'More than 70,000 sq ft of amenity space', source: 'The Summit Club', asOf: 'October 2026' },
      { label: 'Drive to the Strip / airport', value: 'About 20 / 16 minutes', source: 'Rob Jensen Company', asOf: '2026' },
    ],
    faqs: [
      {
        q: 'Does a tenant in The Summit Club get club access?',
        a: 'Not by leasing. A brokerage guide reports tenants do not receive club membership or golf access, and membership itself requires a separate application, approval and initiation. Spell this out in the lease.',
      },
      {
        q: 'How do you price a lease when there is only one comparable?',
        a: 'Treat the one active listing as a ceiling, then study closed leases in The Ridges and Red Rock Country Club and adjust for size, view and finish. At this level, the wrong number can leave a home empty for months.',
      },
    ],
    siblings: ['the-ridges', 'red-rock-country-club', 'queensridge'],
    video: video('the-summit-club', 'The Summit Club', 'Why one listing sets the market, what HOA assessments run, and what a lease does not include.'),
  },

  queensridge: {
    lastReviewed: REVIEWED,
    answer:
      'Queensridge combines guard-gated estates with the One Queensridge Place towers next to Tivoli Village. Published rent data is too thin to quote a median. Estate HOA dues run about $315 to $585 a month and tower dues about $1,800 to $4,500 (Nevada Real Estate Group, October 2026).',
    facts: [
      { label: 'HOA dues, estate sections', value: 'About $315–$585/mo combined', source: 'Nevada Real Estate Group, Queensridge 2026 guide', asOf: 'October 2026' },
      { label: 'HOA dues, One Queensridge Place', value: 'About $1,800–$4,500/mo, by residence size', source: 'Nevada Real Estate Group, Queensridge 2026 guide', asOf: 'October 2026' },
      { label: 'Tower lease rules', value: 'Association minimum-term rules; tenants register at the guard gate; not a nightly-rental building', source: 'Nevada Real Estate Group, One Queensridge Place', asOf: 'October 2026' },
      { label: 'Tower amenity', value: '25-meter indoor lap pool', source: 'Savi Realty, One Queensridge Place', asOf: 'October 2026' },
      { label: 'Former Badlands course', value: 'Closed December 2016; land approved for Lennar’s gated “The Preserve” in 2025', source: 'Las Vegas Review-Journal; City of Las Vegas', asOf: '2026' },
      { label: 'Drive to the Strip / airport', value: 'About 15 / 25 minutes', source: 'Nevada Real Estate Group', asOf: 'October 2026' },
    ],
    faqs: [
      {
        q: 'Can I lease my One Queensridge Place residence short-term?',
        a: 'No. One Queensridge Place is not a nightly-rental building, leases follow the association’s minimum-term rules, and tenants register at the guard gate. City of Las Vegas rules also bar investor short-term rentals.',
      },
      {
        q: 'Will construction on the former golf course affect my lease?',
        a: 'The former Badlands course closed in December 2016, and the land is approved for Lennar’s gated “The Preserve” homes. Tell applicants about nearby construction up front so the lease starts on clear terms.',
      },
    ],
    siblings: ['the-ridges', 'spanish-trail', 'red-rock-country-club'],
    video: video('queensridge', 'Queensridge', 'What estate and tower dues cost, the tower’s lease rules, and why the location leases.'),
  },

  'macdonald-highlands': {
    lastReviewed: REVIEWED,
    answer:
      'MacDonald Highlands posted a median rent of $8,949 a month in August 2026 (Realtor.com), with 14 houses listed for rent in October. Its CC&Rs require written leases of at least 30 days, bar transient tenants, and require notice to the HOA board within 10 days of signing.',
    facts: [
      { label: 'Median rent', value: '$8,949/mo', source: 'Realtor.com', asOf: 'August 2026' },
      { label: 'Houses for rent', value: '14', source: 'Realtor.com', asOf: 'October 2026' },
      { label: 'Master HOA fee', value: '$330/mo', source: 'MacDonald Highlands HOA', asOf: 'October 2026' },
      { label: 'Lease rules', value: 'Whole-home written leases of at least 30 days; no transient tenants; notify the board within 10 days', source: 'CC&Rs Section 12.23', asOf: 'October 2026' },
      { label: 'Community', value: '1,320 acres with two 24-hour guard-gated entries', source: 'MacDonald Highlands', asOf: 'October 2026' },
      { label: 'Drive to the Strip / airport', value: 'About 20 / 15 minutes', source: 'Huntington & Ellis area guide', asOf: '2026' },
    ],
    faqs: [
      {
        q: 'Can I lease part of my MacDonald Highlands home?',
        a: 'No. The CC&Rs (Section 12.23) allow homes to be leased only in their entirety, and subleasing or assigning a lease needs prior written board approval.',
      },
      {
        q: 'Does a lease include DragonRidge Country Club?',
        a: 'No. DragonRidge membership is separate from owning a home, is not automatic, and is priced apart from the HOA.',
      },
    ],
    siblings: ['ascaya', 'anthem-country-club', 'lake-las-vegas'],
    video: video('macdonald-highlands', 'MacDonald Highlands', 'Median rent, the CC&R lease rules owners must follow, and why Strip views sell a lease.'),
  },

  ascaya: {
    lastReviewed: REVIEWED,
    answer:
      'Published rent data for Ascaya is too thin to quote: few homes lease at once, and no reliable median exists. Price from closed leases in nearby hillside communities such as MacDonald Highlands, where the median rent was $8,949 a month in August 2026 (Realtor.com).',
    facts: [
      { label: 'HOA dues', value: 'About $1,050–$1,200/mo', source: 'Nevada Real Estate Group', asOf: 'Q1 2026' },
      { label: 'Clubhouse', value: '50-meter pool, fitness center, tennis and pickleball; reserved for homeowners', source: 'Ascaya', asOf: 'October 2026' },
      { label: 'Setting', value: '400–800 feet above the valley floor in the McCullough foothills', source: 'Nevada Real Estate Group', asOf: '2026' },
      { label: 'Drive to the Strip / airport', value: 'About 20 / 15 minutes', source: 'Ascaya, Getting Here', asOf: 'October 2026' },
    ],
    faqs: [
      {
        q: 'Can a tenant use the Ascaya clubhouse?',
        a: 'Ascaya says its clubhouse amenities are reserved for homeowners, with no outside memberships. Confirm with the association what access, if any, a resident tenant has, and put the answer in the lease.',
      },
      {
        q: 'What does it cost to hold an Ascaya home while it leases?',
        a: 'HOA dues ran about $1,050 to $1,200 a month in early 2026 (Nevada Real Estate Group). Add property tax, insurance and utilities for each vacant month when you set the asking rent.',
      },
    ],
    siblings: ['macdonald-highlands', 'anthem-country-club', 'lake-las-vegas'],
    video: video('ascaya', 'Ascaya', 'What residents get, Henderson’s short-term rental rule, and how to price with few comparables.'),
  },

  'anthem-country-club': {
    lastReviewed: REVIEWED,
    answer:
      'Anthem Country Club is a guard-gated golf community in the Black Mountain foothills of Henderson. In October 2026, three active rental listings asked $3,000 to $4,250 a month (Realtor.com). That is too few for a reliable median, so price from closed leases of comparable homes inside the gates.',
    facts: [
      { label: 'Asking rents, active listings (all home types)', value: '$3,000–$4,250/mo (3 listings)', source: 'Realtor.com', asOf: 'October 2026' },
      { label: 'Golf', value: 'Private 18-hole, par-72, 7,373-yard Hale Irwin–Keith Foster course; membership separate', source: 'Anthem Country Club', asOf: 'October 2026' },
      { label: 'Course elevation', value: '2,600 feet', source: 'Anthem Country Club', asOf: 'October 2026' },
      { label: 'Drive to the Strip / airport', value: 'About 23 / 18 minutes', source: 'Rob Jensen Company', asOf: '2026' },
    ],
    faqs: [
      {
        q: 'Does a lease include Anthem Country Club membership?',
        a: 'No. Golf and social memberships are separate from owning the home and are open to residents and non-residents. A tenant who wants club access applies to the club.',
      },
      {
        q: 'Why is there no median rent for Anthem Country Club?',
        a: 'Only a handful of homes lease at once, which is too few for a reliable median. A closed-lease comparison from the MLS gives a truer number for a specific home.',
      },
    ],
    siblings: ['macdonald-highlands', 'ascaya', 'southern-highlands'],
    video: video('anthem-country-club', 'Anthem Country Club', 'The setting, Henderson’s short-term rental rule, and why club membership is separate.'),
  },

  'lake-las-vegas': {
    lastReviewed: REVIEWED,
    answer:
      'Lake Las Vegas lease rules vary by village: guard-gated villages typically set minimums of 30 days, 90 days or six months (Kristina Allan, August 2026). Published rent data is too thin to quote a median, so price from closed leases of comparable lakefront and golf homes.',
    facts: [
      { label: 'Minimum lease term', value: 'Typically 30 days, 90 days or 6 months, by village', source: 'Kristina Allan, Lake Las Vegas rentals by village', asOf: 'August 2026' },
      { label: 'HOA dues', value: 'About $200–$500/mo, by home type', source: 'Nevada Real Estate Group', asOf: 'October 2026' },
      { label: 'Master plan', value: '3,592 acres around a 320-acre private lake', source: 'Nevada Real Estate Group, Lake Las Vegas guide', asOf: '2026' },
      { label: 'Golf', value: 'Reflection Bay and SouthShore, both Jack Nicklaus Signature courses; membership separate', source: 'Lake Las Vegas', asOf: 'October 2026' },
      { label: 'Drive to the Strip / airport', value: 'About 25 / 26 minutes', source: 'Lake Las Vegas; Bryce Edwards', asOf: '2026' },
    ],
    faqs: [
      {
        q: 'Can I rent my Lake Las Vegas home by the night?',
        a: 'Generally not. Henderson bars short-term rentals in HOA communities unless the documents expressly allow transient lodging, and the guard-gated villages generally exclude nightly rentals. Confirm your village’s minimum term in writing.',
      },
      {
        q: 'Should I lease my Lake Las Vegas home furnished?',
        a: 'Furnished homes suit the longer resort-style stays these villages allow. Inventory every item in writing, photograph it, and attach the list to the lease.',
      },
    ],
    siblings: ['macdonald-highlands', 'ascaya', 'anthem-country-club'],
    video: video('lake-las-vegas', 'Lake Las Vegas', 'Village-by-village lease minimums, club membership, and how to lease a furnished lake home.'),
  },

  'southern-highlands': {
    lastReviewed: REVIEWED,
    answer:
      'Southern Highlands rents vary widely because one master plan runs from family neighborhoods to golf-frontage estates, so area averages mislead. Price a guard-gated home against single-family leases in its own enclave. Dues differ too: The Estates runs $500 to $650 a month, plus about $55 to $62 in master dues.',
    facts: [
      { label: 'HOA dues, The Estates', value: '$500–$650/mo', source: 'Ryan Rose, HOA Fees in Southern Highlands', asOf: '2026' },
      { label: 'HOA dues, Olympia Ridge', value: '$382–$685/mo', source: 'Ryan Rose, HOA Fees in Southern Highlands', asOf: '2026' },
      { label: 'HOA dues, Tuscan Cliffs', value: '$208/mo', source: 'Ryan Rose, HOA Fees in Southern Highlands', asOf: '2026' },
      { label: 'Master association', value: 'About $55–$62/mo, on top of enclave dues', source: 'Ryan Rose, HOA Fees in Southern Highlands', asOf: '2026' },
      { label: 'Olympia Ridge lot sizes', value: 'One-third acre to five acres', source: 'Olympia Ridge Estates', asOf: 'October 2026' },
      { label: 'Drive to the Strip / airport', value: 'About 15 / 15 minutes', source: 'Southern Highlands area guides', asOf: '2026' },
    ],
    faqs: [
      {
        q: 'Does a Southern Highlands home include golf club access?',
        a: 'No. Southern Highlands Golf Club is private, and owning a home does not confer membership or access. Confirm any arrangement directly with the club.',
      },
      {
        q: 'Which rules apply to my lease: the enclave or the master association?',
        a: 'Both. Gated enclaves such as The Estates and Olympia Ridge have their own associations on top of the master association. Read each set of documents for minimum terms and registration steps.',
      },
    ],
    siblings: ['spanish-trail', 'anthem-country-club', 'macdonald-highlands'],
    video: video('southern-highlands', 'Southern Highlands', 'What enclave dues cost, which association rules apply, and how to price against the right leases.'),
  },

  'spanish-trail': {
    lastReviewed: REVIEWED,
    answer:
      'Single-family homes in Spanish Trail were asking a median of about $5,700 a month in October 2026, across four active listings from $4,250 to $7,000 (Realtor.com). The community sits about 12 minutes from the Strip, and golf club membership is optional and separate.',
    facts: [
      { label: 'Median asking rent, 4 active house listings', value: '$5,693/mo', source: 'Realtor.com', asOf: 'October 2026' },
      { label: 'Asking rent range', value: '$4,250–$7,000/mo', source: 'Realtor.com', asOf: 'October 2026' },
      { label: 'HOA dues', value: '$250 to $1,000+/mo, by home type and location', source: 'LasVegasRealEstate.org', asOf: 'October 2026' },
      { label: 'Gates', value: 'West, East and Hacienda guard gates', source: 'Spanish Trail Master Association', asOf: 'October 2026' },
      { label: 'Golf', value: '27 private holes by Robert Trent Jones Jr.; membership optional', source: 'Spanish Trail Country Club', asOf: 'October 2026' },
      { label: 'Drive to the Strip / airport', value: 'About 12 / 21 minutes', source: 'Las Vegas Luxury Residences; Rose Homes', asOf: '2026' },
    ],
    faqs: [
      {
        q: 'Do tenants need club membership in Spanish Trail?',
        a: 'No. Membership at Spanish Trail Country Club is optional and separate from owning a home and from HOA dues.',
      },
      {
        q: 'How do tenants get through the gates?',
        a: 'Spanish Trail has three guarded gates: West, East and Hacienda. Register the tenant with the association before move-in so every gate has them on file.',
      },
    ],
    siblings: ['southern-highlands', 'queensridge', 'red-rock-country-club'],
    video: video('spanish-trail', 'Spanish Trail', 'What homes ask to lease, the three gates, and why location keeps demand steady.'),
  },
}
