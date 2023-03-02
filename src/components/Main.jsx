import { AiOutlineMail } from 'react-icons/ai'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { BsWhatsapp } from 'react-icons/bs'

export default function Main() {
    return (
        <div className='w-full h-screen text-center '>
            <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
                <div>
                    <p className='uppercase text-sm tracking-widest'>Lets build something together</p>
                    <h2 className='text-4xl'>Hi, I&apos;m  <span className='text-[#5651e5]'>Agustin</span></h2>
                    <h2 className='text-4xl py-4 text-gray-400'>A Front-End web developer. </h2>
                    <p className='py-4 text-gray-600 max-w-[70%] m-auto'>Desarrollador Front-End especializado en React, con experiencia en la creación de interfaces de usuario atractivas y altamente funcionales, familiarizado con herramientas y frameworks modernos como Next.js y Tailwind CSS. Comprometido y enfocado en cumplir plazos.</p>
                    <div className='flex items-center justify-between max-w-[330px] m-auto py-4 '>
                        <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                            <FaLinkedinIn />
                        </div>
                        <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                            <FaGithub />
                        </div>
                        <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                            <AiOutlineMail />
                        </div>
                        <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                            <BsWhatsapp />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
