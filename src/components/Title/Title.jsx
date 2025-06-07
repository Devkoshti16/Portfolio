import React from "react";
import { useLocation } from "react-router-dom";
import "../Title/Title.css";

function Title() {
  const location = useLocation();

  // Get the current path like "/contact"
  const path = location.pathname;

  // Convert it to a title (remove slash and capitalize)
  const formattedTitle =
    path === "/"
      ? "Home"
      : path
          .replace("/", "")
          .replace(/-/g, " ")
          .replace(/\b\w/g, (char) => char.toUpperCase());

  return (
    <div>
      <h1 className="page-title animate__animated animate__fadeInUp">
        {formattedTitle}
      </h1>
    </div>
  );
}

export default Title;
