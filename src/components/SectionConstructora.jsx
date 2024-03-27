import React from 'react'
import hero from '../assets/construccion-hero.webp'
import { ReactTyped } from "react-typed";

const SectionConstructora = () => {
  return (
    <div id='constructora' className='w-full bg-white pt-28 pb-16 px-4'>
        <div className='max-w-[1240px] md:w-[90%] mx-auto grid md:grid-cols-2'>

            

            <div className='esconder grilla-section flex flex-col justify-center'>
              
                <ReactTyped className=' md:text-3xl sm:text-2xl text-2xl text-[#2a4184] py-1 uppercase font-bold' strings={['Constructora']} typeSpeed={120} backSpeed={140} loop />
                
                <h1 className='md:text-4xl sm:text-3xl text-3xl text-[#201b55] pb-4 uppercase font-black'>Playa Norte</h1>
                <strong className='text-lg'>¿Sueñas con construir tu casa ideal en un lugar mágico?</strong>
                <p className=' text-justify text-lg'>Playa Norte te ofrece la oportunidad de hacer realidad tu sueño. Cuéntanos sobre tu proyecto y nosotros lo construímos.</p>
            </div>

            <img className='esconder grilla-section md:w-[70%] sm:md:w-[50%] w-[90%] h-[400px] mx-auto my-4 rounded-md shadow-lg shadow-blue-500/50' src={hero} alt="servicios de construcción guanaqueros. construye tu casa, construye cabañas cerca del mar" />
        </div>
    </div>
  )
}

export default SectionConstructora