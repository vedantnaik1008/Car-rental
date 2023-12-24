'use client';

import React, { useState } from 'react';
import Header from '@/components/Header';

const Contact: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleMessageChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(event.target.value);
  };

  return (
    <>
      <Header whiteBackground={true} />
      <section className='body-font relative bg-sky-50/70 text-gray-600'>
        <div className='container mx-auto flex flex-wrap px-20 py-48 sm:flex-nowrap'>
          <div className='relative flex items-end justify-start overflow-hidden rounded-lg bg-gray-300 p-10 sm:mr-10 md:w-1/2'>
            <iframe
              width='100%'
              height='100%'
              className='absolute inset-0'
              title='map'
              style={{
                border: '0',
                filter: 'grayscale(1) contrast(1.2) opacity(0.4)',
                overflow: 'hidden',
              }}
              src='https://maps.google.com/maps?width=100%&height=600&hl=en&q=Vasco%2C%20Mormugao%2C%20Goa&ie=UTF8&t=&z=14&iwloc=B&output=embed'
            />
            <div className='relative flex flex-wrap rounded bg-white py-6 shadow-md'>
              <div className='px-6 lg:w-1/2'>
                <h2 className='title-font text-xs font-semibold tracking-widest text-gray-900'>
                  ADDRESS
                </h2>
                <p className='mt-1'>Vasco, Mormugao, Goa,</p>
              </div>
              <div className='mt-4 px-6 lg:mt-0 lg:w-1/2'>
                <h2 className='title-font text-xs font-semibold tracking-widest text-gray-900'>
                  EMAIL
                </h2>
                <a className='leading-relaxed text-blue-500'>example@email.com</a>
                <h2 className='title-font mt-4 text-xs font-semibold tracking-widest text-gray-900'>
                  PHONE
                </h2>
                <p className='leading-relaxed'>123-456-7890</p>
              </div>
            </div>
          </div>
          <div className='mt-8 flex w-full flex-col md:ml-auto md:mt-0 md:w-1/2 md:py-8 lg:w-1/3'>
            <h2 className='title-font mb-1 text-2xl font-bold text-gray-900'>Contact Us</h2>
            <p className='mb-5 leading-relaxed text-gray-600'>
              {/* Post-ironic portland shabby chic echo park, banjo fashion axe */}
            </p>
            <div className='relative mb-4'>
              <label htmlFor='name' className='text-sm leading-7 text-gray-600'>
                Name
              </label>
              <input
                type='text'
                id='name'
                name='name'
                value={name}
                onChange={handleNameChange}
                className='w-full rounded border border-gray-300 bg-white px-3 py-1 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-blue-500 focus:ring-2 focus:ring-blue-200'
              />
            </div>
            <div className='relative mb-4'>
              <label htmlFor='email' className='text-sm leading-7 text-gray-600'>
                Email
              </label>
              <input
                type='email'
                id='email'
                name='email'
                value={email}
                onChange={handleEmailChange}
                className='w-full rounded border border-gray-300 bg-white px-3 py-1 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-blue-500 focus:ring-2 focus:ring-blue-200'
              />
            </div>
            <div className='relative mb-4'>
              <label htmlFor='message' className='text-sm leading-7 text-gray-600'>
                Message
              </label>
              <textarea
                id='message'
                name='message'
                value={message}
                onChange={handleMessageChange}
                className='h-32 w-full resize-none rounded border border-gray-300 bg-white px-3 py-1 text-base leading-6 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-blue-500 focus:ring-2 focus:ring-blue-200'></textarea>
            </div>
            <button className='rounded border-0 bg-blue-500 px-6 py-2 text-lg text-white hover:bg-blue-600 focus:outline-none'>
              Button
            </button>
            <p className='mt-3 text-xs text-gray-500'>
              {/* Chicharrones blog helvetica normcore iceland tousled brook viral artisan. */}
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
