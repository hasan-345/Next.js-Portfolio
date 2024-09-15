import React from 'react'
import { BentoGrid, BentoGridItem } from './ui/bento-grid'
import { gridItems } from '@/data'

const Grid = () => {
  return (
    <section id='about' className='max-w-[1200px] mx-auto mb-4 '>
        <BentoGrid className="">
            {gridItems.map((item)=>(
                <BentoGridItem
                 id={item.id}
                 key={item.id}
                 title={item.title}
                 description={item.description}
                 className={item.className}
                 img={item.img}
                 imgClassName={item.imgClassName}
                 titleClassName={item.titleClassName}
                 spareImg={item.spareImg}
                />
            ))}
        </BentoGrid>
    </section>
  )
}

export default Grid