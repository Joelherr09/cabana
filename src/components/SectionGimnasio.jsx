import React from 'react'
import hero from '../assets/gimnasio-hero.jpg'
import { FaArrowRightLong } from "react-icons/fa6";

const SectionGimnasio = () => {
  return (
    <div className='w-full py-3 px-4'>
        <div className='max-w-[1240px] md:w-[90%] mx-auto grid md:grid-cols-2'>
            <div className='flex flex-col justify-center'>
                <h2 className='text-[1.3rem] text-bold text-[#443e82]'>Gimnasio Guanaqueros</h2>
                <h1 className='md:text-4xl sm:text-3xl text-3xl text-[#1b1464] py-2 uppercase font-bold'>Dynamic</h1>
                <p className='text-[0.8rem] text-justify'>"¡Descubre el lugar perfecto para relajarte y revitalizarte! Ofrecemos acogedoras cabañas en alquiler, además de servicios de construcción para crear el hogar de tus sueños. Ampliaciones, terrazas y más, todo adaptado a tus necesidades. Además, nuestro gimnasio te espera con modernas instalaciones para tus rutinas de ejercicio, junto con emocionantes clases grupales. ¡Convierte cada visita en una experiencia única de bienestar y renovación!"</p>
                <button className='bg-[#1b1464] hover:bg-[#443e82] w-[180px] rounded-[2rem] font-medium my-3 mx-auto py-2 text-white flex items-center justify-center gap-2'>Reservar<FaArrowRightLong/></button>
            </div>
            <img className='md:w-[70%] sm:md:w-[50%] w-[90%] h-[400px] mx-auto my-4 rounded-md' src={hero} alt="/" />
        </div>
    </div>
  )
}

export default SectionGimnasio