import { cars } from '@/data/API';
import React from 'react';
import Pagination from './Pagination';

const BrowseCars = () => {
  return (
    <>
      <section className='mx-auto w-[90%] py-20'>
        <Pagination data={cars} />
      </section>
    </>
  );
};

export default BrowseCars;
