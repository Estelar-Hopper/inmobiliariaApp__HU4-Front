import { Link } from "react-router-dom";
import "./Hero-section.css"; 

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
      </div>
    </section>
  );
}
