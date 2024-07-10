import React, { useEffect, useState } from 'react';
import './aboutUs.css';
import logo1 from '../assets/nestle.jpg'; 
import logo2 from '../assets/smi.jpg';
import logo3 from '../assets/montana.jpg';
import logo4 from '../assets/qroma.png';
import logo5 from '../assets/unmsm.png';
import logo6 from '../assets/ferrocarril.png';
import logo7 from '../assets/pesquero.jpg';
import logo8 from '../assets/auna.jpg';
import aboutus from '../assets/AboutUs-figura.png';
import VideoPresentacion from '../assets/Corporacion-FIESAC.mp4';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Importa los estilos de AOS

import CountUp from 'react-countup';
import Finalini from './Finalini';

// Array de rutas de logos e información adicional
const logos = [
    { src: logo1, alt: "Cliente 1" },
    { src: logo2, alt: "Cliente 2" },
    { src: logo3, alt: "Cliente 3" },
    { src: logo4, alt: "Cliente 4" },
    { src: logo5, alt: "Cliente 5" },
    { src: logo6, alt: "Cliente 6" },
    { src: logo7, alt: "Cliente 7" },
    { src: logo8, alt: "Cliente 8" }
];

function AboutUs() {

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
        <div className='contenedor-aboutus'>

            <div className='sobre-nosotros-aboutus'>
                <div className='seccion5' data-aos="fade-up">
                    <h2 className='subtitulo-seccion'>Sobre nosotros</h2>
                    <h1 className='titulo-seccion'>Bienvenidos</h1>
                    <hr className='separacion-horizontal-aboutus'></hr>
                    <p className='parrafo-bienvenida'>
                        ¡Bienvenidos a Corporación FIESAC! Nos destacamos por ofrecer contratos de lealtad, servicios excepcionales al cliente y contar con un personal altamente cualificado y con experiencia. Nuestra misión es brindar servicios de saneamiento e higiene profesional y de calidad. ¡Confía en FIESAC para tus necesidades empresariales!
                    </p>
                </div>
                <div className='seccion6' data-aos="fade-up">
                    <img src={aboutus} alt='aboutUs-figura' className='aboutUs-figura'></img>
                </div>
            </div>

            <div className='video-presentacion-aboutus'>
                <div className='video-contenedor' data-aos="fade-up">
                    <video controls className='video'>
                        <source src={VideoPresentacion} type='video/mp4' />
                        Tu navegador no soporta la reproducción de video.
                    </video>
                </div>
            </div>

            <div className='nuestros-clientes-aboutus'>
                <div className='seccion1' data-aos="fade-up">
                    <h1 className='titulo-seccion'>Nuestros clientes</h1>
                </div>
                <div className='separacion-vertical-aboutus' data-aos="fade-up"></div>
                <div className='seccion2' data-aos="fade-up">
                    <div className='logos' data-aos="fade-up">
                        {logos.map((logo, index) => (
                            <img key={index} src={logo.src} alt={logo.alt} className="logo-cliente" data-aos="fade-up" />
                        ))}
                    </div>
                </div>
            </div>

            <div className='nuestros-resultados-aboutus'>
                <div className='seccion3' data-aos="fade-up">
                    <h1 className='titulo-seccion'>Nuestros resultados</h1>
                    <p>Estamos orgullosos de lo que hemos logrado, pero no nos detenemos aquí.</p>
                </div>
                <div className='seccion4' data-aos="fade-up">
                    <div className="estadisticas" data-aos="fade-up">
                        <div className="estadistica" data-aos="fade-up">
                            <h3>+<CountUp start={0} end={18} duration={3} startOnMount={false} delay={0} enableScrollSpy={true} scrollSpyOnce={true} redraw={true}/></h3>
                            <p>Años de experiencia</p>
                        </div>
                        <div className="estadistica" data-aos="fade-up">
                            <h3><CountUp start={0} end={100} duration={3} startOnMount={false} delay={0} enableScrollSpy={true} scrollSpyOnce={true} redraw={true}/>%</h3>
                            <p>Clientes satisfechos</p>
                        </div>
                        <div className="estadistica" data-aos="fade-up">
                            <h3><CountUp start={0} end={100} duration={3} startOnMount={false} delay={0} enableScrollSpy={true} scrollSpyOnce={true} redraw={true}/>+</h3>
                            <p>Proyectos completados</p>
                        </div>
                        <div className="estadistica" data-aos="fade-up">
                            <h3><CountUp start={0} end={30} duration={3} startOnMount={false} delay={0} enableScrollSpy={true} scrollSpyOnce={true} redraw={true}/>+</h3>
                            <p>Eventos organizados</p>
                        </div>
                    </div>
                </div>
            </div>

            <Finalini/>
        </div>
    );
}

export default AboutUs;