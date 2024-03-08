import Image from 'next/image';

export const Navbar = () => {
  return (
    <nav className='w-full fixed top-0 left-0 z-50 flex justify-between items-center py-1 text-white px-10%'>
        <Image 
            src='/logo.png'
            alt='Logo Image'
            width={200}
            height={200}
            className=''
        />
        <ul>
          <li className='cursor-pointer inline-block list-none mx-5 my-1 text-base'>Home</li>
          <li className='cursor-pointer inline-block list-none mx-5 my-1 text-base'>Program</li>
          <li className='cursor-pointer inline-block list-none mx-5 my-1 text-base'>About Us</li>
          <li className='cursor-pointer inline-block list-none mx-5 my-1 text-base'>Campus</li>
          <li className='cursor-pointer inline-block list-none mx-5 my-1 text-base'>Testimonials</li>
          <li className='inline-block list-none mx-5 my-1 text-base'>
            <button className='px-6 py-4 text-base text-black bg-white border-0 rounded-3xl outline-0'>
              Contact Us
            </button>
          </li>
        </ul>
    </nav>
  );
};
