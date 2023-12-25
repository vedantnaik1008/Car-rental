'use client'
import dynamic from 'next/dynamic';
const Faqs = dynamic(() => import('@/components/Faqs'), {
  ssr: false,
});
import Header from '@/components/Header';


const Faq = () => {
  return (
    <>
      <Header whiteBackground={true} />
      <Faqs />
    </>
  );
};

export default Faq;
