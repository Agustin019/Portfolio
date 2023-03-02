import Image from "next/image"
import AboutImg from '../../public/assets/about.jpg'

export default function About() {
    return (
        <div className='w-full md:h-screen p-2 flex items-center py-16'>
            <div className='max-w-[1240px] m-auto md:grid grid-cols-3 md:gap-6'>
                <div className="col-span-2">
                    <p className="uppercase text-xl tracking-widest text-[#5651e5]">About</p>
                    <h2 className="py-4">Who I Am</h2>
                    <p className="py-2 text-gray-600"> Soy un desarrollador front-end con dos años de experiencia trabajando como freelance y especializado en la creación de interfaces de usuario modernas y altamente funcionales utilizando React. Soy un apasionado por el diseño web y el desarrollo de aplicaciones innovadoras y de alta calidad, y siempre busco integrar las últimas tendencias y tecnologías en mis proyectos. En mi portfolio podrás encontrar algunos de mis trabajos más recientes y descubrir cómo he ayudado a mis clientes a llevar sus ideas a la realidad. Estoy disponible para proyectos y colaboraciones, ¡así que no dudes en ponerte en contacto conmigo para discutir tu próximo proyecto!</p>
                    {/*<p>I'm a front-end developer with two years of experience working as a freelancer and specializing in creating modern and highly functional user interfaces using React. I'm passionate about web design and developing innovative, high-quality applications, and I always seek to integrate the latest trends and technologies into my projects. In my portfolio, you can find some of my most recent work and discover how I've helped my clients bring their ideas to life. I'm available for projects and collaborations, so don't hesitate to get in touch with me to discuss your next project!</p>*/}
                    <p className="py-2 text-gray-900  underline cursor-pointer">Check out some of my latest projects</p>
                </div>
                <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex  items-center justify-center p-4 hover:scale-105 ease-in duration-300">
                    <Image src={AboutImg} alt='/' width={2500} height={500} />
                </div>
            </div>
        </div>
    )
}
