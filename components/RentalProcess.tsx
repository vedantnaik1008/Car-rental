import React from 'react';
import { MdOutlineTouchApp } from 'react-icons/md';
import { LuPhoneCall } from 'react-icons/lu';
import { MdOutlineCarRental } from 'react-icons/md';

const RentalProcess = () => {
  return (
    <>
      <section
        id='services'
        className='mx-auto flex items-center justify-between bg-[#f6fdff]  py-20'>
        <div className='mx-auto w-[90%] max-w-7xl'>
          <div className='mb-14 text-center'>
            <h3 className='pb-5 font-bold uppercase tracking-wide text-sky-500'>
              make it happen in 3 steps
            </h3>
            <h2 className='text-5xl font-bold tracking-wide text-sky-950 opacity-90'>
              How it Works
            </h2>
          </div>
          <div className='flex flex-wrap gap-6 sm:items-center sm:justify-center md:justify-between'>
            <div className='flex flex-col items-center justify-center'>
              <div className='mb-7 rounded-full bg-sky-700 p-5 text-white'>
                <MdOutlineTouchApp size='32px' />
              </div>
              <h3 className='mb-4 text-lg font-bold tracking-wide text-gray-800'>
                01. Choose your car
              </h3>
              <p className='max-w-[300px] text-center text-sm text-gray-600'>
                Explore our car selection and choose the perfect one for you.
              </p>
            </div>
            <div className='flex flex-col items-center justify-center'>
              <div className='mb-7 rounded-full bg-sky-700 p-5 text-white'>
                <LuPhoneCall size='32px' color='' />
              </div>
              <h3 className='mb-4 text-lg font-bold tracking-wide text-gray-800'>02. Contact us</h3>
              <p className='max-w-[300px] text-center text-sm text-gray-600'>
                Call or WhatsApp us to provide your details and confirm your booking.
              </p>
            </div>
            <div className='flex flex-col items-center justify-center'>
              <div className='mb-7 rounded-full bg-sky-700 p-5 text-white'>
                <MdOutlineCarRental size='32px' color='' />
              </div>
              <h3 className='mb-4 text-lg font-bold tracking-wide text-gray-800'>
                03. Enjoy your ride
              </h3>
              <p className='max-w-[300px] text-center text-sm text-gray-600'>
                Pick your ride from our location and embark on a comfortable journey.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default RentalProcess;
