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
                <h2 className='text-3xl font-black mb-5'>Front-end developer based in Kolkata, India 📍</h2>
                <p className=' text-lg text-gray-600 font-semibold'>Hey there! I'm Atul, a developer based in India.  I'm deeply passionate about leveraging my coding skills to create pixel-perfect websites. My current tech stacks for front-end development are React JS and Tailwind CSS. Apart from this, I code in JAVA. Currently, I am learning about UI/UX and making projects. The next few things on my checklist are Next js and Typescript. I am eager to work on projects that would help me showcase my full potential and strengths.  I really look forward to growing and nourishing my skills as a developer and excited to bring my skills to any opportunity that comes my way. </p>
            </div>
        </div>
    )
}

export default About