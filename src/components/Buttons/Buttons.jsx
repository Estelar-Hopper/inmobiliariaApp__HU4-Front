import { Link } from "react-router-dom";
import "./Buttons.css";

// componente para usar botones personalizados en la app se pude cambiar su contenido 
export default function Buttons() {
  return (
    <div className="buttonGroup">
      <Link to="/login" className="btnSecondary">
        LOGIN
      </Link>

      <Link to="/register" className="btnSecondary">
        REGISTER
      </Link>
    </div>
  );
}
