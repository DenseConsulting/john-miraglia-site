import React from 'react';
import { Helmet } from 'react-helmet-async';

export function StructuredData() {
  const legalServiceSchema = {
    '@context': 'https://schema.org',
    '@type': 'LegalService',
    name: 'John M. Miraglia, Ltd.',
    alternateName: 'Law Offices of John M. Miraglia',
    description:
      'Aggressive Chicago criminal defense attorney with over 24 years of experience defending clients facing serious felony charges including murder, drug offenses, DUI, sex crimes, and federal cases.',
    url: 'https://johnmiraglialaw.com/',
    telephone: '+1-312-829-2308',
    image: 'https://johnmiraglialaw.com/og-image.jpg',
    logo: 'https://johnmiraglialaw.com/favicon.png',
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '910 W. Van Buren St. #2S',
      addressLocality: 'Chicago',
      addressRegion: 'IL',
      postalCode: '60607',
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 41.8762,
      longitude: -87.6503,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
        ],
        opens: '09:00',
        closes: '17:00',
      },
    ],
    areaServed: {
      '@type': 'City',
      name: 'Chicago',
      sameAs: 'https://en.wikipedia.org/wiki/Chicago',
    },
    knowsLanguage: ['English', 'Spanish', 'Italian'],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Criminal Defense Legal Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Murder & Violent Crime Defense',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Drug Crime Defense',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'DUI Defense',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Sex Crime Defense',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Federal Criminal Defense',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Weapons Charges Defense',
          },
        },
      ],
    },
    founder: {
      '@type': 'Person',
      name: 'John M. Miraglia',
      jobTitle: 'Criminal Defense Attorney',
      url: 'https://johnmiraglialaw.com/',
      image: 'https://johnmiraglialaw.com/pasted-image.jpg',
    },
    sameAs: [
      'https://www.avvo.com/attorneys/60607-il-john-miraglia-1535847.html',
    ],
  };

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'John M. Miraglia, Ltd.',
    url: 'https://johnmiraglialaw.com/',
    description:
      'Official website of John M. Miraglia, an aggressive Chicago criminal defense attorney with over 24 years of trial experience.',
    publisher: {
      '@type': 'LegalService',
      name: 'John M. Miraglia, Ltd.',
    },
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(legalServiceSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(websiteSchema)}
      </script>
    </Helmet>
  );
}
