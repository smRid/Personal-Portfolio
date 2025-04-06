import React, { useEffect } from 'react'
import Button from '../components/Button'
import Image from '../components/Image'
import project1 from '../assets/project1.png'
import project2 from '../assets/project2.png'
import Section from '../components/Section'
import Container from '../components/Container'
import Flex from '../components/Flex'
import { Link } from 'react-router-dom'

export default function CaseStudyPage() {
  useEffect(()=>{
    window.scrollTo({ top: 0})
  })
  return (
    <Section className='bg-third py-20 md:py-32'>
        <Container>
        <h2 className='text-black text-text50 font-semibold font-robo pb-5 text-center'>Orebi</h2>
        <p className='w-full md:w-[780px] px-4 md:px-4  mx-auto text-black text-sm md:text-lg font-normal font-robo  text-center pb-7 md:pb-14'>This page contains the case study of Orebi E-commerce Project which includes the Project Overview, Tools Used and Live Links to the official product.</p>
        <Link to="https://github.com/smRid/Orebi-Ecommerce">
        
        <Button text="Project Link"  className='flex mx-auto '/>
        </Link>
        
        <Image src={project2} className='mx-auto pt-10 md:pt-20 md:w-[600px] px-12 md:px-0' />

        <div className='pt-12 md:pt-16 md:w-[900px] mx-auto px-4 md:px-0'>
        <h3 className='text-black text-xl md:text-3xl font-semibold font-robo pb-5'>Project Overview</h3>
        <Flex className='flex-col gap-y-5'>
        <p className=' text-black w-full   text-sm md:text-base font-normal font-robo'>Orebi, built with the dynamic capabilities of React.js and the sleek aesthetics of Tailwind CSS, delivers a seamless and secure shopping experience for users across all devices.</p>
        <p className=' text-black w-full   text-sm md:text-base font-normal font-robo'>With its intuitive design and customizable features, Orebi, powered by React.js and tailored with Tailwind CSS, ensures an efficient and user-centric eCommerce journey for customers of all preferences.</p>
        <p className=' text-black w-full   text-sm md:text-base font-normal font-robo'>Orebi's modern and scalable infrastructure, integrated with React.js and polished with Tailwind CSS, provides an elegant and feature-rich online shopping experience, promising both convenience and security to users.</p>
        <p className=' text-black w-full   text-sm md:text-base font-normal font-robo'>Tailored with the latest advancements in React.js and fine-tuned with the sleekness of Tailwind CSS, Orebi's versatile and interactive platform sets a new standard for modern eCommerce, ensuring a responsive and customizable shopping journey for users worldwide.</p>
        </Flex>
        <h4 className='text-black text-3xl font-semibold font-robo py-12 '>Tools Used</h4>
        <div className='flex flex-wrap gap-x-4 md:items-center '>
            <li className='mb-10 py-2 text-center w-[150px]  md:py-2  md:px-5 text-xs md:text-base bg-primary rounded list-none font-robo font-medium'>React</li>
            <li className='mb-10 py-2 text-center w-[150px]  md:py-2  md:px-5 text-xs md:text-base bg-primary rounded list-none font-robo font-medium'>Tailwind</li>
            <li className='mb-10 py-2 text-center w-[150px]  md:py-2  md:px-5 text-xs md:text-base bg-primary rounded list-none font-robo font-medium'>JavaScript</li>
            <li className='mb-10 py-2 text-center w-[150px]  md:py-2  md:px-5 text-xs md:text-base bg-primary rounded list-none font-robo font-medium'>Stripe</li>
            <li className='mb-10 py-2 text-center w-[150px]  md:py-2  md:px-5 text-xs md:text-base bg-primary rounded list-none font-robo font-medium'>React Redux</li>
            <li className='mb-10 py-2 text-center w-[150px]  md:py-2  md:px-5 text-xs md:text-base bg-primary rounded list-none font-robo font-medium'>GIT</li>
            <li className='mb-10 py-2 text-center w-[150px]  md:py-2  md:px-5 text-xs md:text-base bg-primary rounded list-none font-robo font-medium'>Github</li>
        </div>
        <h4 className='text-black text-xl md:text-3xl font-semibold font-robo py-6 md:py-10'>See Live</h4>
        <Flex className='gap-x-8'>
        <Link to="https://orebi-ecommerce-seven.vercel.app/">
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
