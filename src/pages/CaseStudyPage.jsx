import React, { useEffect } from 'react'
import Button from '../components/Button'
import Image from '../components/Image'
import project1 from '../assets/project1.png'
import Section from '../components/Section'
import Container from '../components/Container'
import Flex from '../components/Flex'
import List from '../components/List'
import { Link } from 'react-router-dom'

export default function CaseStudyPage() {
  useEffect(()=>{
    window.scrollTo({ top: 0})
  })
  return (
    <Section  className='bg-third py-20 md:py-32 '>
        <Container>
        <h2 className='text-black text-2xl md:text-text50 font-semibold font-robo pb-5 text-center'>OrbitDash</h2>
        <p className=' w-full md:w-[780px] px-4 md:px-4  mx-auto text-black text-sm md:text-lg font-normal font-robo  text-center pb-7 md:pb-14'>This page provides a comprehensive overview of the OrbitDash project, including key details such as the project summary, technologies used, and live links to the official product.</p>
        <Link to="https://github.com/smRid/OrbitDash">
        <Button text="Project Link"  className='flex mx-auto '/>
        </Link>
        
        <Image src={project1} className='mx-auto pt-10 md:pt-20 md:w-[800px] px-12 md:px-0' />

        <div className='pt-12 md:pt-16 md:w-[900px] mx-auto px-4 md:px-0'>
        <h3 className='text-black text-xl md:text-3xl font-semibold font-robo pb-5 '>Project Overview</h3>
        <Flex className='flex-col gap-y-5 '>
        <p className='text-black w-full   text-sm md:text-base font-normal font-robo'>This project is a responsive Modern Dashboard UI built with React.js, designed for data-driven applications. This project features an intuitive user interface, real-time updates, and customizable widgets for seamless analytics and data visualization.</p>
        
        
        </Flex>
        <h4 className='text-black text-xl md:text-3xl font-semibold font-robo py-12 '>Tools Used</h4>
        <div className='flex flex-wrap gap-x-4 md:items-center '>
            <li className='mb-10 py-2 text-center w-[150px]  md:py-2  md:px-5 text-xs md:text-base bg-primary rounded list-none font-robo font-medium'>React</li>
            <li className='mb-10 py-2 text-center w-[150px]  md:py-2  md:px-5 text-xs md:text-base bg-primary rounded list-none font-robo font-medium'>Tailwind</li>
            <li className='mb-10 py-2 text-center w-[150px]  md:py-2  md:px-5 text-xs md:text-base bg-primary rounded list-none font-robo font-medium'>JavaScript</li>
            <li className='mb-10 py-2 text-center w-[150px]  md:py-2  md:px-5 text-xs md:text-base bg-primary rounded list-none font-robo font-medium'>React Router</li>
            <li className='mb-10 py-2 text-center w-[150px]  md:py-2  md:px-5 text-xs md:text-base bg-primary rounded list-none font-robo font-medium'>Recharts</li>
            <li className='mb-10 py-2 text-center w-[150px]  md:py-2  md:px-5 text-xs md:text-base bg-primary rounded list-none font-robo font-medium'>Lucide Icons</li>
            <li className='mb-10 py-2 text-center w-[150px]  md:py-2  md:px-5 text-xs md:text-base bg-primary rounded list-none font-robo font-medium'>GIT</li>
            <li className='mb-10 py-2 text-center w-[150px]  md:py-2  md:px-5 text-xs md:text-base bg-primary rounded list-none font-robo font-medium'>Github</li>
        </div>
        <h4 className='text-black text-xl md:text-3xl font-semibold font-robo py-6 md:py-10 '>See Live</h4>
        <Flex className='gap-x-8'>
        <Link to='https://modern-dashboard-seven.vercel.app/'>
        <Button text="Project Live"/>
        </Link>
        <Link to='/'>
        <Button text="Go Back"/>
        </Link>
        </Flex>
        </div>

        </Container>
    </Section>
  )
}
