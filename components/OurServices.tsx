import React from 'react';
import { MdOutlineCarRental } from 'react-icons/md';
import { LiaTaxiSolid } from 'react-icons/lia';
import { RiMotorbikeLine } from 'react-icons/ri';
import Link from 'next/link';

const OurServices = () => {
  return (
    // <section className='py-14'>
    //   <div className='mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-20'>
    //     <div className='mx-auto max-w-lg text-center'>
    //       <h3 className='font-semibold  tracking-wide text-sky-500'>
    //         Your Journey, Your Choice: <span className='uppercase'>Car, Bike, or Taxi</span>.
    //       </h3>
    //       <h2 className='mt-4 font-bold tracking-wide text-sky-950/90 sm:text-4xl md:text-5xl'>
    //         Our Services
    //       </h2>
    //     </div>
    //     <div className='mt-14 grid grid-cols-1 place-items-center gap-10 md:grid-cols-2 lg:grid-cols-3'>
    //       <div className='block rounded-xl border border-cyan-500/10 p-10 text-center shadow-xl shadow-cyan-500/10 focus:outline-none focus-visible:ring sm:w-4/5 md:w-auto'>
    //         <MdOutlineCarRental color='' className='mx-auto h-10 w-10 text-sky-500' />
    //         <h2 className='my-5 text-xl font-bold tracking-wide text-gray-800'>Rent a Car</h2>
    //         <p className='text-gray-600'>
    //           &quot;Experience the freedom of the open road with our premium car rental services.
    //           Drive with confidence in Goa&apos;s stunning landscapes.&quot;
    //         </p>
    //         <Link
    //           href={'/'}
    //           className='mx-auto mt-6 block w-full rounded bg-sky-500 px-12 py-2 font-medium text-white transition-shadow duration-200 hover:bg-sky-600 hover:shadow-lg hover:shadow-sky-500/20 focus:outline-none focus-visible:ring active:bg-sky-500'>
    //           Browse Cars
    //         </Link>
    //       </div>
    //       <div className='block rounded-xl border border-cyan-500/10 p-10 text-center shadow-xl shadow-cyan-500/10 focus:outline-none focus-visible:ring sm:w-4/5 md:w-auto'>
    //         <RiMotorbikeLine className='mx-auto h-10 w-10 text-sky-500' />
    //         <h2 className='my-5 text-xl font-bold tracking-wide text-gray-800'>Rent a Bike</h2>
    //         <p className='text-gray-600'>
    //           &quot;Embrace the thrill of the open road on two wheels with our bike rental services.
    //           Ride with the wind in Goa&apos;s beautiful landscapes.&quot;
    //         </p>
    //         <Link
    //           href={'/'}
    //           className='mx-auto mt-6 block w-full rounded bg-sky-500 px-12 py-2 font-medium text-white transition-shadow duration-200 hover:bg-sky-600 hover:shadow-lg hover:shadow-sky-500/20 focus:outline-none focus-visible:ring active:bg-sky-500'>
    //           Call to Book
    //         </Link>
    //       </div>
    //       <div className='block rounded-xl border border-cyan-500/10 p-10 text-center shadow-xl shadow-cyan-500/10 focus:outline-none focus-visible:ring sm:w-4/5 md:w-auto md:translate-x-1/2 lg:translate-x-0'>
    //         <LiaTaxiSolid className='mx-auto h-10 w-10 text-sky-500' />
    //         <h2 className='my-5 text-xl font-bold tracking-wide text-gray-800'>Book a Cab</h2>
    //         <p className='text-gray-600'>
    //           &quot;Need a reliable cab service in Goa? Our booking platform ensures a smooth and
    //           hassle-free ride to your destination.&quot;
    //         </p>
    //         <Link
    //           href={'/'}
    //           className='mx-auto mt-6 block w-full rounded bg-sky-500 px-12 py-2 font-medium text-white transition-shadow duration-200 hover:bg-sky-600 hover:shadow-lg hover:shadow-sky-500/20 focus:outline-none focus-visible:ring active:bg-sky-500'>
    //           Call to Book
    //         </Link>
    //       </div>
    //     </div>
    //   </div>
    // </section>

    <section className='py-14' id='OurServices'>
      <div className='mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-20'>
        <div className='mx-auto max-w-lg text-center'>
          <h3 className='font-semibold  tracking-wide text-sky-500'>
            Your Journey, Your Choice: <span className='uppercase'>Car, Bike, or Taxi</span>.
          </h3>
          <h2 className='mt-4 font-bold tracking-wide text-sky-950/90 sm:text-4xl md:text-5xl'>
            Our Services
          </h2>
        </div>
        <div className='mt-14 grid grid-cols-1 place-items-center gap-10 md:grid-cols-2 lg:grid-cols-3'>
          <div className='block rounded-lg border border-sky-900/10 bg-white  p-10 shadow-lg shadow-sky-900/20 focus:outline-none focus-visible:ring sm:w-4/5 md:w-auto'>
            <div className='w-fit rounded-md bg-sky-900/90 p-3 shadow-lg shadow-sky-900/20'>
              <MdOutlineCarRental className='h-7 w-7 text-gray-200' />
            </div>
            <h2 className='my-5 pt-1 text-xl font-bold tracking-wide text-gray-800'>Rent a Car</h2>
            <p className='tracking-wide text-gray-600'>
              &quot;Experience the freedom of the open road with our premium car rental services.
              Drive with confidence in Goa&apos;s stunning landscapes.&quot;
            </p>
            <Link
              href={'/'}
              className='mt-6 block w-max rounded bg-sky-400 px-3 py-1.5 text-center text-[15px] font-medium tracking-wide text-white transition-shadow duration-200 hover:bg-sky-900 hover:shadow-lg hover:shadow-sky-500/20 focus:outline-none focus-visible:ring focus-visible:ring-sky-500 active:bg-sky-900'>
              Browse Cars
            </Link>
          </div>
          <div
            id='rent-a-bike'
            className='block rounded-lg border border-sky-900/10 bg-white  p-10 shadow-lg shadow-sky-900/20 focus:outline-none focus-visible:ring sm:w-4/5 md:w-auto'>
            <div className='w-fit rounded-md bg-sky-900/90 p-3 shadow-lg shadow-sky-900/20'>
              <RiMotorbikeLine className='h-7 w-7 text-gray-200' />
            </div>
            <h2 className='my-5 pt-1 text-xl font-bold tracking-wide text-gray-800'>Rent a Bike</h2>
            <p className='tracking-wide text-gray-600'>
              &quot;Embrace the thrill of the open road on two wheels with our bike rental services.
              Ride with the wind in Goa&apos;s beautiful landscapes.&quot;
            </p>
            <Link
              href={'/'}
              className='mt-6 block w-max rounded bg-sky-400 px-3 py-1.5 text-center text-[15px] font-medium tracking-wide text-white transition-shadow duration-200 hover:bg-sky-900 hover:shadow-lg hover:shadow-sky-500/20 focus:outline-none focus-visible:ring focus-visible:ring-sky-500 active:bg-sky-900'>
              Call to Book
            </Link>
          </div>
          <div
            id='book-a-cab'
            className='block rounded-lg border border-sky-900/10 bg-white  p-10 shadow-lg shadow-sky-900/20 focus:outline-none focus-visible:ring sm:w-4/5 md:w-auto md:translate-x-1/2 lg:translate-x-0'>
            <div className='w-fit rounded-md bg-sky-900/90 p-3 shadow-lg shadow-sky-900/20'>
              <LiaTaxiSolid className='h-7 w-7 text-gray-200' />
            </div>
            <h2 className='my-5 pt-1 text-xl font-bold tracking-wide text-gray-800'>Book a Cab</h2>
            <p className='tracking-wide text-gray-600'>
              &quot;Need a reliable cab service in Goa? Our booking platform ensures a smooth and
              hassle-free ride to your destination.&quot;
            </p>
            <Link
              href={'/'}
              className='mt-6 block w-max rounded bg-sky-400 px-3 py-1.5 text-center text-[15px] font-medium tracking-wide text-white transition-shadow duration-200 hover:bg-sky-900 hover:shadow-lg hover:shadow-sky-500/20 focus:outline-none focus-visible:ring focus-visible:ring-sky-500 active:bg-sky-900'>
              Call to Book
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurServices;
