// src/pages/Register/register.jsx
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { register } from '../../services/authservice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faLock, faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import './register.css'; // Importa tus estilos específicos de register

const RegisterPage = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
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

        const { username, email, password, confirmPassword } = formData;

        if (password !== confirmPassword) {
            setError('Las contraseñas no coinciden.');
            return;
        }

        try {
            await register({ username, email, password });

            setSuccess('Registro exitoso. ¡Ahora puedes iniciar sesión!');
            setTimeout(() => navigate('/login'), 2000);

        } catch (err) {
            setError(err.message || 'Error desconocido al registrar.');
        }
    };

    return (
        <div className="auth-container">
            <h2>👑 Registrar Nuevo Usuario (Exclusivo)</h2>
            <form onSubmit={handleSubmit} className="register-form">
                {error && <div className="message-error">{error}</div>}
                {success && <div className="message-success"><FontAwesomeIcon icon={faCheckCircle} /> {success}</div>}

                <div className="form-group">
                    <label htmlFor="username">Nombre de Usuario</label>
                    <div className="input-wrapper">
                        <FontAwesomeIcon icon={faUser} className="input-icon" />
                        <input
                            type="text"
                            id="username"
                            name="username"
                            value={formData.username}
                            onChange={handleChange}
                            required
                        />
                    </div>
                </div>
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
                            placeholder="Mínimo 6 caracteres"
                            required
                        />
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="confirmPassword">Confirmar Contraseña</label>
                    <div className="input-wrapper">
                        <FontAwesomeIcon icon={faLock} className="input-icon" />
                        <input
                            type="password"
                            id="confirmPassword"
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            required
                        />
                    </div>
                </div>

                <button type="submit" className="btn btn-primary">
                    Registrar
                </button>
            </form>
            <p className="btn-link">
                ¿Ya tienes una cuenta? <Link to="/login">Inicia Sesión</Link>
            </p>
        </div>
    );
};

export default RegisterPage;