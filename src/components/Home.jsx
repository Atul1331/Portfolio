import React from 'react'
import { TbBrandLinkedin, TbBrandGithub, TbBrandTwitter } from "react-icons/tb";
import html from '../assets/techstack/HTML.png'
import css from '../assets/techstack/CSS.png'
import react from '../assets/techstack/Reactt.png'
import js from '../assets/techstack/JS.png'
import tailwind from '../assets/techstack/Tailwind.png'
import bootstrap from '../assets/techstack/Bootstrap.png'
import node from '../assets/techstack/Node.png'
import java from '../assets/techstack/Java.png'

const Home = () => {
  return (
    <div name="Home" className='bg-gray-100 px-5  md:px-[4rem]  pt-[120px] pb-16  lg:pt-[200px]'>

      <div className='mb-28 flex flex-col-reverse gap-20 lg:flex-row lg:justify-center items-center '>
        
        <div className='w-[300px] sm:w-[550px] text-center lg:text-left'>
            <div className='text-[40px] sm:text-[55px] md:[65px] font-bold  leading-tight  '>Front-End React Developer 👋🏼</div>
            <p className=" mt-3 text-md md:text-xl font-medium">Hi, I'm Atul Sourabh. A passionate Front-end React Developer based in Kolkata, India.</p>
            <div className='mt-6'>

                <a href="https://www.linkedin.com/in/atul-sourabh-829744208/" target="_blank" rel="noreferrer"><TbBrandLinkedin className='hover:text-blue-600 cursor-pointer duration-300'  style={{display: 'inline', marginRight:'20px', fontSize:'40px'}} /></a>

                <a href="https://twitter.com/atul27sourabh" target="_blank" rel="noreferrer"><TbBrandTwitter className='hover:text-blue-600 cursor-pointer duration-300' style={{display: 'inline', marginRight:'20px', fontSize:'38px'}} /></a>

                <a href="https://github.com/Atul1331" target="_blank" rel="noreferrer"><TbBrandGithub className='hover:text-blue-600 cursor-pointer duration-300' style={{display: 'inline', marginRight:'20px', fontSize:'38px'}}/></a>
            </div>
        </div>
        <div>
            <div className="blob bg-profile w-[14rem] h-[18rem] md:w-[16rem] lg:h-[22rem] lg:w-[22rem] xl-h-[25rem] xl:w-[25rem] bg-cover bg-center border-4 border-black shadow-[0px_5px_10px_5px_#a0aec0] "></div>
        </div>
        
      </div>

      <div className='pt-[50px] flex flex-col items-center gap-10 lg:gap-14 lg:flex-row lg:w-[1010px] lg:mx-auto mt-6'>
        <div className='text-2xl font-semibold pb-2 lg:pr-3 lg:py-0 border-b-2 border-gray-600 lg:border-r-2 lg:border-b-0'>Tech Stack </div>
        <div className='flex justify-center items-center flex-wrap gap-5 '>
          <img className='logo rounded-lg' src={html} alt="" />
          <img className='logo rounded-lg' src={css} alt="" />
          <img className='logo rounded-lg' src={js} alt="" />
          <img className='logo rounded-lg' src={react} alt="" />
          <img className='logo rounded-lg' src={node} alt="" />
          <img className='logo rounded-lg' src={java} alt="" />
          <img className='logo rounded-lg' src={tailwind} alt="" />
          <img className='logo rounded-lg' src={bootstrap} alt="" />
        </div>
      </div>

    </div>
  )
}

export default Home
