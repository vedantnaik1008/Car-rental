'use client';
import { ImQuotesLeft } from '@/lib/ReactIcons';
import { TestimonialProps, testimonials } from '../data/testimonial';
import { Slider, TestimonialSettings } from '@/lib/SliderSetting';

const InfiniteScrolls = () => {
	return (
		<>
			<section id='faqs' className='relative flex flex-col items-center justify-between py-20'>
				<div className='mx-auto sm:w-4/5 md:w-[90%]'>
					<div className='mb-7 text-center'>
						<h2 className=' py-5 font-bold uppercase tracking-wide text-sky-500'>Testimonials</h2>
						<h3 className='text-4xl font-bold tracking-wide text-sky-950 opacity-90'>
							What people say about us?
						</h3>
					</div>
				</div>
				<div className="relative mx-auto w-[90%] overflow-hidden bg-white before:absolute before:left-0 before:top-0 before:z-[2] before:h-full before:w-[25px] md:before:w-[100px] before:bg-[linear-gradient(to_right,white_0%,rgba(255,255,255,0)_100%)] before:content-[''] after:absolute after:right-0 after:top-0 after:z-[2] after:h-full after:w-[25px] md:after:w-[100px] after:-scale-x-100 after:bg-[linear-gradient(to_right,white_0%,rgba(255,255,255,0)_100%)] after:content-['']">
					<div className='animate-infinite-slider img flex w-[calc(250px*10)]'>
						<div className='flex gap-x-8 '>
							<ImQuotesLeft color='rgb(14, 165, 233)' size='30px' className='mx-auto mb-8' />
							{testimonials.map((res: TestimonialProps) => (
								<div key={res.id} className='slide w-[320px] rounded-xl border-2 border-black p-5'>
									<p className='w-full text-pretty pb-5 text-center text-lg text-gray-500 md:text-xl'>
										{res.comment}
									</p>
									<p className='text-center font-semibold tracking-wide text-sky-950/90'>
										{res.user}
									</p>
								</div>
							))}
							{testimonials.map((res: TestimonialProps) => (
								<div key={res.id} className='slide w-[320px] rounded-xl border-2 border-black p-5'>
									<p className='w-full text-pretty pb-5 text-center text-lg text-gray-500 md:text-xl'>
										{res.comment}
									</p>
									<p className='text-center font-semibold tracking-wide text-sky-950/90'>
										{res.user}
									</p>
								</div>
							))}
						</div>
					</div>
				</div>
			</section>
		</>
	);
};
export default InfiniteScrolls;
