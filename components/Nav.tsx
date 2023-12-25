import Link from 'next/link';
import CallChats from './CallChats';
import { useState } from 'react';
import DropDown from './DropDown';
import Logo from './logo';
import { IoIosArrowDown } from '@/lib/ReactIcons';

const Nav = () => {
  const [clicked, setClicked] = useState(false);

  return (
    <nav className='sm:hidden lg:block lg:w-full'>
      <div className='items-center justify-between min-[200px]:hidden md:flex'>
        <Logo textColor='text-sky-950' spanColor='text-sky-700' />
        <ul className='text-base tracking-wider md:flex md:items-center md:justify-center md:gap-8'>
          <li className=''>
            <Link
              href='/'
              className='active cursor-pointer text-black hover:font-semibold hover:text-slate-500 focus:outline-none focus-visible:ring focus-visible:ring-sky-500'>
              Home
            </Link>
          </li>
          <li className='relative'>
            <div
              className='flex items-center justify-center'
              onMouseEnter={() => setClicked(true)}
              onMouseLeave={() => setClicked(false)}>
              <Link
                href='/#OurServices'
                className='cursor-pointer text-black hover:font-semibold hover:text-slate-500  focus:outline-none focus-visible:ring focus-visible:ring-sky-500'>
                Services
              </Link>
              <IoIosArrowDown
                className={
                  clicked
                    ? 'rotate-180 cursor-pointer pt-1 text-[20px] text-black transition-all duration-300 ease-in-out hover:font-semibold hover:text-slate-500 focus:outline-none focus-visible:ring focus-visible:ring-sky-500'
                    : 'rotate-0 cursor-pointer pt-1 text-[20px] text-black transition-all duration-300 ease-in-out hover:font-semibold hover:text-slate-500 focus:outline-none focus-visible:ring focus-visible:ring-sky-500'
                }
              />
              <DropDown clicked={clicked} setClicked={setClicked} />
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
    </nav>
  );
};

export default Nav;
