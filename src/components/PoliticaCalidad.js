import React, {useEffect} from 'react';
import './PoliticaCalidad.css'; // Importa los estilos desde un archivo CSS
import politicacalidad from '../assets/politicacalidad.jpg'; // Importa la imagen
import politicacalidadPDF from '../assets/politicacalidad.pdf'; // Importa el PDF

import AOS from 'aos';
import 'aos/dist/aos.css';

function PoliticaCalidad() {

  useEffect(() => {
    AOS.init({
        duration: 1400, // Duración de la animación en milisegundos
    });    
  }, []);

  return (
    <div className="politica-calidad-container">
      <h2 className='titulo-seccion' data-aos="fade-up">Politica de calidad</h2>
      <div className="politica-calidad-imagen-container" data-aos="fade-up">
        <img src={politicacalidad} alt="Política de Calidad" className="politica-calidad-imagen" />
      </div>
      <a href={politicacalidadPDF} download="politicacalidad.pdf" className="politica-calidad-boton">
        Descargar Aquí
      </a>
    </div>
  );
}

export default PoliticaCalidad;
