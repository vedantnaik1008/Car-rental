'use client';

// import { Link } from 'react-scroll';
import Link from 'next/link';
import CallChats from './CallChats';
import { IoIosArrowDown } from 'react-icons/io';
import { useState } from 'react';
import DropDown from './DropDown';
import Logo from './logo';

const Nav = () => {
  const [clicked, isClicked] = useState(false);

  return (
    <nav className='md:w-full'>
      <div className='items-center justify-between min-[320px]:hidden md:flex'>
        <Logo textColor='text-sky-950' spanColor='text-sky-700' />
        <ul className='text-base tracking-wider md:flex md:items-center md:justify-center md:gap-8'>
          <li className=''>
            <Link
              href='/'
              className='active cursor-pointer text-black hover:font-semibold hover:text-slate-500 focus:outline-none focus-visible:ring focus-visible:ring-sky-500'>
              Home
            </Link>
          </li>
          <li className=''>
            <div className='items-cente relative flex justify-center'>
              <Link
                href='/#OurServices'
                className='active cursor-pointer text-black hover:font-semibold hover:text-slate-500 focus:outline-none focus-visible:ring focus-visible:ring-sky-500'>
                Services
              </Link>
              <IoIosArrowDown
                onClick={() => isClicked((prev) => !prev)}
                className={
                  clicked
                    ? 'rotate-180 pt-1 text-[20px] text-black transition-all duration-300 ease-in-out hover:font-semibold hover:text-slate-500 focus:outline-none focus-visible:ring focus-visible:ring-sky-500'
                    : 'rotate-0 pt-1 text-[20px] text-black transition-all duration-300 ease-in-out hover:font-semibold hover:text-slate-500 focus:outline-none focus-visible:ring focus-visible:ring-sky-500'
                }
              />
              <DropDown clicked={clicked} setClicked={isClicked} />
            </div>
          </li>
          <li className=''>
            <Link
              href='/about-us'
              className='active  cursor-pointer text-black hover:font-semibold hover:text-slate-500 focus:outline-none focus-visible:ring focus-visible:ring-sky-500'>
              About us
            </Link>
          </li>
          <li className=''>
            <Link
              href='/faqs'
              className='active  cursor-pointer text-black hover:font-semibold hover:text-slate-500 focus:outline-none focus-visible:ring focus-visible:ring-sky-500'>
              FAQs
            </Link>
          </li>
          <li className=''>
            <Link
              href='/contact'
              className='active cursor-pointer text-black hover:font-semibold hover:text-slate-500 focus:outline-none focus-visible:ring  focus-visible:ring-sky-500'>
              Contact
            </Link>
          </li>
        </ul>
        <div className='flex items-center justify-center gap-4'>
          <CallChats />
        </div>
      </div>

      {/* <>
  <nav className="fixed z-50 -bottom-0 right-0 h-[40px] w-[100%] bg-white  md:hidden sm:border sm:border-t-1 sm:border-x-0 sm:border-b-0 sm:border-[#ffd700] md:border-none">
          <div className={" md:hidden max-w-7xl mx-auto min-[320px]:p-2"}>
            <div className="" >
              <ul className='flex items-center justify-between gap-4'>
                {/* {items.map((item) => (
                  <li key={item.id} className="text-black hover:underline underline-offset-1 font-bold">
                    
                  </li>
                ))} */}
      {/* </ul>
              
            </div>
          </div>
        </nav></> */}
    </nav>
  );
};

export default Nav;
