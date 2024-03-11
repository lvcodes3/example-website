import Image from 'next/image';

type Programs = {
    src: string;
    alt: string;
    iconSrc: string;
    iconAlt: string;
    iconTitle: string;
};
const programs: Programs[] = [
    {
        src: '/program-1.png',
        alt: 'Program 1',
        iconSrc: '/program-icon-1.png',
        iconAlt: 'Program Icon 1',
        iconTitle: 'Graduation Degree'
    },
    {
        src: '/program-2.png',
        alt: 'Program 2',
        iconSrc: '/program-icon-2.png',
        iconAlt: 'Program Icon 2',
        iconTitle: 'Masters Degree'
    },
    {
        src: '/program-3.png',
        alt: 'Program 3',
        iconSrc: '/program-icon-3.png',
        iconAlt: 'Program Icon 3',
        iconTitle: 'Post Graduation'
    },
];

export const Programs = () => {
  return (
    <div id='program-section' className='w-11/12 mx-auto mt-10 mb-14 flex justify-between items-center px-10%'>
        {programs.map((program) => (
            <div key={program.alt} className='h-72 relative basis-3/10'>
                <Image 
                    src={program.src}
                    alt={program.alt}
                    fill
                    className='object-cover rounded-lg'
                />
                <div className='absolute inset-0 rounded-lg bg-sky-700/30 flex flex-col justify-center items-center cursor-pointer opacity-0 hover:opacity-100 pt-70% hover:pt-0 duration-500'>
                    <Image
                        src={program.iconSrc}
                        alt={program.iconAlt}
                        width={60}
                        height={60}
                    />
                    <p className='text-white'>{program.iconTitle}</p>
                </div>
            </div>
        ))}
    </div>
  );
};
