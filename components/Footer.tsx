'use client';

import Link from 'next/link';
import { IoMdCall } from 'react-icons/io';
import { MdEmail, MdLocationPin } from 'react-icons/md';

const Footer = () => {
  return (
    <footer className='mx-auto w-full bg-[#f6fdff] px-[20px] text-sky-950 opacity-90'>
      <div className='mx-auto grid max-w-7xl items-center justify-between gap-10 py-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
        <div className='flex flex-col gap-5 md:col-span-2'>
          <Link href={'/'}>
            <div className='text-3xl font-semibold text-sky-950'>
              OwnWheels<span className='text-base text-sky-700'>.com</span>
            </div>
          </Link>
          <p className='max-w-[320px] text-gray-600'>
            &quot;Our vision is to make car rentals easy, convenient, and affordable, enhancing your
            personal mobility and freedom.&quot;
          </p>
        </div>
        <div>
          <p className='mb-6 text-lg font-semibold text-sky-950 opacity-90'>Information</p>
          <ul className='mt-2 flex flex-col gap-y-4 text-base font-light text-sky-950 text-opacity-80'>
            <li className='cursor-pointer duration-200 hover:text-sky-500'>
              <Link href={'/'}> About Us</Link>
            </li>

            <li className='cursor-pointer duration-200 hover:text-sky-500'>
              <Link href={'/'}>Self Drive</Link>
            </li>

            <li className='cursor-pointer duration-200 hover:text-sky-500'>
              <Link href={'/'}>Book a Cab</Link>
            </li>

            <li className='cursor-pointer duration-200 hover:text-sky-500'>
              <Link href={'/'}>FAQs</Link>
            </li>

            <li className='cursor-pointer duration-200 hover:text-sky-500'>
              <Link href={'/'}>Contacts</Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className='mb-6 text-lg font-semibold text-sky-950 opacity-90'>Have a Question?</h3>
          <ul className='mt-2 flex flex-col gap-y-4 text-base font-light text-sky-950 text-opacity-80'>
            <li className='cursor-pointer duration-200 hover:text-sky-500'>
              <MdLocationPin size={20} color='rgb(8, 47, 73)' className='mr-4 inline' />
              <Link href={'/'}>Vasco, Mormugao, Goa, 1234</Link>
            </li>

            <li className='cursor-pointer duration-200 hover:text-sky-500'>
              <IoMdCall size={20} color='rgb(8, 47, 73)' className='mr-4 inline' />
              <Link href={'tel:+9133378901'}>+91 333 78 901</Link>
            </li>

            <li className='cursor-pointer duration-200 hover:text-sky-500'>
              <MdEmail size={20} color='rgb(8, 47, 73)' className='mr-4 inline' />
              <Link href={'mailto:info@yourdomain.com'}>info@yourdomain.com</Link>
            </li>
          </ul>
        </div>
      </div>
      <hr className='mb-10 border border-slate-200' />
      <div className='mx-auto flex max-w-7xl items-center justify-between px-5 pb-10 text-sky-950'>
        <p className=''>&copy; 2023 Own Wheels Goa. All rights reserved</p>
        <div className='flex gap-8 hover:text-sky-500'>
          <Link href={'/'}>
            <p>Terms & Conditions</p>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
