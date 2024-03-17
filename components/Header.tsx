'use client';
import React, { useEffect } from 'react';
import Nav from '@/components/Nav';
import Hamburger from './MobileNav';
import { useState } from 'react';
import { FaBarsStaggered } from 'react-icons/fa6';
import { IoClose } from 'react-icons/io5';
import CallChats from './CallChats';
import Logo from './logo';

const Header = () => {
const [open, setOpen] = useState(false);

	useEffect(() => {
		const onScroll = () => {
			const scrollPosition = window.scrollY;
			if (scrollPosition > 0) {
				document.getElementById('navbar')?.classList.add('show');
			} else {
				document.getElementById('navbar')?.classList.remove('show');
			}
		};

		window.addEventListener('scroll', onScroll);

		return () => window.removeEventListener('scroll', onScroll);
	}, []);

	return (
		<header
			id='navbar'
			className={`fixed z-20 mx-auto mt-5 w-[95%] bg-white py-3.5 drop-shadow-2xl shadow-2xl rounded-xl left-[2.5%] sm:px-[10px]`}>
			<div className='mx-auto flex max-w-7xl items-center justify-center'>
				<Nav />
			</div>
			<div className='relative flex items-center justify-between lg:hidden'>
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
			<Hamburger open={open} setOpen={setOpen} />
		</header>
	);
};

export default Header;
