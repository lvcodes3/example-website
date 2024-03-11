'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { Link } from 'react-scroll';

import { cn } from '@/lib/utils';

export const Navbar = () => {
  const [sticky, setSticky] = useState<boolean>(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    });    
  }, []);

  return (
    <nav className={cn(
        'w-full fixed top-0 left-0 z-50 flex justify-between items-center py-1 text-white lg:px-10% px-5%',
        sticky && 'bg-blue-800 duration-500'
    )}>
        <div className='relative lg:w-200px min-w-140px h-9'>
          <Image 
              src='/logo.png'
              alt='Logo Image'
              fill
              className='object-contain'
          />
        </div>
        <ul>
          <li className='cursor-pointer inline-block list-none lg:mx-2.5 my-2 mx-2 text-base'>
            <Link to='hero-component' smooth={true} offset={0} duration={500}>
              Home
            </Link>
          </li>
          <li className='cursor-pointer inline-block list-none lg:mx-2.5 my-2 mx-2 text-base'>
            <Link to='program-section' smooth={true} offset={-260} duration={500}>
              Program
            </Link>
          </li>
          <li className='cursor-pointer inline-block list-none lg:mx-2.5 my-2 mx-2 text-base'>
            <Link to='about-section' smooth={true} offset={-150} duration={500}>
              About Us
            </Link>
          </li>
          <li className='cursor-pointer inline-block list-none lg:mx-2.5 my-2 mx-2 text-base'>
            <Link to='campus-section' smooth={true} offset={-260} duration={500}>
              Campus
            </Link>
            </li>
          <li className='cursor-pointer inline-block list-none lg:mx-2.5 my-2 mx-2 text-base'>
            <Link to='testimonial-section' smooth={true} offset={-260} duration={500}>
              Testimonials
            </Link>
          </li>
          <li className='inline-block list-none lg:mx-3 lg:my-2 mx-2 my-1 text-base'>
            <Link to='contact-section' smooth={true} offset={-260} duration={500}>
              <button className='lg:px-5 lg:py-3 px-3 py-2 text-base text-black bg-white border-0 rounded-3xl outline-0'>
                Contact Us
              </button>
            </Link>
          </li>
        </ul>
    </nav>
  );
};
