import React from 'react'
import Container from './Container'
import Image from 'next/image'
import HeroImage from '@/public/assets/hero-car.png'

const Banner = () => {
  return (
   <>
    <div id='home' className="bg-[#f5f7fb]">
      <Container>
        <div>
            <h1 className="text-black mb-6 text-5xl max-w-[400px]">Book your Ride Now!</h1>
            <p className="text-black mb-6 max-w-[300px]">Rent a car by exploring our wide selection of vehicles</p>
            <button className="bg-black px-8 py-3 rounded-lg text-white">EXPLORE</button>
        </div>
        <div className="absolute right-0 top-30 ">
            <Image alt="Banner-image" width={600} height={600} className='object-cover' src={HeroImage}/>
        </div>
      </Container>
    </div>
   </>
  )
}

export default Banner
