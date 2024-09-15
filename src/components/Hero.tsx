import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { TextGenerateEffect } from './ui/text-generate-effect'
import { IoIosSend } from "react-icons/io";


const Hero = () => {
  
  return (
   
    <section className='pb-5 pt-5'>
       <div>
        <Spotlight className='-top-40 -left-60 md:-left-32 md:-top-20 h-screen' fill='white'/>
        <Spotlight className='top-10 left-full h-[80vh] w-[50vw]' fill='purple'/>
        <Spotlight className='top-28 left-80 h-[80vh] w-[50vw]' fill='blue'/>
       </div> 

       <div className="h-screen w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.07] bg-grid-black/[0.2] relative flex items-center justify-center">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"/>
    
      <div className='flex justify-center relative z-10'>
        <div className='max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center'>
           <p className='uppercase tracking-widest text-sm md:text-md text-center text-blue-100 max-w-80'>
            Dynamic Web Magic with Next.js
           </p>
           <TextGenerateEffect className='text-[40px] text-center md:text-5xl lg:text-6xl' words='Transforming Concepts into Seamless Experience' />
           <p className='text-center text-[17px] md:text-lg lg:text-2xl mb-4 mt-3 md:tracking-wider'>
            Hi,I&apos;m Ahtisham, a Next.js Developer
           </p>
      <div className='my-5 mt-7'>    
      <button className="relative inline-flex h-12 overflow-hidden rounded-sm p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
        <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-sm bg-slate-950 px-9 py-1 text-md font-medium text-white backdrop-blur-3xl">
          Show work <IoIosSend className='text-xl ml-2' />
        </span>
      </button>
      </div>
        </div>
      </div>
  

      </div>

    </section>
  )
}

export default Hero