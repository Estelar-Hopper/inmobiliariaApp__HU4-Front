// src/services/UserService.js
import axios from 'axios';
import { TokenManager } from './authservice'; // Asume que TokenManager está aquí o se importa

const API_URL = 'https://tu-url-de-api/api/v1/users'; // <--- VERIFICA TU URL BASE

// Función para obtener todos los usuarios (requiere token)
export const getAllUsers = async () => {
    const token = TokenManager.getToken();
    if (!token) throw new Error("No hay token de autenticación.");

    try {
        const response = await axios.get(API_URL, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        return response.data;
    } catch (error) {
        throw error;
    }
};

// Función para actualizar un usuario (requiere token y ID)
export const updateUser = async (userId, userData) => {
    const token = TokenManager.getToken();
    if (!token) throw new Error("No hay token de autenticación.");

    try {
        const response = await axios.put(`${API_URL}/${userId}`, userData, {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        });
        return response.data;
    } catch (error) {
        throw error;
    }
};

// Función para eliminar un usuario (requiere token y ID)
export const deleteUser = async (userId) => {
    const token = TokenManager.getToken();
    if (!token) throw new Error("No hay token de autenticación.");

    try {
        const response = await axios.delete(`${API_URL}/${userId}`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        return response.data;
    } catch (error) {
        throw error;
    }
};
// La función register (crear usuario) está excluida al quitar el Modal.

// Puedes añadir más funciones como getById, etc.