'use client';
import Link from 'next/link';
import Logo from './logo';
import { FaBarsStaggered, IoClose, IoIosArrowDown } from '@/lib/ReactIcons';
import { Menu } from '@headlessui/react';
import CallChats from './CallChats';

type Props = {
	open: boolean;
	setOpen: (open: boolean) => void;
};

const MobileNav = ({ open, setOpen }: Props) => {
	return (
		<div className='w-full'>
			<div className={`w-full lg:hidden`}>
				<div className='relative flex items-center justify-between'>
					<Logo textColor='text-sky-950' spanColor='text-sky-700' />
					<CallChats className='right-10 hidden md:absolute md:flex md:items-center md:gap-4 lg:hidden' />
					{!open ? (
						<div onClick={() => setOpen(!open)} className='cursor-pointer'>
							<FaBarsStaggered size='25px' />
						</div>
					) : (
						<div className={open ? 'lg:hidden' : 'lg:hidden'}>
							<div onClick={() => setOpen(false)} className=''>
								<IoClose size='35px' />
							</div>
						</div>
					)}
				</div>
				<div
					className={
						open
							? 'absolute  left-0 top-20 z-[50] w-full block rounded-xl bg-white px-5 py-10 shadow-2xl transition-all duration-700 ease-in-out lg:hidden'
							: 'absolute  left-0 top-20 z-[50] w-full hidden  rounded-xl bg-white px-5 py-10  shadow-2xl transition-all duration-700 ease-in-out lg:hidden'
					}>
					<ul className='flex h-full flex-col items-center justify-start gap-y-8 py-10'>
						<li className=''>
							<Link
								onClick={() => setOpen(false)}
								href='/'
								className='cursor-pointer text-black hover:font-semibold hover:text-gray-600'>
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
												className={`ml-0.5 text-[16px] transition-transform duration-1000  ease-in-out ${
													open ? 'rotate-180' : 'rotate-0'
												}`}
											/>
										</Menu.Button>
										<Menu.Items className='absolute left-0 top-6 mt-2 block  w-[150px] rounded-lg bg-white py-5 text-black outline-none'>
											<div className='flex flex-col items-center'>
												<div className='flex flex-col items-start gap-3'>
													<Menu.Item>
														<Link
															onClick={() => setOpen(false)}
															href='/browse-cars'
															className={`hover:font-semibold hover:text-gray-600`}>
															Rent a Car
														</Link>
													</Menu.Item>
													<Menu.Item>
														<Link
															onClick={() => setOpen(false)}
															href='/browse-bike'
															className={`hover:font-semibold hover:text-gray-600`}>
															Rent a Bike
														</Link>
													</Menu.Item>
													<Menu.Item>
														<Link
															onClick={() => setOpen(false)}
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
								onClick={() => setOpen(false)}
								href='/about-us'
								className='cursor-pointer text-black hover:font-semibold hover:text-gray-600'>
								About us
							</Link>
						</li>
						<li className=''>
							<Link
								onClick={() => setOpen(false)}
								href='/faqs'
								className='cursor-pointer text-black hover:font-semibold hover:text-gray-600'>
								FAQs
							</Link>
						</li>
						{/* <li className=''>
							<Link
								onClick={() => setOpen(false)}
								href='/contact'
								className='cursor-pointer text-black hover:text-gray-600'>
								Contact
							</Link>
						</li> */}
						<li>
							<CallChats className='flex flex-col gap-y-8' />
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default MobileNav;
