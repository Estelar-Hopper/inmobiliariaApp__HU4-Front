// src/components/Home/Hero-section/HeroSection.jsx
import { Link } from "react-router-dom";
import "./Hero-section.css";
// NOTA: TokenManager ya no se necesita si solo quieres el botón de Login

export default function Hero() {
    return (
        <section className="hero">
            <video
                className="video"
                src="/video/video.mp4"
                autoPlay
                muted
                loop
                playsInline
            />

            <div className="content">
                <h1 className="title">Welcome to Our Real Estate Platform</h1>
                <h2 className="subtitle">Find your dream home</h2>

                {/* 📦 Nuevo Contenedor para Agrupar Botones */}
                <div className="buttonGroup">

                    {/* 🏠 Botón Existente */}
                    <Link to="/ViewProperties" className="hero-btn">
                        VIEW PROPERTIES
                    </Link>

                    {/* 🔑 Nuevo Botón de Login */}
                    <Link to="/users" className="hero-btn">
                        MANAGE USERS
                    </Link>

                </div>
                {/* /buttonGroup */}
            </div>
        </section>
    );
}