
import { useState, useEffect } from 'react';
import './PropertyForm.css';

const PropertyForm = ({ property, onSubmit, onCancel }) => {
  const [formData, setFormData] = useState({
    title: '',
    address: '',
    description: '',
    price: '',
    available: true,
    location: '',
    image: null
  });

  // Si estamos editando, llenar el formulario con los datos existentes
  useEffect(() => {
    if (property) {
      setFormData({
        title: property.title || '',
        address: property.address || '',
        description: property.description || '',
        price: property.price || '',
        available: property.available ?? true,
        location: property.location || '',
        image: null // No cargamos la imagen previa
      });
    }
  }, [property]);

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    
    if (type === 'checkbox') {
      setFormData({ ...formData, [name]: checked });
    } else if (type === 'file') {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Crear FormData para enviar archivos
    const data = new FormData();
    data.append('Title', formData.title);
    data.append('Address', formData.address);
    data.append('Description', formData.description);
    data.append('Price', formData.price);
    data.append('Available', formData.available);
    data.append('Location', formData.location);
    
    if (formData.image) {
      data.append('image', formData.image);
    }
    
    onSubmit(data);
  };

  return (
    <div className="form-overlay">
      <div className="form-container">
        <h2>{property ? 'Editar Propiedad' : 'Nueva Propiedad'}</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="title">Título *</label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
              placeholder="Ej: Casa moderna en el centro"
            />
          </div>

          <div className="form-group">
            <label htmlFor="address">Dirección *</label>
            <input
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
              placeholder="Ej: Calle 123 #45-67"
            />
          </div>

          <div className="form-group">
            <label htmlFor="location">Ubicación *</label>
            <input
              type="text"
              id="location"
              name="location"
              value={formData.location}
              onChange={handleChange}
              required
              placeholder="Ej: Medellín, Colombia"
            />
          </div>

          <div className="form-group">
            <label htmlFor="description">Descripción *</label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
              rows="4"
              placeholder="Describe la propiedad..."
            />
          </div>

          <div className="form-group">
            <label htmlFor="price">Precio *</label>
            <input
              type="number"
              id="price"
              name="price"
              value={formData.price}
              onChange={handleChange}
              required
              min="0"
              step="0.01"
              placeholder="Ej: 150000"
            />
          </div>

          <div className="form-group checkbox-group">
            <label>
              <input
                type="checkbox"
                name="available"
                checked={formData.available}
                onChange={handleChange}
              />
              Disponible
            </label>
          </div>

          <div className="form-group">
            <label htmlFor="image">Imagen</label>
            <input
              type="file"
              id="image"
              name="image"
              onChange={handleChange}
              accept="image/*"
            />
          </div>

          <div className="form-actions">
            <button type="button" onClick={onCancel} className="btn-cancel">
              Cancelar
            </button>
            <button type="submit" className="btn-submit">
              {property ? 'Actualizar' : 'Crear'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PropertyForm;