'use client'
import React, { useState } from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';
import { Cars, cars } from './API';
import { PiSteeringWheelBold } from "react-icons/pi";
import { BsFuelPumpFill } from "react-icons/bs";
import { GoPeople } from "react-icons/go";
import { ImMeter } from "react-icons/im";
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle, IoMdCall, IoLogoWhatsapp } from "react-icons/io";
import Link from 'next/link';

const Testimonials = () => {
    const [data, setData] = useState<Cars[]>(cars as Cars[])

    const settings = {
        dots: true,
        infinite: true,
        autoplay: false,
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: true,
         nextArrow: <IoIosArrowDroprightCircle  color="white"/>,
         prevArrow: <IoIosArrowDropleftCircle  color="white"/>,
        responsive: [
          {
            breakpoint: 1440,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              dots: false
            }
          }
        ]
      };
  return (
    <>
       <section id="about"  className="bg-black flex justify-between items-center py-40">
        <div className="w-[90%] mx-auto">
            <div className="text-center mb-14"> 
                <h2 className=" font-bold text-[#ffd700] py-5 uppercase ">What we offer</h2>
                <p className="text-[#ffd700] text-5xl font-bold">Our Fleet</p>
            </div>
            <div className="">
            <Slider {...settings}>
                {data.map((res) => (
                    <div key={res.id} className=" rounded-[30px] w-[50%] h-[650px] p-5">
                        <Image src={res.image} alt={res.brandName} sizes='200' width={200} height={200} className=" rounded-lg object-cover mb-3  mx-auto w-[99%] h-[250px]"/>
                        <div className="text-[#ffd700] mb-3">
                            <p className="">{res.brandName}</p>
                            <p className="">Start From {res.price}</p>
                            <p className="">Minimum 2 days booking</p>
                        </div>
                        <div className="grid grid-cols-2 items-center gap-4 text-[#ffd700]">
                            <p className="flex gap-x-2 items-center text-[14px]"><GoPeople size="20px" color="white"/>{res.features.seats}</p>
                            <p className="flex gap-x-2 items-center text-[14px]"><BsFuelPumpFill size="20px" color="white"/>{res.features.fuel}</p>
                            <p className="flex gap-x-2 items-center text-[14px]"><ImMeter size="20px" color="white"/>{res.features.mileage}</p>
                            <p className="flex gap-x-2 items-center text-[14px]"><PiSteeringWheelBold size="20px" color="white"/>{res.features.gear}</p>
                        </div>
                        <hr className="border-[#ffd700] borde my-5"/>
                        <div className="flex items-center justify-between">
                        <Link href={'/'} className="bg-[#ffd700] px-8 py-2 rounded-lg text-[14px]">
                          <IoMdCall color="black" size="18px"/>
                        </Link>
                        <Link href={'/'} className="bg-[#ffd700] px-8 py-2 rounded-lg text-[14px]">
                          <IoLogoWhatsapp color="black" size="20px"/>
                        </Link>
                        </div>
                    </div>
                )).splice(9)} 
            </Slider>
            </div>
        </div>
    </section>
    </>
  )
}

export default Testimonials
