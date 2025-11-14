import Hero from "../../components/Home/Hero-section/HeroSection";
import "./home.css";

export default function Home() {
  return (
    <>
      <Hero />

    
      <section className="cards-section">
        <h2 className="section-title">Our Services</h2>

        <div className="cards-container">
          <div className="card">
            <img src="/Images/di.png" alt="Luxury Homes" />
            <h3>Luxury Homes</h3>
            <p>Find exclusive high-end properties in premium locations.</p>
          </div>

          <div className="card">
            <img src="/Images/entrevista.png" alt="Consulting" />
            <h3>Consulting</h3>
            <p>We guide you in every step of the buying or renting process.</p>
          </div>

          <div className="card">
            <img src="./Images/apreton-de-manos.png" alt="Secure Deals" />
            <h3>Secure Deals</h3>
            <p>All transactions are verified and protected for your peace of mind.</p>
          </div>
        </div>
      </section>


      <section className="info-section">
  <div className="info-content">
    <h2>Your perfect home is waiting</h2>
    <p>
      We help you discover the ideal home with personalized options, detailed 
      information, and direct contact with certified agents.
    </p>
  </div>
</section>


     
      <footer className="footer">
        <p>© {new Date().getFullYear()} DreamHouse. All rights reserved.</p>
      </footer>
    </>
  );
}
