export const Hero = () => {
  return (
    <div id='hero-component' className='w-full min-h-screen px-10%'>
        <div className='absolute inset-0 flex justify-center items-center'>
            <div className='max-w-3xl flex flex-col justify-center items-center gap-y-2 text-center text-white'>
                <h1 className='text-5xl font-bold'>We ensure a better education for a better world!</h1>
                <p className='max-w-2xl text-xl font-normal'>
                    Our cutting-edge curriculum is designed to empower students with the knowledge, skills,
                    and experiences needed to excel in the dynamic field of education.
                </p>
                <button className='px-6 py-4 text-base text-black bg-white border-0 rounded-3xl outline-0'>
                    Explore More
                </button>
            </div>
        </div>
    </div>
  );
};