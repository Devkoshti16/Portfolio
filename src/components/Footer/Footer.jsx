import React from "react";
import { NavLink } from "react-router-dom";
import { FaHome, FaCode, FaBriefcase, FaEnvelope } from "react-icons/fa";
import "./Footer.css";

function Footer() {
  return (
    <div className="mobile-footer">
      <NavLink to="/" className="footer-item">
        <FaHome />
        <span>Home</span>
      </NavLink>

      <NavLink to="/Skills" className="footer-item">
        <FaCode />
        <span>Skills</span>
      </NavLink>

      <NavLink to="/project" className="footer-item">
        <FaBriefcase />
        <span>Projects</span>
      </NavLink>

      <NavLink to="/contact" className="footer-item">
        <FaEnvelope />
        <span>Contact</span>
      </NavLink>
    </div>
  );
}

export default Footer;
