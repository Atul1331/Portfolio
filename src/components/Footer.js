import React from 'react'
import { TbBrandLinkedin, TbBrandGithub, TbBrandTwitter } from "react-icons/tb";

const Footer = () => {
  return (
    <div className='bg-black text-white px-5 py-14'>
      <div className='flex flex-col gap-4 pbp-1:w-[650px] mx-auto pbp-1:flex-row pbp-1:justify-between pbp-1:items-center md:w-[96%] lg:w-[950px] text-center'>
        <p className='text-xl font-bold'>Copyright © 2024. All rights are reserved</p>
        <div className='flex items-center justify-center'>
            <a href="https://www.linkedin.com/in/atul-sourabh-829744208/" target="_blank" rel="noreferrer"><TbBrandLinkedin className='hover:scale-125 duration-300 cursor-pointer'  style={{display: 'inline', marginRight:'20px', fontSize:'36px'}} /></a>
            
            <a href="https://twitter.com/atul27sourabh" target="_blank" rel="noreferrer"><TbBrandTwitter className='hover:scale-125 duration-300 cursor-pointer'  style={{display: 'inline', marginRight:'20px', fontSize:'34px'}} /></a>
                
            <a href="https://github.com/Atul1331" target="_blank" rel="noreferrer"><TbBrandGithub className='hover:scale-125 duration-300 cursor-pointer'  style={{display: 'inline', marginRight:'20px', fontSize:'34px'}}/></a>  
                
        </div>
      </div>
    </div>
  )
}

export default Footer
