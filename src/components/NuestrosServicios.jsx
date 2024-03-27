import React from 'react'

const NuestrosServicios = () => {
  return (
    <div className='w-full h-full flex flex-col justify-center items-center py-12'>
        <div className='flex flex-col justify-center items-center'>
            <p className='text-[#4e9ed4] text-xl font-bold text-center'>PLAYA NORTE</p>
            <p className='text-[#1b1464] text-3xl font-bold text-center'>Nuestros Servicios</p>
        </div>
        <div className='md:grid md:grid-cols-3 md:justify-between md:gap-12'>
            <div className='flex flex-col justify-start mx-auto my-8 min-h-32 max-w-80 w-[280px] p-4 rounded-lg hover:scale-105 duration-300 shadow-lg shadow-blue-500/50'>
                <p className='text-white text-xl bg-[#1b1464] rounded-3xl w-[30px] h-[30px] flex justify-center my-auto'>1</p>
                <p className='text-[#1b1464] text-2xl font-bold'>Cabañas de Veraneo</p>
            </div>
            <div className='flex flex-col justify-start mx-auto my-8 min-h-32 max-w-80 w-[280px] p-4 rounded-lg hover:scale-105 duration-300 shadow-lg shadow-blue-500/50'>
                <p className='text-white text-xl bg-[#1b1464] rounded-3xl w-[30px] h-[30px] flex justify-center my-auto'>2</p>
                <p className='text-[#1b1464] text-2xl font-bold'>Construcción de casas, cabañas, ampliaciones, terrazas, etc.</p>
            </div>
            <div className='flex flex-col justify-start mx-auto my-8 min-h-32 max-w-80 w-[280px] p-4 rounded-lg hover:scale-105 duration-300 shadow-lg shadow-blue-500/50'>
                <p  className='text-white text-xl bg-[#1b1464] rounded-3xl w-[30px] h-[30px] flex justify-center my-auto'>3</p>
                <p className='text-[#1b1464] text-2xl font-bold'>Gimnasio Clases Grupales.</p>
            </div>
        </div>
    </div>
  )
}

export default NuestrosServicios