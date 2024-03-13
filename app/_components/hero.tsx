import Image from 'next/image';

export const Hero = () => {
  return (
    <div id='hero-component' className='w-full min-h-screen lg:px-10% px-5%'>
        <div className='absolute inset-0 flex justify-center items-center'>
            <div className='lg:max-w-3xl md:max-w-lg max-w-md flex flex-col justify-center items-center gap-y-3 text-center text-white'>
                <h1 className='lg:text-6xl md:text-5xl text-4xl font-bold'>We ensure a better education for a better world!</h1>
                <p className='lg:text-xl text-lg font-normal'>
                    Our cutting-edge curriculum is designed to empower students with the knowledge, skills,
                    and experiences needed to excel in the dynamic field of education.
                </p>
                <button className='lg:px-5 lg:py-3 px-3 py-2 text-black bg-white border-0 rounded-3xl outline-0 flex justify-center items-center gap-x-2'>
                    Explore More
                    <Image
                        src='/dark-arrow.png'
                        alt='Dark Arrow'
                        width={25}
                        height={25}
                    />
                </button>
            </div>
        </div>
    </div>
  );
};