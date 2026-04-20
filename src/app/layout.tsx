import type { Metadata } from 'next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://johnmiraglialaw.com'),
  title: {
    default: 'Criminal Defense Attorney - John Miraglia | Chicago, IL',
    template: '%s | John Miraglia Law',
  },
  description:
    'John Miraglia is an aggressive Chicago criminal defense attorney with 24+ years of experience defending clients facing serious felony charges. Available 24/7. Call (312) 829-2308.',
  authors: [{ name: 'John M. Miraglia, Ltd.' }],
  robots: { index: true, follow: true },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://johnmiraglialaw.com/',
    siteName: 'John M. Miraglia, Ltd.',
    title: 'Criminal Defense Attorney - John Miraglia | Chicago, IL',
    description:
      'John Miraglia is an aggressive Chicago criminal defense attorney with 24+ years of experience defending clients facing serious felony charges. Available 24/7. Call (312) 829-2308.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'John M. Miraglia - Chicago Criminal Defense Attorney',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Criminal Defense Attorney - John Miraglia | Chicago, IL',
    description:
      'John Miraglia is an aggressive Chicago criminal defense attorney with 24+ years of experience defending clients facing serious felony charges. Available 24/7. Call (312) 829-2308.',
    images: ['/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://johnmiraglialaw.com/',
  },
  other: {
    'geo.region': 'US-IL',
    'geo.placename': 'Chicago',
    'geo.position': '41.8762;-87.6503',
    ICBM: '41.8762, -87.6503',
  },
};

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
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
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
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Murder & Violent Crime Defense' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Drug Crime Defense' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'DUI Defense' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Sex Crime Defense' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Federal Criminal Defense' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Weapons Charges Defense' } },
    ],
  },
  founder: {
    '@type': 'Person',
    name: 'John M. Miraglia',
    jobTitle: 'Criminal Defense Attorney',
    url: 'https://johnmiraglialaw.com/',
    image: 'https://johnmiraglialaw.com/pasted-image.jpg',
  },
  sameAs: ['https://www.avvo.com/attorneys/60607-il-john-miraglia-1535847.html'],
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-LZMTYN0WRJ"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-LZMTYN0WRJ');
            `,
          }}
        />
        <link rel="icon" type="image/png" href="/favicon.png" />
        <link rel="shortcut icon" href="/favicon.png" />
        <link rel="apple-touch-icon" href="/favicon.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(legalServiceSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body>
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
