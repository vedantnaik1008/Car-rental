'use client'
import Image from 'next/image';

const RentCab = () => {
	return (
		<section className='mx-auto w-[90%] py-20'>
			<div className='grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
				<div className=''>
					<Image
						src={'https://em-content.zobj.net/source/telegram/386/loudly-crying-face_1f62d.webp'}
						alt='items-image'
						sizes='200'
						width={100}
						height={100}
						className=' mb-8  w-full rounded-xl bg-cover'
					/>
					<h2>We are sorry, the service is not available.</h2>
					<button type='button' onClick={() => window.history.back()}>
						Go back to previous page
					</button>
				</div>
			</div>
		</section>
	);
};

export default RentCab;
