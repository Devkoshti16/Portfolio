import React from "react";
import "./Contact.css";
import Placeholderimg from "../../assets/dev.jpg";

function Contact() {
  return (
    <section className="contact-section">
      <div className="contact-container">

        {/* Left Side Image */}
        <div className="contact-left">
          <img src={Placeholderimg} alt="Dev Koshti" />
        </div>

        {/* Right Side Content */}
        <div className="contact-right">
          <h2>Let’s Collaborate 🤝</h2>
          <p>
            Have an idea, project, or opportunity?  
            I’d love to bring it to life with you.
          </p>

          <div className="contact-actions">
            <a href="tel:917698972036" className="contact-btn">
              <i className="fab fa-whatsapp"></i> +91 7698972036
            </a>

            <a href="mailto:devkoshti16@gmail.com" className="contact-btn">
              <i className="fas fa-envelope"></i> devkoshti16@gmail.com
            </a>

            <a
              href="https://maps.google.com?q=Plot+No.+91,+Shanti+Nagar,+Udhna,+Surat-394210"
              className="contact-btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fas fa-map-marker-alt"></i> Find Me
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Contact;
