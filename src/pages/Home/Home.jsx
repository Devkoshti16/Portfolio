import React from "react";
import "./Home.css";
import heroImage from "../../assets/dev.jpg";
import cvFile from "../../assets/cv.pdf";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { NavLink } from "react-router-dom";

function Home() {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = cvFile;
    link.download = "Dev-Koshti-CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="hero-section">
      <div className="hero-container">
        <div className="hero-text">
          <h3 className="intro">Hi 👋, I'm</h3>
          <h1 className="name">Dev Koshti</h1>

          <h2 className="role">
            I'm a
            <div className="rotating-text-wrapper">
              <div className="rotating-text-container">
                <span className="rotating-text-item" style={{ "--color1": "#00bcd4", "--color2": "#8e2de2" }}>
                  Web Designer
                </span>
                <span className="rotating-text-item" style={{ "--color1": "#ff6a00", "--color2": "#ee0979" }}>
                  Frontend Developer
                </span>
              </div>
            </div>
          </h2>

          <p className="hero-description">
            I craft modern, user-friendly, and visually engaging websites.
            Passionate about UI/UX, responsive design, and bringing ideas to
            life through clean code.
          </p>

          <div className="hero-buttons">
            <button className="download-btn" onClick={handleDownload}>
              <i className="fas fa-download"></i> Download CV
            </button>
            <NavLink to="/contact" className="contact-btn">
              <i className="fas fa-envelope"></i> Contact Me
            </NavLink>
          </div>

          <div className="social-icons">
            <a href="https://github.com/Devkoshti16" target="_blank" rel="noreferrer">
              <i className="fab fa-github"></i>
            </a>
            <a href="www.linkedin.com/in/dev-koshti" target="_blank" rel="noreferrer">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://www.instagram.com/devkoshti_" target="_blank" rel="noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="mailto:devkoshti16@gamil.com">
              <i class="fas fa-envelope"></i>
            </a>
          </div>
        </div>

        <div className="hero-img">
          <img src={heroImage} alt="Dev Koshti" />
        </div>
      </div>
    </section>
  );
}

export default Home;
