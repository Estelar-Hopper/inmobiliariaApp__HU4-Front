const API_URL = "https://inmobiliaria-app-hu4-598dd1cade22.herokuapp.com/api/Property";

// Obtener todas las propiedades
export async function getAllProperties() {
  const res = await fetch(`${API_URL}/getAll`);
  if (!res.ok) throw new Error("Error fetching properties");
  return await res.json();
}

// Obtener propiedad por id
export async function getPropertyById(id) {
  const res = await fetch(`${API_URL}/getById/${id}`);
  if (!res.ok) throw new Error("Error fetching property");
  return await res.json();
}

// Crear propiedad
export async function createProperty(data) {
  const res = await fetch(`${API_URL}/create`, {
    method: "POST",
    body: data,
  });

  if (!res.ok) throw new Error("Error creating property");

  // ✔️ Por si el backend no retorna JSON
  const text = await res.text();
  return text ? JSON.parse(text) : null;
}

// Actualizar propiedad
export async function updateProperty(id, data) {
  const res = await fetch(`${API_URL}/update/${id}`, {
    method: "PUT",
    body: data,
  });

  if (!res.ok) throw new Error("Error updating property");

  const text = await res.text();
  return text ? JSON.parse(text) : null;
}

// Eliminar propiedad
export async function deleteProperty(id) {
  const res = await fetch(`${API_URL}/delete/${id}`, {
    method: "DELETE",
  });

  if (!res.ok) throw new Error("Error deleting property");

  // ✔️ DELETE normalmente devuelve 204 No Content
  return null;
}
