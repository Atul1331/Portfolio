import React from 'react'
import { TbMapSearch, TbMail } from "react-icons/tb";

const Contact = () => {
  return (
    <div name="Contact" className=' px-5 md:px-[2rem]  pt-16 pb-32 lg:pt-24'>
        <div className=' mx-auto w-fit md:w-[96%] lg:w-[950px]  text-center md:text-left'>
        <p className='uppercase text-blue-600 font-bold text-lg mb-2'>Contact</p>
        <h2 className='text-2xl font-black mb-14'>Don't be shy! Hit me up! 👇</h2>
        <div className='flex flex-col gap-16 md:flex-row md:gap-20 md:items-center'>
            <div className='flex flex-col gap-5 items-center md:flex-row'>
                <button className='w-14 h-14 p-3 rounded-full shadow-[1px_1px_10px_2px_#00000024] '><TbMapSearch style={{color:'blue', fontSize:'28px'}} /></button>
                <div className='text-lg'>
                    <h3 className='font-bold'>Location</h3>
                    <p className='text-gray-600 font-semibold'>Kolkata, India</p>
                </div>
            </div>
            <div className='flex flex-col items-center gap-5 md:flex-row'>
                <button className='w-14 h-14 p-3 rounded-full shadow-[1px_1px_10px_2px_#00000024] '><TbMail style={{color:'blue', fontSize:'28px'}} /></button>
                <div className='text-lg'>
                    <h3 className='font-bold'>Mail</h3>
                    <p className='text-gray-600 font-semibold'><a href="mailto:atulsourabh083@gmail.com" target='_blank' rel="noreferrer">atulsourabh083@gmail.com</a></p>
                </div>
            </div>
        </div>
        </div>
        
    </div>
  )
}

export default Contact
