'use client';
import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleMessageChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(event.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!name || !email || !message) {
      alert('Please fill in name, email and message fields');
      return;
    }

    if (isSubmitting) {
      return;
    }
    const emailParams = {
      to_email: 'owner email',
      from_name: name,
      from_email: email,
      message: message,
    };

    emailjs
      .send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', emailParams, 'YOUR_PUBLIC_KEY')
      .then(() => {
        alert('Email sent successfully!');
        setIsSubmitting(false);
        setName('');
        setEmail('');
        setMessage('');
      })
      .catch((error: any) => {
        console.error('Error sending email:', error);
        alert('Error sending email. Please try again later.');
        setIsSubmitting(false);
      });
    console.log({ name: name, email: email, 'message,': message });
  };

  return (
    <>
      <section className='body-font relative bg-sky-50/70 pt-10 text-gray-600 lg:pt-0'>
        <div className='mx-auto grid w-[90%] gap-20 sm:py-20 md:grid-cols-1 lg:grid-cols-2 lg:py-48'>
          <div className='relative rounded-lg bg-gray-300 sm:h-[50vh] lg:h-full '>
            <iframe
              width='100%'
              height='100%'
              className='border-none  opacity-40 contrast-125 grayscale'
              title='map'
              src='https://maps.google.com/maps?width=100%&height=600&hl=en&q=Vasco%2C%20Mormugao%2C%20Goa&ie=UTF8&t=&z=14&iwloc=B&output=embed'
            />
            <div className='absolute bottom-0 left-0 flex w-full flex-wrap rounded bg-white py-6 shadow-md'>
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
          <form onSubmit={handleSubmit} className='flex w-full flex-col md:mt-8'>
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
                name='from_name'
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
                name='from_email'
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
            <button
              disabled={isSubmitting}
              type='submit'
              className='rounded border-0 bg-blue-500 px-6 py-2 text-lg text-white hover:bg-blue-600 focus:outline-none'>
              {isSubmitting ? 'Submitting...' : 'Submit'}
            </button>
            <p className='mt-3 text-xs text-gray-500'>
              {/* Chicharrones blog helvetica normcore iceland tousled brook viral artisan. */}
            </p>
          </form>
        </div>
      </section>
    </>
  );
};

export default Contact;
