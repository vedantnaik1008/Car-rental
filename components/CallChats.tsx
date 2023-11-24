import Link from 'next/link'
import React from 'react'
import { IoMdCall, IoLogoWhatsapp } from "react-icons/io";

const CallChats = () => {
  return (
    <>
      <Link href={''} className="bg-[#1089ff] px-8 py-2 rounded-lg">
        <IoMdCall color="white" size="18px"/>
      </Link>
      <Link href={''} className="bg-[#01d28e] px-8 py-2 rounded-lg">
      <IoLogoWhatsapp color="white" size="20px"/>
      </Link>
    </>
  )
}

export default CallChats
