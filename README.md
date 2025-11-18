# Real Estate App – Frontend (React + Vite)

This project is the **frontend** for the deployed backend API of the Real Estate Application:  
 **Backend API:** https://inmobiliaria-app-hu4-598dd1cade22.herokuapp.com/index.html  
The frontend consumes the API (currently the *Property* endpoints) and provides a user interface for viewing and managing real estate properties.

The application includes a **Home page**, a **Property listing view**, and a full **CRUD system for properties** connected to the backend.  
It is built with **React + Vite** and deployed on Railway.

---

##  Live Demo

Frontend deployed on Railway:  
 **https://inmobiliariaapphu4-front-production.up.railway.app/**

---

##  Project Repository

You can clone the project from GitHub:  https://github.com/Estelar-Hopper/inmobiliariaApp__HU4-Front.git


---

##  Project Description

The Real Estate App Frontend allows users to:

- View all available properties fetched from the backend.
- Create new properties (including image upload via Cloudinary).
- Edit existing properties.
- Delete properties.
- Navigate between Home and Property Views using React Router DOM.

This frontend is connected to a backend deployed on Heroku and currently consumes only the **Property** endpoints.

---

##  Technologies Used

- **React** (with Vite)
- **React Router DOM**
- **Fetch API**
- **Custom CSS**
- **Cloudinary** (via backend)
- **Railway** for deployment

---

##  Backend API

The backend is already deployed and provides RESTful endpoints for property management:

 **API Docs / Swagger UI:**  
https://inmobiliaria-app-hu4-598dd1cade22.herokuapp.com/index.html

The frontend currently consumes:

- `GET /properties`
- `POST /properties`
- `PUT /properties/{id}`
- `DELETE /properties/{id}`

---
##  Installation & Setup

If you clone the project locally, follow these steps:

### 1 Clone the repository

```bash
git clone https://github.com/Estelar-Hopper/inmobiliariaApp__HU4-Front.git
```
### 2 Install dependencies 

```bash
npm install
```
### 3 Run the develoment server 

```bash
npm run dev
```

### The app will start at: 
http://localhost:5173





