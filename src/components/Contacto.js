import React, { useState, useEffect } from 'react'
import './Contacto.css'

import AOS from 'aos';
import 'aos/dist/aos.css'; // Importa los estilos de AOS


import emailjs from 'emailjs-com';

function Contacto() {

    const [formData, setFormData] = useState({
        nombre: '',
        apellido: '',
        correo: '',
        telefono: '',
        mensaje: ''
    });

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData({
            ...formData,
            [id]: value
        });
    };

    //EmailJS datos necesarios para el envio de correos

    const serviceID = 'service_5trpbbl';
    const templateID = 'template_kp3dna7';
    const userID = '4k79yz_ihqle5CoP6';

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Form submitted:', formData);
        emailjs.send(serviceID, templateID, formData, userID)
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                alert('Formulario enviado con éxito!');
                setFormData({
                    nombre: '',
                    apellido: '',
                    correo: '',
                    telefono: '',
                    mensaje: ''
                });
            }, (error) => {
                console.error('FAILED...', error);
                alert('Error al enviar el formulario. Por favor, inténtelo de nuevo.');
            });
    };

    useEffect(() => {
        AOS.init({
            duration: 1400, // Duración de la animación en milisegundos
        });
    }, []);

    return (

        <div className='contenedor-contacto'>

            <div className='contenedor-contactame'>
                <div className='titulo-parrafo-contactame' data-aos="fade-up">
                    <h1 className='titulo-contactame'>Contáctame de vuelta</h1>
                    <div className='separacion-horizontal-contacto'></div>
                    <p className='parrafo-contactame'>¡Háganos saber y le hablaremos tan pronto como sea posible!</p>
                </div>

                <div className='contenedor-formulario-contacto'>
                    <form onSubmit={handleSubmit} className='formulario-contacto' data-aos="fade-up">
                        <div className='nombre-apellido-contacto'>
                            <div className='nombre-contacto' data-aos="fade-up">
                                <label htmlFor='nombre'>Nombre</label>
                                <input
                                    type='text'
                                    id='nombre'
                                    value={formData.nombre}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className='apellido-contacto' data-aos="fade-up">
                                <label htmlFor='apellido'>Apellido</label>
                                <input
                                    type='text'
                                    id='apellido'
                                    value={formData.apellido}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        <div className='email-contacto' data-aos="fade-up">
                            <label htmlFor='email'>Email</label>
                            <input
                                type='email'
                                id='correo'
                                value={formData.correo}
                                onChange={handleChange}
                            />
                        </div>
                        <div className='telefono-contacto' data-aos="fade-up">
                            <label htmlFor='telefono'>Teléfono</label>
                            <input
                                type='tel'
                                id='telefono'
                                value={formData.telefono}
                                onChange={handleChange}
                            />
                        </div>
                        <div className='mensaje-contacto' data-aos="fade-up">
                            <label htmlFor='mensaje'>Mensaje</label>
                            <textarea
                                id='mensaje'
                                value={formData.mensaje}
                                onChange={handleChange}
                            />
                        </div>
                        <button type='submit' className='boton-enviar-formulario'>Enviar</button>
                    </form>
                </div>
            </div>

            <div className='contenedor-informacion'>
                <h1 className='titulo-informacion' data-aos="fade-up">Información adicional</h1>
                <div className='informacion-adicional' data-aos="fade-up">
                    <div className='informacion-adicional-seccion' data-aos="fade-up">
                        <h2 className='direccion'>Direcciones principales:</h2>
                        <div className='separacion-horizontal-informacion'></div>
                        <p>
                            Dirección fiscal: Jr.Fitzcarrald 1276 Urb. Covida 2da. Etapa - Los Olivos <br />
                        </p>
                        <p>
                            Dirección comercial: Av. Carlos Izaguirre 1385 3er. Piso - Los Olivos <br />
                            (Frente a la Choza Nautica)
                        </p>
                    </div>
                    <div className='informacion-adicional-seccion' data-aos="fade-up">
                        <h2 className='correos'>Correos de contacto:</h2>
                        <div className='separacion-horizontal-informacion'></div>
                        <p>
                            rosa.egusquiza@fiesac.com.pe
                        </p>
                        <p>
                            clientes@fiesac.com.pe
                        </p>
                    </div>
                    <div className='informacion-adicional-seccion' data-aos="fade-up">
                        <h2 className='telefonos'>Teléfonos de la empresa:</h2>
                        <div className='separacion-horizontal-informacion'></div>
                        <p>Fijo: (01) 535-4273</p>
                        <p>Entel: 994-107-516</p>
                        <p>Movistar: 995-622-557</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contacto