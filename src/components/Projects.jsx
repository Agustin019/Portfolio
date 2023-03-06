import ProjectsItem from "./ProjectsItem"
import { allProjects } from "../utils/projects"


export default function Projects() {
    console.log(allProjects)
  return (
    <div className='w-full'>
        <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>Projects</p>
        <h2 className='py-4'>What I&apos;ve built </h2>
        <div className='grid md:grid-cols-2 gap-8'>
            {
                allProjects.map(project => <ProjectsItem key={project.id} project={project} />)
            }
           
        </div>
        </div>
    </div>
  )
}
