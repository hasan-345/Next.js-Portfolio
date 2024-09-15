import React from 'react'
import { InfiniteMovingCards } from './ui/infinite-moving-cards'
import { companies, testimonials } from '@/data'

const Clients = () => {
  return (
    <section id='testimonials' className='py-20'>
    <h1 className='heading'>
        Kind words from {" "}
        <span className='text-purple'>satisfied clients</span>
    </h1>

    <div className='flex flex-col items-center'>

      <div className='my-6 py-4'>      
        <InfiniteMovingCards
        items={testimonials}
        speed='slow'
        direction='right'
        />
       </div> 
        
       <div className='flex flex-wrap items-center justify-center md:gap-16 gap-4 max-lg:mt-10'>
         {companies.map((company)=>(
            <div key={company.id} className='flex md:max-w-60 max-w-32 gap-2'>
                <img src={company.img} alt={company.name} className='md:w-10 w-5' />
                <img src={company.nameImg} alt={company.name} className='md:w-24 w-20' />
            </div>
         ))}
       </div> 

    </div>
    </section>
  )
}

export default Clients