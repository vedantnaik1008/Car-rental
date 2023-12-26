import type { Metadata } from 'next';
import { Inter, Poppins } from 'next/font/google';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import './globals.css';
import GoToTop from '@/components/goToTop';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

const popins = Poppins({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-poppins',
  style:'normal',
});

const inter = Inter({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-inter',
  style: 'normal',
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
        className={`${inter.variable} ${popins.variable} font-pop_inter` }>
        <Header whiteBackground={false} />
        {children}
        <Footer />
        <GoToTop />
      </body>
    </html>
  );
}
