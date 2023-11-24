'use client';
import Link from 'next/link';
import Image from 'next/image';
import image from '../public/assets/temp-logo.png';

const Footer = () => {
    return (
        <footer className='w-full px-[20px] mx-auto bg-white text-[#9a9b9c]'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 items-center justify-between py-[40px]'>
                <div className='flex flex-col gap-y- col-span-2'>
                    <Link href='/' className=''>
                        <Image
                            src={image}
                            alt='items-image'
                            width={100}
                            height={10}
                            className='object-cover'
                        />
                    </Link>
                    <p className='max-w-[320px] text-sky-950'>
                        &quot;Our vision is to make car rentals easy, convenient, and affordable,
                        enhancing your personal mobility and freedom.&quot;
                    </p>
                </div>
                {/* <div>
                    <p className='text-xl mb-6 text-sky-950 font-semibold'>About</p>
                    <ul className='text-base font-light mt-2 flex flex-col gap-y-4'>
                        <li className='flex flex-col'>
                            <span className='text-sky-900 text-opacity-80 hover:text-sky-950 cursor-pointer duration-200'>
                                How it works
                            </span>
                        </li>
                        <li className='flex flex-col'>
                            <span className='text-sky-900 text-opacity-80 hover:text-sky-950 cursor-pointer duration-200'>
                                Featured
                            </span>
                        </li>
                        <li className='flex flex-col'>
                            <span className='text-sky-900 text-opacity-80 hover:text-sky-950 cursor-pointer duration-200'>
                                Partnership
                            </span>
                        </li>
                        <li className='flex flex-col'>
                            <span className='text-sky-900 text-opacity-80 hover:text-sky-950 cursor-pointer duration-200'>
                                Business Relation
                            </span>
                        </li>
                    </ul>
                </div>
                <div>
                    <p className='text-xl mb-6 text-sky-950 font-semibold'>Community</p>
                    <ul className='text-base font-light mt-2 flex flex-col gap-y-4'>
                        <li className='flex flex-col'>
                            <span className='text-sky-900 text-opacity-80 hover:text-sky-950 cursor-pointer duration-200'>
                                Events
                            </span>
                        </li>
                        <li className='flex flex-col'>
                            <span className='text-sky-900 text-opacity-80 hover:text-sky-950 cursor-pointer duration-200'>
                                Blog
                            </span>
                        </li>
                        <li className='flex flex-col'>
                            <span className='text-sky-900 text-opacity-80 hover:text-sky-950 cursor-pointer duration-200'>
                                Podcast
                            </span>
                        </li>
                        <li className='flex flex-col'>
                            <span className='text-sky-900 text-opacity-80 hover:text-sky-950 cursor-pointer duration-200'>
                                Invite a ifrend
                            </span>
                        </li>
                    </ul>
                </div> */}
                <div>
                    <p className='text-lg mb-6 text-sky-950 font-semibold'>Information</p>
                    <ul className='text-sky-900 text-opacity-80 font-light text-base mt-2 flex flex-col gap-y-4'>
                        <Link href={'/'}>
                            <li className='hover:text-sky-950 cursor-pointer duration-200'>
                                About Us
                            </li>
                        </Link>
                        <Link href={'/'}>
                            <li className='hover:text-sky-950 cursor-pointer duration-200'>
                                Self Drive
                            </li>
                        </Link>
                        <Link href={'/'}>
                            <li className='hover:text-sky-950 cursor-pointer duration-200'>
                                Book a Cab
                            </li>
                        </Link>
                        <Link href={'/'}>
                            <li className='hover:text-sky-950 cursor-pointer duration-200'>FAQs</li>
                        </Link>
                        <Link href={'/'}>
                            <li className='hover:text-sky-950 cursor-pointer duration-200'>
                                Contacts
                            </li>
                        </Link>
                    </ul>
                </div>
                <div>
                    <h3 className='text-lg mb-6 text-sky-950 font-semibold'>Have a Question?</h3>
                    <ul className='text-sky-900 text-opacity-80 font-light text-base mt-2 flex flex-col gap-y-4'>
                        <Link href={'/'}>
                            <li className='hover:text-sky-950 cursor-pointer duration-200'>
                                Vasco, Mormugao, Goa, 1234
                            </li>
                        </Link>
                        <Link href={'/'}>
                            <li className='hover:text-sky-950 cursor-pointer duration-200'>
                                <a href='tel:+9133378901'>+91 333 78 901</a>
                            </li>
                        </Link>
                        <Link href={'mailto:info@yourdomain.com'}>
                            <li className='hover:text-sky-950 cursor-pointer duration-200'>
                                <a href='mailto:info@yourdomain.com'>info@yourdomain.com</a>
                            </li>
                        </Link>
                    </ul>
                </div>
            </div>
            <hr className='border-sky-200 border mb-10' />
            <div className='flex justify-between items-center pb-10 px-5 text-sky-950'>
                <p className=''>&copy; 2023 Own Wheels Goa. All rights reserved</p>
                <div className='flex gap-8'>
                    <p>Terms & Condition</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
