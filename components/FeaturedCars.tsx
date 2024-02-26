'use client';
import Link from 'next/link';
import { Cars, cars } from '../data/API';
import Cards from '@/components/Cards';

const FeaturedCars = () => {
	return (
		<>
			<section id='about' className='flex items-center justify-between py-20'>
				<div className='mx-auto w-[90%]'>
					<div className='mb-5 text-center'>
						<h3 className=' py-5 font-bold uppercase tracking-wide text-sky-500'>What we offer</h3>
						<h2 className='font-bold tracking-wide text-sky-950/90 sm:text-4xl md:text-5xl'>
							Featured Cars
						</h2>
					</div>
					<div className='grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 py-5'>
						{cars
							.map((res: Cars) => (
								<Cards res={res} key={res.id}/>
							))
							.splice(4, 4)}
					</div>
					<div className='mt-10 flex justify-center'>
						<Link
							href={'/browse-cars'}
							className='inline-block rounded-xl  border border-gray-300 bg-white px-6 py-3 text-xl font-medium text-black transition duration-200 ease-out hover:scale-105  hover:bg-gray-50 hover:font-semibold hover:text-black/80 focus:outline-none focus-visible:ring focus-visible:ring-gray-500  lg:px-8 lg:py-4 lg:text-2xl'>
							Explore Our Fleet
							<svg
								xmlns='http://www.w3.org/2000/svg'
								viewBox='0 0 20 20'
								fill='currentColor'
								className='ml-1 inline h-5 w-5'>
								<path
									fillRule='evenodd'
									d='M2 10a.75.75 0 0 1 .75-.75h12.59l-2.1-1.95a.75.75 0 1 1 1.02-1.1l3.5 3.25a.75.75 0 0 1 0 1.1l-3.5 3.25a.75.75 0 1 1-1.02-1.1l2.1-1.95H2.75A.75.75 0 0 1 2 10Z'
									clipRule='evenodd'
								/>
							</svg>
						</Link>
					</div>
				</div>
			</section>
		</>
	);
};

export default FeaturedCars;
