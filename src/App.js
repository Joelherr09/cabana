import Navbar from './components/Navbar';
import './App.css';
import Hero from './components/Hero';
import Cards from './components/Cards';
import Footer from './components/Footer';
import SectionLosBarcos from './components/SectionLosBarcos';
import SectionConstructora from './components/SectionConstructora';
import SectionGimnasio from './components/SectionGimnasio';
import Contacto from './components/Contacto';

function App() {
  return (
    <div>
        <Navbar/>
        
        <Hero/>
        <Cards/>
        <SectionLosBarcos/>
        <SectionConstructora/>
        <SectionGimnasio/>
        <Contacto/>
        <Footer/>
    </div>
  );
}

export default App;
