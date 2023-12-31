'use client';
import dynamic from 'next/dynamic';
import React from 'react';
import Hero from './Hero';
import RentalProcess from './RentalProcess';
import OurServices from './OurServices';

const FeaturedCars = dynamic(() => import('@/components/FeaturedCars'), {
  ssr: false,
});
const Testimonials = dynamic(() => import('@/components/Testimonials'), {
  ssr: false,
});

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
