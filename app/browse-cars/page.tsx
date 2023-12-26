'use client'
import LoadingSpinner from '@/components/Loading'
import dynamic from 'next/dynamic'
const BrowseCars = dynamic(() => import('@/components/BrowseCars'), {
  ssr: false, loading: ()=> <LoadingSpinner/>
})
import React from 'react'

const Page = () => {
  return (
    <BrowseCars />
  )
}

export default Page