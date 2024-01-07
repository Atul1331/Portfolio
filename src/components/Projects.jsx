import React from 'react'
import aboutImage from '../assets/about.jpg'
import { TbBrandGithub } from "react-icons/tb";
import { HiOutlineExternalLink } from "react-icons/hi";



const projectData = [
    {
        key: 1,
        img : aboutImage,
        title : 'Car Rental 🚗',
        description: 'A car rental website is an online platform that allows users to rent cars for personal or business use. The website provides an interface for searching, comparing, and reserving cars.', 
        t1 : 'React',
        t2 : 'Tailwind CSS'
    },
    {
        key: 2,
        img : aboutImage,
        title : 'Coindom 🚗',
        description: 'Coindom is a crypto app that allows users to search for information about various cryptocurrencies in real-time.', 
        t1 : 'React',
        t2 : 'Tailwind CSS'
    }
]



const Projects = () => {
  return (
    <div className='bg-gray-100 px-5 md:px-[2rem]  pt-16 pb-32 lg:pt-24'>
        <div className='md:w-[96%] lg:w-[950px]  text-center pbp-1:text-left'>
            <p className='uppercase text-blue-600 font-bold text-lg mb-2'>Portfolio</p>
            <h2 className='text-2xl font-black mb-14'>Each project is a unique piece of development 🧩</h2>
        </div>
        { projectData.map((data) => (
            <ProjectCard key={data.key} data={data} />
        )) }
        
        
    </div>
  )
}



const ProjectCard = ({data}) => {
    console.log(data)
    return (
        <div className='p-3 xsm:p-4 bg-white rounded-2xl xsm:w-[85%] pbp-1:w-[570px] lg:w-[960px] m-auto lg:flex items-center justify-between mb-16'>
            <img className='rounded-2xl lg:w-[520px] lg:h-[340px]' src={aboutImage} alt="" />
            <div className='w-[320px] mx-auto text-center lg:pr-4'>
                <h3 className='uppercase text-lg font-bold mb-2 mt-8 lg:mt-0 '>{data.title}</h3>
                    <p className='text-[18px] text-gray-600 font-semibold mb-5'>{data.description}</p>
                    <div className='flex justify-center items-center gap-6 text-md font-bold mb-6'>
                        <button className='px-3 py-2 shadow-[0px_0px_8px_2px_#00000024] rounded-md'>{data.t1}</button>
                        <button className='px-3 py-2 shadow-[0px_0px_8px_2px_#00000024] rounded-md'>{data.t2}</button>
                    </div>
                    <div className='flex justify-center items-center gap-16 text-lg'>
                        <div className='font-semibold flex items-center'>Code <TbBrandGithub style={{display: 'inline', fontSize:'26px', marginLeft:'5px'}} /> </div>
                        <div className='font-semibold flex items-center'>Live Demo <HiOutlineExternalLink style={{display: 'inline', fontSize:'26px', marginLeft:'5px'}} /> </div>
                    </div>
            </div>
        </div>
    )
}

export default Projects
