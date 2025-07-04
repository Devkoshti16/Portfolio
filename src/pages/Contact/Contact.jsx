import React from "react";
import "./Contact.css";
import Placeholderimg from "../../assets/dev.jpg";

function Contact() {
  return (
    <section className="sec-gap contact-section">
      <div className="contact-container animate__animated animate__fadeIn">
        <div className="contact-image">
          <img src={Placeholderimg} alt="Contact" className="contact-img" />
        </div>

        <div className="contact-form-container animate__animated animate__fadeRight">
          <div className="contact-info">
            <h2>Contact Me</h2>
            <p className="contact-desc">
              Feel free to reach out for collaborations or just a friendly hello 👋
            </p>

            <div className="contact-item">
              <div className="contact-label">
                <i className="fab fa-whatsapp contact-icon"></i>
                <strong> WhatsApp</strong>
              </div>
              <a
                href="tel:917698972036"
              >
                7698972036
              </a>
            </div>

            <div className="contact-item">
              <div className="contact-label">
                <i className="fas fa-envelope contact-icon"></i>
                <strong> Email</strong>
              </div>
              <a href="mailto:devkoshti16@gmail.com">devkoshti16@gmail.com</a>
            </div>

            <div className="contact-item">
              <div className="contact-label">
                <i className="fas fa-map-marker-alt contact-icon"></i>
                <strong> Address</strong>
              </div>
              <span>Plot No. 91, Shanti Nagar, Udhna, Surat-394210</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
