import React from 'react'
import hero from '../assets/hero.png'
import { FaArrowRightLong } from "react-icons/fa6";

const Hero = () => {
  return (
    <div className='w-full py-3 px-4'>
        <div className='max-w-[1240px] md:w-[90%] mx-auto grid md:grid-cols-2'>
            <div className='flex flex-col justify-center'>
                <h1 className='md:text-4xl sm:text-3xl text-2xl text-[#201b55] py-2 uppercase font-bold'>Vive La Experiencia En La Playa</h1>
                <p className='text-justify'>Somos una empresa joven nacida el año 2021. La magia del lugar junto con ese inexplicable magnetismo nos motivó a dejar Santiago para radicarnos definitivamente en este maravilloso balneario llamado Guanaqueros.</p>
                <button className='bg-[#1b1464] hover:bg-[#443e82] w-[200px] rounded-[2rem] font-medium my-6 mx-auto py-3 text-white flex items-center justify-center gap-2'>Conoce más <FaArrowRightLong/></button>
            </div>
            <img className='md:w-[70%] sm:md:w-[50%] w-[90%] h-[400px] mx-auto my-4 rounded-md' src={hero} alt="/" />
        </div>
    </div>
  )
}

export default Hero