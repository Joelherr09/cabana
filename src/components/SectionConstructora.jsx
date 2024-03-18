import React from 'react'
import hero from '../assets/hero-section-cabana.png'

const SectionConstructora = () => {
  return (
    <div className='w-full bg-[#1b1464] text-white py-3 px-4'>
        <div className='max-w-[1240px] md:w-[90%] mx-auto grid md:grid-cols-2'>

            <img className='md:w-[70%] sm:md:w-[50%] w-[90%] h-[400px] mx-auto my-4 rounded-md' src={hero} alt="/" />

            <div className='flex flex-col justify-center'>
                <h1 className='md:text-4xl sm:text-3xl text-3xl text-white py-2 uppercase font-bold'>Inmobiliaria Playa Norte</h1>
                <p className='text-[0.8rem] text-justify'>"¡Descubre el lugar perfecto para relajarte y revitalizarte! Ofrecemos acogedoras cabañas en alquiler, además de servicios de construcción para crear el hogar de tus sueños. Ampliaciones, terrazas y más, todo adaptado a tus necesidades. Además, nuestro gimnasio te espera con modernas instalaciones para tus rutinas de ejercicio, junto con emocionantes clases grupales. ¡Convierte cada visita en una experiencia única de bienestar y renovación!"</p>
            </div>
        </div>
    </div>
  )
}

export default SectionConstructora