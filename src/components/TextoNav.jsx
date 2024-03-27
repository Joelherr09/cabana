import React from 'react'
import { ReactTyped } from "react-typed";

const TextoNav = () => {
  return (
    <div className='bg-whitesmoke h-full sm:flex-row flex flex-col mx-auto my-2 items-center justify-center font-bold font-3xl'>
        <script defer src="/animacion.js" ></script>
        <h1 className=' '>VEN A DISFRUTAR TUS VACACIONES A </h1>
        <ReactTyped className='text-[#201b55] mx-2' strings={['PLAYA NORTE']} typeSpeed={120} backSpeed={140} loop />
        <h1>|| HÁBLANOS AL <a href="/" >+56 9 4945 3696</a></h1>
    </div>
  )
}

export default TextoNav