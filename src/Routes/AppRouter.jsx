// src/router/AppRouter.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { TokenManager } from '../services/authservice'; // 🔑 Importa TokenManager
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Home from "../pages/Home/Home";

// Pages de propiedades
import PropertyListPage from "../pages/PropertyListPage/PropertyListPage";
import CreatePropertyPage from "../pages/CreatePropertyPage/CreatePropertyPage";
import EditPropertyPage from "../pages/EditPropertyPage/EditPropertyPage";

// 👑 NUEVA IMPORTACIÓN: Componente de Gestión de Usuarios
import UserManagementPage from "../pages/Users/users.jsx";

// 🛡️ COMPONENTE DE RUTA PROTEGIDA (NECESARIO)
// Este componente verifica el rol antes de renderizar
const AdminRoute = ({ element }) => {
    const isAdmin = TokenManager.isAdmin();
    const isAuthenticated = TokenManager.isAuthenticated();

    if (!isAuthenticated) {
        // Redirige al login si no hay token
        return <Route path="/login" element={<Login />} />;
    }
    if (!isAdmin) {
        // Si no es Admin, redirige al home o muestra un mensaje de error 403
        return <Route path="/" element={<Home />} />;
    }
    // Si es Admin, renderiza el componente
    return element;
};


function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                {/* Página principal / Home */}
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />


                {/* Autenticación */}
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />

                {/* CRUD de propiedades */}
                <Route path="/properties" element={<PropertyListPage />} />
                <Route path="/properties/create" element={<CreatePropertyPage />} />
                <Route path="/properties/edit/:id" element={<EditPropertyPage />} />

                {/* 👑 NUEVA RUTA: GESTIÓN DE USUARIOS (Protegida) */}
                <Route
                    path="/admin/users"
                    element={<AdminRoute element={<UserManagementPage />} />}
                />

            </Routes>
        </BrowserRouter>
    );
}

export default AppRouter;