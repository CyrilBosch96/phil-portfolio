import type {Metadata} from 'next';
import {Playfair_Display, Poppins} from 'next/font/google';
import './globals.css';

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair-display',
  display: 'swap',
});

const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins',
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Philip Clements Samuelraj - Portfolio',
  description:
    'Portfolio website showcasing the accomplishments of Philip Clements Samuelraj.',
  metadataBase: new URL('https://yourdomain.com'), // Replace with your actual domain
  openGraph: {
    images: '/images/profile.jpg', // Replace with a relevant image
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/images/profile.jpg'], // Replace with a relevant image
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfairDisplay.variable} ${poppins.variable}`}>
      <body className="bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}

