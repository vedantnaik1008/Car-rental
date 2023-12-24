'use client';

import Link from 'next/link';
import CallChats from './CallChats';
import { IoIosArrowDown } from 'react-icons/io';
import { useState } from 'react';
import dynamic from 'next/dynamic';
import Logo from './logo';

const DropDown = dynamic(() => import('./DropDown'), {
  ssr: false,
});

const Nav = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <nav className='sm:hidden lg:block lg:w-full'>
      <div className='items-center justify-between min-[200px]:hidden md:flex'>
        <Logo textColor='text-sky-950' spanColor='text-sky-700' />
        <ul className='text-[0.9375rem] leading-[1.375rem]  tracking-wider md:flex md:items-center md:justify-center md:gap-8'>
          <li className=''>
            <Link
              href='/'
              className='cursor-pointer text-black hover:font-semibold hover:text-slate-500 focus:outline-none focus-visible:ring focus-visible:ring-sky-500'>
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
                className={`ml-0.5 text-[16px] transition-transform duration-300 ease-in-out ${
                  hovered ? 'rotate-180' : 'rotate-0'
                }`}
              />
              <DropDown hovered={hovered} setHovered={setHovered} />
            </div>
          </li>
          <li className=''>
            <Link
              href='/about-us'
              className='cursor-pointer text-black hover:font-semibold hover:text-slate-500 focus:outline-none focus-visible:ring focus-visible:ring-sky-500'>
              About us
            </Link>
          </li>
          <li className=''>
            <Link
              href='/faqs'
              className='cursor-pointer text-black hover:font-semibold hover:text-slate-500 focus:outline-none focus-visible:ring focus-visible:ring-sky-500'>
              FAQs
            </Link>
          </li>
          <li className=''>
            <Link
              href='/contact'
              className='cursor-pointer text-black hover:font-semibold hover:text-slate-500 focus:outline-none focus-visible:ring  focus-visible:ring-sky-500'>
              Contact
            </Link>
          </li>
        </ul>
        <div className='flex items-center justify-center gap-4'>
          <CallChats />
        </div>
      </div>
    </nav>
  );
};

export default Nav;
