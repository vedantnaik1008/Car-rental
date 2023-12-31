import React from 'react';
import { Disclosure } from '@headlessui/react';
import { queries } from '@/data/queries';
import Header from './Header';
import { IoIosArrowDown } from 'react-icons/io';

const Faqs: React.FC = () => {
  return (
    <>
      <Header whiteBackground={true} />
      <section className='flex flex-col justify-center py-28 md:py-36 lg:py-36'>
        <div className='mb-10 text-center'>
          <h6 className='text-xl font-semibold tracking-wider  text-sky-500'>FAQs</h6>
          <h4 className='mt-4 font-bold tracking-wider text-sky-950/90 max-[360px]:text-xl min-[361px]:text-2xl md:text-4xl'>
            Frequently Asked
            <span className=''> Questions</span>
          </h4>
          <p className='mt-5 text-base font-semibold tracking-wide text-gray-400 md:text-lg'>
            Have questions? We&apos;ll help you.
          </p>
        </div>

        <div className='mx-auto w-full max-w-xl p-2 lg:max-w-2xl'>
          <div className='space-y-5'>
            {queries.map((query, index) => (
              <Disclosure key={index} as='div' className='pt-2'>
                {({ open }) => (
                  <>
                    <Disclosure.Button className='flex w-full items-center justify-between rounded-md bg-white px-6 py-3 text-left text-lg font-medium text-gray-900 shadow hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-gray-300'>
                      <span>{query.question}</span>
                      <IoIosArrowDown
                        className={`${
                          open ? 'rotate-180 transform text-gray-500' : 'text-gray-800'
                        } h-5 w-5 transition-transform duration-200 ease-in-out`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className='mt-1 rounded-b-lg bg-gray-100 px-8 py-4 text-base leading-relaxed text-gray-800 max-md:text-pretty'>
                      {query.answer}
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Faqs;
