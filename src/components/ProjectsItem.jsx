import Image from "next/image"
import Link from "next/link"
import PropertyImg from '../../public/assets/projects/property.jpg'

export default function ProjectsItem({ project }) {

  const { name, url, bgImage } = project
  return (
     <div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]'>
      <Image src={bgImage} width={1200} height={860} className='rounded-xl group-hover:opacity-10' alt='/ no se cargo pa' />
      <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
        <h3 className="text-2xl text-white text-center tracking-widest">{name}</h3>
        <p className="pb-4 pt-2 text-white text-center">React JS</p>
        <Link href={url} target='__blank'>
          <p className="text-center py-3 rounded-lg bg-white text-gray-700 text-lg cursor-pointer font-semibold">More info</p>
        </Link>
      </div>
    </div>

  )
}
