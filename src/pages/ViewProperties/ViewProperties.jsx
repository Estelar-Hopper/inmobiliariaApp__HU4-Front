import { useEffect, useState } from "react";
import { getAllProperties } from "../../services/PropertyService";
import "./ViewProperties.css";

export default function ViewProperties() {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    loadProperties();
  }, []);

  async function loadProperties() {
    try {
      const data = await getAllProperties();
      console.log("PROPIEDADES:", data);
      setProperties(data);
    } catch (error) {
      console.error("Error cargando propiedades:", error);
    }
  }

 return (
  <div className="vp-page">
    <h1 className="vp-title-page">Available Properties</h1>

    <div className="vp-container">
      {properties.map((p) => (
        <div key={p.id} className="vp-card">
          <img
            src={p.urlClaudinary}
            alt={p.title}
            className="vp-image"
          />

          <div className="vp-info">
            <h2 className="vp-title">{p.title}</h2>
            <p className="vp-address">{p.address}</p>
            <p className="vp-description">{p.description}</p>
            <p className="vp-price">${p.price.toLocaleString()}</p>

            <button className="vp-contact-btn">Contact</button>
          </div>
        </div>
      ))}
    </div>
  </div>
);

}
