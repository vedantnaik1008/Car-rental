'use client';
import dynamic from 'next/dynamic';
const Contact = dynamic(() => import('@/components/Contact'), {
  ssr: false,
})


const Page = () => {
  return (
    <Contact />
  )
}

export default Page
