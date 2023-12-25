import { useEffect, useRef } from 'react';
import Link from 'next/link';

interface Props {
  clicked: boolean;
  setClicked: (value: boolean) => void;
}

const DropDown = ({ clicked, setClicked }: Props) => {
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setClicked(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setClicked(false);
      }
    };

    if (clicked) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleKeyDown);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [clicked, setClicked]);

  return (
    <div ref={dropdownRef}>
      {clicked && (
        <div
          className={
            clicked
              ? 'absolute left-0 top-full block w-[150px] rounded-lg bg-white py-5 text-sky-950 shadow-xl shadow-sky-500/10'
              : 'hidden'
          }>
          <ul className='flex justify-center'>
            <div className='flex flex-col gap-3 text-start'>
              <li>
                <Link href='/browse-cars' className='hover:font-semibold hover:text-slate-500'>
                  Rent a Car
                </Link>
              </li>
              <li>
                <Link href='/#rent-a-bike' className='hover:font-semibold hover:text-slate-500'>
                  Rent a Bike
                </Link>
              </li>
              <li>
                <Link href='/#book-a-cab' className='hover:font-semibold hover:text-slate-500'>
                  Book a Cab
                </Link>
              </li>
            </div>
          </ul>
        </div>
      )}
    </div>
  );
};

export default DropDown;
