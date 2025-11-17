import Hero from "../../components/Home/Hero-section/HeroSection";
import "./home.css";
import NavBar from "../../components/NavBar/NavBar";

// Vista principal de la app
export default function Home() {
  return (
    <>
      <Hero />
      <NavBar />

      {/* Sección de servicios */}
      <section className="home-cards-section">
        <h2 className="home-section-title">Our Services</h2>

        <div className="home-cards-container">
          <div className="home-card">
            <img src="/Images/di.png" alt="Luxury Homes" />
            <h3 className="home-card-title">Luxury Homes</h3>
            <p className="home-card-text">
              Find exclusive high-end properties in premium locations.
            </p>
          </div>

          <div className="home-card">
            <img src="/Images/entrevista.png" alt="Consulting" />
            <h3 className="home-card-title">Consulting</h3>
            <p className="home-card-text">
              We guide you in every step of the buying or renting process.
            </p>
          </div>

          <div className="home-card">
            <img src="/Images/apreton-de-manos.png" alt="Secure Deals" />
            <h3 className="home-card-title">Secure Deals</h3>
            <p className="home-card-text">
              All transactions are verified and protected for your peace of mind.
            </p>
          </div>
        </div>
      </section>

      {/* Sección informativa */}
      <section className="home-info-section">
        <div className="home-info-content">
          <h2 className="home-info-title">Your perfect home is waiting</h2>
          <p className="home-info-text">
            We help you discover the ideal home with personalized options, detailed 
            information, and direct contact with certified agents.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="home-footer">
        <p>© {new Date().getFullYear()} DreamHouse. All rights reserved.</p>
      </footer>
    </>
  );
}
