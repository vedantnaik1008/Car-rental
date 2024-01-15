import React from 'react';
import Link from 'next/link';
// import Image from 'next/image';
// import HeroImage from '../public/assets/hero-car.webp';
const Hero = () => {
  return (
    <>
      <section id='hero' className='relative bg-cover bg-right-bottom bg-no-repeat md:bg-hero'>
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
        <div className='absolute inset-0 from-white to-transparent sm:hidden sm:bg-gradient-to-br sm:backdrop-blur-[6px] md:block lg:bg-gradient-to-r lg:backdrop-blur-none'></div>
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

            <div className='mx-auto mt-8 flex w-max flex-col gap-5 text-center sm:justify-center md:w-auto md:flex-row lg:justify-start'>
              <Link
                href={'/'}
                className='active:bg-black-900/90 block w-full whitespace-nowrap rounded bg-black/95 px-10 py-3 text-sm font-medium text-white transition duration-300 ease-in-out hover:scale-95 hover:bg-black/90 focus:outline-none focus-visible:ring focus-visible:ring-black/70 md:w-auto lg:text-base'>
                Browse Cars
              </Link>

              <Link
                href='/'
                className='block w-full rounded bg-white px-10 py-3 text-sm font-medium text-black  transition  duration-300 ease-in-out hover:scale-95 hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-gray-200 active:bg-gray-100 active:text-black sm:border-[1px] sm:border-gray-300 md:w-auto lg:text-base'>
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
