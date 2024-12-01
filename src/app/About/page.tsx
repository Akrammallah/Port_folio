import React from 'react';
// import Image from 'next/image';
// import img from "../../../public/images/about.jpg"
import Image from 'next/image'
import img from "@/Images/about2.jpg"

const About = () => {
  return (
    <>
<div className='container grid m-auto sm:grid-cols-2 sm:mt-2 bg-[#133446] sm:bg-none p-10 mt-20 grid-cols-1 rounded-t-lg' id='about'>
  <div className='ml-24 sm:ml-0 mb-10 sm:mb-0'>
    <Image className='rounded-full' src={img} alt=' ' width={400} />
  </div>
  <div className='ml-10  rounded-md p-6 text-[#133446] shadow-2xl shadow-[#133446]'>
    <h1 className='text-4xl text-center text-white '>About Me</h1>
    <p className='mt-6 leading-10 text-justify text-white'>An experienced web developer with a passion for designing and building innovative, user-focused websites. Proficient in modern web technologies, combining creativity and technical expertise to deliver high-quality solutions. Committed to continuous growth, problem-solving, and creating impactful digital experiences that meet client objectives and exceed expectations.

</p>
  </div>
</div>
    </>
  )
}

export default About
