import React from 'react'
import { TbBrandGithub } from "react-icons/tb";
import { HiOutlineExternalLink } from "react-icons/hi";
import dictionary from '../assets/dictionary.png'
import shoe_store from '../assets/shoestore.png'
import movikx from '../assets/Movikx.jpeg'



const projectData = [
    {
        key: 1,
        img: movikx,
        title : 'Movikx 🎬',
        description: 'Movikx is a web app to search and get info about movies and tv-shows. You can see the latest, trending and popular movies and tv-shows as well as recommended movies and tv-shows based on some show.  ', 
        techstack : ['React', 'SCSS', 'Redux'],
        github: 'https://github.com/Atul1331/movix',
        link: 'https://movikx.netlify.app/',
    },
    {
        key: 2,
        img: dictionary,
        title : 'Vocab 📖',
        description: 'Vocab is an online dictionary where users can search any word and get its meaning along with the audio pronounciation of the word. The website provides an interface to change theme and font type. ', 
        techstack : ['React', 'Taiwind CSS'],
        github: 'https://github.com/Atul1331/vocab',
        link: 'https://lookitout.netlify.app/',
    },
    {
        key: 3,
        img: shoe_store,
        title : 'Sneakers 👟',
        description: 'Sneakers is an interactive shoe store web app where users can see various shoes in different colors and sizes as per their choice.  ', 
        techstack : ['HTML', 'CSS', 'Vanilla JS'],
        github: 'https://github.com/Atul1331/Shoe-Store',
        link: 'https://atul1331.github.io/Shoe-Store/',
    },
    
    
]



const Projects = () => {
  return (
    <div name="Projects" className='bg-gray-100 dark:bg-gray-900 px-5 md:px-[2rem]  pt-16 pb-16 lg:pt-24'>
        <div className='mx-auto lg:w-[100%] max-w-[1024px] w-fit text-center sm:text-start'>
            <p className='uppercase text-blue-600 dark:text-blue-400 font-bold text-lg mb-2'>Portfolio</p>
            <h2 className='text-2xl dark:text-white font-black mb-14'>Each project is a unique piece of development 🧩</h2>
        </div>
        { projectData.map((data) => (
            <ProjectCard key={data.key} data={data} />
        )) }
        
        
    </div>
  )
}



const ProjectCard = ({data}) => {

    
    return (
        <div className='p-3 xsm:p-4 bg-white dark:bg-gray-800 rounded-2xl xsm:w-[85%] pbp-1:w-[570px] lg:w-[1000px] m-auto lg:flex items-center justify-between mb-16'>
            <img className='rounded-2xl h-[340px] w-full lg:w-[550px] lg:h-[340px] shadow-[0_3px_10px_rgb(0,0,0,0.2)] dark:shadow-[0_3px_10px_rgb(0,0,0)] object-cover object-top img-duration' src={data.img} alt="" />
            
            <div className='w-[320px] mx-auto text-center lg:pr-2'>
                <h3 className='uppercase text-lg font-bold dark:text-white mb-2 mt-8 lg:mt-0 '>{data.title}</h3>
                    <p className='text-[18px] text-gray-600 dark:text-gray-400 font-semibold mb-5'>{data.description}</p>
                    <div className='flex justify-center items-center gap-6 text-md font-bold mb-6'>
                        {data.techstack.map((tech) => (
                            <button className='px-3 py-2 shadow-[0px_0px_8px_2px_#00000024] rounded-md dark:text-white dark:shadow-[0px_0px_8px_2px_#1a202c]'>{tech}</button>
                        ))}

                    </div>

                    <div className='flex justify-center items-center gap-16 text-lg dark:text-white'>
                        <a href={data.github} target="_blank" rel="noreferrer"><div className='font-semibold flex items-center hover:text-blue-600 dark:hover:text-blue-400 duration-300'>Code <TbBrandGithub style={{display: 'inline', fontSize:'26px', marginLeft:'5px'}} /> </div></a>
                        <a href={data.link} target="_blank" rel="noreferrer"><div className='font-semibold flex items-center hover:text-blue-600 dark:hover:text-blue-400  duration-300'>Live Demo <HiOutlineExternalLink style={{display: 'inline', fontSize:'26px', marginLeft:'5px'}} /> </div></a>
                        
                    </div>
            </div>
        </div>
    )
}

export default Projects
