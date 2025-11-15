import axios from 'axios';

const API_URL = ''; // Añade la URL de  nuestro back desplegado 

export const login = async (credentials) => {
  try {
    const res = await axios.post(`${API_URL}login`, credentials);
    return res.data;
  } catch (error) {
    console.error("Error en el login", error);
    throw error;
  }
};

export const register = async (data) => {
  try {
    const res = await axios.post(`${API_URL}register`, data);
    return res.data;
  } catch (error) {
    console.error("Error en el registro", error);
    throw error;
  }
};
