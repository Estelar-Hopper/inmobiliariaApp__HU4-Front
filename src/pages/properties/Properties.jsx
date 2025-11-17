// src/pages/Properties/Properties.jsx

import { useState, useEffect } from "react";
import PropertyCard from "../../components/PropertyCard";
import PropertyForm from "../../components/PropertyForm";

import {
  getAllProperties,
  createProperty,
  updateProperty,
  deleteProperty,
} from "../../services/PropertyService";

import "./Properties.css";

const Properties = () => {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editingProperty, setEditingProperty] = useState(null);
  const [error, setError] = useState("");

  // Cargar propiedades al montar
  useEffect(() => {
    loadProperties();
  }, []);

  const loadProperties = async () => {
    try {
      setLoading(true);
      setError("");
      const data = await getAllProperties();
      setProperties(data);
    } catch (err) {
      setError("Error al cargar las propiedades");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  // Crear propiedad
  const handleCreate = async (formData) => {
    try {
      setError("");
      await createProperty(formData);
      setShowForm(false);
      loadProperties();
      alert("Propiedad creada exitosamente");
    } catch (err) {
      setError("Error al crear la propiedad");
      alert("Error al crear la propiedad");
      console.error(err);
    }
  };

  // Actualizar propiedad
  const handleUpdate = async (formData) => {
    try {
      setError("");
      await updateProperty(editingProperty.id, formData);
      setShowForm(false);
      setEditingProperty(null);
      loadProperties();
      alert("Propiedad actualizada exitosamente");
    } catch (err) {
      setError("Error al actualizar la propiedad");
      alert("Error al actualizar la propiedad");
      console.error(err);
    }
  };

  // Eliminar propiedad
  const handleDelete = async (id) => {
    if (window.confirm("¿Estás seguro de eliminar esta propiedad?")) {
      try {
        setError("");
        await deleteProperty(id);
        loadProperties();
        alert("Propiedad eliminada exitosamente");
      } catch (err) {
        setError("Error al eliminar la propiedad");
        alert("Error al eliminar la propiedad");
        console.error(err);
      }
    }
  };

  const handleEdit = (property) => {
    setEditingProperty(property);
    setShowForm(true);
  };

  const handleCloseForm = () => {
    setShowForm(false);
    setEditingProperty(null);
  };

  const handleFormSubmit = (formData) => {
    if (editingProperty) {
      handleUpdate(formData);
    } else {
      handleCreate(formData);
    }
  };

  return (
    <div className="prop-page">
      <div className="prop-header">
        <h1>Gestión de Propiedades</h1>
        <button 
          onClick={() => setShowForm(true)} 
          className="prop-btn-new"
        >
          Nueva Propiedad
        </button>
      </div>

      {error && <div className="prop-error">{error}</div>}

      {loading ? (
        <div className="prop-loading">
          <div className="prop-spinner"></div>
          <p>Cargando propiedades...</p>
        </div>
      ) : properties.length === 0 ? (
        <div className="prop-empty">
          <p>No hay propiedades registradas</p>
          <button 
            onClick={() => setShowForm(true)} 
            className="prop-btn-first"
          >
            Crear primera propiedad
          </button>
        </div>
      ) : (
        <div className="prop-grid">
          {properties.map((property) => (
            <PropertyCard
              key={property.id}
              property={property}
              onEdit={handleEdit}
              onDelete={handleDelete}
            />
          ))}
        </div>
      )}

      {showForm && (
        <PropertyForm
          property={editingProperty}
          onSubmit={handleFormSubmit}
          onCancel={handleCloseForm}
        />
      )}
    </div>
  );
};

export default Properties;
