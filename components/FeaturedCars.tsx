'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Cars, cars } from '../data/API';
import { BsFuelPumpFill, GoPeople, ImMeter, PiSteeringWheelBold } from '@/lib/ReactIcons';

const FeaturedCars = () => {
  return (
    <>
      <section id='about' className='flex items-center justify-between py-20'>
        <div className='mx-auto w-[90%]'>
          <div className='mb-5 text-center'>
            <h3 className=' py-5 font-bold uppercase tracking-wide text-sky-500'>What we offer</h3>
            <h2 className='sm:text-4xl md:text-5xl font-bold tracking-wide text-sky-950/90'>
              Featured Cars
            </h2>
          </div>
          <div className='flex flex-wrap gap-10 justify-center items-center'>
              {cars
                .map((res: Cars) => (
                  <div key={res.id} className='w-[300px] rounded-[30px] py-5 outline-none'>
                    <Image
                      src={res.image}
                      alt='items-image'
                      sizes='200'
                      width={200}
                      height={200}
                      className=' mx-auto mb-4 h-[250px] w-full rounded-lg object-contain object-center'
                    />
                    <div className='mb-5 font-semibold tracking-wide text-sky-950'>
                      <p className='mb-2 text-sky-950'>
                        {res.brandName} {res.model}
                      </p>
                      <p className='text-sky-500'>
                        {res.price}
                        <span className='font-normal text-gray-600'>/day</span>
                      </p>
                    </div>
                    <div className='grid grid-cols-2 items-center gap-x-12 gap-y-4 text-gray-600'>
                      <p className='flex items-center gap-x-2 text-[14px]'>
                        <GoPeople size='20px' color='gray' />
                        {res.features.seats}
                      </p>
                      <p className='flex items-center gap-x-2 pl-[2px] text-[14px]'>
                        <BsFuelPumpFill size='20px' color='gray' />
                        {res.features.fuel}
                      </p>
                      <p className='flex items-center gap-x-2 text-[14px]'>
                        <ImMeter size='20px' color='gray' />
                        {res.features.mileage}
                      </p>
                      <p className='flex items-center gap-x-2 text-[14px]'>
                        <PiSteeringWheelBold size='20px' color='gray' className='shrink-0' />
                        <span className='truncate'>{res.features.gear}</span>
                      </p>
                    </div>
                    <hr className='my-5 border border-slate-200' />
                    <div className='flex flex-col items-center justify-between gap-5'>
                      <Link
                        href={'/'}
                        className='w-full rounded-xl bg-sky-950/90 px-8 py-2.5 text-center text-sm font-semibold text-white transition-shadow duration-200 hover:bg-sky-950/85 focus:outline-none focus-visible:ring focus-visible:ring-sky-700'>
                        Call to Book
                      </Link>
                      <Link
                        href={'/'}
                        className='w-full rounded-xl bg-emerald-500 px-8 py-2.5 text-center text-sm font-semibold text-white transition-shadow duration-200 hover:bg-emerald-500/90  focus:outline-none focus-visible:ring focus-visible:ring-emerald-600'>
                        Book on WhatsApp
                      </Link>
                    </div>
                  </div>
                ))
                .splice(4, 4)}
          </div>
          <div className='mt-10 flex justify-center'>
            <Link
              href={'/browse-cars'}
              className='inline-block rounded-xl  border border-gray-300 bg-white px-8 py-2 text-base  text-black transition duration-200 ease-out hover:scale-105 hover:bg-gray-50  focus:outline-none focus-visible:ring focus-visible:ring-gray-500'>
              Explore Our Fleet
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default FeaturedCars;
