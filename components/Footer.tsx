'use client';
import Link from 'next/link';
import Image from 'next/image';
import image from '../public/assets/temp-logo.png';

const Footer = () => {

    return (
        <footer className='w-full px-[20px] mx-auto bg-black text-[#ffd700]'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 items-center justify-between py-[40px]'>
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
                    <p className='max-w-[320px] text-[#ffd700]'>
                        &quot;Our vision is to make car rentals easy, convenient, and affordable,
                        enhancing your personal mobility and freedom.&quot;
                    </p>
                </div>
                <div>
                    <p className='text-lg mb-6 text-[#ffd700] font-semibold'>Information</p>
                    <ul className='text-[#ffd700] text-opacity-80 font-light text-base mt-2 flex flex-col gap-y-4'>
                        
                            <li className='hover:text-[#ffd700] cursor-pointer duration-200'>
                            <Link href={'/'}> About Us</Link>
                            </li>
                        
                        
                            <li className='hover:text-[#ffd700] cursor-pointer duration-200'>
                            <Link href={'/'}>Self Drive</Link>
                            </li>
                        
                        
                            <li className='hover:text-[#ffd700] cursor-pointer duration-200'>
                            <Link href={'/'}>Book a Cab</Link>
                            </li>
                        
                        
                            <li className='hover:text-[#ffd700] cursor-pointer duration-200'><Link href={'/'}>FAQs</Link></li>
                        
                        
                            <li className='hover:text-[#ffd700] cursor-pointer duration-200'>
                            <Link href={'/'}>Contacts</Link>
                            </li>
                        
                    </ul>
                </div>
                <div>
                    <h3 className='text-lg mb-6 text-[#ffd700] font-semibold'>Have a Question?</h3>
                    <ul className='text-[#ffd700] text-opacity-80 font-light text-base mt-2 flex flex-col gap-y-4'>
                        
                            <li className='hover:text-[#ffd700] cursor-pointer duration-200'>
                            <Link href={'/'}>Vasco, Mormugao, Goa, 1234</Link>
                            </li>
                        
                        
                            <li className='hover:text-[#ffd700] cursor-pointer duration-200'>
                            <Link href={'tel:+9133378901'}>+91 333 78 901</Link>
                            </li>
                        
                        
                            <li className='hover:text-[#ffd700] cursor-pointer duration-200'>
                            <Link href={'mailto:info@yourdomain.com'}>info@yourdomain.com</Link>
                            </li>
                        
                    </ul>
                </div>
            </div>
            <hr className='border-[#ffd700] border mb-10' />
            <div className='flex justify-between items-center pb-10 px-5 text-[#ffd700]'>
                <p className=''>&copy; 2023 Own Wheels Goa. All rights reserved</p>
                <div className='flex gap-8'>
                    <p>Terms & Condition</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
