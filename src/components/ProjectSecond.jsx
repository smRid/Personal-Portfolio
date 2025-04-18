import React, { useState } from 'react'

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import PrevArrow from '../components/PrevArrow'
import NextArrow from '../components/NextArrow'
import { Link } from 'react-router-dom'
import EventProject from '../components/EventProject'

import List from '../components/List'

import reactProject1 from '../assets/reactProject1.png'
import reactProject2 from '../assets/reactProject2.png'
import reactProject3 from '../assets/reactProject3.png'
import reactProject4 from '../assets/reactProject4.png'


import javaScriptProject2 from '../assets/javaScriptProject2.png'
import javaScriptProject3 from '../assets/javaScriptProject3.png'
import javaScriptProject4 from '../assets/javaScriptProject4.png'
import javaScriptProject6 from '../assets/javaScriptProject6.png'
import javaScriptProject7 from '../assets/javaScriptProject7.png'
import javaScriptProject8 from '../assets/javaScriptProject8.png'
import javaScriptProject9 from '../assets/javaScriptProject9.png'


import htmlProject1 from '../assets/htmlProject1.png'
import htmlProject2 from '../assets/htmlProject2.png'
import htmlProject3 from '../assets/htmlProject3.png'
import htmlProject4 from '../assets/htmlProject4.png'
import htmlProject5 from '../assets/htmlProject5.png'
import htmlProject6 from '../assets/htmlProject6.png'
import htmlProject7 from '../assets/htmlProject7.png'
import htmlProject8 from '../assets/htmlProject8.png'
import Flex from './Flex';

