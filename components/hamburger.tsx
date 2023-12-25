'use client';

import React from 'react';
import { useState } from 'react';
import { Link } from 'react-scroll';

import DropDown from './DropDown';

import Logo from './logo';
import useScroll from '../hooks/useScroll';
import { FaBarsStaggered, IoClose, IoIosArrowDown } from '@/lib/ReactIcons';

interface HeaderProps {
  whiteBackground: boolean;
}

const Hamburger = ({ whiteBackground }: HeaderProps) => {
  const [clicked, isClicked] = useState(false);
  const [open, isOpen] = useState(false);
  const isScrolled = useScroll(whiteBackground);
  return (
    <div className={`w-full ${isScrolled ? 'bg-white' : ''} ${whiteBackground ? 'bg-white' : ''}}`}>
      <div className={`right-0 top-0 z-50 w-full lg:hidden`}>
        <div className='flex items-center justify-between'>
          <Logo textColor='text-sky-950' spanColor='text-sky-700' />
          <div onClick={() => isOpen((prev) => !prev)} className=''>
            <FaBarsStaggered size='25px' />
          </div>
          <div
            className={
              open
                ? 'absolute right-0 top-0 z-50 h-screen w-[80%] translate-x-0 rounded-l-md bg-white px-5 py-10 shadow-2xl transition-all duration-300 ease-in-out'
                : 'absolute right-0 top-0 z-50 h-screen w-[80%] translate-x-[200%] rounded-l-md bg-white px-5 py-10  shadow-2xl transition-all duration-300 ease-in-out'
            }>
            <div onClick={() => isOpen(false)} className='absolute left-5 top-5'>
              <IoClose size='25px' />
            </div>
            <ul className='flex h-full flex-col items-center justify-start gap-y-8'>
              <li className=''>
                <Link
                  href='/home'
                  to='home'
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
                  <DropDown clicked={clicked} setClicked={isClicked} />
                </div>
              </li>
              <li className=''>
                <Link
                  href='/about'
                  to='about'
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
    </div>
  );
};

export default Hamburger;
