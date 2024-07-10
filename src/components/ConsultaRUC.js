// ConsultaRUC.js

import React, { useState } from 'react';
import { consultarRUC } from './ConsultandoRUC';

function ConsultaRUC() {
    const [ruc, setRuc] = useState('');
    const [resultado, setResultado] = useState(null);
    const [error, setError] = useState(null);

    const handleConsultarClick = async () => {
        try {
            const response = await consultarRUC(ruc);
            setResultado(response.datos);
            setError(null);
            window.alert('El RUC ingresado no es válido.');
        } catch (error) {
            console.error('Error capturado en el componente:', error);
            setError('Error al consultar el RUC');
            setResultado(null);
        }
    };

    return (
        <div>
            <h2>Consultar de RUC</h2>
            <input
                type="text"
                value={ruc}
                onChange={(e) => setRuc(e.target.value)}
                placeholder="Ingrese RUC"
            />
            <button onClick={handleConsultarClick}>Consultar</button>

            {error && <p>{error}</p>}

            {resultado && resultado[0] === 'nada' ? (
                <p>No se encontraron datos para el RUC ingresado.</p>
            ) : resultado ? (
                <div>
                    <p>RUC: {resultado[0]}</p>
                    <p>Razón Social: {resultado[1]}</p>
                    <p>Fecha de Actividad: {resultado[2]}</p>
                    <p>Condición: {resultado[3]}</p>
                    <p>Tipo: {resultado[4]}</p>
                    <p>Estado: {resultado[5]}</p>
                    <p>Fecha de Inscripción: {resultado[6]}</p>
                    <p>Domicilio Fiscal: {resultado[7]}</p>
                    <p>Fecha de Emisión Electrónica: {resultado[8]}</p>
                    <p>El RUC es válido</p>
                </div>
            ) : null}
        </div>
    );
}

export default ConsultaRUC;