export default function ProjectSecond() {
    let [activeIndex,setActiveIndex]=useState(3)
  let items=["All","Html","JavaScript","React"]
  let handleClick=(index)=>{
    setActiveIndex(index)
    
  }
    const settings = {
    
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: <PrevArrow/>,
        nextArrow: <NextArrow />,
        
        responsive: [
          {
            breakpoint: 1076,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              
              
            }
          },
          
          {
            breakpoint: 900,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              
            }
          },
          {
            breakpoint: 720,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 380,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
  return (
    <div>
            <h2 className='text-white text-2xl md:text-text50 font-normal font-robo pt-28 md:pt-36 pb-5 text-center'>Event to Event Project</h2>
            <Flex className='flex justify-center gap-x-0.5 md:gap-x-1 '>
        {
          items.map((item, index) => (
            <div key={index} onClick={() => handleClick(index)}>
              <List 
                text={item} 
                className={`${index === activeIndex ? "bg-white text-black" : "text-white"} rounded md:text-2xl font-robo py-0.5 px-2 md:py-1 md:px-4 cursor-pointer`} 
              />
              </div>
              ))
              }
          </Flex>
      {
        activeIndex===0?(
          <Slider {...settings}>
            <Link to='https://smrid.github.io/Signup-Form/#'>
          <EventProject heading="Signup Form" para="Html" src={htmlProject6}/>
            </Link>
          <Link to="https://smrid.github.io/Apple-E-commerce/">
          <EventProject heading="Apple E-commerce" para="Jscript" src={javaScriptProject7}/>
          </Link>
          <Link to="https://smrid.github.io/Agenc-project/">
          <EventProject heading="Agenc Website" para="Html" src={htmlProject2}/>
          </Link>
          <Link to="https://smrid.github.io/Notes-App/#">
          <EventProject heading="Notes App" para="Jscript" src={javaScriptProject2}/>
          </Link>
         <Link to="https://smrid.github.io/Contact-Form-Animation/">
          <EventProject heading="Contact Form" para="Html" src={htmlProject5}/>
          </Link>
          <Link to="https://smrid.github.io/Card-design-Figma-to-Html/">
          <EventProject heading="Card Design" para="Html" src={htmlProject8}/>
          </Link>
          <Link to="https://simple-todo-list-r3nast9ja-sm-riduans-projects.vercel.app/">
          <EventProject heading="To-do list App" para="React" src={reactProject1}/>
          </Link>
          <Link to="https://smrid.github.io/Figma-MedicalFunc-/">
          <EventProject heading="Medical Website" para="Html" src={htmlProject7}/>
          </Link>
          <Link to="https://smrid.github.io/Drag-and-Drop-Board/">
          <EventProject heading="Drah and Drop" para="Jscript" src={javaScriptProject6}/>
          </Link>
          <Link to="https://mordern-restaurant-app.vercel.app/?index">
          <EventProject heading="Restaurent App" para="React" src={reactProject3}/>
          </Link>
          <Link to="https://smrid.github.io/Responsive-Landing-Page/">
          <EventProject heading="Food Website" para="Html" src={htmlProject3}/>
          </Link>
          <Link to="https://smrid.github.io/Card-Pricing-Design/">
          <EventProject heading="Card Pricing Design" para="Html" src={htmlProject4}/>
          </Link>
          <Link to="https://react-form-jade.vercel.app/">
          <EventProject heading="Form Design" para="React" src={reactProject4}/>
          </Link>
          <Link to="https://smrid.github.io/Expense-Tracker-App/">
          <EventProject heading="Expense Tracker Appp" para="Jscript" src={javaScriptProject3}/>
          </Link>
          <Link to="https://smrid.github.io/PSD-Project/">
          <EventProject heading="Photographer Portfolio" para="Html" src={htmlProject1}/>
          </Link>
          <Link to="https://image-cropper-topaz.vercel.app/">
          <EventProject heading="Image Cropper" para="React" src={reactProject2}/>
          </Link>
          <Link to="https://smrid.github.io/Travel-Agency/">
          <EventProject heading="Travel Agency" para="Jscript" src={javaScriptProject8}/>
          </Link>
          <Link to="https://smrid.github.io/Bookmark-App/">
          <EventProject heading="Bookmark App" para="Jscript" src={javaScriptProject4}/>
          </Link>
        </Slider>)
        :
        activeIndex===1?(
          <Slider {...settings}>
           <Link to="https://smrid.github.io/Figma-MedicalFunc-/">
          <EventProject heading="Medical Website" para="Html" src={htmlProject7}/>
          </Link>
          <Link to="https://smrid.github.io/Responsive-Landing-Page/">
          <EventProject heading="Food Website" para="Html" src={htmlProject3}/>
          </Link>
          <Link to="https://smrid.github.io/Agenc-project/">
          <EventProject heading="Agenc Website" para="Html" src={htmlProject2}/>
          </Link>
          <Link to="https://smrid.github.io/Card-Pricing-Design/">
          <EventProject heading="Card Pricing Design" para="Html" src={htmlProject4}/>
          </Link>
          <Link to="https://smrid.github.io/Contact-Form-Animation/">
          <EventProject heading="Contact Form" para="Html" src={htmlProject5}/>
          </Link>
          <Link to="https://smrid.github.io/Signup-Form/#">
          <EventProject heading="Signup Form" para="Html" src={htmlProject6}/>
          </Link>
          <Link to="https://smrid.github.io/PSD-Project/">
          <EventProject heading="Photographer Portfolio" para="Html" src={htmlProject1}/>
          </Link>
          <Link to="https://smrid.github.io/Card-design-Figma-to-Html/">
          <EventProject heading="Card Design" para="Html" src={htmlProject8}/>
          </Link>
          
        </Slider>)
        :
        activeIndex===2?(
          <Slider {...settings}>
          <Link to="https://smrid.github.io/Apple-E-commerce/">
          <EventProject heading="Apple E-coomerce" para="Jscript" src={javaScriptProject7}/>
          </Link>
          <Link to="https://smrid.github.io/Notes-App/#">
          <EventProject heading="Notes App" para="Jscript" src={javaScriptProject2}/>
          </Link>
          <Link to="https://smrid.github.io/Light-and-Dark-Mode/">
          <EventProject heading="Light & Dark Mode" para="Jscript" src={javaScriptProject9}/>
          </Link>
          <Link to="https://smrid.github.io/Drag-and-Drop-Board/">
          <EventProject heading="Drag and Drop" para="Jscript" src={javaScriptProject6}/>
          </Link>
          <Link to="https://smrid.github.io/Expense-Tracker-App/">
          <EventProject heading="Expense Tracker App" para="Jscript" src={javaScriptProject3}/>
          </Link>
          <Link to="https://smrid.github.io/Travel-Agency/">
          <EventProject heading="Travel Agency" para="Jscript" src={javaScriptProject8}/>
          </Link>
          <Link to="https://smrid.github.io/Bookmark-App/">
          <EventProject heading="Bookmark App" para="Jscript" src={javaScriptProject4}/>
          </Link>
        </Slider>)
        :
        (<Slider {...settings}>
          <Link to="https://image-cropper-topaz.vercel.app/">
          <EventProject heading="Image Cropper" para="React" src={reactProject2}/>
          </Link>
          <Link to="https://mordern-restaurant-app.vercel.app/?index">
          <EventProject heading="Restaurent App" para="React" src={reactProject3}/>
          </Link>
          <Link to="https://react-form-jade.vercel.app/">
          <EventProject heading="Form Design" para="React" src={reactProject4}/>
          </Link>
          <Link to="https://simple-todo-list-r3nast9ja-sm-riduans-projects.vercel.app/">
          <EventProject heading="To-do List App" para="React" src={reactProject1}/>
          </Link>
         
          
        </Slider>)
      }
    </div>
  )
}
