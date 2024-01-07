import React from 'react'
import { TbBrandLinkedin, TbBrandGithub, TbBrandTwitter } from "react-icons/tb";

const Home = () => {
  return (
    <div className='bg-gray-100 px-5  md:px-[4rem]  pt-16 pb-32 lg:pt-24'>

      <div className='flex flex-col-reverse gap-20 lg:flex-row lg:justify-center items-center '>
        
        <div className='w-[450px] sm:w-[550px] text-center lg:text-left'>
            <div className='text-[40px] sm:text-[55px] md:[65px] font-bold  leading-tight  '>Front-End React Developer 👋🏼</div>
            <p className="px-10 mt-3 text-md md:text-xl font-medium">Hi, I'm Atul Sourav. A passionate Front-end React Developer based in Kolkata, India.</p>
            <div className='mt-6'>
                <TbBrandLinkedin  style={{display: 'inline', marginRight:'20px', fontSize:'40px'}} />
                <TbBrandTwitter style={{display: 'inline', marginRight:'20px', fontSize:'38px'}} />
                <TbBrandGithub style={{display: 'inline', marginRight:'20px', fontSize:'38px'}}/>
            </div>
        </div>
        <div>
            <div className="blob bg-profile w-[14rem] h-[18rem] md:w-[16rem] lg:h-[22rem] lg:w-[22rem] xl-h-[25rem] xl:w-[25rem] bg-cover bg-center border-4 border-black shadow-[0px_5px_10px_5px_#a0aec0] "></div>
        </div>
        
      </div>

      <div></div>

    </div>
  )
}

export default Home
