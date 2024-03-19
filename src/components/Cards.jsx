import React from 'react'
import Gym from '../assets/gym-logo.png'
import Constructora from '../assets/constructora-logo.png'
import LosBarcos from '../assets/losbarcos-logo.png'

const Cards = () => {
  return (
    <div className='w-full pb-[1rem] h-full'>
        <div className='w-full pb-[1rem] bg-[#1b1464] lg:w-[100%] md:w-[100%] sm:w-[100%] mx-auto grid md:grid-cols-3 sm:grid-cols-3'>
            <a href="/#cabana">
                <div className='w-full flex flex-col p-4 my-4 hover:bg-[#443e82] hover:scale-105 duration-300'>
                    <img className='w-40 h-full mx-auto' src={LosBarcos} alt="/" />
                    <h2 className='text-1xl font-bold text-center text-white py-4'>Cabañas</h2>
                </div>
            </a>

            <a href="/#constructora">
                <div className='w-full flex flex-col p-4 my-4 hover:scale-105 hover:bg-[#443e82] duration-300'>
                    <img className='w-40 h-full mx-auto' src={Constructora} alt="/" />
                    <h2 className='text-1xl font-bold text-center text-white py-4'>Constructora</h2>
                </div>
            </a>


            <a href="/#gimnasio">
                <div className='w-full flex flex-col bg-[#1b1464] p-4 my-4 hover:bg-[#443e82] hover:scale-105 duration-300'>
                    <img className='w-40 h-full mx-auto' src={Gym} alt="/" />
                    <h2 className='text-1xl font-bold text-center text-white py-4'>Gimnasio</h2>
                </div>
            </a>



        </div>
    </div>
  )
}

export default Cards