import React from 'react'
import {BsArrowRight} from 'react-icons/bs'

export default function NextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className}  relative `}
        onClick={onClick}
      >
        <div className='flex items-center justify-center rounded-lg w-[55px] h-[40px] bg-seven absolute -bottom-[45px] left-2/3 -translate-x-2/3 md:-translate-x-1/3 md:left-[600px] '>

        <BsArrowRight className='text-xl text-white '/>
        </div>
      </div>
    );
}
