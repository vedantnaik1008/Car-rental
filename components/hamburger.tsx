'use client';

import React from 'react';
import { useState } from 'react';
import Link from 'next/link';
import Logo from './logo';
import useScroll from '../hooks/useScroll';
import { FaBarsStaggered, IoClose, IoIosArrowDown } from '@/lib/ReactIcons';
import dynamic from 'next/dynamic';

interface HeaderProps {
  whiteBackground: boolean;
}

const DropDown = dynamic(() => import('./DropDown'), {
  ssr: false,
});

const Hamburger = ({ whiteBackground }: HeaderProps) => {
  const [hovered, setHovered] = useState(false);
  const [open, isOpen] = useState(false);
  const isScrolled = useScroll(whiteBackground);

  return (
    <div className={`w-full ${isScrolled ? 'bg-white' : ''} ${whiteBackground ? 'bg-white' : ''}}`}>
      <div className={`right-0 top-0 z-50 w-full lg:hidden`}>
        <div className='flex items-center justify-between'>
          <Logo textColor='text-sky-950' spanColor='text-sky-700' />
          <div onClick={() => isOpen((prev) => !prev)} className='cursor-pointer'>
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
                <Link href='/' className='cursor-pointer text-sky-950 hover:text-sky-500'>
                  Home
                </Link>
              </li>
              <li className='group relative'>
                <div
                  onMouseEnter={() => setHovered(true)}
                  onMouseLeave={() => setHovered(false)}
                  className={`flex cursor-pointer items-center justify-center text-black hover:font-semibold hover:text-slate-500 focus:outline-none focus-visible:ring focus-visible:ring-sky-500`}>
                  <Link href='/#OurServices' className=''>
                    Services
                  </Link>
                  <IoIosArrowDown
                    className={`ml-0.5 text-[16px] transition-transform duration-200 ease-in-out ${
                      hovered ? 'rotate-180' : 'rotate-0'
                    }`}
                  />
                  <DropDown hovered={hovered} />
                </div>
              </li>
              <li className=''>
                <Link href='/about-us' className='cursor-pointer text-sky-950 hover:text-sky-500'>
                  About us
                </Link>
              </li>
              <li className=''>
                <Link href='/faqs' className='cursor-pointer text-sky-950 hover:text-sky-500'>
                  FAQs
                </Link>
              </li>
              <li className=''>
                <Link href='/contact' className='cursor-pointer text-sky-950 hover:text-sky-500'>
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
