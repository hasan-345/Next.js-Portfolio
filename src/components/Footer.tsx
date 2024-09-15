import { socialMedia } from '@/data'
import React from 'react'
import { IoIosSend } from 'react-icons/io'
import { BackgroundLines } from './ui/background-lines'

const Footer = () => {
  return (
    <footer className='w-full pb-32 relative min-h-[400px] ' id='contact'>
        <div className='dark:bg-grid-white/[0.07] bg-grid-black/[0.2] absolute w-full h-full opacity-20' />
        <BackgroundLines className='flex items-center justify-center h-full'>
        <div className='flex flex-col items-center relative z-10'> 
         
          <h1 className='heading lg:max-w-[60vw] mt-7 md:max-w-[70vw] max-w-[80vw]'>
            Ready to take <span className='text-purple'>your</span> digital presence to the next level.
          </h1>

          <p className='text-white-100 my-7 text-center'>Reach out to me today and let&apos;s discuss how can I help you achieve your goals.</p>
          
        <a target="_blank" href="mailto:ahtishamulhassan128@gmail.com?        subject=Contact%20from%20Portfolio&body=Hello%20there,%0D%0AI%20saw%20your%20portfolio%20and%20would%20like%20to%20get%20in%20touch%20with%20you.">  
          
                <button className="relative inline-flex h-12 overflow-hidden rounded-sm p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                        <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-sm bg-slate-950 px-9 py-1 text-md font-medium text-white backdrop-blur-3xl">
                        Let&apos;s get in touch <IoIosSend className='text-xl ml-2' />
                        </span>
                </button>
           </a>
        </div>
        </BackgroundLines>

        <div className='relative z-10 flex justify-between mt-24 items-center md:flex-row flex-col max-w-[1200px] mx-auto'>
             <p className='md:text-base text-sm md:font-normal font-light'>Copright © 2024 Ahtisham</p>
             <div className='flex items-center md:gap-3 gap-6'>
                {socialMedia.map((social)=>(
                    <div key={social.id} className='mt-10 w-[32px] h-[32px] flex justify-center items-center md:rounded-md border border-black-300 backdrop-filter backdrop-blur-md saturate-180 bg-black-200 bg-opacity-65'> 
                       <img src={social.img} alt="social"  className='h-[20px] w-[20px]'/>
                    </div> 
                ))}    
             </div>
        </div>
  
    </footer>
  )
}

export default Footer