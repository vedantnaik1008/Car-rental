'use client'
import React from 'react'
const Testimonials = dynamic(() => import('@/components/Testimonials'), {
  ssr: false
})
 const Testimonials2 = dynamic(() => import('@/components/Testimonials2'), {
  ssr: false
}) 
import Banner from './Banner'
import Work from './Works'
import dynamic from 'next/dynamic'

const Main = () => {
  return (
    <>
      <Banner />
      <Work />
      <Testimonials />
      <Testimonials2 />
    </>
  )
}

export default Main
