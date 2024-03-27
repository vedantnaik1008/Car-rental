'use client';
import useScrollTop from '@/hooks/useScrollTop';

export default function GoToTop() {
	const { showTopButton, goToTop } = useScrollTop();

	return (
		showTopButton && (
			<button
				type='button'
				className='fixed bottom-12 right-5 z-10 ltr:right-5 rtl:left-5'
				onClick={goToTop}>
				<div className='hover:bg-secondary dark:bg-primary dark:hover:bg-secondary group flex size-[52px] items-center justify-center rounded-md border border-sky-950/20 bg-sky-950 text-white transition duration-200'>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						fill='none'
						viewBox='0 0 24 24'
						strokeWidth='1.5'
						stroke='currentColor'
						className='h-6 w-6 transition group-hover:text-sky-300'>
						<path strokeLinecap='round' strokeLinejoin='round' d='M4.5 15.75l7.5-7.5 7.5 7.5' />
					</svg>
				</div>
			</button>
		)
	);
}
