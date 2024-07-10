import './App.css';
import Navbar from './components/Navbar'
import AboutUs from './components/AboutUs';
import Inicio from './components/Inicio';
import Contacto from './components/Contacto';
import Servicios from './components/Servicios';
import WhatsappBoton from './components/WhatsappBoton';
import Footer from './components/Footer';
import PoliticaCalidad from './components/PoliticaCalidad';

function App() {

  return (
    <>
      <Navbar />
      <div id="inicio"><Inicio /></div>
      <div id="servicios"><Servicios /></div>
      <div id="about-us"><AboutUs /></div>
      <PoliticaCalidad/>
      <div id="contacto"><Contacto /></div>
      <Footer/>
      <WhatsappBoton/>
    </>
  );
}

export default App;
