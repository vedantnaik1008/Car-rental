"use client";
import Link from "next/link";
import Image from "next/image";
import image from '@/public/assets/temp-logo.png'

const Footer = () => {
  return (
    <footer className="w-full bg-white text-[#9a9b9c]">
      <div className="w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 items-center justify-between py-[40px]">
        <div className="flex flex-col gap-y-4 col-span-2">
        <Link href="/" className=''>
        <Image src={image} alt="items-image" width={100} height={100} className='object-cover'/>
        </Link>
          <p className="max-w-[320px]">
            Our vision is to provide convenience and help increase your sales business.
          </p>
        </div>
        <div>
          <p className="text-lg mb-6 text-black">About</p>
          <ul className="text-sm font-light mt-2 flex flex-col gap-y-4">
            <li className="flex flex-col">
              <span className="text-slate hover:text-black cursor-pointer duration-200">
                How it works
              </span>
            </li>
            <li className="flex flex-col">
              <span className="text-slate hover:text-black cursor-pointer duration-200">
                Featured
              </span>
            </li>
            <li className="flex flex-col">
              <span className="text-slate hover:text-black cursor-pointer duration-200">
                Partnership
              </span>
            </li>
            <li className="flex flex-col">
              <span className="text-slate hover:text-black cursor-pointer duration-200">
                Business Relation
              </span>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-lg mb-6 text-black">Community</p>
          <ul className="text-sm font-light mt-2 flex flex-col gap-y-4">
            <li className="flex flex-col">
              <span className="text-slate hover:text-black cursor-pointer duration-200">
                Events
              </span>
            </li>
            <li className="flex flex-col">
              <span className="text-slate hover:text-black cursor-pointer duration-200">
                Blog
              </span>
            </li>
            <li className="flex flex-col">
              <span className="text-slate hover:text-black cursor-pointer duration-200">
                Podcast
              </span>
            </li>
            <li className="flex flex-col">
              <span className="text-slate hover:text-black cursor-pointer duration-200">
                Invite a ifrend
              </span>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-lg mb-6 text-black">Socials</p>
          <ul className="text-base font-light mt-2 flex flex-col gap-y-4">
            <Link href={"/"}>
              <li className="hover:text-black cursor-pointer duration-200">
                Discord
              </li>
            </Link>
            <Link href={"/"}>
              <li className="hover:text-black cursor-pointer duration-200">
                Instagram
              </li>
            </Link>
            <Link href={"/"}>
              <li className="hover:text-black cursor-pointer duration-200">
                Twitter
              </li>
            </Link>
            <Link href={"/"}>
              <li className="hover:text-black cursor-pointer duration-200">
                Facebook
              </li>
            </Link>
          </ul>
        </div>
      </div>
      <hr className="border-black borde mb-10"/>
      <div className="flex justify-between items-center pb-10 text-black w-[90%] mx-auto">
        <p>&copy; 2023 Drive On. All rights reserved</p>
        <p>Terms & Condition</p>
      </div>
    </footer>
  );
};

export default Footer;
