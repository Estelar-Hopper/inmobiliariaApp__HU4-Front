// src/pages/Login/login.jsx
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { login } from '../../services/authservice'; // Asume que tienes esta función
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock, faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import './login.css'; // Importa tus estilos específicos de login

const LoginPage = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);
        setSuccess(null);

        const { email, password } = formData;

        try {
            await login({ email, password });
            setSuccess('Inicio de sesión exitoso. ¡Bienvenido!');
            setTimeout(() => navigate('/dashboard'), 2000); // Cambia '/dashboard' por tu ruta principal
        } catch (err) {
            setError(err.message || 'Error desconocido al iniciar sesión.');
        }
    };

    return (
        <div className="auth-container">
            <h2>👑 Iniciar Sesión (Exclusivo)</h2>
            <form onSubmit={handleSubmit} className="login-form">
                {error && <div className="message-error">{error}</div>}
                {success && <div className="message-success"><FontAwesomeIcon icon={faSignInAlt} /> {success}</div>}

                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <div className="input-wrapper">
                        <FontAwesomeIcon icon={faEnvelope} className="input-icon" />
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Contraseña</label>
                    <div className="input-wrapper">
                        <FontAwesomeIcon icon={faLock} className="input-icon" />
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                        />
                    </div>
                </div>

                <button type="submit" className="btn btn-primary">
                    <FontAwesomeIcon icon={faSignInAlt} /> Iniciar Sesión
                </button>
            </form>
            <p className="btn-link">
                ¿No tienes cuenta? <Link to="/register">Regístrate</Link>
            </p>
        </div>
    );
};

export default LoginPage;