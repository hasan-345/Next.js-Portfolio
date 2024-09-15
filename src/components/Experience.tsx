import { workExperience } from '@/data'
import React from 'react'
import { Button } from './ui/moving-border'

const Experience = () => {
  return (
    <section id='projects' className='py-20'>

        <h1 className='heading'>
           My work {" "}
            <span className='text-purple'>experience</span>
        </h1>

        <div className='w-full grid grid-cols-1 lg:grid-cols-4 mt-12 gap-10 max-w-[1600px] mx-auto'>
           {workExperience.map((work)=>(
            <Button
            key={work.id}
            borderRadius='1.75rem'
            duration={Math.floor(Math.random()*10000) + 10000}
            className='flex-1 text-white border-neutral-200 dark:border-slate-800'
            >
                <div className='flex lg:flex-row flex-col py-6 p-3 lg:items-center md:p-5 lg:p-10 gap-2'>
                   
                    <img src={work.thumbnail} alt="thumbnail" className='lg:w-32 md:w-20 w-16' />
                    <div className='lg:ms-5'>
                        <h1 className='md:text-2xl text-xl font-bold text-start'> {work.title} </h1>
                        <p className='text-white-100 text-start mt-3 font-semibold'>{work.desc}</p>
                    </div>
                
                </div>
            </Button>
           ))}   
        </div>

    </section>        
  )
}

export default Experience