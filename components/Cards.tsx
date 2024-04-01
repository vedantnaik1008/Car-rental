'use client'
import { Cars } from '@/data/API';
import Link from 'next/link';
import React, { useState } from 'react';
import Image from 'next/image';
import { BsFuelPumpFill, GoPeople, ImMeter, PiSteeringWheelBold } from '@/lib/ReactIcons';
import { FaArrowDown } from 'react-icons/fa6';

type Props = {
    res: Cars;
    key: number;
}

const Cards = ({res, key}: Props) => {
	const [open, setOpen] = useState(false)
  return (
		<>
			<div key={key} className='rounded-[30px] outline-none'>
				<Image
					src={res.image}
					alt='items-image'
					sizes='200'
					width={200}
					height={200}
					className=' mx-auto mb-4 h-[250px] w-full rounded-lg object-contain object-center'
				/>
				<div className='mb-5 font-semibold tracking-wide text-sky-950'>
					<p className='mb-2 text-sky-950'>
						{res.brandName} {res.model}
					</p>
					<div className='flex items-center gap-x-2'>
						<p className='text-sky-500'>
							{res.price}
							<span className='font-normal text-gray-600'>/day</span>
						</p>
						<button
							className='flex items-center gap-x-2 rounded-xl border border-black px-2 py-1 text-[16px]'
							onClick={() => setOpen(!open)}>
							Details{' '}
							<p
								className={`${
									open
										? 'rotate-0 transition-all duration-200 ease-in-out'
										: '-rotate-90 transition-all duration-200 ease-in-out'
								}`}>
								<FaArrowDown />
							</p>
						</button>
					</div>
				</div>
				<div
					className={`${
						open ? 'grid grid-cols-2 items-center gap-x-12 gap-y-4 text-gray-600' : 'hidden'
					}`}>
					<p className='flex items-center gap-x-2 text-[14px]' title='seats'>
						<GoPeople size='20px' color='gray' />
						{res.features.seats}
					</p>
					<p className='flex items-center gap-x-2 pl-[2px] text-[14px]' title='fuel'>
						<BsFuelPumpFill size='20px' color='gray' />
						{res.features.fuel}
					</p>
					<p className='flex items-center gap-x-2 text-[14px]' title='mileage'>
						<ImMeter size='20px' color='gray' />
						{res.features.mileage}
					</p>
					<p className='flex items-center gap-x-2 text-[14px]' title='gear'>
						<PiSteeringWheelBold size='20px' color='gray' className='shrink-0' />
						<span className='truncate'>{res.features.gear}</span>
					</p>
				</div>
				<hr className='my-5 border border-slate-200' />
				<div className='flex flex-col items-center justify-between gap-5'>
					<a
						href={'tel:+917620062784'}
						className='w-full rounded-xl bg-sky-950/90 px-8 py-2.5 text-center text-sm font-semibold text-white transition-shadow duration-200 hover:bg-sky-950/85 focus:outline-none focus-visible:ring focus-visible:ring-sky-700'>
						Call to Book
					</a>
					<Link
						target='_blank'
						href={`https://wa.me/917620062784?text=Hi,%0aI want to book *${res.brandName} ${res.model} (${res.features.gear}) in Goa* on OwnWheelz.com`}
						className='w-full rounded-xl bg-emerald-500 px-8 py-2.5 text-center text-sm font-semibold text-white transition-shadow duration-200 hover:bg-emerald-500/90  focus:outline-none focus-visible:ring focus-visible:ring-emerald-600'>
						Book on WhatsApp
					</Link>
				</div>
			</div>
		</>
	);
};

export default Cards;
