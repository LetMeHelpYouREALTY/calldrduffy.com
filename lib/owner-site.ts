/** Site-wide constants for the owner-leasing site. */
export const SITE_PHONE = '(702) 500-1955'
export const SITE_PHONE_HREF = 'tel:+17025001955'

/** Owner consultations book through Dr. Jan's Luxury Lease Consultation event (30 min, created 2026-10-30). */
export const CALENDLY_OWNER_URL =
  'https://calendly.com/drjanduffy/luxury-lease-consultation-30-min?hide_gdpr_banner=1&utm_source=calldrduffy&utm_medium=website&utm_campaign=owner_leasing'

/** Nevada owner rules shown on several pages. Sources verified 2026-10-30. */
export const OWNER_RULES = [
  {
    title: 'Deposits cap at three months’ rent',
    body: 'Security deposit plus last month’s rent cannot exceed three months’ rent in Nevada. A tenant may offer a surety bond in its place, which you may accept or decline.',
    cite: 'NRS 118A.242',
  },
  {
    title: 'Short stays are off the table',
    body: 'Summerlin bans short-term rentals, Henderson bars them in most HOA communities, and Clark County was issuing no new licenses as of September 2026. Every luxury lease here is 30 days or longer.',
    cite: 'City of Las Vegas, HMC 19.9.4.F, Clark County Code 7.100',
  },
  {
    title: 'Your property-tax cap can change',
    body: 'A primary residence gets a 3% cap on annual tax increases. Leasing the home at market rent can move it to a cap of up to 8%. Check this before you sign a lease.',
    cite: 'NRS 361.4722',
  },
  {
    title: 'The HOA approves the lease first',
    body: 'Guard-gated associations often require lease registration, gate access lists and minimum terms. Tower associations can set long minimum lease terms.',
    cite: 'Your CC&Rs and rules',
  },
]

/** Valley-wide leasing pace. */
export const LEASING_PACE = {
  days: '14–21 days',
  detail:
    'Clean, rent-ready, correctly priced homes were leasing in about 14 to 21 days, with about 2,500 single-family rentals competing.',
  source: 'Rice Real Estate & Property Management market report',
  asOf: 'October 1, 2026',
}
