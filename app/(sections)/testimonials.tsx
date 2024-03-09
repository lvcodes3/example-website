import Image from 'next/image';

type MovementIcons = {
    src: string;
    alt: string;
}

const movementIcons: MovementIcons[] = [
    {
        src: '/next-icon.png',
        alt: 'Next Icon',
    },
    {
        src: '/back-icon.png',
        alt: 'Back Icon',
    },
];

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
        name: 'William Jackson',
        company: 'Edusity'
    },
    {
        src: '/user-2.png',
        alt: 'User 2',
        name: 'John Doe',
        company: 'Google'
    },
    {
        src: '/user-3.png',
        alt: 'User 3',
        name: 'Ron Artest',
        company: 'X'
    },
    {
        src: '/user-4.png',
        alt: 'User 4',
        name: 'Margret Henny',
        company: 'Reddit'
    },
];

export const Testimonials = () => {
  return (
    <div className='mx-auto my-20 relative px-10% border-black border-2'>
        {movementIcons.map((icon) => (
            <div className='w-12 h-12 absolute top-1/2 '>
                <div className='w-full h-full relative flex justify-center items-center rounded-full bg-blue-900'>
                    <Image
                        src={icon.src}
                        alt={icon.alt}
                        width={25}
                        height={25}
                        className='cursor-pointer'
                    />
                </div>
            </div>
        ))}
        <div className='overflow-hidden border-black border-2'>
            <ul className='w-200% flex overflow-x-hidden duration-500'>
                {students.map((student) => (
                    <li className='w-1/2 p-4 list-none'>
                        <div>
                            <div>
                                <div className='w-24 h-24 relative'>
                                    <Image
                                        src={student.src}
                                        alt={student.alt}
                                        fill
                                        className='object-contain'
                                    />
                                </div>
                                <div>
                                    <h3>{student.name}</h3>
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
