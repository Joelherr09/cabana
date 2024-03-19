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

function App() {
  return (
    <div>
        <Cards/>
        <Navbar2/>
        <BotonSubir/>
        <Hero/>
        
        <SectionLosBarcos/>
        <SectionConstructora/>
        <SectionGimnasio/>
        <Contacto/>
        <Footer/>
    </div>
  );
}

export default App;
