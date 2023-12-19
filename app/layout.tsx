import type { Metadata } from 'next';
import { Inter, Poppins } from 'next/font/google';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import './globals.css';
import GoToTop from '@/components/goToTop';

const popins = Poppins({
  subsets: ['latin'],
  weight: '400',
});

const inter = Inter({
  subsets: ['latin'],
  weight: '400',
});

export const metadata: Metadata = {
  title: 'car rental goa',
  description:
    'We are a Goa-based car rental service offering a wide range of affordable rental cars for short and long term rent. Our goal is to provide our customers with the best car rental experience at competitive prices. Browse through our large fleet of well-maintained cars and book online easily. We strive to give you an enjoyable and hassle-free rental experience.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body
        style={{ fontFamily: `${inter.style.fontFamily}, ${popins.style.fontFamily}, sans-serif` }}>
        <Header whiteBackground={false} />
        {children}
        <Footer />
        <GoToTop />
      </body>
    </html>
  );
}
