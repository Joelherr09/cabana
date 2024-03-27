import React from 'react'
import Logo from '../assets/logo.jpg'
import {
    FaFacebookSquare,
    FaInstagram,
    FaTwitterSquare
} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='bg-[#1b1464]  text-white w-full mx-auto md:px-8 lg:px-16 px-4'>
        <div className='md:w-[600px] mx-auto'>
            <div className='w-[180px] h-[180px] flex mx-auto'>        
                <img className='' src={Logo} alt="" />
            </div>
            <p className='py-2 text-center text-xl text-bold'>Te invitamos a disfrutar de nuestros servicios!</p>
            <div className='flex justify-evenly my-4'>
                <FaFacebookSquare className='hover:scale-105 duration-300 hover:shadow-lg hover:shadow-blue-500/50' size={30}/>
                <FaInstagram className='hover:scale-105 duration-300 hover:shadow-lg hover:shadow-blue-500/50 rounded-lg' size={30}/>
                <FaTwitterSquare className='hover:scale-105 duration-300 hover:shadow-lg hover:shadow-blue-500/50' size={30}/>
            </div>
            <p className='text-lg text-center py-4'>© 2024 Playa Norte. All Rights Reserved</p>
        </div>
    </div>
  )
}

export default Footer