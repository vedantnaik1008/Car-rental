import Hero from './Hero';
import RentalProcess from './RentalProcess';
import OurServices from './OurServices';
import FeaturedCars from '@/components/FeaturedCars'
import Testimonials from '@/components/Testimonials'

const Main = () => {
  return (
    <>
      <main className='bg-accent'>
        <Hero />
        <OurServices />
        <RentalProcess />
        <FeaturedCars />
        <Testimonials />
      </main>
    </>
  );
};

export default Main;
