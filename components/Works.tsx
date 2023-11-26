import React from 'react'
import Image from 'next/image'
import image_one from '@/public/assets/choose.png'
import image_two from '@/public/assets/contact-us.png'
import image_three from '@/public/assets/enjoy-ride.png'

const Work = () => {
  return (
    <>
      <section id='services' className="bg-[#ffd700] h-[100vh] flex justify-between items-center py-20">
        <div className="w-[90%] mx-auto">
            <div className="text-center mb-14"> 
                <h2 className="text-5xl font-bold text-[#2f4d6a] py-5">How it Works</h2>
                <p className="text-[#1089ff] uppercase font-bold">make it happen in 3 steps</p>
            </div>
            <div className='flex sm:justify-center md:justify-between sm:items-center flex-wrap gap-6'>
                <div className="flex flex-col justify-center items-center">
                <Image src={image_one} alt="items-image" width={50} height={50} className='object-cover mb-4'/>
                <h3 className="text-[#2f4d6a] text-lg font-bold mb-4">01.Choose your car</h3>
                <p className="text-[#9a9b9c] text-[14px] text-center max-w-[300px] ">Browse our wide range of cars and pick the one that suits your needs and budget.</p>
                </div>
                <div className="flex flex-col justify-center items-center"> 
                <Image src={image_two} alt="items-image" width={50} height={50} className='object-cover mb-4'/>
                <h3 className="text-[#2f4d6a] text-lg font-bold mb-4">02.Contact us</h3>
                <p className="text-[#9a9b9c] text-[14px] text-center max-w-[300px] ">Call or WhatsApp us to provide your details and confirm your booking.</p>
                </div>
                <div className="flex flex-col justify-center items-center">
                <Image src={image_three} alt="items-image" width={50} height={50} className='object-cover mb-4'/>
                <h3 className="text-[#2f4d6a] text-lg font-bold mb-4">03.Enjoy your ride</h3>
                <p className="text-[#9a9b9c] text-[14px] text-center max-w-[300px] ">Pick up your car from our convenient location and drive away with peace of mind.</p>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Work
