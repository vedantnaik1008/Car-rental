'use client';

import React from 'react';
import Hero from './Hero';
import RentalProcess from './RentalProcess';
import dynamic from 'next/dynamic';

const FeaturedCars = dynamic(() => import('@/components/FeaturedCars'), {
  ssr: false,
});
const Testimonials = dynamic(() => import('@/components/Testimonials'), {
  ssr: false,
});

const Main = () => {
  return (
    <>
      <Hero />
      <RentalProcess />
      <FeaturedCars />
      <Testimonials />
    </>
  );
};

export default Main;
