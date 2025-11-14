import { Link } from "react-router-dom";
import "./home.css";

function Home() {
  return (
    <div className="home-container">
      <h1 className="title">Welcome</h1>
      <h2 className="subtitle">Find your dream house</h2>

      <div className="button-group">
        <Link to="/login">
          <button className="btn-secondary">LOGIN</button>
        </Link>

        <Link to="/register">
          <button className="btn-secondary">REGISTER</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
