import React, { useEffect } from "react";
import "./Home.css";
import heroBg from "../../assets/dev.jpg";
import cvFile from "../../assets/cv.pdf"; // ✅ CV file import

const Home = () => {
  // CV Download Function
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = cvFile;
    link.download = "Dev-Koshti-CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  useEffect(() => {
    // Fade in animation
    const elements = document.querySelectorAll(".fade-start");
    elements.forEach((el, i) => {
      setTimeout(() => el.classList.add("fade-end"), i * 150);
    });

    // Parallax Scroll
    const parallax = document.querySelector(".parallax-bg");
    const handleScroll = () => {
      let offset = window.scrollY * 0.3;
      parallax.style.transform = `translateY(${offset}px) scale(1.05)`;
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="home">
      <div className="parallax-bg">
        <img src={heroBg} alt="background" />
      </div>

      <div className="home-container fade-start">
        <h1>
          Hi, I'm <span>Dev Koshti</span>
        </h1>

        <p className="fade-start delay-1">
          A Creative Web Designer crafting smooth and modern digital
          experiences.
        </p>

        <div className="btn-group">
          {/* Only CV Download Button */}
          <button className="btn cv-btn fade-start delay-2" onClick={handleDownload}>
            <i className="fas fa-download"></i> Download CV
          </button>
        </div>
      </div>
    </section>
  );
};

export default Home;
