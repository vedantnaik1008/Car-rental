'use client';
import { Cars } from '@/data/API';
import React, { useState } from 'react';
import Cards from './Cards';

type Props = {
  data: Cars[];
};

const Pagination = ({ data }: Props) => {
  const [current, setCurrent] = useState(1);
  const itemsPerPage = 10;
  const startIndex = (current - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const totalPages = Math.ceil(data.length / itemsPerPage);
  const currentItems = data.slice(startIndex, endIndex);

  const changePage = (pageNumber: number) => {
    if (pageNumber >= 1 && pageNumber <= Math.ceil(data.length / itemsPerPage)) {
      setCurrent(pageNumber);
    }
  };
  return (
    <>
        <div className='grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 '>
          {currentItems.map((res) => (
            <div key={res.id} className='rounded-[30px]'>
              <Cards res={res} />
            </div>
          ))}
        </div>
        <div className='mt-20 flex justify-center gap-4'>
            {Array.from({ length: totalPages }, (_, index) => (
              <>
                <div className=''>
                  <button
                    disabled={current === index + 1}
                    className={`${
                      current === index + 1 ? 'bg-white text-black border-2 border-black' : 'bg-black text-white'
                    }  rounded-lg px-8 py-4`}
                    key={index + 1}
                    onClick={() => changePage(index + 1)}>
                    {index + 1}
                  </button>
                </div>
              </>
            ))}
          </div>
    </>
  );
};

export default Pagination;
