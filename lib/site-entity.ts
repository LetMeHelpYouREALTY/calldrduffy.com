import { SITE_URL } from './site-url'

/**
 * One source of truth for who runs this site. Name and address must
 * match everywhere (site, Google Business Profile, BHHS profile, Bing Places).
 * Address: Dr. Jan's office, 145 E Harmon Ave, Unit E, Las Vegas, NV 89109.
 */
export const AGENT = {
  /** Exactly as on the Google Business Profile (2026-10-30). */
  businessName: 'Las Vegas Rental Homes - Just Call Dr. Jan Duffy',
  name: 'Dr. Jan Duffy',
  title: 'REALTOR®',
  email: 'HomeSales@CallDrDuffy.com',
  license: 'S.0197614.LLC',
  brokerage: 'Berkshire Hathaway HomeServices Nevada Properties',
  bhhsProfile: 'https://janetduffy.bhhsnv.com',
  address: {
    streetAddress: '145 E Harmon Ave, Unit E',
    addressLocality: 'Las Vegas',
    addressRegion: 'NV',
    postalCode: '89109',
    addressCountry: 'US',
  },
  yearsInMarket: 35,
} as const

export const AGENT_ID = `${SITE_URL}/#agent`
export const PERSON_ID = `${SITE_URL}/#jan-duffy`
export const WEBSITE_ID = `${SITE_URL}/#website`

/** Site-wide JSON-LD graph: one RealEstateAgent business, one Person, one WebSite. */
export function getSiteGraph() {
  const postalAddress = { '@type': 'PostalAddress', ...AGENT.address }
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'RealEstateAgent',
        '@id': AGENT_ID,
        name: AGENT.businessName,
        alternateName: `${AGENT.name}, ${AGENT.title}`,
        description:
          'Owner-side leasing and sales strategy for luxury homes in Las Vegas and Henderson, including The Ridges, Red Rock Country Club, The Summit Club, Queensridge, MacDonald Highlands, Ascaya, Anthem Country Club, Lake Las Vegas, Southern Highlands and Spanish Trail.',
        url: `${SITE_URL}/`,
        email: AGENT.email,
        image: `${SITE_URL}/images/og/home.jpg`,
        address: postalAddress,
        areaServed: [
          { '@type': 'City', name: 'Las Vegas', containedInPlace: { '@type': 'State', name: 'Nevada' } },
          { '@type': 'City', name: 'Henderson', containedInPlace: { '@type': 'State', name: 'Nevada' } },
        ],
        parentOrganization: { '@type': 'Organization', name: AGENT.brokerage },
        employee: { '@id': PERSON_ID },
        sameAs: [AGENT.bhhsProfile],
        knowsAbout: [
          'Luxury home leasing',
          'Residential lease pricing',
          'Nevada landlord-tenant law (NRS 118A)',
          'Rent versus sell analysis',
          'Las Vegas luxury real estate',
        ],
      },
      {
        '@type': 'Person',
        '@id': PERSON_ID,
        name: AGENT.name,
        honorificPrefix: 'Dr.',
        jobTitle: AGENT.title,
        url: `${SITE_URL}/about`,
        worksFor: { '@type': 'Organization', name: AGENT.brokerage },
        workLocation: { '@type': 'Place', address: postalAddress },
        hasCredential: {
          '@type': 'EducationalOccupationalCredential',
          credentialCategory: 'Real estate license',
          identifier: AGENT.license,
          recognizedBy: { '@type': 'Organization', name: 'Nevada Real Estate Division' },
        },
        sameAs: [AGENT.bhhsProfile],
      },
      {
        '@type': 'WebSite',
        '@id': WEBSITE_ID,
        name: 'Call Dr. Duffy',
        url: `${SITE_URL}/`,
        publisher: { '@id': AGENT_ID },
        inLanguage: 'en-US',
      },
    ],
  }
}
