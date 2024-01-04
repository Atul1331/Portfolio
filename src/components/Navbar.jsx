import React, {useState} from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'

const Navbar = () => {

    // State for managing 
    const [nav, setNav] = useState(false);

    // Navbar links
    const links = [
        {
            id: 1,
            link: 'Home'
        },
        {
            id: 2,
            link: 'About'
        },
        {
            id: 3,
            link: 'Projects'
        },
        {
            id: 4,
            link: 'Contact'
        }
    ]

  return (
    <div className='flex justify-between items-center w-full h-[88px] bg-white px-12 md:px-16 shadow-[0px_4px_8px_0px_#00000024]'>
      <div className='text-2xl font-extrabold z-10'>Sourabh.dev</div>

      <ul className='hidden md:flex gap-8'>

        {links.map(({id,link}) => (
            <li key={id} className='text-xl font-bold cursor-pointer duration-200 hover:text-blue-600 '>{link}</li>
        ))}
      </ul>


       <div onClick={() => setNav(!nav)} className='cursor-pointer md:hidden z-10 duration-200 hover:text-blue-600' >
        {nav ? <FaTimes size={25} /> : <FaBars size={25} />}        
       </div>

       {nav && ( <ul className={`flex flex-col items-center justify-center gap-14 absolute top-0  w-full h-screen bg-white transition-all ease-in duration-500 ${nav ? 'left-0' : 'left-[500px]'}`}>
        {links.map(({id,link}) => (
            <li key={id} className='text-2xl font-semibold cursor-pointer duration-200 hover:text-blue-600'>{link}</li>
        ))}
       </ul>
       )}


    </div>
  )
}

export default Navbar
