import React, { useEffect, useState } from 'react'
import Section from '../components/Section'
import Container from '../components/Container'
import Button from '../components/Button'
import Image from '../components/Image'
import aboutImage from '../assets/about.png'
import Flex from '../components/Flex'
import Education from '../components/icons/Education'
import { TiStarburst } from 'react-icons/ti'
import { BsArrowRight } from 'react-icons/bs'
import Contact from '../components/Contact';
import { AiFillLinkedin, AiOutlineTwitter, AiOutlineGithub } from 'react-icons/ai'
import { FaBookOpen, FaYoutube, FaFacebookSquare } from 'react-icons/fa'
import { BiSolidMessageRounded } from 'react-icons/bi'
import { MdWavingHand } from 'react-icons/md'

import project1 from '../assets/project1.png'
import project2 from '../assets/project2.png'
import project3 from '../assets/project3.png'
import project4 from '../assets/project4.png'
import CV from '../assets/Sarker Mohammad Riduan CV.pdf'


import ServiceCard from '../components/ServiceCard'
import ProjectSecond from '../components/ProjectSecond'
import { Link, Link as RouterLink } from 'react-router-dom'
import { Link as ScrollLink } from 'react-scroll'

export default function Home() {
  useEffect(() => {
    window.scrollTo({ top: 0 })
  })

  return (
    <>
      

{/* -------------------Into Srction Start---------------------  */}
      <Section className='bg-[#1c2e3d]  pb-20 md:pb-40 relative border-none' >
        {/* <div className='bg-banner h-screen bg-no-repeat bg-center bg-cover'></div> */}
        <Container>
          <div id="hero">
            <h2 className='text-[27px] sm:text-[32px] md:text-[36px] lg:text-[40px]  xl:text-text50 pt-12 text-white font-pop font-semibold md:pt-28 lg:pt-32 xl:pt-40 md:bg-6 lg:pb-8 pb-4 text-center mx-1.5'>HEY, I'm Sarker Mohaamad Riduan</h2>
            <p className='text-center mx-auto px-5 md:w-w725 sm:leading-7 md:leading-7 md:leading-10 text-sm md:text-base  lg:text-lg text-gray-400 font-robo font-normal mx-1.5 sm:mx-4 md:mx-auto'>A Frontend focused Web Developer building the Frontend of Websites and Web Applications that leads to the success of the overall product</p>


            <ScrollLink to="project" spy={true} smooth={true} offset={50} duration={1200} ><Button text="View Projects" className='flex mx-auto mt-8 sm:mt-10 ' /></ScrollLink>
          </div>
        </Container>
        <div className=' bg-[#2a3e50] h-[120px] w-[10px] sm:w-[30px] sm:h-[165px] sm:top-[190px] md:h-[210px] lg:h-[270px] md:w-[30px] lg:w-[40px] absolute left-0 top-[226px] md:top-[220px] lg:top-[90px] flex flex-col justify-between items-center p-3 md:p-5  lg:p-7 drop-shadow-xl '>
          <Link to="https://www.linkedin.com/in/smriduan/">
            <AiFillLinkedin className='sm:text-xl md:text-[26px] lg:text-[34px] text-white bg-[#2a3e50]' />
          </Link>

          <Link to='https://github.com/smRid'>
            <AiOutlineGithub className='sm:text-xl md:text-[26px] lg:text-[34px] text-white bg-[#2a3e50]' />
          </Link>

          <Link to='https://x.com/OmorRiduan32947'>
            <AiOutlineTwitter className='sm:text-xl md:text-[26px] lg:text-[34px] text-white bg-[#2a3e50]' />
          </Link>

          <Link to="https://www.facebook.com/omor.al.riduan.2024/">
            <FaFacebookSquare className='text-sm sm:text-xl md:text-[26px] lg:text-[30px] text-white bg-[#2a3e50]' />
          </Link>
        </div>
      </Section>
{/* -------------------Into Section End ----------------------- */}


   {/* -------------------About section start------------------ */}
   
         <Section className='bg-[#1c2e3d] py-14 md:py-28 '  >
           <Container >
             {/* <div className='-translate-y-[120px]'></div> */}
             
             <div id="about">
               <div className='pb-14' >
                 <h2 className=' text-3xl sm:text-4xl md:text-[36px] lg:text-text50 text-white font-normal font-robo text-center'>About Me</h2>
                 <p className='lg:w-w806 sm:mx-4 lg:mx-auto text-center mx-auto text-sm  md:text-base  lg:text-lg text-gray-400 font-robo font-normal px-4 pt-8 sm:leading-7 '>Here you will find more information about me, what I do, and my current skills mostly in terms of programming and technology</p>
               </div>
             
               <Flex className='md:px-10 lg:px-4 xl:px-0 flex-col md:flex-row items-center'>

              <div className='w-full md:w-1/2 flex justify-center mb-6 md:mb-0'>
                <Image 
                  src={aboutImage} 
                  className='w-[80%] sm:w-[30%] md:w-[45%] rounded border-2 border-gray-400' 
                />
              </div>
   
                 <div className=' w-full md:w-1/2 '>
                   <Flex className=' justify-between gap-x-2 md:gap-x-2 lg:gap-x-2  px-4 sm:px-12 md:px-0  lg:px-0'>
                     <div className='bg-[#2a3e50] rounded-lg drop-shadow-lg w-w270 pb-4 md:h-h150'>
                       <Education className="flex justify-center mx-auto pt-3 md:pt-4 w-w20 h-h20" />
                       <h3 className='text-white text-sm lg:text-xl font-robo font-medium text-center pt-4 md:pt-6'>Experience</h3>
                       <p className='text-gray-400 text-xs lg:text-base font-robo font-normal text-center pt-1 md:pt-2'>6 Months</p>
                       <p className='text-gray-400 text-sm  lg:text-base font-robo font-normal text-center '>Frontend Development</p>
                     </div>
   
                     <div className='bg-[#2a3e50] rounded-lg drop-shadow-lg w-w270 pb-4 md:h-h150'>
                       <Education className="flex justify-center mx-auto pt-3 md:pt-4 w-w20 h-h20" />
                       <h3 className='text-white text-sm lg:text-xl font-robo font-medium text-center pt-4 md:pt-6'>Education</h3>
                       <p className='text-gray-400 text-xs lg:text-base font-robo font-normal text-center pt-1 md:pt-2'>CSE</p>
                       <p className='text-gray-400 text-sm  lg:text-base font-robo font-normal text-center '>BSc Bachelor's Degree</p>
                     </div>
                   </Flex>
                   <p className='w-full md:text-left text-center md:text-justify px-4 md:px-0 text-gray-400 text-sm md:text-base lg:text-lg font-normal font-robo pt-10 pb-8 sm:leading-7 sm:px-4 md:mx-auto'>
                   I'm a Computer Science & Engineering undergraduate specializing in Web Development, passionate about building intuitive, responsive web applications. As a Frontend Developer, I create user-focused interfaces and continuously explore new tech stacks across both frontend and backend. Check out some of my work in the Projects section.
                  </p>
                   <a href={CV} download="">
                     <Button text="Download CV" className='px-12 flex mx-auto md:mx-0' />
                   </a>
                 </div>
               </Flex>
             </div>
   
           </Container>
   
         </Section>
   
   {/* -------------------About section End------------------ */}

    {/*------------------ Skills section start ----------------*/} 

      <Section className='bg-[#1c2e3d] pt-2 md:pt-5 md:pb-16'>
        <Container>
          <h2 className='text-white text-3xl sm:text-4xl md:text-[36px] lg:text-text50 font-medium font-robo pb-1 md:pb-3 text-center'>Skills</h2>
          <p className='text-gray-400 text-base md:text-lg font-normal font-robo text-center'>My technical level</p>

          <div className='lg:justify-evenly lg:flex px-4 sm:px-24'>
            <div className=' lg:w-[430px] pb-7 lg:h-[280px] rounded-xl drop-shadow-2xl bg-[#2a3e50] md:mx-24 lg:mx-4 xl:mx-0 mt-10 lg:mt-16'>
              <h4 className='pt-8 pb-8 text-center text-xl text-white font-robo font-normal'>Frontend developer</h4>

              <Flex className='flex-wrap '>

                <Flex className='gap-x-1.5 md:gap-x-3 pb-4 pl-6 pr-6 md:pl-12 md:pr-10'>
                  <TiStarburst className='mt-0.5 text-gray-300' />
                  <div>
                    <h5 className='text-sm text-white font-medium  font-robo'>HTML</h5>
                    <p className='text-xs text-gray-400 font-normal  font-robo' >Experienced</p>
                  </div>
                </Flex>

                <Flex className='gap-x-1.5 md:gap-x-3 pb-4 pl-6 pr-6 md:pl-12 md:pr-10'>
                  <TiStarburst className='mt-0.5 text-gray-300' />
                  <div>
                    <h5 className='text-sm text-white font-medium  font-robo'>Tailwind</h5>
                    <p className='text-xs text-gray-400 font-normal  font-robo' >Basic</p>
                  </div>
                </Flex>
                <Flex className='gap-x-1.5 md:gap-x-3 pb-4 pl-6 pr-6 md:pl-12 md:pr-10'>
                  <TiStarburst className='mt-0.5 text-gray-300' />
                  <div>
                    <h5 className='text-sm text-white font-medium  font-robo'>Css</h5>
                    <p className='text-xs text-gray-400 font-normal  font-robo' >Experienced</p>
                  </div>
                </Flex>
                <Flex className='gap-x-1.5 md:gap-x-3 pb-4 pl-6 pr-6 md:pl-12 md:pr-10'>
                  <TiStarburst className='mt-0.5 text-gray-300' />
                  <div>
                    <h5 className='text-sm text-white font-medium  font-robo'>JavaScript</h5>
                    <p className='text-xs text-gray-400 font-normal  font-robo' >Basic</p>
                  </div>
                </Flex>
                <Flex className='gap-x-1.5 md:gap-x-3 pb-4 pl-6 pr-6 md:pl-12 md:pr-10'>
                  <TiStarburst className='mt-0.5 text-gray-300' />
                  <div>
                    <h5 className='text-sm text-white font-medium  font-robo'>Bootstrap</h5>
                    <p className='text-xs text-gray-400 font-normal  font-robo' >Experienced</p>
                  </div>
                </Flex>
                <Flex className='gap-x-1.5 md:gap-x-3 pb-4 pl-6 pr-6 md:pl-12 md:pr-10'>
                  <TiStarburst className='mt-0.5 text-gray-300' />
                  <div>
                    <h5 className='text-sm text-white font-medium  font-robo'>React</h5>
                    <p className='text-xs text-gray-400 font-normal  font-robo' >Intermediate</p>
                  </div>
                </Flex>
              </Flex>
            </div>
            <div className=' lg:w-[430px] pb-7 lg:h-[280px] rounded-xl drop-shadow-2xl bg-[#2a3e50] md:mx-24 lg:mx-4 xl:mx-0 mt-10 lg:mt-16'>
              <h4 className='pt-8 pb-8 text-center text-xl text-white font-robo font-normal'>Backend developer</h4>

              <Flex className='flex-wrap '>

                <Flex className='gap-x-1.5 md:gap-x-3 pb-4 pl-6 pr-6 md:pl-12 md:pr-10'>
                  <TiStarburst className='mt-0.5 text-gray-300' />
                  <div>
                    <h5 className='text-sm text-white font-medium  font-robo'>Node</h5>
                    <p className='text-xs text-gray-400 font-normal  font-robo' >Basic</p>
                  </div>
                </Flex>

                <Flex className='gap-x-1.5 md:gap-x-3 pb-4 pl-6 pr-6 md:pl-12 md:pr-10'>
                  <TiStarburst className='mt-0.5 text-gray-300' />
                  <div>
                    <h5 className='text-sm text-white font-medium  font-robo'>Express</h5>
                    <p className='text-xs text-gray-400 font-normal  font-robo' >Basic</p>
                  </div>
                </Flex>
                <Flex className='gap-x-1.5 md:gap-x-3 pb-4 pl-6 pr-6 md:pl-12 md:pr-10'>
                  <TiStarburst className='mt-0.5 text-gray-300' />
                  <div>
                    <h5 className='text-sm text-white font-medium  font-robo'>MongDB</h5>
                    <p className='text-xs text-gray-400 font-normal  font-robo' >Intermediate</p>
                  </div>
                </Flex>
                <Flex className='gap-x-1.5 md:gap-x-3 pb-4 pl-6 pr-6 md:pl-12 md:pr-10'>
                  <TiStarburst className='mt-0.5 text-gray-300' />
                  <div>
                    <h5 className='text-sm text-white font-medium  font-robo'>Git</h5>
                    <p className='text-xs text-gray-400 font-normal  font-robo' >Experienced</p>
                  </div>
                </Flex>
                <Flex className='gap-x-1.5 md:gap-x-3 pb-4 pl-6 pr-6 md:pl-12 md:pr-10'>
                  <TiStarburst className='mt-0.5 text-gray-300' />
                  <div>
                    <h5 className='text-sm text-white font-medium  font-robo'>Firebase</h5>
                    <p className='text-xs text-gray-400 font-normal  font-robo' >Intermediate</p>
                  </div>
                </Flex>
                <Flex className='gap-x-1.5 md:gap-x-3 pb-4 pl-6 pr-6 md:pl-12 md:pr-10'>
                  <TiStarburst className='mt-0.5 text-gray-300' />
                  <div>
                    <h5 className='text-sm text-white font-medium  font-robo'>SQL</h5>
                    <p className='text-xs text-gray-400 font-normal  font-robo' >Intermediate</p>
                  </div>
                </Flex>
              </Flex>
            </div>
          </div>
        </Container>

      </Section>


    {/*-------------------- skills section end-------------------*/}

      {/* -------------------Project section start------------------ */}


      <Section id="project" className='bg-[#1c2e3d] py-20'>
        <Container>
          <div id="project">
            <h2 className='text-white text-3xl sm:text-4xl md:text-[36px] lg:text-text50 font-semibold font-robo pb-3 text-center'>PROJECTS</h2>
            <p className='w-full px-4 sm:px-4 md:w-[780px]  mx-auto text-gray-400 text-sm md:text-base  lg:text-lg font-normal font-robo  text-center sm:leading-7 '>Here you will find some of the personal and clients projects that I created.</p>

{/* ---------------------------project-1 start---------------------- */}

          <div className='md:flex md:justify-between justify-center items-center md:pt-5 mt-[50px] group/project1 bg-[#2a3e50] rounded-lg md:gap-x-10'>
            <RouterLink to='/casestudy'>
              <Image 
                src={project1} 
                className='mt-[10px] mb-[30px] border-[8px] border-white rounded-2xl sm:mx-auto md:ml-5' 
              />
            </RouterLink>
            <RouterLink to='/casestudy'>
              <div className='md:ml-6'>
                <h3 className='p-4 group/project1 w:full px-10 md:px-0 md:w-[350px] lg:w-w412 text-white md:mr-12 lg:mr-16 text-lg md:text-[22px] lg:text-[24px] font-medium font-robo pb-6 md:pb-10 text-center sm:px-20 lg:pt-8 md:leading-[32px] lg:leading-[40px]'>
                  Modern Dashboard UI designed for data-driven applications.
                </h3>
                <RouterLink to='/casestudy' className='relative group/project1'>
                  <div className='relative hidden md:block'>
                    <p className='text-sm lg:text-lg text-white font-robo font-semibold absolute top-[11px] left-[141px] z-10'>View Project</p>
                    <BsArrowRight 
                      className='absolute lg:top-[20px] lg:left-[256px] md:top-[14px] md:left-[236px] z-10 text-white hover:text-black transition-colors duration-10' 
                    />
                    <div className='group-hover/project1:w-[190px] bg-[#93C5FD] w-[68px] h-[50px] absolute top-0 left-[115px] duration-500 ease-in-out'></div>
                  </div>
                </RouterLink>
              </div>
            </RouterLink>
          </div>

{/* ---------------------------project-1 end---------------------- */}
          
            
    {/* ---------------------------Project-2 Start--------------------- */}

          <div className='md:flex md:justify-between justify-center items-center md:pt-5 mt-[50px] group/project1 bg-[#2a3e50] rounded-lg md:gap-x-10'>
            <RouterLink to='/casestudy2'>
              <Image 
                src={project2} 
                className='mt-[10px] mb-[30px] border-[8px] border-white rounded-2xl sm:mx-auto md:ml-5' 
              />
            </RouterLink>
            <RouterLink to='/casestudy2'>
              <div className='md:ml-6'>
                <h3 className='p-2 group/project2 w:full px-10 md:px-0 md:w-[350px] lg:w-w412 text-white md:mr-12 lg:mr-16 text-lg md:text-[22px] lg:text-[24px] font-medium font-robo pb-6 md:pb-10 text-center sm:px-20 lg:pt-8 md:leading-[32px] lg:leading-[40px]'>
                Orebi is a convenient online store offering a wide range of products.
                </h3>
                <RouterLink to='/casestudy2' className='relative group/project1'>
                  <div className='relative hidden md:block'>
                    <p className='text-sm lg:text-lg text-white font-robo font-semibold absolute top-[11px] left-[141px] z-10'>View Project</p>
                    <BsArrowRight 
                      className='absolute lg:top-[20px] lg:left-[256px] md:top-[14px] md:left-[236px] z-10 text-white hover:text-black transition-colors duration-10' 
                    />
                    <div className='group-hover/project1:w-[190px] bg-[#93C5FD] w-[68px] h-[50px] absolute top-0 left-[115px] duration-500 ease-in-out'></div>
                  </div>
                </RouterLink>
              </div>
            </RouterLink>
          </div>

    {/* ---------------------------Project-2 end----------------------- */}


    {/* ---------------------------Project-3 Start--------------------- */}
          <div className='md:flex md:justify-between justify-center items-center md:pt-5 mt-[50px] group/project1 bg-[#2a3e50] rounded-lg md:gap-x-10'>
            <RouterLink to='/casestudy3'>
              <Image 
                src={project3} 
                className='mt-[10px] mb-[30px] border-[8px] border-white rounded-2xl sm:mx-auto md:ml-5' 
              />
            </RouterLink>
            <RouterLink to='/casestudy3'>
              <div className='md:ml-6'>
                <h3 className='p-2 group/project1 w:full px-10 md:px-0 md:w-[350px] lg:w-w412 text-white md:mr-12 lg:mr-16 text-lg md:text-[22px] lg:text-[24px] font-medium font-robo pb-6 md:pb-10 text-center sm:px-20 lg:pt-8 md:leading-[32px] lg:leading-[40px]'>
                A Cryptocurrency real-time price tracking web application.
                </h3>
                <RouterLink to='/casestudy3' className='relative group/project1'>
                  <div className='relative hidden md:block'>
                    <p className='text-sm lg:text-lg text-white font-robo font-semibold absolute top-[11px] left-[141px] z-10'>View Project</p>
                    <BsArrowRight 
                      className='absolute lg:top-[20px] lg:left-[256px] md:top-[14px] md:left-[236px] z-10 text-white hover:text-black transition-colors duration-10' 
                    />
                    <div className='group-hover/project1:w-[190px] bg-[#93C5FD] w-[68px] h-[50px] absolute top-0 left-[115px] duration-500 ease-in-out'></div>
                  </div>
                </RouterLink>
              </div>
            </RouterLink>
          </div>
    {/* ---------------------------Project-3 end----------------------- */}


    {/* ---------------------------Project-4 Start--------------------- */}

    <div className='md:flex md:justify-between justify-center items-center md:pt-5 mt-[50px] group/project1 bg-[#2a3e50] rounded-lg md:gap-x-10'>
            <RouterLink to='/casestudy4'>
              <Image 
                src={project4} 
                className='mt-[10px] mb-[30px] border-[8px] border-white rounded-2xl sm:mx-auto md:ml-5' 
              />
            </RouterLink>
            <RouterLink to='/casestudy4'>
              <div className='md:ml-6'>
                <h3 className='p-2 group/project1 w:full px-10 md:px-0 md:w-[350px] lg:w-w412 text-white md:mr-12 lg:mr-16 text-lg md:text-[22px] lg:text-[24px] font-medium font-robo pb-6 md:pb-10 text-center sm:px-20 lg:pt-8 md:leading-[32px] lg:leading-[40px]'>
                A virtual reality software platform landing page.
                </h3>
                <RouterLink to='/casestudy4' className='relative group/project1'>
                  <div className='relative hidden md:block'>
                    <p className='text-sm lg:text-lg text-white font-robo font-semibold absolute top-[11px] left-[141px] z-10'>View Project</p>
                    <BsArrowRight 
                      className='absolute lg:top-[20px] lg:left-[256px] md:top-[14px] md:left-[236px] z-10 text-white hover:text-black transition-colors duration-10' 
                    />
                    <div className='group-hover/project1:w-[190px] bg-[#93C5FD] w-[68px] h-[50px] absolute top-0 left-[115px] duration-500 ease-in-out'></div>
                  </div>
                </RouterLink>
              </div>
            </RouterLink>
          </div>
    {/* ---------------------------Project-4 end----------------------- */}


    {/* ---------------------------Project-5 Start--------------------- */}
    {/* ---------------------------Project-5 end----------------------- */}

            {/* Event to Event Project start*/}
            <div className='' id="project2">
              <ProjectSecond />
            </div>
            {/* Event to Event Project start*/}

          </div>
        </Container>
      </Section>



      {/* <Section className='bg-third pt-14  md:pt-24 pb-16'>
        <Container>
          <div id='service'>
            <h2 className='text-3xl sm:text-4xl md:text-[36px] lg:text-text50 text-black font-medium font-robo text-center pb-4'>Services</h2>
            <p className='md:w-w833 text-center px-4 mx-auto text-sm md:text-base  lg:text-lg md:text-lg text-black font-robo font-normal md:pb-16 sm:leading-7'>Our consultants have years of experience on the in success. the provision of our services. Find the service we provide</p>
            <div className='sm:flex px-10 md:px-10 lg:px-0 sm:gap-x-7 lg:gap-x-0  md:justify-between sm:flex-wrap'>
              <ServiceCard className='mx-auto' heading='E-Commerce' para='Development' />
              <ServiceCard className='mx-auto' heading='Social Media' para='Development' />
              <ServiceCard className='mx-auto' heading='Corporate' para='Development' />
              <ServiceCard className='mx-auto' heading='Personal' para='Development' />
            </div>
          </div>
        </Container>
      </Section> */}

      {/* ------------------------Contact Section start------------------------- */}

      {/* <Section className='bg-[#1c2e3d] pb-16 md:py-24 px-3 sm:px-16'>
        <Container>
          <div id="contact">
            <h2 className='text-2xl sm:text-3xl md:pb-5 md:text-[36px] lg:text-text50 text-black font-medium font-robo text-center pb-2'>CONTACT</h2>
            <p className='md:w-w680 text-center mx-4 md:mx-auto text-sm md:text-base  lg:text-lg text-black font-robo font-normal pb-8 sm:leading-7'>Feel free to Contact me by submitting the form below and I will get back to you as soon as possible</p>
            <div className='md:flex md:justify-between '>
              <h3 className='hidden md:inline-block md:w-w412 text-black mx-4  text-xl md:text-[28px]  lg:text-text45 font-medium font-robo pb-3 text-center md:leading-[70px]  md:pt-12 mt-12'>Find Me easily Contact without any technical skills</h3>
              <div className='md:w-[570px] md:h-[470px] bg-four rounded-2xl border-white border-2  '>
                <div className='py-5 md:py-10 px-5 md:px-14'>
                  <form action="">
                    <div>
                      <label htmlFor="name" className=' text-sm md:text-lg text-five font-medium font-robo pb-1.5 block'>Name: </label>
                      <input id="name" type="text" className='w-full bg-third rounded placeholder:text-six placeholder:text-xs md:placeholder:text-base placeholder:font-robo placeholder:font-normal py-1 px-3 md:py-2 md:px-6 mb-3' placeholder='Enter Your Name:' />
                    </div>
                    <div>
                      <label htmlFor="email" className='text-sm md:text-lg text-five font-medium font-robo pb-1.5 block'>Email: </label>
                      <input id="email" type="text" className='w-full bg-third rounded placeholder:text-six placeholder:text-xs md:placeholder:text-base placeholder:font-robo placeholder:font-normal py-1 px-3 md:py-2 md:px-6 mb-3' placeholder='Enter Your Email:' />
                    </div>
                    <div>
                      <label htmlFor="message" className='text-sm md:text-lg text-five font-medium font-robo pb-1.5 block'>Messages: </label>
                      <textarea id="message" type="text" className='w-full h-[80px] md:h-[110px] bg-third rounded placeholder:text-six placeholder:text-xs md:placeholder:text-base placeholder:font-robo placeholder:font-normal py-1 px-3 md:py-2 md:px-6 mb-3' placeholder='Enter Your Messages:' />
                    </div>
                    <Button text="Message" className='flex mx-auto md:mt-2 md:py-2' />
                  </form>
                </div>
              </div>

            </div>
          </div>
        </Container>

      </Section> */}

  
      {/* <Contact /> */}


      {/* ------------------------Contact Section end------------------------- */}

    </>
  )
}
