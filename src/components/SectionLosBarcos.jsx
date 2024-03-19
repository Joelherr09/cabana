import React from 'react'
import hero from '../assets/hero-section-cabana.png'
import { FaArrowRightLong } from "react-icons/fa6";
import { ReactTyped } from "react-typed";

const SectionLosBarcos = () => {
  return (
    <div id='cabana' className='w-full pt-28 pb-16 bg-[#1b1464] px-4'>
        <div className='max-w-[1240px] md:w-[90%] mx-auto grid md:grid-cols-2'>
          <img className='md:w-[70%] sm:md:w-[50%] w-[90%] h-[400px] mx-auto my-4 rounded-md' src={hero} alt="/" />
            <div className='flex flex-col justify-center'>
                <h2 className='text-[1.3rem] text-bold text-white'>PLAYA NORTE</h2>
                <div className='flex md:text-4xl sm:text-3xl text-3xl text-white py-2 uppercase font-bold md:gap-6 gap-4'>
                  <h1 className=''>Cabañas</h1>
                  <ReactTyped className=' text-[#90fad9]' strings={['Los Barcos']} typeSpeed={120} backSpeed={140} loop />
                </div>
                <p className=' text-justify text-white'>"¡Descubre el lugar perfecto para relajarte y revitalizarte! Ofrecemos acogedoras cabañas en alquiler, además de servicios de construcción para crear el hogar de tus sueños. Ampliaciones, terrazas y más, todo adaptado a tus necesidades. Además, nuestro gimnasio te espera con modernas instalaciones para tus rutinas de ejercicio, junto con emocionantes clases grupales. ¡Convierte cada visita en una experiencia única de bienestar y renovación!"</p>
                <a target='blank' href="https://web.whatsapp.com/send?phone=56949453696&text=%C2%A1Hola!%20Deseo%20hacer%20una%20reserva%20para%20mi%20cabaña!">
                  <button className='bg-white hover:bg-[#948bf6] w-[180px] rounded-[2rem] font-medium my-3 mx-auto py-2 text-[#1b1464] flex items-center justify-center gap-2'>Reservar<FaArrowRightLong/></button>
                </a>

            </div>
            
        </div>
    </div>
  )
}

export default SectionLosBarcos