import React from 'react';

const About = () => {
    return (
        <div className='px-10 py-16 flex flex-col gap-10 lg:flex-row lg:justify-center items-center'>
            <div>
                <img className='max-w-[22rem] max-h-22[rem] object-cover rounded-2xl' src="https://images.unsplash.com/photo-1542315192-1f61a1792f33?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            </div>

            <div className='max-w-[550px]'>
                <p className='uppercase text-blue-500 font-bold text-xl mb-3 text-center'>About me</p>
                <h2 className='text-3xl font-black mb-5  text-center'>A dedicated Front-end Developer based in Kolkata, India</h2>
                <p className='text-center text-xl text-gray-500'>As a Junior Front-End Developer, I possess an impressive arsenal of skills in HTML, CSS, JavaScript, React, Tailwind, and SCSS. I excel in designing and maintaining responsive websites that offer a smooth user experience. My expertise lies in crafting dynamic, engaging interfaces through writing clean and optimized code and utilizing cutting-edge development tools and techniques. I am also a team player who thrives in collaborating with cross-functional teams to produce outstanding web applications.</p>
            </div>
        </div>
    )
}

export default About