'use client';
import { Disclosure } from '@headlessui/react';
import { queries } from '@/data/queries';
import { IoIosArrowDown } from 'react-icons/io';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

const Faqs = () => {
	const pathname = usePathname();
	const dynamicFaqsStyles = pathname === '/faqs' ? 'py-28' : 'py-20';
	const dynamicFaqsSlice = pathname === '/' ? queries.slice(0, -1) : queries;

	return (
		<>
			<section className={`flex flex-col justify-center ${dynamicFaqsStyles}`}>
				<div className='mb-8 text-center'>
					<h6 className='text-xl font-semibold tracking-wider  text-sky-500'>FAQs</h6>
					<h4 className='mt-4 font-bold tracking-wider text-sky-950/90 max-[360px]:text-xl min-[361px]:text-2xl md:text-4xl'>
						Have questions? We&apos;ll help you.
					</h4>
				</div>

				<div className='mx-auto w-full max-w-xl p-2 lg:max-w-2xl'>
					<div className='space-y-5'>
						{dynamicFaqsSlice.map((query, index) => (
							<Disclosure key={index} as='div' className='pt-2'>
								{({ open }) => (
									<>
										<Disclosure.Button className='flex w-full items-center justify-between rounded-md bg-white px-6 py-3 text-left text-lg font-medium text-gray-900 shadow hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-gray-300'>
											<span>{query.question}</span>
											<IoIosArrowDown
												className={`${
													open ? 'rotate-180 transform text-gray-500' : 'text-gray-800'
												} h-5 w-5 transition-transform duration-200 ease-in-out`}
											/>
										</Disclosure.Button>
										<Disclosure.Panel className='mt-1 rounded-b-lg bg-gray-100 px-8 py-4 text-base leading-relaxed text-gray-800 max-md:text-pretty'>
											{query.answer}
										</Disclosure.Panel>
									</>
								)}
							</Disclosure>
						))}
					</div>
				</div>
				{pathname === '/' ? (
					<div className='mt-10 flex justify-center'>
						<Link
							href={'/faqs'}
							className='inline-block rounded-xl  border border-gray-300 bg-white px-6 py-3 text-xl font-medium text-black transition duration-200 ease-out hover:scale-105  hover:bg-gray-50 hover:font-semibold hover:text-black/80 focus:outline-none focus-visible:ring focus-visible:ring-gray-500  lg:px-8 lg:py-4 lg:text-2xl'>
							View More
						</Link>
					</div>
				) : null}
			</section>
		</>
	);
};

export default Faqs;