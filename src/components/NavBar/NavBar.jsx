import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-content">

        <Link to="/" className="navbar-logo">
          
        </Link>

        <div className="navbar-right">
          <Link to="/login" className="navbar-btn">
            LOGIN
          </Link>

          <Link to="/register" className="navbar-btn">
            REGISTER
          </Link>
        </div>

      </div>
    </nav>
  );
}
