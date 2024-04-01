'use client';
import Link from 'next/link';
import CallChats from './CallChats';
import Logo from './logo';
import { IoIosArrowDown } from '@/lib/ReactIcons';
import { Menu } from '@headlessui/react';

const Nav = () => {
	return (
		<nav className='hidden lg:block lg:w-full'>
			<div className='items-center justify-between min-[320px]:hidden md:flex'>
				<ul className='text-base font-medium md:flex md:items-center md:justify-center md:gap-8'>
					<li className=''>
						<Link
							href='/'
							className='cursor-pointer text-black hover:font-semibold hover:text-gray-600 focus:outline-none focus-visible:ring focus-visible:ring-sky-500'>
							Home
						</Link>
					</li>
					<li className='group relative'>
						<Menu as='div' className='relative inline-block text-left'>
							{({ open }) => (
								<>
									<Menu.Button className='flex cursor-pointer items-center justify-center hover:font-semibold hover:text-gray-600 focus:outline-none focus-visible:ring focus-visible:ring-sky-500'>
										Services
										<IoIosArrowDown
											className={`ml-0.5 text-[16px] transition-transform duration-300  ease-in-out ${
												open ? 'rotate-180' : 'rotate-0'
											}`}
										/>
									</Menu.Button>
									<Menu.Items className='absolute left-0 top-6 mt-2 block  w-[150px] rounded-lg bg-white py-5 text-black outline-none'>
										<div className='flex flex-col items-center'>
											<div className='flex flex-col items-start gap-3'>
												<Menu.Item>
													<Link
														href='/browse-cars'
														className={`hover:font-semibold hover:text-gray-600`}>
														Rent a Car
													</Link>
												</Menu.Item>
												<Menu.Item>
													<Link
														href='/browse-bike'
														className={`hover:font-semibold hover:text-gray-600`}>
														Rent a Bike
													</Link>
												</Menu.Item>
												<Menu.Item>
													<Link
														href='/rent-cab'
														className={`hover:font-semibold hover:text-gray-600`}>
														Book a Cab
													</Link>
												</Menu.Item>
											</div>
										</div>
									</Menu.Items>
								</>
							)}
						</Menu>
					</li>
					<li className=''>
						<Link
							href='/about-us'
							className='cursor-pointer text-black hover:font-semibold hover:text-gray-600 focus:outline-none focus-visible:ring focus-visible:ring-sky-500'>
							About Us
						</Link>
					</li>
					<li className=''>
						<Link
							href='/faqs'
							className='cursor-pointer text-black hover:font-semibold hover:text-gray-600 focus:outline-none focus-visible:ring focus-visible:ring-sky-500'>
							FAQs
						</Link>
					</li>
				</ul>
				<Logo textColor='text-sky-950' spanColor='text-sky-700' />
				<CallChats className='flex items-center justify-center gap-4' />
			</div>
		</nav>
	);
};

export default Nav;
