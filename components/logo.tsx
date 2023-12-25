import React from 'react';
import Link from 'next/link';
import { Zen_Dots } from 'next/font/google';

const zenDots = Zen_Dots({
  subsets: ['latin'],
  display: 'swap',
  weight: '400',
  variable: '--font-zenDots',
});
interface LogoProps {
  textColor: string;
  spanColor: string;
}

const Logo: React.FC<LogoProps> = ({ textColor, spanColor }) => {
  return (
    <Link
      href='/'
      className={`${zenDots.variable} w-fit antialiased focus:outline-none focus-visible:ring focus-visible:ring-sky-500`}>
      <div className={`sm:text-2xl md:text-3xl ${textColor}`}>
        OwnWheelz<span className={`text-base ${spanColor}`}>.com</span>
      </div>
    </Link>
  );
};

export default Logo;
