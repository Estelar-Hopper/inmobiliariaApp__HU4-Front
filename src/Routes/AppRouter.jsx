// src/AppRouter.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Home from "../pages/Home/Home";

// Pages de propiedades
import PropertyListPage from "../pages/PropertyListPage/PropertyListPage";
import CreatePropertyPage from "../pages/CreatePropertyPage/CreatePropertyPage";
import EditPropertyPage from "../pages/EditPropertyPage/EditPropertyPage";

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
        <Route path="/properties" element={<PropertyListPage />} />           {/* Listado */}
        <Route path="/properties/create" element={<CreatePropertyPage />} />  {/* Crear */}
        <Route path="/properties/edit/:id" element={<EditPropertyPage />} />  {/* Editar */}
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
