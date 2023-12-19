import React from 'react';
import { MdOutlineTouchApp } from 'react-icons/md';
import { LuPhoneCall } from 'react-icons/lu';
import { MdOutlineCarRental } from 'react-icons/md';
import Image from 'next/image';

const RentalProcess = () => {
  return (
    <>
      <section className='body-font mx-auto max-w-7xl text-gray-600'>
        <div className='mx-auto text-center'>
          <h3 className='pb-5 font-bold uppercase tracking-wide text-sky-500'>
            make it happen in 3 steps
          </h3>
          <h2 className='text-5xl font-bold tracking-wide text-sky-950/90'>How it Works</h2>
        </div>
        <div className='container mx-auto flex flex-wrap px-5 pb-16 pt-20'>
          <div className='flex w-full flex-wrap'>
            <div className='md:w-1/2 md:py-6 md:pr-10 lg:w-2/5'>
              <div className='relative flex pb-14'>
                <div className='absolute inset-0 flex h-full w-10 items-center justify-center'>
                  <div className='pointer-events-none h-full w-1 bg-gray-200' />
                </div>
                <div className='relative z-10 inline-flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-sky-500 text-white'>
                  <MdOutlineTouchApp className='h-6 w-6' />
                </div>
                <div className='flex-grow pl-4'>
                  <h2 className='title-font mb-1.5 text-base font-semibold tracking-wider text-sky-950'>
                    01. Choose your car
                  </h2>
                  <p className='text-lg leading-normal text-gray-600 md:max-w-xs'>
                    Explore our car selection and choose the perfect one for you.
                  </p>
                </div>
              </div>
              <div className='relative flex pb-14'>
                <div className='absolute inset-0 flex h-full w-10 items-center justify-center'>
                  <div className='pointer-events-none h-full w-1 bg-gray-200' />
                </div>
                <div className='relative z-10 inline-flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-sky-500 text-white'>
                  <LuPhoneCall className='h-5 w-6' />
                </div>
                <div className='flex-grow pl-4'>
                  <h2 className='title-font mb-1.5 text-base font-semibold tracking-wider text-sky-950'>
                    02. Contact us
                  </h2>
                  <p className='text-lg leading-normal text-gray-600 md:max-w-xs'>
                    Call or WhatsApp us to provide your details and confirm your booking.
                  </p>
                </div>
              </div>
              <div className='relative flex'>
                <div className='relative z-10 inline-flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-sky-500 text-white'>
                  <MdOutlineCarRental className='h-6 w-6' />
                </div>
                <div className='flex-grow pl-4'>
                  <h2 className='title-font mb-1.5 text-base font-semibold tracking-wider text-sky-950'>
                    03. Enjoy your ride
                  </h2>
                  <p className='text-lg leading-normal text-gray-600 md:max-w-xs'>
                    Pick your ride from our location and embark on a comfortable journey.
                  </p>
                </div>
              </div>
            </div>
            <Image
              className='mt-12 rounded-lg object-cover object-center shadow-lg md:mt-0 md:w-1/2 lg:w-3/5'
              width={500}
              height={500}
              src='/assets/rent-car-keys.jpg'
              alt='Rental Process'
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default RentalProcess;
