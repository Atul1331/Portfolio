import React from 'react'
import { TbBrandLinkedin, TbBrandGithub, TbBrandTwitter } from "react-icons/tb";

const Home = () => {
  return (
    <div className='bg-gray-100 md:px-[4rem] pt-20 pb-32 lg:pt-24'>

      <div className='flex flex-col-reverse gap-24 lg:flex-row lg:justify-between items-center '>
        
        <div className='max-w-[550px] text-center lg:text-left'>
            <div className='text-[65px] font-bold  leading-tight  '>Front-End React Developer 👋🏼</div>
            <p className="mt-4 text-xl font-medium">Hi, I'm Atul Sourav. A passionate Front-end React Developer based in Kolkata, India.</p>
            <div className='mt-8'>
                <TbBrandLinkedin  style={{display: 'inline', marginRight:'20px', fontSize:'40px'}} />
                <TbBrandTwitter style={{display: 'inline', marginRight:'20px', fontSize:'38px'}} />
                <TbBrandGithub style={{display: 'inline', marginRight:'20px', fontSize:'38px'}}/>
            </div>
        </div>
        <div>
            <div className="blob bg-profile min-w-[280px] h-[340px] bg-cover bg-center border-4 border-black shadow-[0px_5px_10px_5px_#a0aec0] "></div>
        </div>
        
      </div>

      <div></div>

    </div>
  )
}

export default Home
