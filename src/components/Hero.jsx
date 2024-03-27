import React from 'react'
import hero from '../assets/hero.webp'
import { FaArrowRightLong } from "react-icons/fa6";
import { ReactTyped } from "react-typed";



const Hero = () => {
  return (
    <div className='w-full py-3 px-4'>
        <div className='max-w-[1240px] md:w-[90%] py-10 mx-auto grid md:grid-cols-2'>
            <div className='esconder grilla-section flex flex-col justify-center'>
              <div className='md:text-4xl sm:text-3xl text-2xl text-[#2a4184] py-2 uppercase font-bold'>
                <h1 className=''>Vive La Experiencia </h1>
                <ReactTyped className='text-[#201b55] font-black' strings={['En La Playa']} typeSpeed={120} backSpeed={140} loop />
              </div>

                <p className='text-justify text-lg'>Somos una empresa joven nacida el año 2021. La magia del lugar junto con ese inexplicable magnetismo nos motivó a dejar Santiago para radicarnos definitivamente en este maravilloso balneario llamado Guanaqueros.</p>
                <button className='bg-[#1b1464] hover:scale-105 duration-300 hover:bg-[#3c3583] shadow-lg shadow-blue-500/50 w-[200px] rounded-[2rem] font-medium my-6 mx-auto py-3 text-white flex items-center justify-center gap-2'>Conoce más <FaArrowRightLong/></button>
            </div>
            <img className='esconder grilla-section md:w-[70%] sm:md:w-[50%] w-[90%] h-[400px] mx-auto my-4 rounded-md shadow-lg shadow-blue-500/50' src={hero} alt="barco de cabaña en guanaqueros. playa norte, camping, hospedaje" />
        </div>
    </div>
  )
}

export default Hero