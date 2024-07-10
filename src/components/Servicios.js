import React, { useEffect } from 'react'
import './Servicios.css'

import pozoSeptico from '../assets/pozoseptico.jpg';
import trampaGrasa from '../assets/trampagrasa.jpg';
import fumigacion from '../assets/fumigacion.jpg';
import limpiezaCisterna from '../assets/limpiezacisterna.jpg';
import serviciosGenerales from '../assets/servicio-general.jpg';

import Carrusel from './Carrusel';

import AOS from 'aos';
import 'aos/dist/aos.css'; // Importa los estilos de AOS

function Servicios() {

  useEffect(() => {
    AOS.init({
      duration: 1400, // Duración de la animación en milisegundos
    });
  }, []);

  return (
    <div className="servicios-container">

      <div className='primer-seccion-servicios'>

        <div className='titulo-descripcion-servicios' data-aos="fade-up">
          <h1 className="titulo-seccion">Servicios Destacados</h1>
          <p className="servicios-descripcion">
            En Fiesac, ofrecemos servicios destacados de fumigación, limpieza de pozos sépticos, trampas de grasa y cisternas, garantizando soluciones eficientes.
          </p>
        </div>

        <div className="servicios-grid" data-aos="fade-up">

          <div className="servicio-item">
            <img src={pozoSeptico} alt="Limpieza Pozo Septico" className="servicio-imagen" />
            <h2>Limpieza de Pozos Sépticos</h2>
            <p>
              Ofrecemos servicios especializados de limpieza de pozos sépticos para empresas y hogares,
              asegurando soluciones efectivas y adaptadas a sus necesidades sanitarias específicas.
            </p>
          </div>

          <div className="servicio-item">
            <img src={trampaGrasa} alt="Limpieza de Trampa de Grasa" className="servicio-imagen" />
            <h2>Limpieza de Trampa de Grasa</h2>
            <p>
              Ofrecemos servicios especializados de limpieza de trampas de grasa para empresas, cumpliendo normativas vigentes y garantizando máxima eficiencia y seguridad.
            </p>
          </div>

          <div className="servicio-item">
            <img src={fumigacion} alt="Fumigacion" className="servicio-imagen" />
            <h2>Fumigación Integral</h2>
            <p>
              Ofrecemos servicios de fumigación para eliminar plagas, asegurando un ambiente limpio y seguro, alineados con las necesidades de su hogar o empresa.
            </p>
          </div>

          <div className="servicio-item">
            <img src={limpiezaCisterna} alt="Limpieza de Cisterna" className="servicio-imagen" />
            <h2>Limpieza de Cisternas</h2>
            <p>
              Ofrecemos servicios completos de limpieza de cisternas, garantizando agua limpia y segura, identificando problemas y oportunidades de mejora para su sistema.
            </p>
          </div>
          
          <div className='servicio-item'>
            <img src={serviciosGenerales} alt="Limpieza de Pozos"/>
            <h2>Servicios Generales</h2>
            <p>
            Proporcionamos soluciones integrales en saneamiento e higiene ambiental, evaluando y optimizando espacios para garantizar un entorno saludable y libre de contaminantes.
            </p>
          </div>

        </div>
      </div>

      <Carrusel />
    </div>
  );
};

export default Servicios;