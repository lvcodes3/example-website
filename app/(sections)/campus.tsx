import Image from 'next/image';

type Gallery = {
  src: string;
  alt: string;
};
const gallery: Gallery[] = [
  {
    src: '/gallery-1.png',
    alt: 'Gallery 1'
  },
  {
    src: '/gallery-2.png',
    alt: 'Gallery 2'
  },
  {
    src: '/gallery-3.png',
    alt: 'Gallery 3'
  },
  {
    src: '/gallery-4.png',
    alt: 'Gallery 4'
  },
];

export const Campus = () => {
  return (
    <div 
      id='campus-section' 
      className='mx-auto mt-10 mb-16 text-center lg:px-10% px-5%'
    >
      <div className='relative md:mb-10 mb-4 flex justify-between items-center md:flex-nowrap flex-wrap'>
        {gallery.map((image) => (
          <div key={image.alt} className='md:w-23% w-48% h-72 md:mb-0 mb-6 relative'>
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className='object-cover rounded-lg'
            />
          </div>
        ))}
      </div>
      <button 
        className='mx-auto md:px-6 px-4 md:py-4 py-3 text-white bg-blue-700 border-0 rounded-3xl outline-0 flex justify-center items-center gap-x-2'
      >
          See More Here
          <Image
              src='/white-arrow.png'
              alt='White Arrow'
              width={25}
              height={25}
          />
      </button>
    </div>
  );
};
