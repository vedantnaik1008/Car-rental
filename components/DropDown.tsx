import Link from 'next/link'
import React from 'react'

interface Props{
    clicked: boolean;
}

const DropDown = ({clicked}: Props) => {
  return (
    <>
      {clicked && <ul className={clicked ? 'block py-5 text-center shadow-2xl rounded-lg bg-[#ffd700] absolute top-8 left-0 w-[150px] text-black' : 'hidden'}>
        <li className='flex flex-col gap-2'>
            <Link href='/'>Self Drive</Link>
            <Link href='/'>Book a cab</Link>
        </li>
       </ul>}
    </>
  )
}

export default DropDown
