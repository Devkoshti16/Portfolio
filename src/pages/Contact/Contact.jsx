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
            <p className="contact-desc">Feel free to reach out for collaborations or just a friendly hello 👋</p>

            <div className="contact-item">
              <strong>WhatsApp</strong>
              <br />
              <a
                href="https://wa.me/917698972036"
                target="_blank"
                rel="noopener noreferrer"
              >
                7698972036
              </a>
            </div>

            <div className="contact-item">
              <strong>Email</strong>
              <br />
              <a href="mailto:devkoshti16@gmail.com">devkoshti16@gmail.com</a>
            </div>

            <div className="contact-item">
              <strong>Address</strong>
              <br />
              <span>Plot No. 91, Shanti Nagar, Udhna, Surat-394210</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;