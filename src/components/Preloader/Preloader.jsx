import React, { useEffect, useState } from "react";
import "./Preloader.css";

const Preloader = () => {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setFadeOut(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div id="preloader" className={fadeOut ? "fade-out" : ""}>
      <div className="laptop">

        <div className="screen">

          <div className="code">
            <span className="line html">&lt;html&gt;</span>
            <span className="line body">&nbsp;&nbsp;&lt;body&gt;</span>
            <span className="line dev">
              &nbsp;&nbsp;&nbsp;&nbsp;&lt;h1&gt;Dev Koshti&lt;/h1&gt;
            </span>
            <span className="line close">
              &nbsp;&nbsp;&lt;/body&gt;
            </span>
            <span className="line close">&lt;/html&gt;</span>

            <span className="cursor"></span>

          </div>

        </div>

        <div className="base"></div>

      </div>
    </div>
  );
};

export default Preloader;