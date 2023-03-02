import Image from "next/image"
import allSkills from "../allSkills"
import HtmlImg from '../../public/assets/skills/html.png'
// import HtmlImg from '../../public/assets/skillshtml.png'
// import HtmlImg from '../../public/assets/skillshtml.png'
// import HtmlImg from '../../public/assets/skillshtml.png'
// import HtmlImg from '../../public/assets/skillshtml.png'
// import HtmlImg from '../../public/assets/skillshtml.png'
// import HtmlImg from '../../public/assets/skillshtml.png'
// import HtmlImg from '../../public/assets/skillshtml.png'

export default function Skills() {

    console.log(allSkills)
    return (
        <div className='w-full lg:h-screen p-2 '>
            <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
                <p className='text-xl uppercase tracking-widest text-[#5651e5]'>Skills</p>
                <h2>What I can do</h2>
                <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>


                    {
                        allSkills.map( skill => ( 
                            <div  key={skill.id} className='p-6 shadow-xl rounded-xl hover:scale-105 easi-in duration-300'>
                            <div className='grid grid-cols-2 gap-4 justify-center items-center '>
                                <div className='m-auto'>
                                    <Image src={skill.img} alt={skill.name} width={64} height={64}/>
                                </div>
                                <div>
                                    <h3>{skill.name}</h3>
                                </div>
                            </div>
                        </div>
                        ))
                       
                    }
                </div>
            </div>
        </div>
    )
}
