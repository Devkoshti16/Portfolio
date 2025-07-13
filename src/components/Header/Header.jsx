import React, { useState } from "react";
import { NavLink } from "react-router-dom"; // Import NavLink
import "./Header.css";
import "../../App.css";
import logo from "../../assets/logo.png";
// import logo from "../../assets/logo.svg";
import cvFile from "../../assets/cv.pdf";
import { useEffect } from "react";

function Header() {
  useEffect(() => {
    const header = document.querySelector(".header");

    const handleScroll = () => {
      if (window.scrollY > 100) {
        header.classList.add("fixed-menu");
      } else {
        header.classList.remove("fixed-menu");
      }
      if (window.scrollY > 150) {
        header.classList.add("fixed-top");
      } else {
        header.classList.remove("fixed-top");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [menuOpen, setMenuOpen] = useState(false);

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = cvFile;
    link.download = "cv.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <header className="header">
      {/* Logo */}
      <NavLink to="/" className="logo">
        <img src={logo} alt="logo" />
      </NavLink>

      {/* Navigation Links */}
      <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
        <NavLink to="/" className="nav-item" onClick={() => setMenuOpen(false)}>
          Home
        </NavLink>
        <NavLink
          to="/Skills"
          className="nav-item"
          onClick={() => setMenuOpen(false)}
        >
          Skills
        </NavLink>
        <NavLink
          to="/project"
          className="nav-item"
          onClick={() => setMenuOpen(false)}
        >
          Projects
        </NavLink>
        <NavLink
          to="/contact"
          className="nav-item"
          onClick={() => setMenuOpen(false)}
        >
          {" "}
          Contact
        </NavLink>
      </nav>

      <div className="btn-flex">
        <a onClick={handleDownload} className="button">
          <div className="button-wrapper">
            <div className="text">Download CV</div>
            <span className="icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                role="img"
                width="2em"
                height="2em"
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 24 24"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 15V3m0 12l-4-4m4 4l4-4M2 17l.621 2.485A2 2 0 0 0 4.561 21h14.878a2 2 0 0 0 1.94-1.515L22 17"
                ></path>
              </svg>
            </span>
          </div>
        </a>

        {/* Mobile Menu Button */}
        <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
          <div className={`bar ${menuOpen ? "open" : ""}`}></div>
          <div className={`bar ${menuOpen ? "open" : ""}`}></div>
          <div className={`bar ${menuOpen ? "open" : ""}`}></div>
        </div>
      </div>
    </header>
  );
}

export default Header;
