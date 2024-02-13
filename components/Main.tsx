import Hero from './Hero';
import RentalProcess from './RentalProcess';
import OurServices from './OurServices';
import FeaturedCars from '@/components/FeaturedCars'
import Testimonials from '@/components/Testimonials'
import Faqs from './Faqs';

const Main = () => {
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
};

export default Main;
