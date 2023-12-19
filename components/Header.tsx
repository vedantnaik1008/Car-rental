'use client';

import React, { useEffect, useState } from 'react';
import Nav from '@/components/Nav';

interface HeaderProps {
  whiteBackground: boolean;
}

const Header = ({ whiteBackground }: HeaderProps) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    if (whiteBackground) return;

    const scrollHandler = () => {
      window.pageYOffset > 0 ? setIsScrolled(true) : setIsScrolled(false);
    };
    window.addEventListener('scroll', scrollHandler);
    return () => window.removeEventListener('scroll', scrollHandler);
  }, [whiteBackground]);

  return (
    <header
      className={`fixed z-50 w-full py-4 drop-shadow-md sm:px-[10px] md:px-[20px] ${
        isScrolled ? 'bg-white' : ''
      } ${whiteBackground ? 'bg-white' : ''}`}>
      <div className='mx-auto flex max-w-7xl items-center justify-center'>
        <Nav />
      </div>
    </header>
  );
};

export default Header;
