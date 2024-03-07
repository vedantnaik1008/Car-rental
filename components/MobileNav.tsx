'use client';
import { useState } from 'react';
import Link from 'next/link';
import Logo from './logo';
import { FaBarsStaggered, IoClose, IoIosArrowDown } from '@/lib/ReactIcons';
import { Menu } from '@headlessui/react';

const MobileNav = () => {
  const [open, isOpen] = useState(false);

  return (
    <div id="navbar" className='w-full'>
      <div className={`w-full lg:hidden`}>
        <div className='flex items-center justify-between'>
          <Logo textColor='text-sky-950' spanColor='text-sky-700' />
          <div onClick={() => isOpen(true)} className='cursor-pointer'>
            <FaBarsStaggered size='25px' />
          </div>
          <div
            className={
              open
                ? 'absolute -right-5 top-0 z-[50] h-screen w-[80%] translate-x-0 rounded-l-md bg-white px-5 py-10 shadow-2xl transition-all duration-300 ease-in-out sm:block lg:hidden'
                : 'absolute -right-5 top-0 z-[50] h-screen w-[80%] translate-x-[200%] rounded-l-md bg-white px-5 py-10  shadow-2xl transition-all duration-300 ease-in-out sm:block lg:hidden'
            }>
            <div onClick={() => isOpen(false)} className='absolute left-5 top-5 cursor-pointer'>
              <IoClose size='25px' />
            </div>
            <ul className='flex h-full flex-col items-center justify-start gap-y-8'>
              <li className=''>
                <Link
                  href='/'
                  className='cursor-pointer text-black hover:font-semibold hover:text-gray-600'>
                  Home
                </Link>
              </li>
              <li className='group relative'>
                <Menu as='div' className='relative inline-block text-left'>
                  {({ open }) => (
                    <>
                      <Menu.Button className='flex cursor-pointer items-center justify-center hover:font-semibold hover:text-gray-600 focus:outline-none focus-visible:ring focus-visible:ring-sky-500'>
                        Services
                        <IoIosArrowDown
                          className={`ml-0.5 text-[16px] transition-transform duration-300  ease-in-out ${
                            open ? 'rotate-180' : 'rotate-0'
                          }`}
                        />
                      </Menu.Button>
                      <Menu.Items className='absolute left-0 top-6 mt-2 block  w-[150px] rounded-lg bg-white py-5 text-black outline-none'>
                        <div className='flex flex-col items-center'>
                          <div className='flex flex-col items-start gap-3'>
                            <Menu.Item>
                              <Link
                                href='/browse-cars'
                                className={`hover:font-semibold hover:text-gray-600`}>
                                Rent a Car
                              </Link>
                            </Menu.Item>
                            <Menu.Item>
                              <Link href='/' className={`hover:font-semibold hover:text-gray-600`}>
                                Rent a Bike
                              </Link>
                            </Menu.Item>
                            <Menu.Item>
                              <Link href='/' className={`hover:font-semibold hover:text-gray-600`}>
                                Book a Cab
                              </Link>
                            </Menu.Item>
                          </div>
                        </div>
                      </Menu.Items>
                    </>
                  )}
                </Menu>
              </li>
              <li className=''>
                <Link
                  href='/about-us'
                  className='cursor-pointer text-black hover:font-semibold hover:text-gray-600'>
                  About us
                </Link>
              </li>
              <li className=''>
                <Link
                  href='/faqs'
                  className='cursor-pointer text-black hover:font-semibold hover:text-gray-600'>
                  FAQs
                </Link>
              </li>
              <li className=''>
                <Link href='/contact' className='cursor-pointer text-black hover:text-gray-600'>
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

export default MobileNav;
