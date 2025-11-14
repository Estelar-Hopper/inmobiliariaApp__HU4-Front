import { Link } from "react-router-dom";
import "./Hero-section.css"; // CSS normal, no module

export default function Hero() {
  return (
    <section className="hero">
      <video
        className="video"
        src="/video/Video Casa en Venta Moderno Negro y Amarillo.mp4"
        autoPlay
        muted
        loop
        playsInline
      />

      <div className="content">
        <h1 className="title">Welcome</h1>
        <h2 className="subtitle">Find your dream house</h2>

        <div className="buttonGroup">
          <Link to="/login" className="btnSecondary">
            LOGIN
          </Link>

          <Link to="/register" className="btnSecondary">
            REGISTER
          </Link>
        </div>
      </div>
    </section>
  );
}
