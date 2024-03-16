import React from 'react';
import Link from 'next/link';
// import Image from 'next/image';
// import HeroImage from '../public/assets/hero-car.webp';
const Hero = () => {
	return (
		<>
			<section id='hero' className='sm600:bg-hero relative bg-cover bg-right-bottom bg-no-repeat mt-10 w-[95%] mx-auto rounded-xl h-[80vh]'>
				{/* <Image
          width={1023}
          height={1000}
          alt='hero-image'
          src={HeroImage}
          className='absolute inset-0 h-screen overflow-hidden bg-cover bg-right-bottom bg-no-repeat sm:block lg:hidden'
          priority
          placeholder='blur'
          sizes='100vw'
        /> */}
				<div className='sm600:bg-gradient-to-br sm600:backdrop-blur-[6px] sm600:block absolute inset-0 hidden from-white to-transparent lg:bg-gradient-to-r rounded-xl lg:backdrop-blur-none'></div>
				<div className='relative mx-auto max-w-screen-xl px-4 py-28 sm:flex sm:items-center sm:justify-center sm:px-6 min-[500px]:py-40 lg:justify-start lg:px-8'>
					<div className='ltr:sm:text -left max-w-xl text-center sm:mx-auto lg:mx-0 lg:text-left'>
						<h1 className='text-4xl font-extrabold md:text-5xl'>
							Book Your Ride
							<strong className='mt-3 block font-extrabold text-sky-700'>Now!</strong>
						</h1>

						<p className='mx-auto mt-6 max-w-lg text-xl/relaxed text-black'>
							Experience the joy of driving in Goa with our wide range of rental cars. Compact or
							spacious, find the perfect ride for your journey.
						</p>

						<div className='sm600:flex-row mx-auto mt-8 flex w-max flex-col justify-center gap-5 text-center md:w-auto lg:justify-start'>
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

				<div className='scroll-arrow'>
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
