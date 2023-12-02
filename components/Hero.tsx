import React from 'react';
import Container from './Container';
import Image from 'next/image';
import heroImage from '@/public/assets/banner-img.png';
const Hero = () => {
  return (
    <>
      <div id='home' className='bg-white'>
        <Container>
          <div className='flex w-full flex-col sm:items-center sm:justify-center md:items-start md:justify-start'>
            <h1 className='font-extrabold tracking-wide text-sky-950 opacity-90 sm:text-center sm:text-4xl md:max-w-[700px] md:text-start lg:text-5xl xl:text-7xl'>
              Book your Ride Now!
            </h1>
            <p className='my-7 text-sky-950 sm:text-center md:max-w-[400px] md:text-start'>
              Rent a car by exploring our wide selection of vehicles
            </p>
            <button className='rounded-lg bg-blue-300 bg-opacity-90 px-8 py-3 uppercase tracking-wide text-black hover:bg-blue-300 hover:opacity-100'>
              Explore
            </button>
          </div>
          <div className=''>
            <Image
              priority={true}
              alt='Hero-image'
              width={900}
              height={900}
              className='sm:hidden md:block'
              src={heroImage}
            />
          </div>
        </Container>
      </div>
    </>
  );
};

export default Hero;
