'use client';

import Header from '@/components/Header';
import React, { useState } from 'react';
import AnimateHeight from 'react-animate-height';

const Faq = ({
  showTitle = true,
  type = 'faq',
  queries = [
    {
      id: 1,
      question: 'What types of cars do you offer for rent?',
      answer:
        'We offer a wide range of cars from compact to luxury. You can choose the one that best suits your needs and preferences.',
    },
    {
      id: 2,
      question: 'How can I book a car?',
      answer:
        'You can book a car through our website or by contacting us directly via phone or WhatsApp.',
    },
    {
      id: 3,
      question: 'What are your rental rates?',
      answer:
        'Our rental rates vary depending on the type of car and the duration of the rental. Please visit our website or contact us for specific rates.',
    },
    {
      id: 4,
      question: 'What is your cancellation policy?',
      answer:
        'You can cancel your booking up to 24 hours before the scheduled pick-up time for a full refund. Please contact us for more details.',
    },
    {
      id: 5,
      question: 'Do you offer pick-up and drop-off services?',
      answer:
        'Yes, we offer pick-up and drop-off services for your convenience. Please contact us to arrange this service.',
    },
    {
      id: 6,
      question: 'What do I need to rent a car?',
      answer:
        'You will need a valid driving license and a credit card for the security deposit. Please contact us for more details.',
    },
  ],
}) => {
  const [active, setActive] = useState<any>(0);
  return (
    <>
      <Header whiteBackground={true} />
      <section className='flex justify-center py-20 md:py-36 lg:py-36'>
        <div className='container'>
          <div className='heading text-center'>
            <h6 className='text-xl font-semibold tracking-wide  text-sky-500'>FAQs</h6>
            <h4 className='mt-4 text-4xl font-bold tracking-wide text-sky-950/90'>
              Frequently Asked
              <span className=''> Questions</span>
            </h4>
            <p className='mt-5 text-lg font-semibold tracking-wide text-gray-400'>
              Have questions? We&apos;ll help you.
            </p>
          </div>
          <div className='mx-auto sm:px-5 md:w-4/5 md:px-0 lg:w-[730px]'>
            {queries.map((faq: any, i: number) => {
              return (
                <div
                  key={faq.id}
                  className='border-gray/20 mt-10 border-0 border-b-2 bg-transparent'>
                  <button
                    type='button'
                    className='relative !flex w-full items-center justify-between gap-2 py-2.5 text-lg font-bold text-gray-800 ltr:text-left rtl:text-right dark:text-white'
                    onClick={() => setActive(active === i ? null : i)}>
                    <p className='text-start tracking-wide text-gray-800'>{faq.question}</p>
                    <div
                      className={`border-gray text-gray ml-5 grid h-6 w-6 flex-shrink-0 place-content-center rounded-full border-2 transition ${
                        active === i
                          ? '!border-gray-800 !text-gray-800 dark:!border-white dark:!text-white'
                          : ''
                      }`}>
                      <svg
                        width='12'
                        height='12'
                        viewBox='0 0 12 12'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'>
                        <path
                          className={active === i ? 'hidden' : ''}
                          d='M6.09961 0.500977C6.65189 0.500977 7.09961 0.948692 7.09961 1.50098L7.09961 10.501C7.09961 11.0533 6.65189 11.501 6.09961 11.501H5.89961C5.34732 11.501 4.89961 11.0533 4.89961 10.501L4.89961 1.50098C4.89961 0.948692 5.34732 0.500977 5.89961 0.500977H6.09961Z'
                          fill='currentColor'
                        />
                        <path
                          d='M0.5 5.90039C0.5 5.34811 0.947715 4.90039 1.5 4.90039H10.5C11.0523 4.90039 11.5 5.34811 11.5 5.90039V6.10039C11.5 6.65268 11.0523 7.10039 10.5 7.10039H1.5C0.947715 7.10039 0.5 6.65268 0.5 6.10039V5.90039Z'
                          fill='currentColor'
                        />
                      </svg>
                    </div>
                  </button>
                  <AnimateHeight duration={600} height={active === i ? 'auto' : 0}>
                    <div className='lg:w-4/5'>
                      <p className='px-0 pb-5 pr-5 pt-0 font-medium leading-[18px]  tracking-wide text-gray-500'>
                        {faq.answer}
                      </p>
                    </div>
                  </AnimateHeight>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Faq;
