import Link from 'next/link';
import Logo from './logo';
import { IoMdCall, MdEmail, MdLocationPin } from '@/lib/ReactIcons';

const Footer = () => {
	return (
		<footer className='mx-auto w-full bg-slate-950 px-[20px]'>
			<div className='mx-auto grid w-[90%] max-w-7xl items-start justify-between gap-10 py-16 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-5 lg:gap-0'>
				<div className='flex flex-col gap-5 md:col-span-3 lg:col-span-2'>
					<Logo textColor='text-white' spanColor='text-cyan-400' />
					<p className='max-w-[320px] text-slate-400'>
						&quot;Our vision is to make car rentals easy, convenient, and affordable, enhancing your
						personal mobility and freedom.&quot;
					</p>
				</div>
				<div>
					<h3 className='mb-3 text-lg font-semibold tracking-wide text-slate-300'>Information</h3>
					<ul className='flex flex-col gap-y-4 text-base font-light text-slate-400'>
						<li className='cursor-pointer duration-200 hover:text-sky-300'>
							<Link href={'/'} className='focus:outline-none focus-visible:ring'>
								About Us
							</Link>
						</li>

						<li className='cursor-pointer duration-200 hover:text-sky-300'>
							<Link href={'/'} className='focus:outline-none focus-visible:ring'>
								FAQs
							</Link>
						</li>

						<li className='cursor-pointer duration-200 hover:text-sky-300'>
							<Link href={'/'} className='focus:outline-none focus-visible:ring'>
								Contact
							</Link>
						</li>
					</ul>
				</div>

				<div className=''>
					<h3 className='mb-3 text-lg font-semibold tracking-wide text-slate-300'>Services</h3>
					<ul className='flex flex-col gap-y-4 text-base font-light text-slate-400'>
						<li className='cursor-pointer duration-200 hover:text-sky-300'>
							<Link href={'/browse-bike'} className='focus:outline-none focus-visible:ring'>
								Rent a Bike
							</Link>
						</li>

						<li className='cursor-pointer duration-200 hover:text-sky-300'>
							<Link href={'/browse-cars'} className='focus:outline-none focus-visible:ring'>
								Rent a Car
							</Link>
						</li>

						<li className='cursor-pointer duration-200 hover:text-sky-300'>
							<Link href={'/rent-cab'} className='focus:outline-none focus-visible:ring'>
								Book a Cab
							</Link>
						</li>
					</ul>
				</div>

				<div>
					<h3 className='mb-3 text-lg font-semibold tracking-wide text-slate-300'>
						Have a Question?
					</h3>
					<ul className='flex flex-col gap-y-4 text-base font-light text-slate-400'>
						<li className='flex cursor-pointer flex-nowrap items-center gap-3 duration-200 hover:text-sky-300'>
							<MdLocationPin size={20} color='' className='inline-block shrink-0' />
							<Link href={'/'} className='focus:outline-none focus-visible:ring'>
								Vasco, Mormugao, Goa, 1234
							</Link>
						</li>

						<li className='flex cursor-pointer flex-nowrap  items-center  gap-3 duration-200 hover:text-sky-300'>
							<IoMdCall size={20} color='' className='inline-block shrink-0' />
							<Link href={'tel:+9133378901'} className='focus:outline-none focus-visible:ring'>
								+91 333 78 901
							</Link>
						</li>

						<li className='flex cursor-pointer flex-nowrap items-center  gap-3 duration-200 hover:text-sky-300'>
							<MdEmail size={20} color='' className='inline-block shrink-0' />
							<Link
								href={'mailto:info@yourdomain.com'}
								className='focus:outline-none focus-visible:ring'>
								info@yourdomain.com
							</Link>
						</li>
					</ul>
				</div>
			</div>
			<hr className='border-slate-400 border-opacity-30' />
			<div className='mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-3 py-10 text-slate-400 md:w-[90%] md:flex-row'>
				<p className='text-balance text-center'>&copy; 2024 OwnWheelz.com All rights reserved</p>
				<div className='flex  hover:text-sky-300 max-md:mb-4'>
					<Link href={'/'} className='focus:outline-none focus-visible:ring'>
						Terms & Conditions
					</Link>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
