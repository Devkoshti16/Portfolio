import React from "react";
import "./Contact.css";
// import Placeholderimg from "../../assets/dummy.png";
import Placeholderimg from "../../assets/dev.jpg";

function Contact() {
  return (
    <section className="sec-gap">
      {/* <h1 className="page-title animate__animated animate__fadeInUp">contact us</h1> */}
        <h1 className="page-title animate__animated animate__fadeInUp">contact us</h1>
      <div className="contact-container animate__animated animate__fadeInUp">
        <div className="contact-image">
          <img src={Placeholderimg} alt="Contact" className="contact-img" />
        </div>
        <div className="contact-form-container">
          <form className="contact-form">
            <label>Full Name</label>
            <input type="text" placeholder="Enter your name" required />

            <label>Email</label>
            <input type="email" placeholder="Enter your email" required />

            <label>Message</label>
            <textarea placeholder="Type your message" rows="3"></textarea>

            <button type="submit" className="btn">Contact Us</button>
          </form>

          {/* Contact Details */}
          <div className="contact-info">
            <p>
              <strong>Contact</strong>
              <br />
              <a href="mailto:devkoshti16@gmail.com">devkoshti16@gmail.com</a>
            </p>
            <p>
              <strong>address</strong>
              <br />
              <address>plot no 123, New Delhi, India</address>
            </p>
          </div>

          {/* Social Media Icons */}
          <div className="social-icons">
            <i className="fab fa-facebook"></i>
            <i className="fab fa-instagram"></i>
            <i className="fab fa-twitter"></i>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
