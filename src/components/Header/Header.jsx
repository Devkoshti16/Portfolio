import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";
// You should have defined your theme variables in App.css or similar file
// The font family should be defined there.
import "../../App.css"; 
import logo from "../../assets/logo.png";
// import logo from "../../assets/logo.svg";

function Header() {
  useEffect(() => {
    const header = document.querySelector(".header");

    const handleScroll = () => {
      if (window.scrollY > 100) {
        header.classList.add("sticky");
      } else {
        header.classList.remove("sticky");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [menuOpen, setMenuOpen] = useState(false);

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
          Contact
        </NavLink>
      </nav>

      <div className="btn-flex">
        {/* --- Updated CTA Button with Class for Gradient Shine --- */}
        <NavLink to="/contact" className="contact-btn-header primary-btn-header">
          Contact Me
        </NavLink>

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