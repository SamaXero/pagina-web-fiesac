// ConsultandoRUC.js

export async function consultarRUC(ruc) {
    const apiKey = '6672813433c0288a3757f173e6c242662c85942dbc5fa3f7bfa1732dd288bb07'; // Tu API Key

    try {
        const response = await fetch(`https://apiperu.dev/api/ruc/${ruc}?api_token=${apiKey}`);
        const data = await response.json();

        console.log('API Response:', data);

        if (response.ok) {
            if (!data.data || data.data.length === 0) {
                return { datos: ['nada'] };
            } else {
                const info = data.data;
                return {
                    datos: [
                        info.ruc,
                        info.nombre_o_razon_social,
                        new Date(info.fecha_inicio_actividades).toLocaleDateString(),
                        info.condicion,
                        info.tipo_contribuyente,
                        info.estado_contribuyente,
                        new Date(info.fecha_inscripcion).toLocaleDateString(),
                        info.direccion_completa,
                        new Date(info.emision_electronica).toLocaleDateString(),
                    ],
                };
            }
        } else {
            throw new Error(`Error al consultar el RUC: ${response.statusText}`);
        }
    } catch (error) {
        console.error('Error al consultar el RUC:', error);
        throw error;
    }
}