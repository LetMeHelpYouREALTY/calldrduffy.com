// Schema.org structured data utilities

import { SITE_URL } from './site-url'

export const BASE_URL = SITE_URL

export const DR_JAN_INFO = {
  name: 'Dr. Jan Duffy',
  fullTitle: 'Dr. Jan Duffy, REALTOR®',
  email: 'HomeSales@CallDrDuffy.com',
  licenseNumber: 'S.0197614.LLC',
  brokerage: 'Berkshire Hathaway HomeServices Nevada Properties',
  location: 'Las Vegas, NV',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '8850 W Sunset Rd, Suite 200',
    addressLocality: 'Las Vegas',
    addressRegion: 'NV',
    postalCode: '89148',
    addressCountry: 'US',
  },
}

export function getLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'RealEstateAgent',
    '@id': `${BASE_URL}#realestateagent`,
    name: DR_JAN_INFO.name,
    description:
      'Owner-side leasing and sales strategy for luxury homes in Las Vegas and Henderson.',
    url: BASE_URL,
    email: DR_JAN_INFO.email,
    address: DR_JAN_INFO.address,
    priceRange: '$$',
    image: `${BASE_URL}/og-image.png`,
    logo: `${BASE_URL}/og-image.png`,
    licenseNumber: DR_JAN_INFO.licenseNumber,
    areaServed: [
      {
        '@type': 'City',
        name: 'Las Vegas',
        containedIn: {
          '@type': 'State',
          name: 'Nevada'
        }
      },
      {
        '@type': 'City',
        name: 'Henderson'
      },
      {
        '@type': 'City',
        name: 'Summerlin'
      },
      {
        '@type': 'City',
        name: 'North Las Vegas'
      }
    ],
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 36.1699,
      longitude: -115.1398,
      address: DR_JAN_INFO.address
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        opens: '00:00',
        closes: '23:59'
      }
    ],
    paymentAccepted: 'Cash, Credit Card, Financing',
    currenciesAccepted: 'USD'
  }
}

export function getOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Dr. Jan Duffy',
    legalName: 'Dr. Jan Duffy',
    url: BASE_URL,
    logo: `${BASE_URL}/og-image.png`,
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Sales',
      url: `${BASE_URL}/#consult`,
      areaServed: 'US',
      availableLanguage: 'English'
    },
    address: DR_JAN_INFO.address,
    sameAs: [] // Add social media profiles when available
  }
}

export function getRealEstateAgentSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'RealEstateAgent',
    name: DR_JAN_INFO.name,
    description: "Las Vegas real estate agent specializing in helping homes that didn't sell get sold successfully",
    url: BASE_URL,
    email: DR_JAN_INFO.email,
    address: DR_JAN_INFO.address,
    licenseNumber: DR_JAN_INFO.licenseNumber,
    areaServed: {
      '@type': 'City',
      name: 'Las Vegas'
    },
    jobTitle: 'Licensed Real Estate Professional',
    worksFor: {
      '@type': 'Organization',
      name: 'Berkshire Hathaway HomeServices',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Las Vegas',
        addressRegion: 'NV',
        addressCountry: 'US'
      }
    },
    knowsAbout: [
      'Luxury Home Leasing',
      'Las Vegas Luxury Real Estate',
      'Residential Lease Pricing',
      'Nevada Landlord-Tenant Law',
      'Home Selling'
    ]
  }
}

export function getWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Call Dr. Duffy',
    url: BASE_URL
  }
}

export function getPersonSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: DR_JAN_INFO.name,
    jobTitle: 'Licensed Real Estate Professional',
    description: `${DR_JAN_INFO.fullTitle}\n${DR_JAN_INFO.brokerage} | ${DR_JAN_INFO.location}\nLicense #${DR_JAN_INFO.licenseNumber}`,
    email: DR_JAN_INFO.email,
    url: BASE_URL,
    image: `${BASE_URL}/og-image.png`,
    sameAs: [],
    worksFor: {
      '@type': 'Organization',
      name: DR_JAN_INFO.brokerage
    },
    knowsAbout: [
      'Luxury Home Leasing',
      'Las Vegas Luxury Real Estate',
      'Home Selling'
    ]
  }
}

export function getArticleSchema({
  headline,
  description,
  datePublished,
  dateModified,
  image,
  author = getPersonSchema()
}: {
  headline: string
  description: string
  datePublished: string
  dateModified: string
  image?: string
  author?: any
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline,
    description,
    author,
    publisher: getOrganizationSchema(),
    datePublished,
    dateModified,
    image: image || `${BASE_URL}/og-image.png`,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': BASE_URL
    }
  }
}

export function getServiceSchema({
  name,
  description,
  provider = getLocalBusinessSchema(),
  areaServed = 'Las Vegas, NV',
  serviceType
}: {
  name: string
  description: string
  provider?: any
  areaServed?: string
  serviceType: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    provider,
    areaServed: {
      '@type': 'City',
      name: areaServed
    },
    serviceType,
    offers: {
      '@type': 'Offer',
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock'
    }
  }
}

export function getBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url
    }))
  }
}

export function getFAQSchema(faqs: Array<{ question: string; answer: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  }
}

export function getReviewSchema({
  author,
  rating,
  reviewBody,
  datePublished
}: {
  author: string
  rating: number
  reviewBody: string
  datePublished: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Review',
    author: {
      '@type': 'Person',
      name: author
    },
    reviewRating: {
      '@type': 'Rating',
      ratingValue: rating,
      bestRating: 5,
      worstRating: 1
    },
    reviewBody,
    datePublished
  }
}

export function getImageObjectSchema({
  contentUrl,
  description,
  width,
  height
}: {
  contentUrl: string
  description: string
  width?: number
  height?: number
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ImageObject',
    contentUrl,
    description,
    ...(width && height && { width, height }),
    license: `${BASE_URL}/license`
  }
}

