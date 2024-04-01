import React from 'react'
import Cards from './Cards';
import { bikes } from '@/data/API';

const BrowswBikes = () => {
  return (
		<section className='mx-auto w-[90%] py-20'>
			<div className='grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
				{bikes.map((res) => (
					<Cards res={res} key={res.id} />
				))}
			</div>
		</section>
	);
}

export default BrowswBikes
