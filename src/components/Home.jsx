import React from 'react'

const Home = () => {
  return (
    <div className='bg-gray-100 '>

      <div className='flex flex-col-reverse gap-24 lg:flex-row items-center lg:gap-40 '>
        
        <div className='max-w-[550px] text-center lg:text-left'>
            <div className='text-[65px] font-bold  leading-tight  '>Front-End React Developer 👋🏼</div>
            <p className="mt-4 text-xl font-medium">Hi, I'm Atul Sourav. A passionate Front-end React Developer based in Kolkata, India.</p>
            <div></div>
        </div>
        <div>
            <div className="blob bg-profile w-[21rem] h-[21rem] bg-cover bg-center border-4 border-black shadow-[0px_5px_10px_5px_#a0aec0] "></div>
        </div>
        
      </div>

      <div></div>

    </div>
  )
}

export default Home
