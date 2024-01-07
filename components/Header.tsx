'use client';

import React from 'react';
import Nav from '@/components/Nav';
import useScroll from '../hooks/useScroll';
import Hamburger from './MobileNav';
import { usePathname } from 'next/navigation';

interface HeaderProps {
  whiteBackground: boolean;
}

const Header = ({ whiteBackground }: HeaderProps) => {
  const isScrolled = useScroll(whiteBackground);
  const pathname = usePathname();
  const dynamicStyle = pathname === '/faqs' || pathname === '/about-us' || pathname === '/contact'
      ? 'path-show'
      : '';
  return (
    <header
      className={`${dynamicStyle} fixed z-50 w-full py-4 drop-shadow-md sm:px-[10px] md:px-[20px] ${
        isScrolled ? 'bg-white' : ''}`}>
      <div className='mx-auto flex max-w-7xl items-center justify-center'>
        <Nav />
      </div>
      <Hamburger whiteBackground={true} />
    </header>
  );
};

export default Header;
