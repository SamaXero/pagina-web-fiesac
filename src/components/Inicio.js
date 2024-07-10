import React, { useEffect, useState } from 'react'
import './Inicio.css'
import ModalForm from './ModalForm';

import AOS from 'aos';
import 'aos/dist/aos.css'; // Importa los estilos de AOS

function Inicio() {

    const [modalIsOpen, setModalIsOpen] = useState(false);

    useEffect(() => {
        AOS.init({
            duration: 1400, // Duración de la animación en milisegundos
        });
    }, []);

    const openModal = () => {
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };

    return (
            <div className={`background-inicio ${modalIsOpen ? 'blur' : ''}`}>
                <div className="contenedor-inicio">
                    <h1 className='titulo-inicio' data-aos="fade-up">Excelencia en Servicios Profesionales de Higiene y Saneamiento Ambiental</h1>
                    <p className='parrafo-inicio' data-aos="fade-up">
                        Ofrecemos soluciones integrales de higiene y saneamiento ambiental para garantizar entornos seguros y saludables. <br/>
                        Para obtener nuestro Brochure, haga clic en el botón
                    </p>
                    <button className='boton-conoce-mas' onClick={openModal} data-aos="fade-up">Conoce más</button>
                    <ModalForm isOpen={modalIsOpen} onRequestClose={closeModal} />
                </div>
            </div>
    )
}

export default Inicio
