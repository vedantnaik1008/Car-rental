import React from 'react';
import Link from 'next/link';
const Hero = () => {
	return (
		<>
			<section
				id='hero'
				className='relative mx-auto mt-5 w-[95%] rounded-xl bg-hero bg-cover bg-center bg-no-repeat'>
				<div className=' absolute inset-0 block rounded-xl bg-black opacity-40 '></div>
				<div className='relative mx-auto py-10 sm:flex sm:items-center sm:justify-center sm:px-6 min-[500px]:py-40 lg:justify-start lg:pl-8'>
					<div className='ltr:sm:text max-w-xl text-center sm:mx-auto lg:mx-0 lg:text-left'>
						<h1 className='text-4xl font-extrabold text-white md:text-5xl'>
							Book Your Ride
							<strong className=' font-extrabold text-sky-500'> Now!</strong>
						</h1>

						<p className='mx-auto mt-6 max-w-lg text-white text-xl/relaxed'>
							Experience the joy of driving in Goa with our wide range of rental cars. Compact or
							spacious, find the perfect ride for your journey.
						</p>

						<div className='mx-auto mt-8 flex w-max flex-col justify-center gap-5 text-center sm600:flex-row md:w-auto lg:justify-start'>
							{/* <Link
                href={'/browse-cars'}
                className='inline-block w-full whitespace-nowrap rounded bg-black/95 px-10 py-3 text-sm font-medium text-white transition duration-300 ease-in-out hover:scale-95 hover:bg-black/90 focus:outline-none focus-visible:ring focus-visible:ring-black/70 active:bg-black/90 md:w-auto lg:text-base'>
                Browse Cars
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
              </Link> */}

							<Link
								href={'/browse-cars'}
								className='inline-block w-full animate-shimmer  items-center justify-center whitespace-nowrap rounded bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-10 py-3 text-sm font-medium text-slate-200 transition duration-300 ease-in-out hover:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-400  focus-visible:ring-offset-2 focus-visible:ring-offset-slate-50 md:w-auto lg:text-base'>
								Browse Cars
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

							<Link
								href='/'
								className='inline-block w-full rounded border-[1px] border-gray-300 bg-white px-10 py-3 text-sm  font-medium  text-black transition duration-300 ease-in-out hover:scale-95  hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-gray-200 active:bg-gray-50 active:text-black md:w-auto lg:text-base'>
								Contact Us
							</Link>
						</div>
					</div>
				</div>

				<div className='scroll-arrow hidden sm600:block'>
					<svg width='30px' height='20px'>
						<path
							className='stroke-black md:stroke-white'
							fill='none'
							strokeWidth='2px'
							d='M2.000,5.000 L15.000,18.000 L28.000,5.000 '></path>
					</svg>
				</div>
			</section>
		</>
	);
};

export default Hero;
