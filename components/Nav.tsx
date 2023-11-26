"use client"
import Image from 'next/image'
import image from '@/public/assets/temp-logo.png'
import { Link } from "react-scroll";
import CallChats from './CallChats';
import { IoIosArrowDown } from "react-icons/io";
import { useState } from 'react';
import DropDown from './DropDown';



const Nav = () => {
  const [clicked, isClicked] = useState(false)

  return (
<nav className="md:w-full">
<div className="min-[320px]:hidden md:flex justify-between items-center">
<Image src={image} alt="items-image" width={100} height={100} className='object-cover'/>
  <ul className="md:flex md:items-center md:justify-center md:gap-8">
    <li className="">
    <Link href="/home" to='home' activeClass='active-on'
                    smooth={true}
                    spy={true} offset={-200} className='cursor-pointer active text-[#ffd700]'>
                        Home
    </Link>
    </li>
    <li className="">
    <div className="flex justify-center items-center hover:text-[#ffd700] relative">
                      <Link href='/services' to='services' activeClass='active-on'
                      smooth={true}
                      spy={true} offset={-10} className='cursor-pointer active text-[#ffd700]'>
                          Services
                      </Link>
                      <IoIosArrowDown  onClick={()=> isClicked((prev) => !prev)} className={clicked ? "text-[#ffd700] rotate-180 hover:text-[#ffd700] pt-1 text-[20px] transition-all duration-300 ease-in-out" : "text-[#ffd700] hover:text-[#ffd700] pt-1 text-[20px] rotate-0 transition-all duration-300 ease-in-out"}/>
                      <DropDown clicked={clicked}/> 
                    </div>
    </li>
    <li className=""><Link href='/about' to='about'activeClass='active-on'
                    smooth={true}
                    spy={true}  className='cursor-pointer  active text-[#ffd700]'>
                        About us
                    </Link></li>
    <li className=""><Link href='/faqs' to='faqs' activeClass='active-on'
                    smooth={true}
                    spy={true} offset={15} className='cursor-pointer  active text-[#ffd700]'>
                        FAQs
                    </Link></li>
    <li className=""><Link href='/contact' to='contact' offset={-28} activeClass='active-on'
                    smooth={true}
                    spy={true} className='cursor-pointer  active text-[#ffd700]'>
                        Contacts
                    </Link></li>
     
                    
                    
                    
                    
                       

  </ul>  
  <div className="flex justify-center items-center gap-4">
    <CallChats />
  </div>
</div>



  {/* <>
  <nav className="fixed z-50 -bottom-0 right-0 h-[40px] w-[100%] bg-white  md:hidden sm:border sm:border-t-1 sm:border-x-0 sm:border-b-0 sm:border-[#ffd700] md:border-none">
          <div className={" md:hidden max-w-7xl mx-auto min-[320px]:p-2"}>
            <div className="" >
              <ul className='flex items-center justify-between gap-4'>
                {/* {items.map((item) => (
                  <li key={item.id} className="text-[#ffd700] hover:underline underline-offset-1 font-bold">
                    
                  </li>
                ))} */}
              {/* </ul>
              
            </div>
          </div>
        </nav></> */}

</nav>
  )
}

export default Nav
