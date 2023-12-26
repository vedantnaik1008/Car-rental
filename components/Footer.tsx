'use client';
import Link from 'next/link';
import Logo from './logo';
import { IoMdCall, MdEmail, MdLocationPin } from '@/lib/ReactIcons';

const Footer = () => {
  return (
    <footer className='mx-auto w-full bg-slate-950 px-[20px]'>
      <div className='mx-auto grid w-[90%] max-w-7xl items-start justify-between sm:gap-10 lg:gap-5 py-14 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
        <div className='flex flex-col gap-5 md:col-span-2'>
          <Logo textColor='text-white' spanColor='text-cyan-400' />
          <p className='max-w-[320px] text-slate-400'>
            &quot;Our vision is to make car rentals easy, convenient, and affordable, enhancing your
            personal mobility and freedom.&quot;
          </p>
        </div>
        <div>
          <p className='mb-6 text-lg font-semibold text-slate-300'>Information</p>
          <ul className='mt-2 flex flex-col gap-y-4 text-base font-light text-slate-400'>
            <li className='cursor-pointer duration-200 hover:text-sky-300'>
              <Link href={'/'} className='focus:outline-none focus-visible:ring'>
                About Us
              </Link>
            </li>

            <li className='cursor-pointer duration-200 hover:text-sky-300'>
              <Link href={'/'} className='focus:outline-none focus-visible:ring'>
                Self Drive
              </Link>
            </li>

            <li className='cursor-pointer duration-200 hover:text-sky-300'>
              <Link href={'/'} className='focus:outline-none focus-visible:ring'>
                Book a Cab
              </Link>
            </li>

            <li className='cursor-pointer duration-200 hover:text-sky-300'>
              <Link href={'/'} className='focus:outline-none focus-visible:ring'>
                FAQs
              </Link>
            </li>

            <li className='cursor-pointer duration-200 hover:text-sky-300'>
              <Link href={'/'} className='focus:outline-none focus-visible:ring'>
                Contacts
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className='mb-6 text-lg font-semibold text-slate-300'>Have a Question?</h3>
          <ul className='mt-2 flex flex-col gap-y-4 text-base font-light text-slate-400'>
            <li className='flex cursor-pointer flex-wrap items-center gap-3 duration-200 hover:text-sky-300'>
              <MdLocationPin size={20} color='' className='inline-block' />
              <Link href={'/'} className='focus:outline-none focus-visible:ring'>
                Vasco, Mormugao, Goa, 1234
              </Link>
            </li>

            <li className='flex cursor-pointer flex-wrap items-center gap-3 duration-200 hover:text-sky-300'>
              <IoMdCall size={20} color='' className='inline-block' />
              <Link href={'tel:+9133378901'} className='focus:outline-none focus-visible:ring'>
                +91 333 78 901
              </Link>
            </li>

            <li className='flex cursor-pointer flex-wrap items-center gap-3 duration-200 hover:text-sky-300'>
              <MdEmail size={20} color='' className='inline-block' />
              <Link
                href={'mailto:info@yourdomain.com'}
                className='focus:outline-none focus-visible:ring'>
                info@yourdomain.com
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <hr className='mb-10 border-slate-400 border-opacity-30' />
      <div className='mx-auto flex w-[90%] max-w-7xl md:items-center justify-between px-5 pb-10 text-slate-400 sm:flex-col md:flex-row'>
        <p className=''>&copy; 2023 Own Wheels Goa. All rights reserved</p>
        <div className='flex gap-8 hover:text-sky-300'>
          <Link href={'/'} className='focus:outline-none focus-visible:ring'>
            <p>Terms & Conditions</p>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
