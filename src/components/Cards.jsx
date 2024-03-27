import React from 'react'
import Gym from '../assets/gym-logo.png'
import Constructora from '../assets/constructora-logo.png'
import LosBarcos from '../assets/losbarcos-logo.png'



const Cards = () => {
  return (
    <div className='w-full h-full'>
        <div className='w-full shadow-lg shadow-blue-500/50 bg-[#1b1464] lg:w-[100%] md:w-[100%] sm:w-[100%] mx-auto grid md:grid-cols-3 sm:grid-cols-3'>
            <a href="/#cabana" className='logo-botones'>
                <div className=' w-full flex flex-col p-4 h-full bg-[#1b1464] hover:shadow-lg hover:shadow-blue-500/50 hover:scale-105 duration-300'>
                    <img className='w-40 h-full mx-auto' src={LosBarcos} alt="/" />
                    <h2 className='text-1xl font-bold text-center text-white py-4'>Cabañas</h2>
                </div>
            </a>

            <a href="/#constructora" className='logo-botones'>
                <div className='md:esconder w-full flex flex-col p-4 h-full bg-[#1b1464] hover:scale-105 hover:shadow-lg hover:shadow-blue-500/50 duration-300'>
                    <img className='w-40 h-full mx-auto' src={Constructora} alt="/" />
                    <h2 className='text-1xl font-bold text-center text-white py-4'>Constructora</h2>
                </div>
            </a>


            <a href="/#gimnasio" className='logo-botones'>
                <div className='md:esconder w-full flex flex-col bg-[#1b1464] h-full p-4 hover:shadow-lg hover:shadow-blue-500/50 hover:scale-105 duration-300'>
                    <img className='w-40 h-full mx-auto' src={Gym} alt="/" />
                    <h2 className='text-1xl font-bold text-center text-white py-4'>Gimnasio</h2>
                </div>
            </a>



        </div>
    </div>
  )
}

export default Cards