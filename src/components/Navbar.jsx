import React, {useState} from 'react'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'
import Logo from '../assets/logo.jpg'

const Navbar = () => {
    const [nav, setNav] = useState(true)

    const handleNav = () => {
        setNav(!nav)
    }

  return (
    <div className='flex items-center justify-between px-52 h-24 w-full bg-[#1b1464] mx-auto text-white'>
        <div className='w-full h-full flex '>        
            <img className='' src={Logo} alt="" />
        </div>
        <ul className='hidden md:flex'>
            <a href="/#cabana">
                <li className='p-4 hover:scale-105 duration-300 '>Cabañas</li>
            </a>
            <a href="/#constructora">
                <li className='p-4 hover:scale-105 duration-300'>Constructora</li>
            </a>
            <a href="/#gimnasio">
                <li className='p-4 hover:scale-105 duration-300'>Gimnasio</li>
            </a>
            
        </ul>


        <div onClick={handleNav} className='block md:hidden'>
            {!nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} />}
            
        </div>


        <div className={!nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#1b1464] ease-in-out duration-500' : 'fixed left-[-100%]'}>

            <div className='w-full h-24 flex object-contain'>        
                <img className='h-full' src={Logo} alt="" />
            </div>
                <ul className='p-4 uppercase' >
                    <a href="/#cabana" onClick={handleNav}>
                        <li className='p-4 border-b border-gray-600'>Cabañas</li>
                    </a>
                    <a href="/#constructora" onClick={handleNav}>
                        <li className='p-4 border-b border-gray-600'>Constructora</li>
                    </a>
                    <a href="/#gimnasio" onClick={handleNav}>
                        <li className='p-4'>Gimnasio</li>
                    </a>
                </ul>
        </div>
    </div>
  )
}

export default Navbar