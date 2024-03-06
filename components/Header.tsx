'use client';
import React, { useEffect } from 'react';
import Nav from '@/components/Nav';
import Hamburger from './MobileNav';

const Header = () => {

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
			className={`fixed z-50 w-[95%] py-3.5 drop-shadow-2xl  sm:px-[10px] mx-auto mt-5 rounded-xl left-[2.5%]`}>
			<div className='mx-auto flex max-w-7xl items-center justify-center'>
				<Nav />
			</div>
			<Hamburger />
		</header>
	);
};

export default Header;
