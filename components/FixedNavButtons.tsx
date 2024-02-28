import Link from 'next/link';
import { IoLogoWhatsapp, IoMdCall } from '@/lib/ReactIcons';

export default function Fixed_Nav_Buttons() {
	return (
		// <div className='fixed bottom-0 z-50 flex w-full items-center justify-center gap-2 backdrop-blur backdrop-filter *:rounded-lg *:border-4 md:hidden'>
		<div className='fixed bottom-0 z-50 flex gap-2 max-md:w-full max-md:items-center max-md:justify-center max-md:backdrop-blur max-md:backdrop-filter md:right-16 md:top-[10px] md:h-fit lg:hidden'>
			{/* <a
				aria-label='Call to contact OwnWheelz.com'
				href={'tel:+91'}
				className='gap flex justify-center border-gray-400 bg-white py-2.5 font-medium text-black transition-shadow duration-200 hover:bg-gray-100 hover:shadow-lg hover:shadow-sky-900/10 focus:outline-none focus-visible:ring focus-visible:ring-black/70'>
				<IoMdCall color='' size='21px' />
				<span>Talk to Us</span>
			</a> */}
			<a
				aria-label='Call to contact OwnWheelz.com'
				href={'tel:+91'}
				className='gap flex items-center justify-center rounded border-4 border-gray-400 bg-white py-2.5  font-medium text-black transition-shadow duration-200 hover:bg-gray-100 hover:shadow-lg hover:shadow-sky-900/10 focus:outline-none focus-visible:ring focus-visible:ring-gray-400 max-md:w-1/2 md:rounded-md md:border-[2.5px] md:border-black/80 md:bg-opacity-0 md:px-4 md:py-2'>
				<IoMdCall color='' size='21px' />
				<span>Talk to Us</span>
			</a>

			<Link
				aria-label='Whatsapp to contact OwnWheelz.com'
				target='_blank'
				href={`https://wa.me/917620062784?text=Hi,%0acan I know about your *services* on OwnWheelz.com`}
				className='flex items-center justify-center gap-2 rounded border-4 border-emerald-900 bg-emerald-500 py-2.5 font-medium text-white transition-shadow duration-200 hover:bg-emerald-500/90 hover:shadow-lg hover:shadow-emerald-500/10 focus:outline-none focus-visible:ring focus-visible:ring-emerald-900 max-md:w-1/2 md:rounded-md md:border-none md:px-4 md:py-2'>
				<IoLogoWhatsapp color='white' size='21px' />
				<span>Chat Now</span>
			</Link>
			{/* <Link
				aria-label='Whatsapp to contact OwnWheelz.com'
				target='_blank'
				href={`https://wa.me/917620062784?text=Hi,%0acan I know about your *services* on OwnWheelz.com`}
				className='flex justify-center gap-2 border-emerald-900 bg-emerald-500 py-2.5 font-medium text-white transition-shadow duration-200 hover:bg-emerald-500/90 hover:shadow-lg hover:shadow-emerald-500/10 focus:outline-none focus-visible:ring focus-visible:ring-emerald-600'>
				<IoLogoWhatsapp color='white' size='21px' />
				<span>Chat Now</span>
			</Link> */}
		</div>
	);
}
