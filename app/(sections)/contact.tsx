'use client';

import { useState } from 'react';
import Image from 'next/image';

export const Contact = () => {
    const [result, setResult] = useState<string>("");

    const onSubmit = async (event: any) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "6545d80b-58b3-46c4-9233-f34a64d73c5f");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("Form Submitted Successfully");
            event.target.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    };

  return (
    <div id='contact-section' className='max-w-90% mx-auto mt-10 mb-14 flex justify-between px-10%'>
        <div className='basis-48% text-slate-600'>
            <div className='flex items-center mb-5'>
                <h3 className='text-xl font-bold text-blue-700'>
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
            <form onSubmit={onSubmit}>
                <label>Your Name:</label>
                <input 
                    type='text'
                    name='name'
                    placeholder='Enter Your Name' 
                    required
                    className='w-full mt-1 mb-4 p-4 block border-0 outline-0 resize-none bg-blue-100'
                 />
                <label>Phone Number:</label>
                <input 
                    type='tel' 
                    name='phone'
                    placeholder='Enter Your Phone Number' 
                    required
                    className='w-full mt-1 mb-4 p-4 block border-0 outline-0 resize-none bg-blue-100'
                />
                <label>Write Your Message Here:</label>
                <textarea 
                    name='message'
                    cols={30} 
                    rows={6} 
                    placeholder='Enter Your Message' 
                    required
                    className='w-full mt-1 mb-4 p-4 block border-0 outline-0 resize-none bg-blue-100'
                ></textarea>
                <button 
                    type='submit' 
                    className='mx-auto px-6 py-4 text-base text-white bg-blue-700 border-0 rounded-3xl outline-0 flex justify-center items-center gap-x-2'
                >
                    Submit
                    <Image
                        src='/white-arrow.png'
                        alt='White Arrow'
                        width={25}
                        height={25}
                    />
                </button>
            </form>
            <span className='mx-0 my-5 block text-center'>{result}</span>
        </div>
    </div>
  );
};
