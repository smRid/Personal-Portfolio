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
            <Link to='https://sajibkhandev.github.io/Project-6_Omha/'>
          <EventProject heading="Ohma Design" para="Html" src={htmlProject6}/>
            </Link>
          <Link to="https://project-17-combian.vercel.app/">
          <EventProject heading="Combine" para="Jscript" src={javaScriptProject7}/>
          </Link>
          <Link to="https://smrid.github.io/Agenc-project/">
          <EventProject heading="Agenc Website" para="Html" src={htmlProject2}/>
          </Link>
          <Link to="https://project-12-slider.vercel.app/">
          <EventProject heading="Slider" para="Jscript" src={javaScriptProject2}/>
          </Link>
         <Link to="https://sajibkhandev.github.io/Project-5_Avada/">
          <EventProject heading="Avada Design" para="Html" src={htmlProject5}/>
          </Link>
          <Link to="https://sajibkhandev.github.io/Project-8_Qwery/">
          <EventProject heading="Query Design" para="Html" src={htmlProject8}/>
          </Link>
          <Link to="https://react-game-nu.vercel.app/">
          <EventProject heading="Game Design" para="React" src={reactProject1}/>
          </Link>
          <Link to="https://sajibkhandev.github.io/Project-7_Innovate2/">
          <EventProject heading="Innovate Design" para="Html" src={htmlProject7}/>
          </Link>
          <Link to="https://project-16-counter.vercel.app/">
          <EventProject heading="Counter" para="Jscript" src={javaScriptProject6}/>
          </Link>
          <Link to="https://react-todo-three-tawny.vercel.app/">
          <EventProject heading="Todo Design" para="React" src={reactProject3}/>
          </Link>
          <Link to="https://smrid.github.io/Responsive-Landing-Page/">
          <EventProject heading="Food Website" para="Html" src={htmlProject3}/>
          </Link>
          <Link to="https://sajibkhandev.github.io/Project-4_InnovateYouSulition/">
          <EventProject heading="You Sulition Design" para="Html" src={htmlProject4}/>
          </Link>
          <Link to="https://react-form-jade.vercel.app/">
          <EventProject heading="Form Design" para="React" src={reactProject4}/>
          </Link>
          <Link to="https://project-13-facebook-demo.vercel.app/">
          <EventProject heading="Facebook Demo" para="Jscript" src={javaScriptProject3}/>
          </Link>
          <Link to="https://smrid.github.io/PSD-Project/">
          <EventProject heading="Photographer Portfolio" para="Html" src={htmlProject1}/>
          </Link>
          <Link to="https://react-search-zeta.vercel.app/">
          <EventProject heading="Search Design" para="React" src={reactProject2}/>
          </Link>
          <Link to="https://project-18-calculator.vercel.app/">
          <EventProject heading="Calculator" para="Jscript" src={javaScriptProject8}/>
          </Link>
          <Link to="https://react-todo-ug9s.vercel.app/">
          <EventProject heading="Multipul Game" para="Jscript" src={javaScriptProject4}/>
          </Link>
        </Slider>)
        :
        activeIndex===1?(
          <Slider {...settings}>
           <Link to="https://sajibkhandev.github.io/Project-7_Innovate2/">
          <EventProject heading="Innovate Design" para="Html" src={htmlProject7}/>
          </Link>
          <Link to="https://smrid.github.io/Responsive-Landing-Page/">
          <EventProject heading="Food Website" para="Html" src={htmlProject3}/>
          </Link>
          <Link to="https://smrid.github.io/Agenc-project/">
          <EventProject heading="Agenc Website" para="Html" src={htmlProject2}/>
          </Link>
          <Link to="https://sajibkhandev.github.io/Project-4_InnovateYouSulition/">
          <EventProject heading="You Sulition Design" para="Html" src={htmlProject4}/>
          </Link>
          <Link to="https://sajibkhandev.github.io/Project-5_Avada/">
          <EventProject heading="Avada Design" para="Html" src={htmlProject5}/>
          </Link>
          <Link to="https://sajibkhandev.github.io/Project-6_Omha/">
          <EventProject heading="Ohma Design" para="Html" src={htmlProject6}/>
          </Link>
          <Link to="https://smrid.github.io/PSD-Project/">
          <EventProject heading="Photographer Portfolio" para="Html" src={htmlProject1}/>
          </Link>
          <Link to="https://sajibkhandev.github.io/Project-8_Qwery/">
          <EventProject heading="Query Design" para="Html" src={htmlProject8}/>
          </Link>
          
        </Slider>)
        :
        activeIndex===2?(
          <Slider {...settings}>
          <Link to="https://project-17-combian.vercel.app/">
          <EventProject heading="Combine" para="Jscript" src={javaScriptProject7}/>
          </Link>
          <Link to="https://project-12-slider.vercel.app/">
          <EventProject heading="Slider" para="Jscript" src={javaScriptProject2}/>
          </Link>
          <Link to="https://project-19-countdown-6ex3.vercel.app/">
          <EventProject heading="CountDown" para="Jscript" src={javaScriptProject9}/>
          </Link>
          <Link to="https://project-16-counter.vercel.app/">
          <EventProject heading="Counter" para="Jscript" src={javaScriptProject6}/>
          </Link>
          <Link to="https://project-13-facebook-demo.vercel.app/">
          <EventProject heading="Facebook Demo" para="Jscript" src={javaScriptProject3}/>
          </Link>
          <Link to="https://project-18-calculator.vercel.app/">
          <EventProject heading="Calculator" para="Jscript" src={javaScriptProject8}/>
          </Link>
          <Link to="https://react-todo-ug9s.vercel.app/">
          <EventProject heading="Multipul Game" para="Jscript" src={javaScriptProject4}/>
          </Link>
        </Slider>)
        :
        (<Slider {...settings}>
          <Link to="https://react-search-zeta.vercel.app/">
          <EventProject heading="Search Design" para="React" src={reactProject2}/>
          </Link>
          <Link to="https://react-todo-three-tawny.vercel.app/">
          <EventProject heading="Todo Design" para="React" src={reactProject3}/>
          </Link>
          <Link to="https://react-form-jade.vercel.app/">
          <EventProject heading="Form Design" para="React" src={reactProject4}/>
          </Link>
          <Link to="https://react-game-nu.vercel.app/">
          <EventProject heading="Game Design" para="React" src={reactProject1}/>
          </Link>
         
          
        </Slider>)
      }
    </div>
  )
}
