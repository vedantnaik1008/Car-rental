import { IoLogoWhatsapp, IoMdCall } from '@/lib/ReactIcons';
import Link from 'next/link';

const CallChats = () => {
  return (
    <>
      <Link
        aria-label='Call to rent car'
        href={'/'}
        className='rounded-xl bg-sky-900/90 px-9 py-2.5 text-white transition-shadow duration-200 hover:bg-sky-900/85 hover:shadow-lg hover:shadow-sky-900/10 focus:outline-none focus-visible:ring focus-visible:ring-sky-700'>
        <IoMdCall color='white' size='21px' />
      </Link>
      <Link
        aria-label='Whatsapp to rent car'
        href={'/'}
        className='rounded-xl bg-emerald-500 px-9 py-2.5 text-white transition-shadow duration-200 hover:bg-emerald-500/90 hover:shadow-lg hover:shadow-emerald-500/10 focus:outline-none focus-visible:ring focus-visible:ring-emerald-600'>
        <IoLogoWhatsapp color='white' size='21px' />
      </Link>
    </>
  );
};

export default CallChats;
