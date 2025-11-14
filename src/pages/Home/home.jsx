import { Link } from "react-router-dom";
import Hero from "../../components/Home/Hero-section/HeroSection";
import "./home.css";

function Home() {
  return (
    <>
      <Hero />

      <div className="home-container">
        <h1 className="home-title">Welcome</h1>
        <h2 className="home-subtitle">Find your dream house</h2>

        <div className="home-button-group">
          <Link to="/login" className="home-btn-secondary">LOGIN</Link>
          <Link to="/register" className="home-btn-secondary">REGISTER</Link>
        </div>
      </div>
    </>
  );
}

export default Home;
