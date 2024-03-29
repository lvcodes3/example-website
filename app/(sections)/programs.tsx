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
    iconTitle: 'Graduation Degree',
  },
  {
    src: '/program-2.png',
    alt: 'Program 2',
    iconSrc: '/program-icon-2.png',
    iconAlt: 'Program Icon 2',
    iconTitle: 'Masters Degree',
  },
  {
    src: '/program-3.png',
    alt: 'Program 3',
    iconSrc: '/program-icon-3.png',
    iconAlt: 'Program Icon 3',
    iconTitle: 'Post Graduation',
  },
];

export const Programs = () => {
  return (
    <div
      id='program-section'
      className='w-90% mx-auto mt-10 mb-14 flex md:flex-row flex-col justify-between items-center lg:px-10% px-5%'
    >
      {programs.map((program) => (
        <div
          key={program.alt}
          className='relative md:margin-0 m-5 md:basis-3/10 basis-full'
        >
          <Image
            src={program.src}
            alt={program.alt}
            width={500}
            height={500}
            className='rounded-lg'
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
