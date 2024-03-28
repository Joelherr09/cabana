import React from 'react'
import uno from '../assets/6galeria/uno.webp'
import dos from '../assets/6galeria/dos.webp'
import tres from '../assets/6galeria/tres.webp'
import cuatro from '../assets/6galeria/cuatro.webp'
import cinco from '../assets/6galeria/cinco.webp'
import seis from '../assets/6galeria/siete.webp'

const Galeria = () => {
  return (
    <div className='w-full py-12'>
        <h1 className='text-3xl text-center font-bold text-[#1a3b4c] py-4'>Galería</h1>
            <div className='md:w-[60%] w-[90%] mx-auto grid grid-cols-2 md:grid-cols-3'>
            <div className='p-1 hover:scale-105 duration-300 '>
                <img src={uno} alt="cabaña barco regulus Playa Norte Cabañas Playa Norte Cabañas Los Barcos" />
            </div>
            <div className='p-1 hover:scale-105 duration-300 '>
                <img src={dos} alt="Cabañas Playa Norte Cabañas Los Barcos" />
            </div>
            <div className='p-1 hover:scale-105 duration-300 '>
                <img src={tres} alt="Cabañas Playa Norte Cabañas Los Barcos" />
            </div>
            <div className='p-1 hover:scale-105 duration-300 '>
                <img src={cuatro} alt="Cabañas Playa Norte Cabañas Los Barcos" />
            </div>
            <div className='p-1 hover:scale-105 duration-300'>
                <img src={cinco} alt="Cabañas Playa Norte Cabañas Los Barcos" />
            </div>
            <div className='p-1 hover:scale-105 duration-300'>
                <img src={seis} alt="Cabañas Playa Norte Cabañas Los Barcos" />
            </div>
        </div>
    </div>

  )
}

export default Galeria