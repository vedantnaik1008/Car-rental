'use client';

import React, { useEffect } from 'react';
import Nav from '@/components/Nav';
import Hamburger from './MobileNav';
import { usePathname } from 'next/navigation';

const Header = () => {
  const pathname = usePathname();
  const dynamicStyle = pathname === '/faqs' || pathname === '/about-us' || pathname === '/contact'
      ? 'path-show'
      : '';

   useEffect(() => {
     const onScroll = () => {
       const scrollPosition = window.scrollY;
       if (scrollPosition > 0) {
         document.getElementById('navbar')?.classList.add('show');
       } else {
         document.getElementById('navbar')?.classList.remove('show');
       }
     };

     window.addEventListener('scroll', onScroll);

     return () => window.removeEventListener('scroll', onScroll);
   }, []);    
  return (
    <header id='navbar'
      className={`${dynamicStyle} fixed z-50 w-full py-4 drop-shadow-md sm:px-[10px] md:px-[20px]`}>
      <div className='mx-auto flex max-w-7xl items-center justify-center'>
        <Nav />
      </div>
      <Hamburger dynamicStyles={dynamicStyle} />
    </header>
  );
};

export default Header;
