'use client';

import { Link } from 'react-scroll';
import CallChats from './CallChats';
import { IoIosArrowDown } from 'react-icons/io';
import { useState } from 'react';
import DropDown from './DropDown';

const Nav = () => {
  const [clicked, isClicked] = useState(false);

  return (
    <nav className='md:w-full'>
      <div className='items-center justify-between min-[320px]:hidden md:flex'>
        <Link href='/home' to='home'>
          <div className='text-3xl font-semibold text-sky-950'>
            OwnWheels<span className='text-base text-sky-700'>.com</span>
          </div>
        </Link>
        <ul className='text-base md:flex md:items-center md:justify-center md:gap-8'>
          <li className=''>
            <Link
              href='/home'
              to='home'
              // activeClass='active-on'
              smooth={true}
              spy={true}
              offset={-200}
              className='active cursor-pointer text-sky-950 hover:text-sky-500'>
              Home
            </Link>
          </li>
          <li className=''>
            <div className='items-cente relative flex justify-center'>
              <Link
                href='/services'
                to='services'
                // activeClass='active-on'
                smooth={true}
                spy={true}
                offset={-10}
                className='active cursor-pointer text-sky-950 hover:text-sky-500'>
                Services
              </Link>
              <IoIosArrowDown
                onClick={() => isClicked((prev) => !prev)}
                className={
                  clicked
                    ? 'rotate-180 pt-1 text-[20px] text-sky-950 transition-all duration-300 ease-in-out hover:text-sky-500'
                    : 'rotate-0 pt-1 text-[20px] text-sky-950 transition-all duration-300 ease-in-out hover:text-sky-500'
                }
              />
              <DropDown clicked={clicked} />
            </div>
          </li>
          <li className=''>
            <Link
              href='/about'
              to='about'
              // activeClass='active-on'
              smooth={true}
              spy={true}
              className='active  cursor-pointer text-sky-950 hover:text-sky-500'>
              About us
            </Link>
          </li>
          <li className=''>
            <Link
              href='/faqs'
              to='faqs'
              // activeClass='active-on'
              smooth={true}
              spy={true}
              offset={15}
              className='active  cursor-pointer text-sky-950 hover:text-sky-500'>
              FAQs
            </Link>
          </li>
          <li className=''>
            <Link
              href='/contact'
              to='contact'
              offset={-28}
              // activeClass='active-on'
              smooth={true}
              spy={true}
              className='active  cursor-pointer text-sky-950 hover:text-sky-500'>
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
