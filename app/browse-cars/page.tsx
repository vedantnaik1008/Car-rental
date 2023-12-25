'use client'
import dynamic from 'next/dynamic'
const BrowseCars = dynamic(() => import('@/components/BrowseCars'), {
  ssr: false
})
import React from 'react'

const Page = () => {
  return (
    <BrowseCars />
  )
}

export default Page