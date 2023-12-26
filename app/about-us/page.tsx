'use client'
import LoadingSpinner from '@/components/Loading';
import dynamic from 'next/dynamic'
const AboutUs = dynamic(() => import('@/components/AboutUs'), {
  ssr: false,
  loading: () => <LoadingSpinner />,
});

const Page = () => {
  return (
    <>
      <AboutUs />
    </>
  );
};

export default Page;
