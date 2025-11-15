// src/services/PropertyService.js
const API_URL = "https://inmobiliaria-app-hu4-598dd1cade22.herokuapp.com/api/Property";

export async function getAllProperties() {
  const res = await fetch(`${API_URL}/getAll`);
  if (!res.ok) throw new Error("Error fetching properties");
  return res.json();
}

export async function getPropertyById(id) {
  const res = await fetch(`${API_URL}/getById/${id}`);
  if (!res.ok) throw new Error("Error fetching property");
  return res.json();
}

export async function createProperty(data) {
  const res = await fetch(`${API_URL}/create`, {
    method: "POST",
    body: data,  // suponiendo que data es FormData con imagen y demás
  });
  if (!res.ok) throw new Error("Error creating property");
  return res.json();
}

export async function updateProperty(id, data) {
  const res = await fetch(`${API_URL}/update/${id}`, {
    method: "PUT",
    body: data,  // FormData también
  });
  if (!res.ok) throw new Error("Error updating property");
  return res.json();
}

export async function deleteProperty(id) {
  const res = await fetch(`${API_URL}/delete/${id}`, {
    method: "DELETE",
  });
  if (!res.ok) throw new Error("Error deleting property");
  return res.json();
}
