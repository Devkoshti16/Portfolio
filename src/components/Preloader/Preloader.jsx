import React, { useEffect, useState } from "react";
import "./Preloader.css";

const Preloader = () => {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setFadeOut(true), 1800); // Loader time
    return () => clearTimeout(timer);
  }, []);

  return (
    <div id="preloader" className={fadeOut ? "fade-out" : ""}>
      <div className="loader">
        <div className="orbit">
          <div className="planet"></div>
        </div>
        <h2 className="loader-text">Dev Koshti</h2>
        <p className="loader-sub">Crafting Digital Experiences</p>
      </div>
    </div>
  );
};

export default Preloader;
