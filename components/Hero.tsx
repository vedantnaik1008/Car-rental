import React from 'react';
import Link from 'next/link';

const Hero = () => {
  return (
    <section
      id='hero'
      className='relative bg-cover bg-right-bottom bg-no-repeat'
      style={{
        backgroundImage: `url(/assets/hero-car.png)`,
      }}>
      <div className='absolute inset-0 from-white to-transparent sm:bg-gradient-to-br sm:backdrop-blur-[6px] lg:bg-gradient-to-r lg:backdrop-blur-none'></div>
      <div className='relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8'>
        <div className='max-w-xl text-center sm:mx-auto ltr:sm:text-left lg:mx-0 lg:text-left'>
          <h1 className='text-3xl font-extrabold sm:text-5xl'>
            Book Your Ride
            <strong className='mt-3 block font-extrabold text-sky-500'>Now!</strong>
          </h1>

          <p className='mx-auto mt-6 max-w-lg text-black sm:text-xl/relaxed'>
            Experience the joy of driving in Goa with our wide range of rental cars. Compact or
            spacious, find the perfect ride for your journey.
          </p>

          <div className='mt-8 flex flex-wrap gap-5 text-center sm:justify-center lg:justify-start'>
            <Link
              href={'/'}
              className='block rounded bg-sky-500 px-12 py-3 text-sm font-medium text-white shadow-md transition-shadow duration-200 hover:bg-sky-600 hover:shadow-lg hover:shadow-sky-500/30 focus:outline-none focus-visible:ring active:bg-sky-500 sm:w-auto md:hover:mx-2 md:hover:px-10'>
              Browse Cars
            </Link>

            <Link
              href='/'
              className='block rounded bg-white px-12 py-3 text-sm font-medium text-black shadow-md transition-shadow duration-200 hover:bg-gray-100 hover:shadow-lg hover:shadow-gray-300 focus:outline-none focus-visible:ring active:text-sky-500 sm:w-auto sm:min-w-[180px] md:min-w-0 md:hover:mx-2 md:hover:px-10'>
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
