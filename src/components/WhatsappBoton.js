import React, { useState, useEffect } from 'react';
import './WhatsappBoton.css';
import WhatsappIcon from '../assets/whatsapp.png'

function WhatsappBoton() {

    const [showDialog, setShowDialog] = useState(false);
    const phoneNumber = "51995622557"; // Reemplaza con tu número de WhatsApp
    const message = "Hola, me gustaría más información sobre sus servicios."; // Mensaje predefinido
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowDialog(true);
        }, 4000); // Mostrar el mensaje después de 1 segundo

        return () => clearTimeout(timer);
    }, []);

    const closeDialog = () => {
        setShowDialog(false);
    };

    return (
        <>
            {showDialog && (
                <div className="whatsapp-dialog animated">
                    <span>¿Tienes dudas sobre nuestros servicios? ¡Escríbenos!</span>
                    <button className="close-button" onClick={closeDialog}>&times;</button>
                </div>
            )}
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="whatsapp-button">
                <img src={WhatsappIcon} alt="WhatsApp" />
            </a>
        </>
    );
};

export default WhatsappBoton;