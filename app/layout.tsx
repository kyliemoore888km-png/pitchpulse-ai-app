import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'PitchPulse AI',
  description: 'Personalized AI outreach for B2B sales teams.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
