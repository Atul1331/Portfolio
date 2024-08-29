import React, {useState} from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'
import {Link} from 'react-scroll'

const Navbar = ({setTheme}) => {

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
    <div className='flex justify-between items-center w-full h-[88px] bg-white dark:bg-gray-900 px-12 lg:px-16 shadow-[0px_4px_8px_0px_#00000024] dark:shadow-[0px_4px_8px_0px_#000000] dark:text-white fixed'>
        <div className=' flex justify-between w-screen pr-6'>
            <div className='text-2xl font-extrabold z-10'>Sourabh.dev</div>
            
            
            <label className="inline-flex items-center cursor-pointer">
            <input type="checkbox" value="" className="sr-only peer" />
            <div onClick={setTheme} className="relative w-11 h-6 bg-gray-400 peer-focus:outline-none peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-gray-700"></div>
            
            </label>

        </div>

      



      <ul className='hidden lg:flex gap-8'>

        {links.map(({id,link}) => (
            <li key={id} className='text-xl font-bold cursor-pointer duration-200 hover:text-blue-600 dark:hover:text-blue-400 '><Link to={link} smooth duration={500}>{link}</Link></li>
        ))}
      </ul>


       <div onClick={() => setNav(!nav)} className='cursor-pointer lg:hidden z-10 duration-200 hover:text-blue-600 dark:hover:text-blue-400' >
        {nav ? <FaTimes size={25} /> : <FaBars size={25} />}        
       </div>

       {nav && ( <ul className={`flex flex-col items-center justify-center gap-14 absolute top-0  w-full h-screen bg-white dark:bg-gray-900 dark:text-white  transition-all ease-in duration-500 ${nav ? 'left-0' : 'left-[500px]'}`}>
        {links.map(({id,link}) => (
            <li key={id} className='text-2xl font-semibold cursor-pointer duration-200 hover:text-blue-600 dark:hover:text-blue-400'><Link onClick={() => setNav(!nav)} to={link} smooth duration={500}>{link}</Link></li>
        ))}
       </ul>
       )}


    </div>
  )
}

export default Navbar
