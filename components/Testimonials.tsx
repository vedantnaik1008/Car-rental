'use client';
import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { TestimonialProps, testimonials } from './API';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { ImQuotesLeft } from 'react-icons/im';

const Testimonials = () => {
  const [data] = useState<TestimonialProps[]>(testimonials as TestimonialProps[]);

  const settings = {
    dots: true,
    infinite: true,
    autoplay: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <IoIosArrowForward color='rgb(203, 213, 225)' />,
    prevArrow: <IoIosArrowBack color='rgb(203, 213, 225)' />,
  };
  return (
    <>
      <section id='faqs' className='relative flex items-center justify-between py-10'>
        <div className='mx-auto sm:w-4/5 md:w-[90%]'>
          <div className='mb-7 text-center'>
            <h2 className=' py-5 font-bold uppercase tracking-wide text-sky-500'>Testimonials</h2>
            <h3 className='text-4xl font-bold tracking-wide text-sky-950 opacity-90'>
              What people say about us?
            </h3>
          </div>
          <div className='mx-auto mb-12 max-[320px]:w-36 md:w-[60%] lg:w-[70%]'>
            <ImQuotesLeft color='rgb(14, 165, 233)' size='30px' className='mx-auto mb-8' />
            <Slider {...settings}>
              {data.map((res) => (
                <div key={res.id} className='w-full rounded-[30px] pb-5'>
                  <p className='w-full pb-5 text-center text-gray-500 sm:text-lg md:text-xl'>
                    {res.comment}
                  </p>
                  <p className='text-center text-sky-950'>{res.user}</p>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonials;
