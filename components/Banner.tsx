import React from 'react'
import Container from './Container'
import Image from 'next/image'

const Banner = () => {
  return (
   <>
    <div id='home' className="bg-black">
      <Container>
        <div className='flex flex-col sm:items-center sm:justify-center md:items-start md:justify-start w-full'>
            <h1 className="text-[#ffd700] sm:text-center md:text-start  mb-6 sm:text-4xl lg:text-5xl xl:text-7xl font-extrabold md:max-w-[700px]">Book your Ride Now!</h1>
            <p className="text-[#ffd700] sm:text-center md:text-start mb-6 md:max-w-[400px]">Rent a car by exploring our wide selection of vehicles</p>
            <button className="bg-[#ffd700] px-8 py-3 rounded-lg text-black">EXPLORE</button>
        </div>
        <div className="">
            <Image priority={true}  alt="Banner-image" width={900} height={900} className='object-cover sm:hidden md:block' src={'https://purepng.com/public/uploads/large/purepng.com-yellow-lamborghini-aventador-carcarvehicletransportlamborghini-961524660480glnlw.png'}/>
        </div>
      </Container>
    </div>
   </>
  )
}

export default Banner
