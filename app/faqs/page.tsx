'use client'
import dynamic from 'next/dynamic';
const Faqs = dynamic(() => import('@/components/Faqs'), {
  ssr: false,
});


const Faq = () => {
  return (
    <>
      <Faqs />
    </>
  );
};

export default Faq;
