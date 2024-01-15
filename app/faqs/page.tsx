'use client';

import LoadingSpinner from '@/components/Loading';
import dynamic from 'next/dynamic';
const Faqs = dynamic(() => import('@/components/Accordion'), {
  ssr: false,
  loading: () => <LoadingSpinner />,
});

const Faq = () => {
  return (
    <>
      <Faqs />
    </>
  );
};

export default Faq;
