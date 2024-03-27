import React from 'react'
import hero from '../assets/gimnasio-hero.webp'
import { FaArrowRightLong } from "react-icons/fa6";
import { ReactTyped } from "react-typed";

const SectionGimnasio = () => {
  return (
    <div id='gimnasio' className='w-full bg-[#1b1464] pt-28 pb-16 px-4'>
        <div className='max-w-[1240px] md:w-[90%] mx-auto grid md:grid-cols-2'>
            <img className='esconder grilla-section md:w-[70%] sm:md:w-[50%] w-[90%] h-[400px] mx-auto my-4 rounded-md shadow-lg shadow-blue-500/50' src={hero} alt="gimnasio en guanaqueros, gimnasio dynamic, playa norte, clases de gimnasio" />
            <div className='esconder grilla-section flex flex-col justify-center'>
                <h2 className='text-[1.3rem] text-bold text-white'>Gimnasio Guanaqueros</h2>
                <ReactTyped className='md:text-4xl sm:text-3xl text-3xl text-white py-2 uppercase font-bold' strings={['Dynamic']} typeSpeed={120} backSpeed={140} loop />
                <strong className='text-white text-lg'>¿Buscas un lugar para ponerte en forma y mejorar tu salud en Guanaqueros?</strong>
                <p className='text-lg text-justify text-white'> Gimnasio Dynamic te ofrece un espacio moderno y equipado con todo lo que necesitas para alcanzar tus objetivos de fitness.</p>
                <a target='blank' href="https://web.whatsapp.com/send?phone=56949453696&text=%C2%A1Hola!%20Deseo%20hacer%20una%20reserva%20para%20el%20gimnasio!" >
                  <button className='bg-white hover:scale-105 duration-300 hover:bg-[#948bf6] shadow-lg shadow-blue-500/50 w-[180px] rounded-[2rem] font-medium my-10 mx-auto py-2 text-[#1b1464] flex items-center justify-center gap-2'>Reservar<FaArrowRightLong/></button>
                </a>

            </div>
            
        </div>
    </div>
  )
}

export default SectionGimnasio