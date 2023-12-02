'use client';
import React from 'react';
import Nav from '@/components/Nav';

const Header = () => {
  return (
    <header className='fixed z-50 w-full bg-white py-5 drop-shadow-md px-[20px]'>
      <div className='mx-auto flex items-center justify-center'>
        <Nav />
      </div>
    </header>
  );
};

export default Header;
