'use client';

import { useState } from 'react';
import Image from 'next/image';

import { cn } from '@/lib/utils';

type Students = {
    src: string;
    alt: string;
    name: string;
    company: string;
};
const students: Students[] = [
    {
        src: '/user-1.png',
        alt: 'User 1',
        name: 'Margret Henny',
        company: 'Edusity'
    },
    {
        src: '/user-2.png',
        alt: 'User 2',
        name: 'John Doe',
        company: 'Edusity'
    },
    {
        src: '/user-3.png',
        alt: 'User 3',
        name: 'Sofia Hope',
        company: 'Edusity'
    },
    {
        src: '/user-4.png',
        alt: 'User 4',
        name: 'William Jackson',
        company: 'Edusity'
    },
];

export const Testimonials = () => {
    // slider starts at 0 position holding cards index 0 and 1 (0 is the min position)
    // at position 25 it holds cards index 1 and 2
    // at position 50 it holds cards index 2 and 3 (50 is the max position)
    const [translateX, setTranslateX] = useState<number>(0);

    const nextSlide = () => {
        console.log(translateX);
        if (translateX < 50) {
            setTranslateX(translateX + 25);
        }
    };

    const prevSlide = () => {
        if (translateX > 0) {
            setTranslateX(translateX - 25);
        }
    };

  return (
    <div id='testimonial-section' className='mx-auto mt-10 mb-16 relative px-10%'>
        <div className='w-12 h-12 absolute top-1/2 -translate-y-1/2 right-5%'>
            <div 
                className='w-full h-full relative flex justify-center items-center cursor-pointer rounded-full bg-blue-700'
                onClick={nextSlide}
            >
                <Image
                    src='/next-icon.png'
                    alt='Next Icon'
                    width={25}
                    height={25}
                />
            </div>
        </div>
        <div className='w-12 h-12 absolute top-1/2 -translate-y-1/2 left-5%'>
            <div 
                className='w-full h-full relative flex justify-center items-center cursor-pointer rounded-full bg-blue-700'
                onClick={prevSlide}
            >
                <Image
                    src='/back-icon.png'
                    alt='Back Icon'
                    width={25}
                    height={25}
                />
            </div>
        </div>
        <div className='overflow-hidden'>
            <ul className={cn(
                'w-200% flex overflow-x-hidden duration-500',
                `-translate-x-${translateX}%`
            )}>
                {students.map((student) => (
                    <li key={student.alt} className='w-1/2 p-4 list-none'>
                        <div className='p-10 rounded-lg shadow-md text-slate-600'>
                            <div className='flex items-center mb-5 text-base'>
                                <div className='w-16 h-16 relative mr-2.5'>
                                    <Image
                                        src={student.src}
                                        alt={student.alt}
                                        fill
                                        className='object-contain rounded-full border-blue-700 border-4'
                                    />
                                </div>
                                <div>
                                    <h3 className='text-lg font-bold text-blue-700'>{student.name}</h3>
                                    <span>{student.company}</span>
                                </div>
                            </div>
                            <p>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus ipsa temporibus asperiores voluptatem, quibusdam
                                aperiam nesciunt impedit expedita vel dolorem ex amet quidem possimus quos ipsam? Enim sunt aut sit.
                            </p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    </div>
  );
};
