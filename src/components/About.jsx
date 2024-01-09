import React from 'react';
import aboutImage from '../assets/about.jpg'

const About = () => {
    return (
        <div name="About" className='px-10 py-16 lg:py-28 flex flex-col gap-14 lg:gap-28 lg:flex-row lg:justify-center items-center'>
            <div>
                <img className=' w-[28rem] h-[25rem] object-cover rounded-2xl' src={aboutImage} alt="" />
            </div>

            <div className='max-w-[500px] text-center lg:text-left'>
                <p className='uppercase text-blue-600 font-bold text-xl mb-3 '>About me</p>
                <h2 className='text-3xl font-black mb-5'>A dedicated Front-end Developer based in Kolkata, India</h2>
                <p className=' text-lg text-gray-600 font-semibold'>As a Junior Front-End Developer, I possess an impressive arsenal of skills in HTML, CSS, JavaScript, React, Tailwind, and SCSS. I excel in designing and maintaining responsive websites that offer a smooth user experience. My expertise lies in crafting dynamic, engaging interfaces through writing clean and optimized code and utilizing cutting-edge development tools and techniques. I am also a team player who thrives in collaborating with cross-functional teams to produce outstanding web applications.</p>
            </div>
        </div>
    )
}

export default About