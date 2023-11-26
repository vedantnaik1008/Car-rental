import React from 'react'
import Container from './Container'
import Image from 'next/image'

const Banner = () => {
  return (
   <>
    <div id='home' className="bg-black">
      <Container>
        <div>
            <h1 className="text-[#ffd700] mb-6 text-7xl font-extrabold max-w-[400px]">Book your Ride Now!</h1>
            <p className="text-[#ffd700] mb-6 max-w-[400px]">Rent a car by exploring our wide selection of vehicles</p>
            <button className="bg-[#ffd700] px-8 py-3 rounded-lg text-white">EXPLORE</button>
        </div>
        <div className="">
            <Image priority={true} sizes='(min-width: 1300px) 700px, (min-width: 620px) calc(52.27vw + 31px), calc(85.67vw - 170px)' alt="Banner-image" width={700} height={700} className='object-cover' src={'https://purepng.com/public/uploads/large/purepng.com-yellow-lamborghini-aventador-carcarvehicletransportlamborghini-961524660480glnlw.png'}/>
        </div>
      </Container>
    </div>
   </>
  )
}

export default Banner
