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
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle} from "react-icons/io";
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
         nextArrow: <IoIosArrowDroprightCircle  color="red"/>,
         prevArrow: <IoIosArrowDropleftCircle  color="red"/>,
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
       <section id="about"  className="bg-[#f5f7fb] flex justify-between items-center py-40">
        <div className="w-[90%] mx-auto">
            <div className="text-center mb-14"> 
                <h2 className=" font-bold text-[#1089ff] py-5 uppercase ">What we offer</h2>
                <p className="text-[#2f4d6a] text-5xl font-bold">Our Fleet</p>
            </div>
            <div className="">
            <Slider {...settings}>
                {data.map((res) => (
                    <div key={res.id} className=" rounded-[30px] w-[50%] h-[650px] p-5">
                        <Image src={res.image} alt="items-image" width={200} height={200} className="bg-gray-500  rounded-lg object-cover mb-3  mx-auto w-[99%] h-[250px]"/>
                        <div className="text-black mb-3">
                            <p className="">{res.brandName}</p>
                            <p className="">Start From {res.price}</p>
                            <p className="">Minimum 2 days booking</p>
                        </div>
                        <div className="grid grid-cols-2 items-center gap-4">
                            <p className="flex gap-x-2 items-center text-[14px]"><GoPeople color="red"/>{res.features.seats}</p>
                            <p className="flex gap-x-2 items-center text-[14px]"><BsFuelPumpFill color="red"/>{res.features.fuel}</p>
                            <p className="flex gap-x-2 items-center text-[14px]"><ImMeter color="red"/>{res.features.mileage}</p>
                            <p className="flex gap-x-2 items-center text-[14px]"><PiSteeringWheelBold color="red"/>{res.features.gear}</p>
                        </div>
                        <hr className="border-black borde my-5"/>
                        <div className="flex items-center justify-between">
                        <Link href={'/'} className="bg-red-600 px-8 py-2 rounded-lg text-white text-[14px]">
                            Call
                        </Link>
                        <Link href={'/'} className="bg-[#01d28e] px-2 py-2 rounded-lg text-white text-[14px]">
                            Whatsapp
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
