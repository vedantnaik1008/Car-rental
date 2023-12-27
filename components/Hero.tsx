import React from 'react';
import Link from 'next/link';

const Hero = () => {
  return (
    <section id='hero' className='relative bg-hero bg-cover bg-right-bottom bg-no-repeat'>
      <div className='absolute inset-0 from-white to-transparent sm:bg-gradient-to-br sm:backdrop-blur-[6px] lg:bg-gradient-to-r lg:backdrop-blur-none'></div>
      <div className='relative mx-auto max-w-screen-xl px-4 py-28 sm:flex sm:items-center sm:justify-center sm:px-6 min-[500px]:py-40 lg:h-screen lg:justify-start lg:px-8'>
        <div className='ltr:sm:text -left max-w-xl text-center sm:mx-auto lg:mx-0 lg:text-left'>
          <h1 className='text-4xl font-extrabold md:text-5xl'>
            Book Your Ride
            <strong className='mt-3 block font-extrabold text-sky-700'>Now!</strong>
          </h1>

          <p className='mx-auto mt-6 max-w-lg text-xl/relaxed text-black'>
            Experience the joy of driving in Goa with our wide range of rental cars. Compact or
            spacious, find the perfect ride for your journey.
          </p>

          <div className='mt-8 flex flex-wrap gap-5 text-center max-[319px]:block max-[319px]:flex-nowrap max-[319px]:space-y-5 sm:justify-center lg:justify-start'>
            <Link
              href={'/'}
              className='block rounded bg-sky-900 px-10 py-3 text-sm font-medium text-white transition duration-200 ease-out hover:scale-95 focus:outline-none focus-visible:ring focus-visible:ring-sky-700 active:bg-sky-900/90 lg:text-base'>
              Browse Cars
            </Link>

            <Link
              href='/'
              className='block rounded bg-white px-10 py-3 text-sm font-medium text-black transition  duration-200 ease-out hover:scale-95 focus:outline-none focus-visible:ring focus-visible:ring-gray-200 active:text-black lg:text-base'>
              Contact Us
            </Link>
          </div>
        </div>
      </div>

      <div className='scroll-arrow'>
        <svg width='30px' height='20px'>
          <path
            stroke='#ffffff'
            fill='none'
            strokeWidth='2px'
            d='M2.000,5.000 L15.000,18.000 L28.000,5.000 '></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
