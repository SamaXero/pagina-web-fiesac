import React, { useState } from 'react';
import Modal from 'react-modal';
import './ModalForm.css';  // Importa el archivo CSS
import logo_modal from '../assets/logo-fiesac-modal.jpg'; 
import { consultarRUC } from './ConsultandoRUC';
import emailjs from 'emailjs-com';
import Brochure from '../assets/Brochure-Corporacion-Fiesac-2024.pdf';

Modal.setAppElement('#root'); // Asegura que el modal esté accesible

const ModalForm = ({ isOpen, onRequestClose }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        ruc: ''
    });

    const [error, setError] = useState(null);
    const [fadeOut, setFadeOut] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    //EmailJS datos necesarios para el envio de correos

    const serviceID = 'service_mn3iwio';
    const templateID = 'template_g6bdaoc';
    const userID = '4k79yz_ihqle5CoP6';

    //Parametro hecho para enviar el email, junto la validacion del RUC

    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            const response = await consultarRUC(formData.ruc);
            if (response.datos && response.datos[0] !== 'nada'){
                // Enviar datos por EmailJS
                await emailjs.send(serviceID, templateID, formData, userID);

                // Descargar el PDF
                const link = document.createElement('a');
                link.href = Brochure;  // Reemplaza con la ruta correcta a tu archivo PDF
                link.download = 'Brochure-Corporacion-Fiesac-2024.pdf'; // Nombre del archivo que se descargará
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);

                // Activar animación de desaparición
                setFadeOut(true);

                setTimeout(() => {
                    onRequestClose();
                    setFadeOut(false);
                }, 2000); // 3 segundos antes de cerrar el modal
            } else {
                window.alert('El RUC ingresado no es válido');
            }
        } catch (error){
            console.log('Error al consultar el RUC: ', error);
            setError('Error al consultar el RUC');
            window.alert('El RUC ingresado no es válido');
        }
        
    };

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            contentLabel="Formulario de Datos"
            className={`Modal ${fadeOut ? 'fade-out' : ''}`}
            overlayClassName="Overlay"
        >

            
                <div className="form-container">
                    <h2 className='titulo-form'>Obtén nuestro Brochure</h2>
                    <div className='separacion-horizontal-modal-form'></div>
                    <form onSubmit={handleSubmit} className='modal-form'>
                        <div className="form-group">
                            <label>Nombre y Apellido:</label>
                            <input type="text" name="name" value={formData.name} onChange={handleChange} required />
                        </div>
                        <div className="form-group">
                            <label>Correo Electrónico:</label>
                            <input type="email" name="email" value={formData.email} onChange={handleChange} required />
                        </div>
                        <div className="form-group">
                            <label>RUC:</label>
                            <input type="text" name="ruc" value={formData.ruc} onChange={handleChange} required />
                        </div>
                        <div className="button-group">
                            <button type="submit" className="button-submit">Enviar</button>
                            <button type="button" className="button-close" onClick={onRequestClose}>Cerrar</button>
                        </div>
                    </form>
                </div>
            <div className='separacion-horizontal-modal'></div>
            <div className="image-container">
                <img src={logo_modal} alt="Logo Fiesac" />
            </div>
        </Modal>
    );
};

export default ModalForm;
