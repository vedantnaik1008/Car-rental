import Link from 'next/link';
import React from 'react';

interface Props {
  hovered: boolean;
  setHovered: React.Dispatch<React.SetStateAction<boolean>>;
}

const DropDown: React.FC<Props> = ({ hovered, setHovered }) => {
  return (
    <ul
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`absolute left-0 top-6 block w-[150px] bg-transparent py-2 ${
        hovered ? 'block' : 'hidden'
      }`}>
      <div className='w-full rounded-lg bg-white py-5 shadow-lg shadow-sky-500/10'>
        <li className='flex justify-center font-normal text-black'>
          <div className='flex flex-col gap-3 text-start'>
            <Link
              href='/browse-cars'
              className='hover:font-semibold hover:text-slate-500 focus:outline-none focus-visible:ring focus-visible:ring-sky-500'>
              Rent a Car
            </Link>
            <Link
              href='/'
              className='hover:font-semibold hover:text-slate-500 focus:outline-none focus-visible:ring focus-visible:ring-sky-500'>
              Rent a Bike
            </Link>
            <Link
              href='/'
              className='hover:font-semibold hover:text-slate-500 focus:outline-none focus-visible:ring focus-visible:ring-sky-500'>
              Book a Cab
            </Link>
          </div>
        </li>
      </div>
    </ul>
  );
};

export default DropDown;
