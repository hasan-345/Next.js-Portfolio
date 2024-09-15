import { projects } from '@/data'
import React from 'react'
import { PinContainer } from './ui/3d-pin'
import { FaLocationArrow } from 'react-icons/fa'

const RecentProjects = () => {
  return (
    <section id='projects' className='py-20'>
        <h1 className='heading'>
            A small selection of {" "}
            <span className='text-purple'>Recent Projects</span>
        </h1>
        <div className='flex flex-wrap gap-x-16 gap-y-7 justify-center items-center mt-4 max-w-[1600px] mx-auto'>
           {projects.map((item)=>(
            <div className='sm:h-[672px] h-[512px] lg:min-h-[520px] flex justify-center items-center sm:w-[500px] w-[80vw]' key={item.id}>
               <PinContainer title={item.title} href={item.link}>
                   <div className='relative flex items-center justify-center sm:w-[500px] w-[80vw] overflow-hidden h-[200px] sm:h-[350px] mb-10'>
                     <div className='relative w-full h-full lg:rounded-3xl bg-[#13162D]' >
                        <img src="/bg.png" alt="bg" />
                     </div>
                     <img src={item.img} alt="image" className='absolute' />
                   </div>

                   <h1 className='font-bold lg:text-2xl md:text-xl text-base line-clamp-1 mb-2'>
                     {item.title}
                   </h1>
                 
                   <p className='font-light lg:text-[17px] text-sm line-clamp-2 lg:font-normal'>
                    {item.des}
                   </p>

                   <div className='flex justify-between items-center mt-7 mb-4'>

                      <div className='flex items-center'>
                        {item.iconLists.map((icon,index)=>(
                            <div key={icon} style={{transform: `translateX(-${10 * index}px)`}} className='border border-white/[0.2] rounded-full lg:h-10 lg:w-10 w-8 h-8 bg-black flex justify-center items-center'>
                              <img src={icon} alt="icon" className='p-2' />
                            </div>
                        ))}  
                      </div>     

                      <div className='flex justify-center items-center'>
                        <a href={item.link} className='flex text-purple lg:text-xl md:text-xs text-sm'>Check live site</a>
                        <FaLocationArrow className='ms-3' color='#CBACF9'/>
                      </div>     
                   
                   </div>
               </PinContainer>
            </div>
           ))}
        </div>
    </section>
  )
}

export default RecentProjects