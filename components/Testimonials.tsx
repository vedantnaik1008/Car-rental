'use client';
import { InfiniteMovingCards } from '@/components/ui/infinite-moving-cards';
import { testimonials } from '@/data/testimonial';

export function Testimonials() {
	return (
		<section id='faqs' className='relative flex items-center justify-between py-20'>
			<div className='mx-auto w-[90%]'>
				<div className='mb-7 text-center'>
					<h2 className=' py-5 font-bold uppercase tracking-wide text-sky-500'>Testimonials</h2>
					<h3 className='text-4xl font-bold tracking-wide text-sky-950 opacity-90'>
						What people say about us?
					</h3>
				</div>
				<div className='dark:bg-grid-white/[0.05] relative flex flex-col items-center justify-center overflow-hidden rounded-md  antialiased dark:bg-black'>
					<InfiniteMovingCards items={testimonials} direction='right' speed='slow' />
				</div>
			</div>
		</section>
	);
}
