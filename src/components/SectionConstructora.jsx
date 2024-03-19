import React from 'react'
import hero from '../assets/construccion-hero.jpg'
import { ReactTyped } from "react-typed";

const SectionConstructora = () => {
  return (
    <div id='constructora' className='w-full bg-white text-[#1b1464] pt-28 pb-16 px-4'>
        <div className='max-w-[1240px] md:w-[90%] mx-auto grid md:grid-cols-2'>

            

            <div className='flex flex-col justify-center'>
              
                <ReactTyped className=' md:text-3xl sm:text-2xl text-2xl text-[#1b1464] py-1 uppercase font-bold' strings={['Constructora']} typeSpeed={120} backSpeed={140} loop />

                <h1 className='md:text-4xl sm:text-3xl text-3xl text-[#1b1464] pb-4 uppercase font-bold'>Playa Norte</h1>
                <p className=' text-justify'>"¡Descubre el lugar perfecto para relajarte y revitalizarte! Ofrecemos acogedoras cabañas en alquiler, además de servicios de construcción para crear el hogar de tus sueños. Ampliaciones, terrazas y más, todo adaptado a tus necesidades. Además, nuestro gimnasio te espera con modernas instalaciones para tus rutinas de ejercicio, junto con emocionantes clases grupales. ¡Convierte cada visita en una experiencia única de bienestar y renovación!"</p>
            </div>

            <img className='md:w-[70%] sm:md:w-[50%] w-[90%] h-[400px] mx-auto my-4 rounded-md' src={hero} alt="/" />
        </div>
    </div>
  )
}

export default SectionConstructora