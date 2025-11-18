import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/home.jsx";
import Register from "./pages/Register/register";
import Login from "./pages/Login/login";
import Properties from "./pages/properties/Properties"; 
import ViewProperties from "./pages/ViewProperties/ViewProperties.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/properties" element={<Properties />} /> 
        <Route path="/ViewProperties" element={<ViewProperties/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
