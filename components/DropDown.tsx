// import Link from 'next/link';
// import React from 'react';

// interface Props {
//   clicked: boolean;
// }

// const DropDown = ({ clicked }: Props) => {
//   return (
//     <>
//       {clicked && (
//         <div
//           className={
//             clicked
//               ? 'absolute left-0 top-8 block w-[150px] rounded-lg bg-white py-5 text-sky-950 shadow-xl shadow-sky-500/10'
//               : 'hidden'
//           }>
//           <ul className='flex justify-center'>
//             <div className='flex flex-col gap-3 text-start'>
//               <li>
//                 <Link href='/browse-cars' className='hover:font-semibold hover:text-slate-500'>
//                   Rent a Car
//                 </Link>
//               </li>
//               <li>
//                 <Link href='/#rent-a-bike' className='hover:font-semibold hover:text-slate-500'>
//                   Rent a Bike
//                 </Link>
//               </li>
//               <li>
//                 <Link href='/#book-a-cab' className='hover:font-semibold hover:text-slate-500'>
//                   Book a Cab
//                 </Link>
//               </li>
//             </div>
//           </ul>
//         </div>
//       )}
//     </>
//   );
// };

// export default DropDown;

import { useEffect, useRef, useCallback } from 'react';
import Link from 'next/link';

interface Props {
  clicked: boolean;
  setClicked: (value: boolean) => void;
}

const DropDown = ({ clicked, setClicked }: Props) => {
  const node = useRef<HTMLDivElement>(null);

  const handleClickOutside = useCallback(
    (e: MouseEvent) => {
      if (node.current && !node.current.contains(e.target as Node)) {
        setClicked(false);
      }
    },
    [setClicked]
  );

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [handleClickOutside]);

  return (
    <div ref={node}>
      {clicked && (
        <div
          className={
            clicked
              ? 'absolute left-0 top-8 block w-[150px] rounded-lg bg-white py-5 text-sky-950 shadow-xl shadow-sky-500/10'
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
