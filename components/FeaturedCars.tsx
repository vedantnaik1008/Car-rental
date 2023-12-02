'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { BsFuelPumpFill } from 'react-icons/bs';
import { GoPeople } from 'react-icons/go';
import { ImMeter } from 'react-icons/im';
import { IoIosArrowDropleft, IoIosArrowDropright } from 'react-icons/io';
import { PiSteeringWheelBold } from 'react-icons/pi';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import { Cars, cars } from './API';

const FeaturedCars = () => {
  const [data, setData] = useState<Cars[]>(cars as Cars[]);

  const settings = {
    dots: true,
    infinite: true,
    autoplay: false,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: true,
    nextArrow: <IoIosArrowDropright color='rgb(14, 165, 233)' />,
    prevArrow: <IoIosArrowDropleft color='rgb(14, 165, 233)' />,
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1088,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
    ],
  };

  return (
    <>
      <section id='about' className='flex items-center justify-between bg-white py-20'>
        <div className='mx-auto w-[90%]'>
          <div className='mb-16 text-center'>
            <h3 className=' py-5 font-bold uppercase tracking-wide text-sky-500'>What we offer</h3>
            <h2 className='text-5xl font-bold tracking-wide text-sky-950 opacity-90'>
              Featured Cars
            </h2>
          </div>
          <div className=''>
            <Slider {...settings}>
              {data
                .map((res) => (
                  <div key={res.id} className='mb-8 w-[50%] rounded-[30px] p-5'>
                    <Image
                      src={res.image}
                      alt='items-image'
                      sizes='200'
                      width={200}
                      height={200}
                      className=' mx-auto mb-4 md:h-[250px]  w-[99%] rounded-lg object-cover'
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

                    <div className='grid grid-cols-2 items-center gap-4 text-gray-600'>
                      <p className='flex items-center gap-x-2 text-[14px]'>
                        <GoPeople size='20px' color='gray' />
                        {res.features.seats}
                      </p>
                      <p className='flex items-center gap-x-2 text-[14px]'>
                        <BsFuelPumpFill size='20px' color='gray' />
                        {res.features.fuel}
                      </p>
                      <p className='flex items-center gap-x-2 text-[14px]'>
                        <ImMeter size='20px' color='gray' />
                        {res.features.mileage}
                      </p>
                      <p className='flex items-center gap-x-2 text-[14px]'>
                        <PiSteeringWheelBold size='20px' color='gray' />
                        {res.features.gear}
                      </p>
                    </div>

                    <hr className='my-5 border border-slate-200' />
                    <div className='flex items-center gap-1 justify-between'>
                      <Link
                        href={'/'}
                        className=' rounded-lg bg-sky-500 px-4 py-2 sm:text-[11px] sm360:text-[14px] text-center text-white hover:bg-sky-600'>
                        Call to Book
                      </Link>
                      <Link
                        href={'/'}
                        className=' rounded-lg bg-green-500 px-4 py-2 sm:text-[11px] sm360:text-[14px] text-center text-white opacity-90 hover:bg-green-600'>
                        Book on WhatsApp
                      </Link>
                    </div>
                  </div>
                ))
                .splice(9)}
            </Slider>
          </div>
        </div>
      </section>
    </>
  );
};

export default FeaturedCars;
