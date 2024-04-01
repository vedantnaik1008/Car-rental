'use client';
import Image from 'next/image';
import About from '@/public/assets/edo.jpg';
import { brandBikesName, brandName, cars } from '@/data/API';

const AboutUs = () => {
	const uniqueModels = cars
		.map((item) => item.model)
		.filter((value, index, self) => self.indexOf(value) === index);

	console.log(uniqueModels);

	return (
		<>
			<section className='mx-auto flex w-[90%] flex-col items-center justify-center bg-sky-50 py-28 md:py-36 lg:py-36'>
				<h1 className='mb-8  text-4xl font-bold text-sky-900'>About Us</h1>
				<Image
					src={About}
					alt='items-image'
					sizes='200'
					width={100}
					height={100}
					className=' mb-8  w-full rounded-xl bg-cover'
				/>
				<div className='grid gap-8 sm:grid-cols-1 md:grid-cols-2'>
					<div className='rounded-lg bg-sky-100 p-8 shadow-lg'>
						<h2 className='mb-4 text-3xl font-bold text-sky-900'>Our Mission</h2>
						<p className='text-sky-700'>
							To provide excellent car rental services with unparalleled customer satisfaction. We
							strive to make renting easy, affordable and convenient.
						</p>
					</div>

					<div className='rounded-lg bg-sky-200 p-8 shadow-lg'>
						<h2 className='mb-4 text-3xl font-bold text-sky-900'>Our Values</h2>
						<p className='text-sky-700'>
							Honesty, transparency and customer focus. We go above and beyond to exceed
							expectations.
						</p>
					</div>

					<div className='rounded-lg bg-sky-100 p-8 shadow-lg'>
						<h2 className='mb-4 text-3xl font-bold text-sky-900'>Our Team</h2>
						<p className='text-sky-700'>
							Our experienced team is dedicated to ensuring you have the best rental experience
							possible.
						</p>
					</div>

					<div className='rounded-lg bg-sky-200 p-8 shadow-lg'>
						<h2 className='mb-4 text-3xl font-bold text-sky-900'>Our Services</h2>

						<p className='mb-4 text-sky-700'>
							We offer a wide selection of well-maintained rental vehicles to suit your needs.
						</p>

						<ul className='ml-4 list-disc text-sky-700'>
							<li>Car rentals with great rates and benefits</li>
							<li>Airport pick-up and drop-off</li>
							<li>One-way rentals</li>
							<li>Long term discounts</li>
							<li>Luxury and exotic rentals</li>
						</ul>
					</div>
				</div>

				<div className='my-14'>
					<h2 className='mb-8  text-center text-4xl font-bold text-sky-900'>
						Meet Our Wheels: A Fleet of Excellence
					</h2>
					<div className='my-8'>
						<h3 className='my-2 text-xl font-bold text-sky-900'>Cars we have</h3>
						<div className='flex flex-wrap items-center gap-4'>
							{brandName.map((brand) => (
								<Image
									key={brand.id}
									src={brand.img}
									alt={`${brand.img}`}
									height={100}
									width={100}
									className='aspect-square w-[130px] rounded-xl bg-white  bg-cover p-2'
								/>
							))}
						</div>
					</div>
					<div className='my-8'>
						<h3 className='my-2 text-xl font-bold text-sky-900'>Bikes we have</h3>
						<div className='flex flex-wrap items-center gap-4'>
							{brandBikesName.map((brand) => (
								<Image
									key={brand.id}
									src={brand.img}
									alt={`${brand.img}`}
									height={100}
									width={100}
									className='aspect-square w-[130px] rounded-xl bg-white  bg-cover p-2'
								/>
							))}
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default AboutUs;
