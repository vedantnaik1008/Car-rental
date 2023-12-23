import React from 'react';
import Link from 'next/link';

interface LogoProps {
  textColor: string;
  spanColor: string;
}

const Logo: React.FC<LogoProps> = ({ textColor, spanColor }) => {
  return (
    <Link
      href='/'
      className='w-fit focus:outline-none antialiased focus-visible:ring focus-visible:ring-sky-500'
      style={{ fontFamily: `Zen Dots` }}>
      <div className={`sm:text-2xl md:text-3xl ${textColor}`}>
        OwnWheelz<span className={`text-base ${spanColor}`}>.com</span>
      </div>
    </Link>
  );
};

export default Logo;
