import React from "react";
import "./Contact.css";
import Title from "../../components/Title/Title"; // Assuming Title component exists
import "@fortawesome/fontawesome-free/css/all.min.css";

function Contact() {

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here (e.g., Formspree, Netlify forms)
    alert("Form submitted! (This is a placeholder)");
    e.target.reset();
  };

  return (
    <section className="contact section" id="contact">
      <div className="container">
        <Title title="Get in Touch" subtitle="Let's Collaborate" />

        <div className="contact-wrapper">
          {/* --- Left Side: Info --- */}
          <div className="contact-left">
            <h3>Let's build something great together.</h3>
            <p>
              I'm always open to discussing new projects, creative ideas, or
              opportunities to be part of your vision.
            </p>

            <div className="contact-info-group">
              {/* Email Card */}
              <a href="mailto:devkoshti16@gmail.com" className="contact-info-card">
                <i className="fas fa-envelope"></i>
                <div className="info-text">
                  <h4>Email Me</h4>
                  <span>devkoshti16@gmail.com</span>
                </div>
              </a>

              {/* Phone Card */}
              <a href="tel:+917698972036" className="contact-info-card">
                <i className="fas fa-phone"></i>
                <div className="info-text">
                  <h4>Call Me</h4>
                  <span>+91 76989 72036</span>
                </div>
              </a>

              {/* Location Card (Not clickable) */}
              <div className="contact-info-card">
                <i className="fas fa-map-marker-alt"></i>
                <div className="info-text">
                  <h4>Location</h4>
                  <span>Surat, Gujarat, India</span>
                </div>
              </div>
            </div>
          </div>

          {/* --- Right Side: Form --- */}
          <div className="contact-right">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group-split">
                <div className="form-group">
                  <input type="text" name="name" placeholder="Your Name" required />
                </div>
                <div className="form-group">
                  <input type="email" name="email" placeholder="Your Email" required />
                </div>
              </div>

              <div className="form-group">
                <input type="text" name="subject" placeholder="Subject" required />
              </div>

              <div className="form-group">
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows="6"
                  required
                ></textarea>
              </div>

              <button type="submit" className="submit-btn">
                Send Message <i className="fas fa-paper-plane"></i>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;