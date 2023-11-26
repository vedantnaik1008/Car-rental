import Link from 'next/link'
import React from 'react'
import { IoMdCall, IoLogoWhatsapp } from "react-icons/io";

const CallChats = () => {
  return (
    <>
      <Link aria-label="Call to rent car" href={'/'} className="bg-[#ffd700] px-8 py-2 rounded-lg">
        <IoMdCall color="white" size="18px"/>
      </Link>
      <Link aria-label="Whatsapp to rent car" href={'/'} className="bg-[#ffd700] px-8 py-2 rounded-lg">
      <IoLogoWhatsapp color="white" size="20px"/>
      </Link>
    </>
  )
}

export default CallChats
