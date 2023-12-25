'use client'
import dynamic from 'next/dynamic'
const AboutUs = dynamic(() => import('@/components/AboutUs'), {
  ssr: false
})

const Page = () => {
  return (
    <>
      <AboutUs />
    </>
  );
};

export default Page;
