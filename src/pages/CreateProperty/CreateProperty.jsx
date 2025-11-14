import { useState } from "react";
import { createProperty } from "../../services/PropertyService";

function CreateProperty() {
  const [formData, setFormData] = useState({
    title: "",
    address: "",
    description: "",
    price: 0,
    available: true,
    location: "",
    urlClaudinary: ""
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createProperty(formData);
      setMessage("Propiedad creada correctamente ");
    } catch (error) {
      setMessage("Error al crear la propiedad ");
      console.error(error);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Create Property</h1>

      {message && <p>{message}</p>}

      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "10px", maxWidth: "400px" }}>

        <input
          name="title"
          type="text"
          placeholder="Título"
          value={formData.title}
          onChange={handleChange}
        />

        <input
          name="address"
          type="text"
          placeholder="Dirección"
          value={formData.address}
          onChange={handleChange}
        />

        <textarea
          name="description"
          placeholder="Descripción"
          value={formData.description}
          onChange={handleChange}
        />

        <input
          name="price"
          type="number"
          placeholder="Precio"
          value={formData.price}
          onChange={handleChange}
        />

        <input
          name="location"
          type="text"
          placeholder="Ubicación"
          value={formData.location}
          onChange={handleChange}
        />

        <input
          name="urlClaudinary"
          type="text"
          placeholder="URL Imagen (Cloudinary)"
          value={formData.urlClaudinary}
          onChange={handleChange}
        />

        <label>
          Disponible
          <input
            name="available"
            type="checkbox"
            checked={formData.available}
            onChange={handleChange}
          />
        </label>

        <button type="submit">Guardar</button>
      </form>
    </div>
  );
}

export default CreateProperty;
