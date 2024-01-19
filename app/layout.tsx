import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import './globals.css';
import GoToTop from '@/components/goToTop';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

const popins = Poppins({
  subsets: ['latin'],
  weight: '400',
  fallback: ['system-ui', 'arial'],
  variable: '--font-poppins',
  style: 'normal',
});


export const metadata: Metadata = {
  title: 'OwnWheelz.com',
  description:
    'OwnWheelz is a premier rental service based in Goa, offering a comprehensive range of transportation solutions. Our services include short-term and long-term car rentals, bike rentals, and reliable cab services. We pride ourselves on our extensive and well-maintained fleet, competitive pricing, and commitment to customer satisfaction. With a user-friendly online booking system, customers can effortlessly browse and select the vehicle that best suits their needs. OwnWheelz is committed to providing a seamless rental experience, offering car, bike, and cab or taxi services tailored to your needs.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className={`${popins.className} bg-accent`}>
        <Header />
        {children}
        <GoToTop />
        <Footer />
      </body>
    </html>
  );
}
