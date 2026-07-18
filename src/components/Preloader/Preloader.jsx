import React, { useEffect, useState } from "react";
import "./Preloader.css";

const Preloader = () => {
  const [fadeOut, setFadeOut] = useState(false);
  
  let Name = "Dev Koshti";

  useEffect(() => {
    const timer = setTimeout(() => setFadeOut(true), 1800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div id="preloader" className={fadeOut ? "fade-out" : ""}>
      <div className="loader">
        <div className="orbit">
          <div className="planet"></div>
        </div>
        <h2 className="loader-text">{Name}</h2>
      </div>
    </div>
  );
};

export default Preloader;
