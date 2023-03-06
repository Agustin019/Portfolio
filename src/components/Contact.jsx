import React from 'react'
import Image from 'next/image'
import ContactImg from '../../public/assets/contact.jpg'

export default function Contact() {
  return (
    <div className='w-full lg:h-screen'>
        <div className='max-w-[1240px] m-auto px-2 py-16 w-full'>
            <p className='text-xl tracking-widest uppercase text-[#5651e5]'>Contact</p>
            <h2 className='py-4'>Get In Touch</h2>
            <div className='grid lg:grid-cols-5 gap-8'>
                {/* Left*/}
    <div className='col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl'>
        <div className='lg:p-4 h-full'>
            <div>
            <Image
                  className='rounded-xl hover:scale-105 ease-in duration-300'
                  src={ContactImg}
                  alt='/'
                />
            </div>
        </div>
    </div>
            </div>
        </div>

    </div>
  )
}
