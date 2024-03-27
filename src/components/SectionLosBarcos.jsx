import React from 'react'
import hero from '../assets/hero-section-cabana.webp'
import { FaArrowRightLong } from "react-icons/fa6";
import { ReactTyped } from "react-typed";

const SectionLosBarcos = () => {
  return (
    <div id='cabana' className='w-full pt-28 pb-16 bg-[#1b1464] shadow-lg shadow-blue-500/50 px-4'>
        <div className='max-w-[1240px] md:w-[90%] mx-auto grid md:grid-cols-2'>
            <img className='esconder grilla-section md:w-[70%] sm:md:w-[50%] w-[90%] h-[400px] mx-auto my-4 rounded-md shadow-lg shadow-blue-500/50' src={hero} alt="barcos como cabaña en guanaqueros" />
            <div className='esconder grilla-section flex flex-col justify-center'>
                <h2 className='text-[1.3rem] text-bold text-white'>PLAYA NORTE</h2>
                <div className='flex flex-col md:text-4xl sm:text-3xl text-3xl text-white py-2 pb-6 uppercase font-bold '>
                  <h1 className=''>Cabañas</h1>
                  <ReactTyped className=' text-[#bdd2fe] font-black' strings={['Los Barcos']} typeSpeed={120} backSpeed={140} loop />
                </div>
                <strong className='text-white text-lg'>¿Sueñas con una escapada a la playa?</strong>
                <p className='text-lg text-justify text-white'>Un lugar donde puedas desconectar del estrés de la ciudad, relajarte en la arena dorada y disfrutar del sonido del mar. Cabañas Playa Norte te ofrece la experiencia perfecta para tus vacaciones soñadas.</p>
                <a target='blank' href="https://web.whatsapp.com/send?phone=56949453696&text=%C2%A1Hola!%20Deseo%20hacer%20una%20reserva%20para%20mi%20cabaña!">
                  <button className='bg-white hover:bg-[#948bf6] w-[180px] hover:scale-105 duration-300 rounded-[2rem] shadow-lg shadow-blue-500/50 font-medium my-10 mx-auto py-2 text-[#1b1464] flex items-center justify-center gap-2'>Reservar<FaArrowRightLong/></button>
                </a>

            </div>
            
        </div>
    </div>
  )
}

export default SectionLosBarcos