import { useState } from "react";
import { createProperty } from "../services/PropertyService";

function CreateProperty() {
  const [form, setForm] = useState({
    title: "",
    address: "",
    description: "",
    price: 0,
    available: true,
    location: "",
    urlClaudinary: ""
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await createProperty(form);
      console.log("Propiedad creada:", response);
      alert("Propiedad creada con éxito!");
    } catch (err) {
      console.error(err);
      alert("Error al crear la propiedad");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="title" placeholder="Título" onChange={handleChange} />
      <input name="address" placeholder="Dirección" onChange={handleChange} />
      <input name="description" placeholder="Descripción" onChange={handleChange} />
      <input name="price" type="number" onChange={handleChange} />
      <input name="location" placeholder="Ubicación" onChange={handleChange} />
      <input name="urlClaudinary" placeholder="URL de imagen" onChange={handleChange} />

      <label>
        Disponible:
        <input name="available" type="checkbox" defaultChecked onChange={handleChange} />
      </label>

      <button type="submit">Crear propiedad</button>
    </form>
  );
}

export default CreateProperty;
