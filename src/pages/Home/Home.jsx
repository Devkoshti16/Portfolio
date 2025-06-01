import React from "react";
import "./Home.css";
import heroImage from "../../assets/Hero.png"; // Ensure correct path

function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-content">
          <h1>
            Hy! I Am <br />
            <span className="highlight">Dev Koshti.</span>
          </h1>
          <p className="sub-text">
            I design beautifully simple things, <br /> and I love what I do.
          </p>
          <div className="experience">
            <h2>2</h2>
            <p>YEARS EXPERIENCE</p>
          </div>
          <div className="social-icons">
            <i className="fab fa-facebook"></i>
            <i className="fab fa-twitter"></i>
            <i className="fab fa-linkedin"></i>
          </div>
        </div>

        <div className="hero-image">
          <img src={heroImage} alt="John Deo" /> 
        </div>
        
        <div className="reviews">
          <p>12k Reviews On</p>
          <div className="stars">⭐⭐⭐⭐⭐</div>
          <p className="rating">4.9</p>
        </div>
      </section>
    </>
  );
}

export default Home;
