'use client';
import { ImQuotesLeft } from '@/lib/ReactIcons';
import { TestimonialProps, testimonials } from '../data/testimonial';
import { Slider, TestimonialSettings } from '@/lib/SliderSetting';

const Testimonials = () => {
  return (
    <>
      <section id='faqs' className='relative flex items-center justify-between py-20'>
        <div className='mx-auto sm:w-4/5 md:w-[90%]'>
          <div className='mb-7 text-center'>
            <h2 className=' py-5 font-bold uppercase tracking-wide text-sky-500'>Testimonials</h2>
            <h3 className='text-4xl font-bold tracking-wide text-sky-950 opacity-90'>
              What people say about us?
            </h3>
          </div>
          <div className='mx-auto mb-12 max-[319px]:max-w-40 md:w-[80%] lg:w-[70%]'>
            <ImQuotesLeft color='rgb(14, 165, 233)' size='30px' className='mx-auto mb-8' />
            <Slider {...TestimonialSettings}>
              {testimonials.map((res: TestimonialProps) => (
                <div key={res.id} className='w-full rounded-[30px] pb-5'>
                  <p className='w-full text-pretty pb-5 text-center text-lg text-gray-500 md:text-xl'>
                    {res.comment}
                  </p>
                  <p className='text-center text-sky-950'>{res.user}</p>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonials;
