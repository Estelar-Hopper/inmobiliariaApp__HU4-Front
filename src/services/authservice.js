// src/services/authServiceApi.js (O el nombre que uses para tu API de Auth)
import axios from 'axios';
import { TokenManager } from './authservice'; // 🔑 Importa el gestor de tokens

// ⚠️ IMPORTANTE: Añade la URL de tu backend desplegado
const API_URL = 'https://tu-backend-desplegado.com/api/v1/';

// ----------------------------------------------------
// LOGIN
// ----------------------------------------------------
export const login = async (credentials) => {
    try {
        const res = await axios.post(`${API_URL}auth/login`, credentials);

        // 🔑 Paso Clave: Si el login es exitoso, guarda los datos del token
        TokenManager.setTokenData(
            res.data.token,
            res.data.role, // Asume que la API devuelve 'role' (0 o 1)
            res.data.id     // Asume que la API devuelve 'id' del usuario
        );

        return res.data;
    } catch (error) {
        console.error("Error en el login", error.response?.data || error.message);
        // Limpia cualquier dato antiguo en caso de fallo
        TokenManager.clearTokenData();
        throw error;
    }
};

// ----------------------------------------------------
// REGISTER
// ----------------------------------------------------
export const register = async (data) => {
    try {
        const res = await axios.post(`${API_URL}auth/register`, data);

        // NOTA: Generalmente, el registro NO loguea automáticamente, pero podrías
        // optar por guardar el token aquí si tu API lo devuelve en el registro.
        // Si no devuelve token, solo devuelve el resultado.

        return res.data;
    } catch (error) {
        console.error("Error en el registro", error.response?.data || error.message);
        throw error;
    }
};
