import React from 'react'
import Flex from './Flex'
import {AiOutlineHtml5} from 'react-icons/ai'
import {DiJavascript1 } from 'react-icons/di'
import {FaReact,FaPlus } from 'react-icons/fa'

export default function ServiceCard({heading,para,className}) {
  return (
    <div >
         <div className={`my-14 group/div w-[265px] h-[310px] bg-four rounded-lg drop-shadow relative ${className}`}>
          <div className='group-hover/div:bg-seven w-[190px] h-[92px] bg-primary rounded-tr-lg absolute -bottom-[25px] left-0 '>
          <Flex className='py-4 px-3 gap-x-3'>
            <div className='group-hover/div:bg-white w-[30px] h-[2px] bg-black mt-3'></div>
            <div>
            <h4 className='group-hover/div:text-white text-xl text-black font-robo font-medium pb-1'>{heading}</h4>
            <p className='group-hover/div:text-white text-sm text-black font-robo font-normal'>{para}</p>
          </div>
          </Flex>
          </div>
          <div className='group/icon group-hover/div:bg-seven w-[40px] h-[40px] bg-primary rounded-full absolute right-5 bottom-5 flex justify-center items-center duration-500 z-10'>
            <FaPlus className='text-sm group-hover/div:text-white group-hover/icon:rotate-[360deg] group-hover/icon:duration-500'/>
            </div>
          <div className='group/icon hover:bg-seven group-hover/div:bottom-20 w-[40px] h-[40px] bg-primary rounded-full absolute right-5 bottom-5 flex justify-center items-center  duration-500'>
            <AiOutlineHtml5 className=' text-lg group-hover/icon:rotate-[360deg]  group-hover/icon:duration-500'/>
          </div>
          <div className='group/icon hover:bg-seven group-hover/div:bottom-[140px] w-[40px] h-[40px] bg-primary rounded-full absolute right-5 bottom-5 flex justify-center items-center  duration-500'>
            <DiJavascript1 className='text-lg group-hover/icon:rotate-[360deg] group-hover/icon:duration-500'/>
          </div>
          <div className='group/icon hover:bg-seven group-hover/div:bottom-[200px] w-[40px] h-[40px] bg-primary rounded-full absolute right-5 bottom-5 flex justify-center items-center  duration-500'>
            <FaReact className='text-lg  group-hover/icon:rotate-[360deg] group-hover/icon:duration-500'/>
          </div>
        </div>
     
    </div>
  )
}
