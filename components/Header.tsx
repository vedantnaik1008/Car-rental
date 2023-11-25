"use client"
import React from 'react'
import dynamic from 'next/dynamic'
const Nav = dynamic(() => import('@/components/Nav'), {
  ssr: false
 })
const Header = () => {

  return (
    <header className='fixed z-50 w-full  py-[10px] sm:px-[10px] md:px-[20px] bg-white shadow-2xl '>
      <div className="flex items-center justify-center">
        <Nav />
      </div>
    </header>
  )
}

export default Header
