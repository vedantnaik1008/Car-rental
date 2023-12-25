import { IoLogoWhatsapp, IoMdCall } from '@/lib/ReactIcons';
import Link from 'next/link';


const CallChats = () => {
  return (
    <>
      <Link
        aria-label='Call to rent car'
        href={'/'}
        className='rounded-md bg-sky-500 px-10 py-2 transition-shadow duration-200 hover:bg-sky-600 hover:shadow-lg hover:shadow-sky-500/20 focus:outline-none focus-visible:ring focus-visible:ring-sky-600'>
        <IoMdCall color='white' size='21px' />
      </Link>
      <Link
        aria-label='Whatsapp to rent car'
        href={'/'}
        className='rounded-md bg-green-500/95 px-10 py-2 transition-shadow duration-200 hover:bg-green-600 hover:shadow-lg hover:shadow-green-200/40 focus:outline-none focus-visible:ring focus-visible:ring-green-600'>
        <IoLogoWhatsapp color='white' size='21px' />
      </Link>
    </>
  );
};

export default CallChats;
