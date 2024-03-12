'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { Link } from 'react-scroll';

import { cn } from '@/lib/utils';

export const Navbar = () => {
  const [sticky, setSticky] = useState<boolean>(false);
  const [mobileMenu, setMobileMenu] = useState<boolean>(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    });    
  }, []);

  const toggleMenu = () => {
    setMobileMenu(!mobileMenu);
  };

  return (
    <nav className={cn(
        'w-full fixed top-0 left-0 z-50 flex justify-between items-center py-1 text-white lg:px-10% px-5%',
        sticky && 'bg-blue-800 duration-500'
    )}>
        <div className='relative lg:w-200px min-w-150px h-10'>
          <Image 
              src='/logo.png'
              alt='Logo Image'
              fill
              className='object-contain'
          />
        </div>
        <ul className={cn(
          'md:w-auto md:static md:pt-0 md:z-auto md:bg-inherit w-52 fixed top-0 right-0 bottom-0 pt-16 -z-10 bg-blue-800',
          mobileMenu && '-right-210px'
        )}>
          <li className='cursor-pointer md:inline-block lg:mx-3.5 md:mx-2 md:my-2 block mx-10 my-8'>
            <Link to='hero-component' smooth={true} offset={0} duration={500}>
              Home
            </Link>
          </li>
          <li className='cursor-pointer md:inline-block lg:mx-3.5 md:mx-2 md:my-2 block mx-10 my-8'>
            <Link to='program-section' smooth={true} offset={-260} duration={500}>
              Program
            </Link>
          </li>
          <li className='cursor-pointer md:inline-block lg:mx-3.5 md:mx-2 md:my-2 block mx-10 my-8'>
            <Link to='about-section' smooth={true} offset={-150} duration={500}>
              About Us
            </Link>
          </li>
          <li className='cursor-pointer md:inline-block lg:mx-3.5 md:mx-2 md:my-2 block mx-10 my-8'>
            <Link to='campus-section' smooth={true} offset={-260} duration={500}>
              Campus
            </Link>
            </li>
          <li className='cursor-pointer md:inline-block lg:mx-3.5 md:mx-2 md:my-2 block mx-10 my-8'>
            <Link to='testimonial-section' smooth={true} offset={-260} duration={500}>
              Testimonials
            </Link>
          </li>
          <li className='md:inline-block lg:mx-3.5 md:mx-2 md:my-2 block mx-10 my-8'>
            <Link to='contact-section' smooth={true} offset={-260} duration={500}>
              <button className='lg:px-5 lg:py-3 px-3 py-2 text-black bg-white border-0 rounded-3xl outline-0'>
                Contact Us
              </button>
            </Link>
          </li>
        </ul>
        <Image 
          src='/menu-icon.png' 
          alt='Menu Icon' 
          width={25} 
          height={25} 
          className='md:hidden w-7 block cursor-pointer'
          onClick={toggleMenu}
        />
    </nav>
  );
};
