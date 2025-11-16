// src/pages/Properties/Properties.jsx

import { useState, useEffect } from 'react';
import PropertyCard from '../../components/PropertyCard';
import PropertyForm from '../../components/PropertyForm';
import { 
  getAllProperties, 
  createProperty, 
  updateProperty, 
  deleteProperty 
} from '../../services/PropertyService';
import './Properties.css';

const Properties = () => {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editingProperty, setEditingProperty] = useState(null);
  const [error, setError] = useState('');

  // Cargar propiedades al montar el componente
  useEffect(() => {
    loadProperties();
  }, []);

  // Función para cargar todas las propiedades
  const loadProperties = async () => {
    try {
      setLoading(true);
      setError('');
      const data = await getAllProperties();
      setProperties(data);
    } catch (err) {
      setError('Error al cargar las propiedades');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  // Manejar creación de propiedad
  const handleCreate = async (formData) => {
    try {
      setError('');
      await createProperty(formData);
      setShowForm(false);
      loadProperties(); // Recargar la lista
      alert(' Propiedad creada exitosamente');
    } catch (err) {
      setError('Error al crear la propiedad');
      alert(' Error al crear la propiedad');
      console.error(err);
    }
  };

  // Manejar actualización de propiedad
  const handleUpdate = async (formData) => {
    try {
      setError('');
      await updateProperty(editingProperty.id, formData);
      setShowForm(false);
      setEditingProperty(null);
      loadProperties(); // Recargar la lista
      alert(' Propiedad actualizada exitosamente');
    } catch (err) {
      setError('Error al actualizar la propiedad');
      alert(' Error al actualizar la propiedad');
      console.error(err);
    }
  };

  // Manejar eliminación de propiedad
  const handleDelete = async (id) => {
    if (window.confirm('¿Estás seguro de eliminar esta propiedad?')) {
      try {
        setError('');
        await deleteProperty(id);
        loadProperties(); // Recargar la lista
        alert(' Propiedad eliminada exitosamente');
      } catch (err) {
        setError('Error al eliminar la propiedad');
        alert(' Error al eliminar la propiedad');
        console.error(err);
      }
    }
  };

  // Abrir formulario para editar
  const handleEdit = (property) => {
    setEditingProperty(property);
    setShowForm(true);
  };

  // Cerrar formulario
  const handleCloseForm = () => {
    setShowForm(false);
    setEditingProperty(null);
  };

  // Manejar envío del formulario (crear o actualizar)
  const handleFormSubmit = (formData) => {
    if (editingProperty) {
      handleUpdate(formData);
    } else {
      handleCreate(formData);
    }
  };

  return (
    <div className="properties-page">
      <div className="properties-header">
        <h1> Gestión de Propiedades</h1>
        <button 
          onClick={() => setShowForm(true)} 
          className="btn-new-property"
        >
           Nueva Propiedad
        </button>
      </div>

      {error && (
        <div className="error-message">
           {error}
        </div>
      )}

      {loading ? (
        <div className="loading">
          <div className="spinner"></div>
          <p>Cargando propiedades...</p>
        </div>
      ) : properties.length === 0 ? (
        <div className="empty-state">
          <p>📭 No hay propiedades registradas</p>
          <button onClick={() => setShowForm(true)} className="btn-create-first">
            Crear primera propiedad
          </button>
        </div>
      ) : (
        <div className="properties-grid">
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
