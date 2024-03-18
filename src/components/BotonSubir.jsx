import React from 'react'
import { useEffect } from 'react';

function handleScroll() {
  const botonSubirContenedor = document.querySelector('.boton-subir-contenedor');
  if (botonSubirContenedor) { // Comprueba si el elemento existe
    if (document.documentElement.scrollTop > 100) {
      botonSubirContenedor.classList.add('show');
    } else {
      botonSubirContenedor.classList.remove('show');
    }
  }
  
}

function handleClick() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}



const BotonSubir = () => {

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        const botonSubirContenedor = document.querySelector('.boton-subir-contenedor');
        if (botonSubirContenedor) {
          botonSubirContenedor.addEventListener('click', handleClick);
        }
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
          if (botonSubirContenedor) {
            botonSubirContenedor.removeEventListener('click', handleClick);
          }
        };
      }, []);

  return (
    <div>
        <div className="boton-subir-contenedor">
            <div className="boton-subir">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"/></svg>
            </div>
        </div>
    </div>
  )
}

export default BotonSubir