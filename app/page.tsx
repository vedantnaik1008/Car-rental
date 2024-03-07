import Hero from '@/components/Hero';
import RentalProcess from '@/components/RentalProcess';
import OurServices from '@/components//OurServices';
import FeaturedCars from '@/components/FeaturedCars';
import {Testimonials} from '@/components/Testimonials';
import Faqs from '@/components/Faqs';
// import { Poppins } from 'next/font/google';

// const popins = Poppins({
// 	subsets: ['latin'],
// 	weight: '400',
// 	variable: '--font-poppins',
// 	style: 'normal',
// });
// ${popins.variable}
export default function Home() {
  return (
		<>
			<main className={`bg-accent`}>
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
