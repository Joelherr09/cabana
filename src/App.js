import './App.css';
import Hero from './components/Hero';
import Cards from './components/Cards';
import Footer from './components/Footer';
import SectionLosBarcos from './components/SectionLosBarcos';
import SectionConstructora from './components/SectionConstructora';
import SectionGimnasio from './components/SectionGimnasio';
import Contacto from './components/Contacto';
import BotonSubir from './components/BotonSubir';
import Navbar2 from './components/Navbar2';
import TextoNav from './components/TextoNav';
import NuestrosServicios from './components/NuestrosServicios';
import Galeria from './components/Galeria';

function App() {
  return (

    

    <div>
        

        <TextoNav/>
        <Cards/>
        <Navbar2/>
        <BotonSubir/>
        <Hero/>
        
        <SectionLosBarcos/>
        <SectionConstructora/>
        <SectionGimnasio/>
        <NuestrosServicios/>

        <Contacto/>
        <Galeria/>
        <Footer/>
    </div>
  );
}

export default App;
