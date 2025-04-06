import React, { useEffect } from 'react'
import Button from '../components/Button'
import Image from '../components/Image'
import project4 from '../assets/project4.png'
import Section from '../components/Section'
import Container from '../components/Container'
import Flex from '../components/Flex'
import { Link } from 'react-router-dom'

export default function CaseStudyPage4() {
  useEffect(()=>{
    window.scrollTo({ top: 0})
  })
  return (
    <Section className='bg-third py-20 md:py-32'>
        <Container>
        <h2 className='text-black text-text50 font-semibold font-robo pb-5 text-center'>NeoVR
        </h2>
        <p className='w-full md:w-[780px] px-4 md:px-4  mx-auto text-black text-sm md:text-lg font-normal font-robo  text-center pb-7 md:pb-14'>This page provides a comprehensive overview of the NeoVR
        project, including key details such as the project summary, technologies used, and live links to the official product.</p>
        <Link to="https://github.com/smRid/NeoVR">
        
        <Button text="Project Link"  className='flex mx-auto '/>
        </Link>
        
        <Image src={project4} className='mx-auto pt-10 md:pt-20 md:w-[800px] px-12 md:px-0' />

        <div className='pt-12 md:pt-16 md:w-[900px] mx-auto px-4 md:px-0'>
        <h3 className='text-black text-xl md:text-3xl font-semibold font-robo pb-5'>Project Overview</h3>
        <Flex className='flex-col gap-y-5'>
        <p className=' text-black w-full   text-sm md:text-base font-normal font-robo'>NeoVR is a lightweight and modular platform built to empower developers, educators, and enterprises in creating immersive 3D virtual experiences. It streamlines the process of designing, managing, and deploying VR content across multiple devices, ensuring accessibility and ease of use without compromising performance or visual quality.</p>
        <p className=' text-black w-full   text-sm md:text-base font-normal font-robo'>Crafted with a sleek, futuristic interface, the platform offers an engaging user experience through immersive UI/UX and well-structured content layouts. Its responsive design ensures seamless interaction on both desktop and mobile devices, while fast load times and optimized state management deliver smooth performance essential for VR environments.</p>
        <p className=' text-black w-full   text-sm md:text-base font-normal font-robo'>Developed using React.js, styled with TailwindCSS, and enhanced with Lucide Icons, this platform balances cutting-edge design with developer-friendly architecture. It’s an ideal foundation for building rich, scalable, and intuitive virtual spaces tailored to modern digital needs.</p>
        
        </Flex>
        <h4 className='text-black text-3xl font-semibold font-robo py-12 '>Tools Used</h4>
        <div className='flex flex-wrap gap-x-4 md:items-center '>
            <li className='mb-10 py-2 text-center w-[150px]  md:py-2  md:px-5 text-xs md:text-base bg-primary rounded list-none font-robo font-medium'>React</li>
            <li className='mb-10 py-2 text-center w-[150px]  md:py-2  md:px-5 text-xs md:text-base bg-primary rounded list-none font-robo font-medium'>Tailwind</li>
            <li className='mb-10 py-2 text-center w-[150px]  md:py-2  md:px-5 text-xs md:text-base bg-primary rounded list-none font-robo font-medium'>JavaScript</li>
            <li className='mb-10 py-2 text-center w-[150px]  md:py-2  md:px-5 text-xs md:text-base bg-primary rounded list-none font-robo font-medium'>React Router</li>
            <li className='mb-10 py-2 text-center w-[150px]  md:py-2  md:px-5 text-xs md:text-base bg-primary rounded list-none font-robo font-medium'>Github</li>
        </div>
        <h4 className='text-black text-xl md:text-3xl font-semibold font-robo py-6 md:py-10'>See Live</h4>
        <Flex className='gap-x-8'>
        <Link to="https://neo-vr.vercel.app/">
        <Button text="Project Live"/>
        </Link>
        <Link to="/">
        <Button text="Go Back"/>
        </Link>
        </Flex>
        </div>

        </Container>
    </Section>
  )
}
