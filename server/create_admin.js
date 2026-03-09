const fetch = require('node-fetch');

const API_URL = 'http://localhost:3001';

async function crearAdmin() {
    const data = {
        username: 'admin_inkaia',
        password: 'Password123!',
        nombreFull: 'Administrador Principal',
        rol: 'admin'
    };

    try {
        console.log(`[INKAIA] Intentando registrar en ${API_URL}...`);
        const res = await fetch(`${API_URL}/api/auth/register`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        });

        const text = await res.text();
        try {
            const result = JSON.parse(text);
            console.log('Resultado del Servidor:', result);
        } catch (e) {
            console.error('El servidor no devolvió JSON. Respuesta:', text);
        }
    } catch (err) {
        console.error('Error de conexión:', err.message);
    }
}

crearAdmin();
