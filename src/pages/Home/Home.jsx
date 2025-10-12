import React from "react";
import "./Home.css";
import heroImage from "../../assets/Hero.png"; // Ensure correct path
import cvFile from "../../assets/cv.pdf";

function Home() {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = cvFile;
    link.download = "cv.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  
  return (
    // Hero Section Start Here //
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
          <a onClick={handleDownload} className="button">
            <div className="button-wrapper">
              <div className="text">Download CV</div>
              <span className="icon">
                <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img"
                  width="2em" height="2em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                  <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                    strokeWidth="2" d="M12 15V3m0 12l-4-4m4 4l4-4M2 17l.621 2.485A2 2 0 0 0 4.561 21h14.878a2 2 0 0 0 1.94-1.515L22 17">
                  </path>
                </svg>
              </span>
            </div>
          </a>
        </div>

        {/* <div className="hero-image">
          <img src={heroImage} alt="John Deo" />
        </div> */}

        <div className="reviews">
          <p>12k Reviews On</p>
          <div className="stars">⭐⭐⭐⭐⭐</div>
          <p className="rating">4.9</p>
        </div>
      </section>
    </>
  // Hero Section End Here //
  );
}

export default Home;
