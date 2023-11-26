import React from 'react'
import { MdTouchApp } from "react-icons/md";
import { IoMdCall } from "react-icons/io";
import { GiF1Car } from "react-icons/gi";

const Work = () => {
  return (
    <>
      <section id='services' className="bg-black h-[100vh] flex justify-between items-center py-20">
        <div className="w-[90%] mx-auto">
            <div className="text-center mb-14"> 
                <h2 className="text-5xl font-bold text-[#ffd700] py-5">How it Works</h2>
                <p className="text-[#ffd700] uppercase font-bold">make it happen in 3 steps</p>
            </div>
            <div className='flex sm:justify-center md:justify-between sm:items-center flex-wrap gap-6'>
                <div className="flex flex-col justify-center items-center">
                <MdTouchApp size="40px" className="mb-4" color="white"/>
                <h3 className="text-[#ffd700] text-lg font-bold mb-4">01.Choose your car</h3>
                <p className="text-[#ffd700] text-[14px] text-center max-w-[300px] ">Browse our wide range of cars and pick the one that suits your needs and budget.</p>
                </div>
                <div className="flex flex-col justify-center items-center"> 
                <IoMdCall color="white" className="mb-4" size="40px"/>
                <h3 className="text-[#ffd700] text-lg font-bold mb-4">02.Contact us</h3>
                <p className="text-[#ffd700] text-[14px] text-center max-w-[300px] ">Call or WhatsApp us to provide your details and confirm your booking.</p>
                </div>
                <div className="flex flex-col justify-center items-center">
                <GiF1Car color="white" className="mb-4" size="50px"/>
                <h3 className="text-[#ffd700] text-lg font-bold mb-4">03.Enjoy your ride</h3>
                <p className="text-[#ffd700] text-[14px] text-center max-w-[300px] ">Pick up your car from our convenient location and drive away with peace of mind.</p>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Work
