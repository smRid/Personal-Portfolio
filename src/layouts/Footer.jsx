import React from 'react'
import Section from '../components/Section'
import Container from '../components/Container'
// import Flex from '../components/Flex'
// import { FaYoutube,FaFacebookF,FaGithub,FaTwitter,FaLinkedinIn } from 'react-icons/fa'
// import List from '../components/List'
// import logo from '../assets/logo.png'
// import Image from '../components/Image'
// import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <Section className='bg-black pt-2 md:pt-2'>
    <Container>
      
      <p className='text-center text-sm text-white font-pop font-normal pt-2 pb-2  md:py-2'>Copyright © 2025. <u><span href='#' className='font-semibold underline-offset-1 cursor-pointer'>Sarker Mohammad Riduan</span></u> All rights reserved</p>
    </Container>
   </Section>

  )
}
