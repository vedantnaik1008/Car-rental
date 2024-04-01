'use client';
import React, { useEffect } from 'react';
import Nav from '@/components/Nav';
import Hamburger from './MobileNav';
import { useState } from 'react';

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
			className='relative z-20'>
			<div className={`mx-auto mt-5 w-[95%]  py-3.5 drop-shadow-2xl sm:px-[10px] ${
				open ? 'rounded-xl bg-white' : 'rounded-xl bg-white'
			} `}>
				<div className='mx-auto flex max-w-7xl items-center justify-center'>
					<Nav />
				</div>
				<Hamburger open={open} setOpen={setOpen} />
			</div>
		</header>
	);
};

export default Header;
