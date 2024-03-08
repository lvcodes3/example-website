import type { Metadata } from 'next';
import { Inter, Outfit } from 'next/font/google';

import './globals.css';

import { Navbar } from './_components/navbar';
import { Footer } from './_components/footer';
import { Hero } from './_components/hero';

const inter = Inter({ subsets: ['latin'] });
const outfit = Outfit({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Edusity',
  description: 'Next.js 14 Web App',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={outfit.className}>
        <Navbar />
        <Hero />
        {children}
        <Footer />
      </body>
    </html>
  );
};
