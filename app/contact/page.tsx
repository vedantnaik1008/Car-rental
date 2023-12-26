'use client';
import LoadingSpinner from '@/components/Loading';
import dynamic from 'next/dynamic';
const Contact = dynamic(() => import('@/components/Contact'), {
  ssr: false,
  loading: () => <LoadingSpinner />,
});


const Page = () => {
  return (
    <Contact />
  )
}

export default Page
