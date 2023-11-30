import Link from 'next/link';
import React from 'react';

interface Props {
  clicked: boolean;
}

const DropDown = ({ clicked }: Props) => {
  return (
    <>
      {clicked && (
        <ul
          className={
            clicked
              ? 'absolute left-0 top-8 block w-[150px] rounded-lg bg-white py-5 text-center text-sky-950 shadow-2xl'
              : 'hidden'
          }>
          <li className='flex flex-col gap-2'>
            <Link href='/' className='hover:text-sky-400'>
              Self Drive
            </Link>
            <Link href='/' className='hover:text-sky-400'>
              Book a cab
            </Link>
          </li>
        </ul>
      )}
    </>
  );
};

export default DropDown;
