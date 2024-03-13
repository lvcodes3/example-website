import Image from 'next/image';

export const About = () => {
  return (
    <div id='about-section' className='w-90% mx-auto mt-10 mb-16 flex md:flex-row flex-col justify-between items-center lg:px-10% px-5%'>
      <div className='relative md:basis-4/10 basis-full md:mb-0 mb-5 border-black border-2'>
        <Image
            src='/about.png'
            alt=''
            width={400}
            height={400}
            className='rounded-lg'
        />
        <Image
            src='/play-icon.png'
            alt=''
            width={50}
            height={50}
            className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'
        />
      </div>
      <div className='basis-5/10'>
        <h3 className='text-lg font-semibold uppercase text-blue-800'>About University</h3>
        <h2 className='max-w-sm my-2 text-3xl font-bold'>Nurturing Tomorrow's Leaders Today</h2>
        <p className='mb-4'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo officiis alias, autem excepturi non laborum doloremque
            atque obcaecati necessitatibus tempore corrupti, placeat inventore eligendi perferendis vitae molestias, sint rerum molestiae?
        </p>
        <p className='mb-4'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit non, dolorum aliquid atque esse, laudantium, veritatis
            consequuntur voluptatem impedit illo iure fugiat unde culpa vitae id autem deserunt ratione quas.
        </p>
        <p className='mb-4'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae officia id, amet corrupti unde laudantium nobis
            repellendus neque quasi cupiditate. Repellat similique repudiandae vitae porro nostrum laboriosam, rerum ut in.
        </p>
      </div>
    </div>
  );
};
