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
    <div className='mx-auto mt-10 mb-16 text-center px-10%'>
      <div className='relative mb-10 flex justify-between items-center'>
        {gallery.map((image) => (
          <div key={image.alt} className='w-23% h-72 relative'>
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className='object-cover rounded-lg'
            />
          </div>
        ))}
      </div>
      <button className='mx-auto px-6 py-4 text-base text-white bg-black border-0 rounded-3xl outline-0 flex justify-center items-center gap-x-2'>
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
