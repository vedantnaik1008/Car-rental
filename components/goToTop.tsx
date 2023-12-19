'use client'
import { useEffect, useState } from 'react';

export default function GoToTop() {
  const [showTopButton, setShowTopButton] = useState(false);

  const goToTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  const onScrollHandler = () => {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
      setShowTopButton(true);
    } else {
      setShowTopButton(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', onScrollHandler);

    return () => {
      window.removeEventListener('scroll', onScrollHandler);
    };
  }, []);

  return (
    showTopButton && (
      <button
        type='button'
        className='fixed bottom-10 right-5 z-10 animate-bounce ltr:right-5 rtl:left-5'
        onClick={goToTop}>
        <div className='hover:bg-secondary dark:bg-primary dark:hover:bg-secondary group flex h-14 w-14 items-center justify-center rounded-full border border-sky-950/20 bg-sky-950 text-white transition duration-200'>
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
