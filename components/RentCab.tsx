'use client'
import Image from 'next/image';

const RentCab = () => {
	return (
		<section className='mx-auto w-[90%] py-20 h-screen'>
			<div className='flex items-center justify-center'>
				<div className=''>
					<Image
						priority={false}
						src={'https://em-content.zobj.net/source/telegram/386/loudly-crying-face_1f62d.webp'}
						alt='items-image'
						sizes='200'
						width={100}
						height={100}
						className=' mb-8  w-[70%] bg-cover mx-auto'
					/>
					<h2 className='text-2xl font-semibold text-[#082F49] text-center'>We are sorry, the service is not available.</h2>
					<button type='button' onClick={() => window.history.back()} className='w-[90%] mx-auto font-medium text-lg text-sky-500'>
						Go back to previous page
					</button>
				</div>
			</div>
		</section>
	);
};

export default RentCab;
