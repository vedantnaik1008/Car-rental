import Hero from '@/components/Hero';
import RentalProcess from '@/components/RentalProcess';
import OurServices from '@/components//OurServices';
import FeaturedCars from '@/components/FeaturedCars';
import Testimonials from '@/components/Testimonials';
import Faqs from '@/components/Faqs';

export default function Home() {
  return (
    <>
      <main className='bg-accent'>
        <Hero />
        <OurServices />
        <RentalProcess />
        <FeaturedCars />
        <Testimonials />
        <Faqs />
      </main>
    </>
  );
}
