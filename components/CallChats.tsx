import { IoLogoWhatsapp, IoMdCall } from '@/lib/ReactIcons';
import Link from 'next/link';

const CallChats = () => {
	return (
		<>
			{/* <a
				aria-label='Call to contact OwnWheelz.com'
				href={'tel:+9176200062784'}
				className='rounded-xl bg-sky-900/90 px-9 py-2.5 text-white transition-shadow duration-200 hover:bg-sky-900/85 hover:shadow-lg hover:shadow-sky-900/10 focus:outline-none focus-visible:ring focus-visible:ring-sky-700'>
				<IoMdCall color='white' size='21px' />
			</a> */}
			<a
				aria-label='Call to contact OwnWheelz.com'
				href={'tel:+91'}
				className=' bg-white flex gap-2 rounded-lg border-[2.5px] border-black/80  px-4 py-2 font-medium text-black transition-shadow duration-200 hover:bg-gray-100 hover:shadow-lg hover:shadow-sky-900/10 focus:outline-none focus-visible:ring focus-visible:ring-black/70'>
				<IoMdCall color='' size='21px' />
				<span>Talk to Us</span>
			</a>

			<Link
				aria-label='Whatsapp to contact OwnWheelz.com'
				target='_blank'
				href={`https://wa.me/917620062784?text=Hi,%0acan I know about your *services* on OwnWheelz.com`}
				className='flex gap-2 rounded-lg bg-emerald-500 px-5 py-2.5 font-medium text-white transition-shadow duration-200 hover:bg-emerald-500/90 hover:shadow-lg hover:shadow-emerald-500/10 focus:outline-none focus-visible:ring focus-visible:ring-emerald-600'>
				<IoLogoWhatsapp color='white' size='21px' />
				<span>Chat Now</span>
			</Link>
			{/* <Link
				aria-label='Whatsapp to contact OwnWheelz.com'
				target='_blank'
				href={`https://wa.me/917620062784?text=Hi,%0acan I know about your *services* on OwnWheelz.com`}
				className='rounded-xl bg-emerald-500 px-9 py-2.5 text-white transition-shadow duration-200 hover:bg-emerald-500/90 hover:shadow-lg hover:shadow-emerald-500/10 focus:outline-none focus-visible:ring focus-visible:ring-emerald-600'>
				<IoLogoWhatsapp color='white' size='21px' />
			</Link> */}
		</>
	);
};

export default CallChats;
