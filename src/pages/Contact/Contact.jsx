import React, { useState } from "react";
import "./Contact.css";
import Placeholderimg from "../../assets/dev.jpg";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, message } = formData;

    const phoneNumber = "917698972036"; // 🔁 Replace with your WhatsApp number
    const whatsappMessage = `Hello, I am ${name}%0AMy email: ${email}%0AMessage: ${message}`;

    const whatsappURL = `https://wa.me/${phoneNumber}?text=${whatsappMessage}`;

    window.open(whatsappURL, "_blank");
  };

  return (
    <section className="sec-gap">
      <div className="contact-container animate__animated animate__fadeIn">
        <div className="contact-image">
          <img src={Placeholderimg} alt="Contact" className="contact-img" />
        </div>

        <div className="contact-form-container">
          <form className="contact-form" onSubmit={handleSubmit}>
            <label>Full Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              required
              onChange={handleChange}
            />

            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              required
              onChange={handleChange}
            />

            <label>Message</label>
            <textarea
              name="message"
              placeholder="Type your message"
              rows="3"
              onChange={handleChange}
              required
            ></textarea>

            <button type="submit" className="btn">Contact Us</button>
          </form>

          <div className="contact-info">
            <p>
              <strong>Contact</strong>
              <br />
              <a href="mailto:devkoshti16@gmail.com">devkoshti16@gmail.com</a>
            </p>
            <p>
              <strong>Address</strong>
              <br />
              <address>Plot no 123, New Delhi, India</address>
            </p>
          </div>

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
