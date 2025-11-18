// src/pages/Users/users.jsx
import React, { useState, useEffect } from 'react';
import { getAllUsers, updateUser, deleteUser } from '../../services/UserService';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Asegúrate de instalar react-fontawesome
import { faExchangeAlt, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import './users.css';

const UserManagementPage = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Mapeador de Rol de número (API) a string (Front) - SIN CAMBIOS
    const mapRoleToClient = (apiRole) => (apiRole === 0 ? 'Admin' : 'Client');
    const mapRoleToServer = (clientRole) => (clientRole === 'Admin' ? 0 : 1);

    const loadUsers = async () => {
        setLoading(true);
        setError(null);
        try {
            const data = await getAllUsers();
            const mappedUsers = data.map(user => ({
                ...user,
                role: mapRoleToClient(user.role)
            }));
            setUsers(mappedUsers);
        } catch (err) {
            const errorMessage = err.response?.status === 403
                ? 'Acceso denegado. No tienes permisos de Administrador.'
                : 'Error al cargar la lista de usuarios. Revisa tu token y la API desplegada.';
            setError(errorMessage);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        loadUsers();
    }, []);

    const handleDelete = async (userId, userName) => {
        if (window.confirm(`¿Estás seguro que deseas eliminar al usuario: ${userName}?`)) {
            try {
                await deleteUser(userId);
                alert(`Usuario ${userName} eliminado con éxito.`);
                loadUsers();
            } catch (err) {
                alert('No se pudo eliminar el usuario. Revisa la consola para más detalles.');
            }
        }
    };

    const handleUpdateRole = async (user) => {
        const currentRoleString = user.role;
        const newRoleString = currentRoleString === 'Admin' ? 'Client' : 'Admin';
        const newRoleNumber = mapRoleToServer(newRoleString);
        const updateData = {
            id: user.id,
            username: user.username,
            email: user.email,
            role: newRoleNumber,
        };

        try {
            await updateUser(user.id, updateData);
            setUsers(prevUsers =>
                prevUsers.map(u =>
                    u.id === user.id ? { ...u, role: newRoleString } : u
                )
            );
            alert(`Rol de ${user.username} actualizado a ${newRoleString} con éxito.`);
        } catch (err) {
            alert('No se pudo actualizar el rol. Revisa la consola para más detalles.');
        }
    };

    if (loading) return <div className="message-loading">Cargando usuarios...</div>;
    if (error) return <div className="message-error">{error}</div>;

    return (
        <div className="user-management-container">
            <h2>👑 Gestión de Usuarios (Admin Exclusivo)</h2>
            <p className="message-info">Total de usuarios: <strong>{users.length}</strong></p>

            {/* Tabla para desktop */}
            <table className="user-table">
                <thead>
                <tr>
                    <th>ID (parcial)</th>
                    <th>Usuario</th>
                    <th>Email</th>
                    <th>Rol</th>
                    <th>Acciones</th>
                </tr>
                </thead>
                <tbody>
                {users.map(user => (
                    <tr key={user.id}>
                        <td>{String(user.id).substring(0, 8)}...</td>
                        <td>{user.username}</td>
                        <td>{user.email}</td>
                        <td>
                            <span className={user.role === 'Admin' ? 'role-admin' : 'role-user'}>
                                {user.role}
                            </span>
                        </td>
                        <td>
                            <button
                                onClick={() => handleUpdateRole(user)}
                                className="action-btn btn-toggle-role"
                            >
                                <FontAwesomeIcon icon={faExchangeAlt} />
                                Cambiar a {user.role === 'Admin' ? 'Client' : 'Admin'}
                            </button>
                            <button
                                onClick={() => handleDelete(user.id, user.username)}
                                className="action-btn btn-delete"
                                style={{ marginLeft: '10px' }}
                            >
                                <FontAwesomeIcon icon={faTrashAlt} />
                                Eliminar
                            </button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>

            {/* Cards para móviles (responsivas) */}
            <div className="mobile-cards" style={{ display: 'none' }}>
                {users.map(user => (
                    <div key={user.id} className="user-card">
                        <h3>{user.username}</h3>
                        <p><strong>ID:</strong> {String(user.id).substring(0, 8)}...</p>
                        <p><strong>Email:</strong> {user.email}</p>
                        <p><strong>Rol:</strong> <span className={user.role === 'Admin' ? 'role-admin' : 'role-user'}>{user.role}</span></p>
                        <div className="actions">
                            <button
                                onClick={() => handleUpdateRole(user)}
                                className="action-btn btn-toggle-role"
                            >
                                <FontAwesomeIcon icon={faExchangeAlt} />
                                Cambiar a {user.role === 'Admin' ? 'Client' : 'Admin'}
                            </button>
                            <button
                                onClick={() => handleDelete(user.id, user.username)}
                                className="action-btn btn-delete"
                            >
                                <FontAwesomeIcon icon={faTrashAlt} />
                                Eliminar
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default UserManagementPage;