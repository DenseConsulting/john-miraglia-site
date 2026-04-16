import type { Metadata } from 'next';
import { CaseStrategiesHero } from '@/components/case-strategies/CaseStrategiesHero';
import { CaseStrategiesNav } from '@/components/case-strategies/CaseStrategiesNav';
import { ResultsBar } from '@/components/case-strategies/ResultsBar';
import { StrategicMethods } from '@/components/case-strategies/StrategicMethods';
import { CaseTypes } from '@/components/case-strategies/CaseTypes';
import { TrialPhilosophy } from '@/components/case-strategies/TrialPhilosophy';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Case Strategies & Results | John Miraglia - Chicago Criminal Defense',
  description:
    'Learn how Chicago criminal defense attorney John Miraglia builds winning case strategies through relentless investigation, expert witnesses, and trial-tested methods.',
  alternates: {
    canonical: 'https://johnmiraglialaw.com/case-strategies',
  },
  openGraph: {
    title: 'Case Strategies & Results | John Miraglia - Chicago Criminal Defense',
    description:
      'Learn how Chicago criminal defense attorney John Miraglia builds winning case strategies through relentless investigation, expert witnesses, and trial-tested methods.',
    url: 'https://johnmiraglialaw.com/case-strategies',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'John M. Miraglia - Case Strategies',
      },
    ],
  },
  twitter: {
    title: 'Case Strategies & Results | John Miraglia - Chicago Criminal Defense',
    description:
      'Learn how Chicago criminal defense attorney John Miraglia builds winning case strategies through relentless investigation, expert witnesses, and trial-tested methods.',
    images: ['/og-image.jpg'],
  },
};

export default function CaseStrategiesPage() {
  return (
    <div className="min-h-screen bg-white font-body antialiased selection:bg-gold-500 selection:text-navy-900">
      <CaseStrategiesNav />
      <CaseStrategiesHero />
      <ResultsBar />
      <StrategicMethods />
      <CaseTypes />
      <TrialPhilosophy />
      <Contact />
      <Footer />
    </div>
  );
}
