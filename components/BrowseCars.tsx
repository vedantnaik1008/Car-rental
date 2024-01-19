import React from 'react';
import Pagination from './Pagination';
import useFetch from '@/hooks/useFetch';

const BrowseCars = () => {
  const {data: cars} = useFetch()
  return (
    <>
      <section className={`mx-auto w-[90%] py-20 ${cars.length === 0 ? 'h-screen' : ''}`}>
        <Pagination data={cars} />
      </section>
    </>
  );
};

export default BrowseCars;
