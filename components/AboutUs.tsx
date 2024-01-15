import React from 'react';

const AboutUs = () => {
  return (
    <>
      <section className='flex flex-col items-center justify-center bg-sky-50 py-28 md:py-36 lg:py-36 w-[90%] mx-auto'>
        <h1 className='mb-8 text-4xl font-bold text-sky-900'>About Us</h1>

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
      </section>
    </>
  );
};

export default AboutUs;
