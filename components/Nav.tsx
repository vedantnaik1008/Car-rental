'use client';

import { Link } from 'react-scroll';
import CallChats from './CallChats';
import { IoIosArrowDown } from 'react-icons/io';
import { useState } from 'react';
import DropDown from './DropDown';
import { FaBarsStaggered } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";

const Nav = () => {
  const [clicked, isClicked] = useState(false);
  const [open, isOpen] = useState(false);

  return (

    <nav className='md:w-full'>
      <div className='items-center justify-between min-[320px]:hidden lg964:flex'>
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
      <>
        <div className="fixed z-50 top-0 right-0  w-[100%] bg-white  lg964:hidden p-5">
          <div className='flex justify-between items-center'>
          <Link href='/home' to='home'>
            <div className='sm:text-xl sm360:text-3xl font-semibold text-sky-950'>
              OwnWheels<span className='text-base text-sky-700'>.com</span>
            </div>
          </Link> 
          <div onClick={() => isOpen((prev) => !prev)} className="">
            <FaBarsStaggered size="25px"/>
          </div>
              <div className={open ? "absolute z-50 top-0 right-0 bg-white shadow-2xl w-[80%] h-screen px-5 py-10 rounded-l-md translate-x-0 transition-all duration-300 ease-in-out" : "absolute z-50 top-0 right-0 bg-white shadow-2xl w-[80%] h-screen px-5 py-10 rounded-l-md  translate-x-[200%] transition-all duration-300 ease-in-out"}>
                <ul className='h-full flex flex-col items-center justify-start gap-y-8'>
                  <div onClick={() => isOpen(false)} className="absolute top-5 left-5">
                    <IoClose size="25px"/>
                  </div>
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
              </div>
          </div>
        </div>
      </>
    </nav>
  );
};

export default Nav;
