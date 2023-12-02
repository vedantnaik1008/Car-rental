'use client';
import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { TestimonialProps, testimonials } from './API';
import { IoIosArrowDropleft, IoIosArrowDropright } from 'react-icons/io';
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
    nextArrow: <IoIosArrowDropright color='rgb(14, 165, 233)' />,
    prevArrow: <IoIosArrowDropleft color='rgb(14, 165, 233)' />,
  };
  return (
    <>
      <section id='faqs' className='relative flex items-center justify-between bg-white py-20'>
        <div className='mx-auto w-[90%]'>
          <div className='mb-14 text-center'>
            <h2 className=' py-5 font-bold uppercase text-sky-500 '>Testimonials</h2>
            <h3 className='sm:text-2xl md:text-4xl font-bold text-sky-950 opacity-90'>
              What people say about us?
            </h3>
          </div>
          <div className='mx-auto md:w-[70%] lg:w-[60%]'>
            <ImQuotesLeft color='rgb(14, 165, 233)' size='32px' className='mx-auto mb-8' />
            <Slider {...settings}>
              {data.map((res) => (
                <div key={res.id} className='mb-5 w-full rounded-[30px]'>
                  <p className='mb-5 w-full text-center sm:text-xl md:text-3xl text-gray-500'>{res.comment}</p>
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
