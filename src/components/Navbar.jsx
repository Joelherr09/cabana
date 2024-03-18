import React, {useState} from 'react'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'
import Logo from '../assets/logo.jpg'

const Navbar = () => {
    const [nav, setNav] = useState(true)

    const handleNav = () => {
        setNav(!nav)
    }

  return (
    <div className='flex items-center h-24 max-w-[1240px] bg-[#1b1464] mx-auto px-5 text-white'>
        <div className='w-full h-full flex object-contain'>        
            <img className='' src={Logo} alt="" />
        </div>
        <ul className='hidden md:flex'>
            <li className='p-4'>Inmobiliaria</li>
            <li className='p-4'>Constructora</li>
            <li className='p-4'>Gimnasio</li>
        </ul>


        <div onClick={handleNav} className='block md:hidden'>
            {!nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} />}
            
        </div>


        <div className={!nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#1b1464] ease-in-out duration-500' : 'fixed left-[-100%]'}>

            <div className='w-full h-24 flex object-contain'>        
                <img className='h-full' src={Logo} alt="" />
            </div>
                <ul className='p-4 uppercase'>
                    <li className='p-4 border-b border-gray-600'>Inicio</li>
                    <li className='p-4 border-b border-gray-600'>Inmobiliaria</li>
                    <li className='p-4 border-b border-gray-600'>Constructora</li>
                    <li className='p-4'>Gimnasio</li>
                </ul>
        </div>
    </div>
  )
}

export default Navbar