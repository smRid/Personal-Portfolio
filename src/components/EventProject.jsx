import React from 'react'
import {BsArrowRight } from 'react-icons/bs'
import Image from './Image'

export default function EventProject({src,heading,para}) {
  return (
    <div className='pt-10 pb-10 '>
         <div className='group/div w-[360px] h-[245px] bg-[#FAFDFF]  rounded-xl relative overflow-hidden '>
          <div className=' w-[245px] h-[148px] bg-[#EAEDEF] rounded-md absolute top-6 left-1/2 -translate-x-1/2'>
            <div className='w-[210px] h-[120px] bg-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded'>
              <Image src={src} className='w-full rounded'/>

            </div>
          </div>
          <h6 className='absolute bottom-[38px] left-[55px] text-base text-black font-semibold font-robo '>{heading}</h6>
          <p className='absolute bottom-[18px] left-[55px] text-sm text-five font-normal font-robo'>{para}</p>
          <BsArrowRight className='absolute bottom-[20px] left-[100px] text-sm'/>
          <div className='absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover/div:opacity-80 transition-all duration-700'>
            <div className='flex justify-center items-center gap-x-2 tracking-widest text-base font-bold font-robo absolute 
              -bottom-5 left-1/2 -translate-x-1/2 group-hover/div:bottom-1/2 group-hover/div:-translate-y-1/2 text-white duration-500'>
              <div className='delay-100 '>Live</div>
              <div className='delay-150 translate-y-[500%] group-hover/div:translate-y-0 transition-all duration-300'>Project</div>
              <div className='delay-200 translate-y-[500%] group-hover/div:translate-y-0 transition-all duration-300'><BsArrowRight className='text-xl'/></div>

            </div>
          </div>
        </div>
    </div>
  )
}
