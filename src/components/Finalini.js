import React, {useState, useEffect} from 'react';
import './Finalini.css';
import minsa from '../assets/minsa.jpg'; // Asegúrate de tener la imagen en esta ruta
import iso from '../assets/iso.jpg'; // Asegúrate de tener la imagen en esta ruta
import ccl from '../assets/ccl.jpg'; // Asegúrate de tener la imagen en esta ruta
import anemsap from '../assets/anemsap.jpg'; // Asegúrate de tener la imagen en esta ruta

import AOS from 'aos';
import 'aos/dist/aos.css';

const Finalini = () => {

  const [startCount, setStartCount] = useState(false);

  useEffect(() => {
    AOS.init({
        duration: 1400, // Duración de la animación en milisegundos
    });    

    // Escuchar los eventos de AOS para iniciar el conteo
    const handleAOSIn = ({ detail }) => {
        if (detail.classList.contains('estadisticas')) {
            setStartCount(true);
        }
    };

    document.addEventListener('aos:in', handleAOSIn);

    return () => {
        document.removeEventListener('aos:in', handleAOSIn);
    };

}, []);

  return (
    <div className="contenedor-asociado-autorizado">
      <div className="fila">
        <div className="column-autorizacion" data-aos="fade-up">
          <h1 className="titulo-finalini">Autorizado por:</h1>
          <img src={minsa} alt="minsa" className="logo-minsa" data-aos="fade-up"/>
        </div>

        <div className="column-certificacion" data-aos="fade-up">
          <h1 className="titulo-finalini">Certificado por:</h1>
          <img src={iso} alt="iso" className="logo-iso" data-aos="fade-up"/>
        </div>
      </div>

      <div className="fila2">
        <h1 className="titulo-finalini" data-aos="fade-up">Estamos asociados a:</h1>
        <div className="mediafila" data-aos="fade-up">
          <div className="colum-ccl" data-aos="fade-up">
            <img src={ccl} alt="ccl" className="logo-ccl" />
          </div>
          <div className="column-anemsap" data-aos="fade-up">
            <img src={anemsap} alt="anemsap" className="logo-anemsap" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Finalini;


