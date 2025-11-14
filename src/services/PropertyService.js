const API_URL = "https://inmobiliaria-app-huu-598dd1cade22.herokuapp.com/api/Property";

export const createProperty = async (data) => {
  const res = await fetch(`${API_URL}/create`, {
    method: "POST",
    headers: { 
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  });

  if (!res.ok) {
    throw new Error("Error al crear la propiedad");
  }

  return res.json();
};


export const getPropertyById = async (id) => {
  const res = await fetch(`${API_URL}/getById/${id}`);
  return res.json();
};



export const updateProperty = async (id, data) => {
  const res = await fetch(`${API_URL}/update/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  });
  return res.json();
};

export const deleteProperty = async (id) => {
  const res = await fetch(`${API_URL}/delete/${id}`, { method: "DELETE" });
  return res.json();
};
