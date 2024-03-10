import Image from 'next/image';

export const Contact = () => {
  return (
    <div className='max-w-90% mx-auto mt-10 mb-14 flex justify-between items-center px-10% border-black border-2'>
        <div className='basis-48% text-slate-600'>
            <div className='flex items-center mb-5'>
                <h3 className='text-lg font-bold text-blue-700'>
                    Send Us A Message
                </h3>
                <Image
                    src='/msg-icon.png'
                    alt='Message Icon'
                    width={35}
                    height={35}
                    className='ml-2.5'
                />
            </div>
            <p className='max-w-md'>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid sapiente numquam odit reprehenderit, atque consequatur
                repudiandae totam dolore doloremque modi suscipit architecto! Dolorem, aspernatur repudiandae aperiam earum facilis atque asperiores?
            </p>
            <ul>
                <li className='mx-0 my-5 flex items-center'>
                    <Image src='/mail-icon.png' alt='Mail Icon' width={25} height={25} className='mr-2.5' />
                    Contact@Edusity.dev
                </li>
                <li className='mx-0 my-5 flex items-center'>
                    <Image src='/phone-icon.png' alt='Phone Icon' width={25} height={25} className='mr-2.5' />
                    +1 123-456-7890
                </li>
                <li className='mx-0 my-5 flex items-center'>
                    <Image src='/location-icon.png' alt='Location Icon' width={25} height={25} className='mr-2.5' />
                    123 Driver Ave, Cambridge<br/> MA 02139, United States
                </li>
            </ul>
        </div>
        <div className='basis-48%'>
            <form>
                <label>Your Name:</label>
                <input type='text' name='name' placeholder='Enter Your Name' required />
                <label>Phone Number:</label>
                <input type='tel' name='phone' placeholder='Enter Your Phone Number' required />
                <label>Write Your Message Here:</label>
                <textarea name='message' cols={30} rows={6} placeholder='Enter Your Message' required></textarea>
                <button 
                    type='submit' 
                    className='mx-auto px-6 py-4 text-base text-white bg-black border-0 rounded-3xl outline-0 flex justify-center items-center gap-x-2'
                >
                    Submit
                </button>
            </form>
        </div>
    </div>
  );
};
