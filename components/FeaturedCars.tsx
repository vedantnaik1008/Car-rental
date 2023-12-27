'use client';
import Image from 'next/image';
import { cars, Cars } from "@/data/API";
import Link from "next/link";
import { BsFuelPumpFill } from "react-icons/bs";
import { GoPeople } from "react-icons/go";
import { ImMeter } from "react-icons/im";
import { PiSteeringWheelBold } from "react-icons/pi";

const FeaturedCars = () => {

  return (
    <>
      <section id='about' className='flex items-center justify-between overflow-hidden py-20'>
        <div className='mx-auto w-[90%]'>
          <div className='mb-5 text-center'>
            <h3 className=' py-5 font-bold uppercase tracking-wide text-sky-500'>What we offer</h3>
            <h2 className='text-5xl font-bold tracking-wide text-sky-950/90'>Featured Cars</h2>
          </div>
          <div className='flex w-full snap-x snap-mandatory scrollbar overflow-y-hidden overflow-x-scroll'>
            {cars
              .map((res: Cars) => (
                <div key={res.id} className='w-screen md:w-[50%] lg:w-[40%] xl:w-[30%] flex-shrink-0 snap-center flex flex-col items-center justify-center'>
                  <div className='rounded-[30px] px-8 py-5 outline-none'>
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
                        <PiSteeringWheelBold size='20px' color='gray' />
                        <span className='md:truncate'>{res.features.gear}</span>
                      </p>
                    </div>
                    <hr className='my-5 border border-slate-200' />
                    <div className='flex flex-col items-center justify-between gap-5'>
                      <Link
                        href={'/'}
                        className='w-full rounded-md bg-sky-500 px-8 py-2 text-center text-sm font-semibold text-white transition-shadow duration-200 hover:bg-sky-600 hover:shadow-lg hover:shadow-sky-500/20 focus:outline-none focus-visible:ring focus-visible:ring-sky-600'>
                        Call to Book
                      </Link>
                      <Link
                        href={'/'}
                        className='w-full rounded-md bg-green-500/95 px-8 py-2 text-center text-sm font-semibold text-white transition-shadow duration-200 hover:bg-green-600 hover:shadow-lg hover:shadow-green-200/60 focus:outline-none focus-visible:ring focus-visible:ring-green-600'>
                        Book on WhatsApp
                      </Link>
                    </div>
                  </div>
                </div>
              ))
              .splice(9)}
          </div>
        </div>
      </section>
    </>
  );
};

export default FeaturedCars;
