import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import Button from './Button'; // Adjust the path if Button is in a different folder

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
        'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID
        form.current,
        'YOUR_PUBLIC_KEY' // Replace with your EmailJS public key
      )
      .then(
        (result) => {
          console.log('Email sent successfully:', result.text);
          alert('Message sent successfully!');
        },
        (error) => {
          console.error('Error sending email:', error.text);
          alert('Failed to send message. Please try again.');
        }
      );
  };

  return (
    <section className='bg-[#1c2e3d] pb-16 md:py-24 px-3 sm:px-16'>
      <div className='container mx-auto'>
        <div id="contact">
          <h2 className='text-2xl sm:text-3xl md:pb-5 md:text-[36px] lg:text-text50 text-white font-medium font-robo text-center pb-2'>CONTACT</h2>
          <p className='md:w-w680 text-center mx-4 md:mx-auto text-sm md:text-base lg:text-lg text-gray-400 font-robo font-normal pb-8 sm:leading-7'>
            Feel free to Contact me by submitting the form below and I will get back to you as soon as possible
          </p>
          <div className='md:flex md:justify-between'>
            <h3 className='hidden md:inline-block md:w-w412 text-white mx-4 text-xl md:text-[28px] lg:text-text45 font-medium font-robo pb-3 text-center md:leading-[70px] md:pt-12 mt-12'>
              Find Me easily Contact without any technical skills
            </h3>
            <div className='md:w-[570px] md:h-[470px] bg-[#2a3e50] rounded-2xl border-[#2a3e50] border-2'>
              <div className='py-5 md:py-10 px-5 md:px-14'>
                <form ref={form} onSubmit={sendEmail}>
                  <div>
                    <label htmlFor="name" className='text-sm md:text-lg text-white font-medium font-robo pb-1.5 block'>Name: </label>
                    <input id="name" name="user_name" type="text" className='w-full bg-third rounded placeholder:text-six placeholder:text-xs md:placeholder:text-base placeholder:font-robo placeholder:font-normal py-1 px-3 md:py-2 md:px-6 mb-3' placeholder='Enter Your Name:' required />
                  </div>
                  <div>
                    <label htmlFor="email" className='text-sm md:text-lg text-white font-medium font-robo pb-1.5 block'>Email: </label>
                    <input id="email" name="user_email" type="email" className='w-full bg-third rounded placeholder:text-six placeholder:text-xs md:placeholder:text-base placeholder:font-robo placeholder:font-normal py-1 px-3 md:py-2 md:px-6 mb-3' placeholder='Enter Your Email:' required />
                  </div>
                  <div>
                    <label htmlFor="message" className='text-sm md:text-lg text-white font-medium font-robo pb-1.5 block'>Messages: </label>
                    <textarea id="message" name="message" className='w-full h-[80px] md:h-[110px] bg-third rounded placeholder:text-six placeholder:text-xs md:placeholder:text-base placeholder:font-robo placeholder:font-normal py-1 px-3 md:py-2 md:px-6 mb-3' placeholder='Enter Your Messages:' required />
                  </div>
                  <Button text="Message" className='flex mx-auto md:mt-2 md:py-2' />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}