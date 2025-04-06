import React from 'react'
import {BsArrowLeft} from 'react-icons/bs'

export default function PrevArrow(props) {
    const { className, style, onClick } = props;
  return (
    <div
      className={`${className} relative `}
      onClick={onClick}
    ><div className='flex items-center justify-center rounded-lg w-[55px] h-[40px] bg-seven absolute top-[330px] left-1/3 -translate-x-1/3  md:left-[500px]'>
      <BsArrowLeft className='text-xl text-white' /></div>
      </div>
  );
}

