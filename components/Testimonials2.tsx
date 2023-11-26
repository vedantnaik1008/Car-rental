'use client'
import React, { useState } from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { TestimonialProps, testimonials } from './API';
import Image from 'next/image';
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle} from "react-icons/io";
import image from "@/public/assets/testimonial-asset.png"

const Testimonials2 = () => {
    const [data, setData] = useState<TestimonialProps[]>(testimonials as TestimonialProps[])

    const settings = {
        dots: true,
        infinite: true,
        autoplay: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
         nextArrow: <IoIosArrowDroprightCircle  color="blue"/>,
         prevArrow: <IoIosArrowDropleftCircle  color="blue"/>,
      };
  return (
    <>
       <section id="faqs"  className="bg-[#ffd700] flex justify-between items-center py-40 relative">
        <div className="w-[90%] mx-auto">
            <div className="text-center mb-14"> 
                <h2 className=" font-bold text-[#1089ff] py-5 uppercase ">Testimonials</h2>
                <p className="text-[#2f4d6a] text-5xl font-bold">What people say about us?</p>
            </div>
            <div className="md:w-[70%] lg:w-[50%] mx-auto">
            <Slider {...settings}>
                {data.map((res) => (
                    <div key={res.id} className="text-black rounded-[30px] w-full">
                        <p className="mb-5 text-2xl text-center w-full">{res.comment}</p>
                        <p className="text-center">{res.user}</p>
                    </div>
                ))} 
            </Slider>
            </div>
            <Image src={image} alt="items-image" width={200} height={200} className="rounded-lg object-cover mb-3  mx-auto absolute right-0 top-[400px] sm:hidden lgg:block"/>
        </div>
    </section>
    </>
  )
}

export default Testimonials2