
import './PropertyCard.css';

const PropertyCard = ({ property, onEdit, onDelete }) => {
  return (
    <div className="property-card">
      {property.image && (
        <img 
          src={property.image} 
          alt={property.title}
          className="property-image"
        />
      )}
      <div className="property-content">
        <h3>{property.title}</h3>
        <p className="property-address"> {property.address}</p>
        <p className="property-location"> {property.location}</p>
        <p className="property-description">{property.description}</p>
        <p className="property-price"> ${property.price?.toLocaleString()}</p>
        <p className="property-available">
          {property.available ? ' Disponible' : ' No disponible'}
        </p>
        <div className="property-actions">
          <button onClick={() => onEdit(property)} className="btn-edit">
             Editar
          </button>
          <button onClick={() => onDelete(property.id)} className="btn-delete">
             Eliminar
          </button>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;