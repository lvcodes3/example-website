import Image from 'next/image';

export const Programs = () => {
  return (
    <div className='my-20 mx-auto w-11/12 flex justify-between items-center px-10%'>
        <div className='h-72 relative basis-3/10'>
            <Image 
                src='/program-1.png'
                alt='Program 1'
                fill
                className='object-cover rounded-lg'
            />
            <div className='absolute inset-0 rounded-lg bg-sky-700/30 flex flex-col justify-center items-center cursor-pointer opacity-0 hover:opacity-100 pt-70% hover:pt-0 duration-500'>
                <Image
                    src='/program-icon-1.png'
                    alt='Program Icon 1'
                    width={60}
                    height={60}
                />
                <p className='text-white'>Graduation Degree</p>
            </div>
        </div>
        <div className='h-72 relative basis-3/10'>
            <Image 
                src='/program-2.png'
                alt='Program 2'
                fill
                className='object-cover rounded-lg'
            />
            <div className='absolute inset-0 rounded-lg bg-sky-700/30 flex flex-col justify-center items-center cursor-pointer opacity-0 hover:opacity-100 pt-70% hover:pt-0 duration-500'>
                <Image
                    src='/program-icon-2.png'
                    alt='Program Icon 2'
                    width={60}
                    height={60}
                />
                <p className='text-white'>Masters Degree</p>
            </div>
        </div>
        <div className='h-72 relative basis-3/10'>
            <Image 
                src='/program-3.png'
                alt='Program 3'
                fill
                className='object-cover rounded-lg'
            />
            <div className='absolute inset-0 rounded-lg bg-sky-700/30 flex flex-col justify-center items-center cursor-pointer opacity-0 hover:opacity-100 pt-70% hover:pt-0 duration-500'>
                <Image
                    src='/program-icon-3.png'
                    alt='Program Icon 3'
                    width={60}
                    height={60}
                />
                <p className='text-white'>Post Graduation</p>
            </div>
        </div>
    </div>
  );
};
