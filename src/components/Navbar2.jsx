import React, {useState} from 'react'
import Logo from '../assets/logo.jpg'

const Navbar2 = () => {

    const [fix, setFix] = useState(false);

    function setFixed(){
        if(window.innerWidth > 500){
            if(window.scrollY >= 240){
                setFix(true)
            } else {
                setFix(false)
            }
        } else {
            if(window.scrollY >= 740){
                setFix(true)
            } else {
                setFix(false)
            }
        }

    }

    window.addEventListener("scroll", setFixed);

  return (
    <div className={fix ? 'navbar fixed' : 'hidden'}>
            <div className='flex items-center sm:justify-between justify-center px-8 h-24 w-full border-b-2 bg-[#1b1464] mx-auto text-white'>
                <div className='w-full h-full flex '>        
                    <img className='sm:visible invisible' src={Logo} alt="" />
                </div>
                <ul className=' md:flex flex'>
                    <a href="/#cabana">
                        <li className='p-4 hover:scale-105 duration-300 '>Cabañas</li>
                    </a>
                    <a href="/#constructora">
                        <li className='p-4 hover:scale-105 duration-300'>Constructora</li>
                    </a>
                    <a href="/#gimnasio">
                        <li className='p-4 hover:scale-105 duration-300'>Gimnasio</li>
                    </a>
                    
                </ul>


            </div>
    </div>
  )
}

export default Navbar2