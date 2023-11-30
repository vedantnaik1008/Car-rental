import Link from 'next/link';
import { IoLogoWhatsapp, IoMdCall } from 'react-icons/io';

const CallChats = () => {
  return (
    <>
      <Link
        aria-label='Call to rent car'
        href={'/'}
        className='rounded-lg bg-sky-500 px-10 py-2 hover:bg-sky-600'>
        <IoMdCall color='white' size='21px' />
      </Link>
      <Link
        aria-label='Whatsapp to rent car'
        href={'/'}
        className='rounded-lg bg-green-500 px-10 py-2 opacity-90 hover:bg-green-600'>
        <IoLogoWhatsapp color='white' size='21px' />
      </Link>
    </>
  );
};

export default CallChats;
