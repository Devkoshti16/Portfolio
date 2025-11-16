import React, { useState } from "react";
import "./Contact.css";
import Title from "../../components/Title/Title";
import "@fortawesome/fontawesome-free/css/all.min.css";

const WHATSAPP_NUMBER = "917698972036";

function Contact() {
  const [submissionStatus, setSubmissionStatus] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const subject = form.subject.value.trim();
    const message = form.message.value.trim();

    const whatsappMessage =
      `*New Inquiry*\n` +
      `*Name:* ${name}\n` +
      `*Email:* ${email}\n` +
      `*Subject:* ${subject}\n` +
      `*Message:*\n${message}\n\n` +
      `(Sent from your portfolio contact form.)`;

    const encoded = encodeURIComponent(whatsappMessage);
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");

    setSubmissionStatus("success");
    form.reset();

    setTimeout(() => setSubmissionStatus(null), 4000);
  };

  return (
    <section className="contact section" id="contact">
      <div className="container">
        <Title title="Get in Touch" subtitle="Let's Collaborate" />

        <div className="contact-wrapper">
          <div className="contact-left">
            <h3>Let's build something great together.</h3>
            <p>
              I'm always open to discussing new projects, creative ideas, or
              opportunities to be part of your vision.
            </p>

            <div className="contact-info-group">
              <a
                href="mailto:devkoshti16@gmail.com"
                className="contact-info-card"
              >
                <i className="fas fa-envelope"></i>
                <div className="info-text">
                  <h4>Email Me</h4>
                  <span>devkoshti16@gmail.com</span>
                </div>
              </a>

              <a href="tel:+917698972036" className="contact-info-card">
                <i className="fas fa-phone"></i>
                <div className="info-text">
                  <h4>Call Me</h4>
                  <span>+91 76989 72036</span>
                </div>
              </a>

              <div className="contact-info-card">
                <i className="fas fa-map-marker-alt"></i>
                <div className="info-text">
                  <h4>Location</h4>
                  <span>Surat, Gujarat, India</span>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-right">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group-split">
                <div className="form-group">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  required
                />
              </div>

              <div className="form-group">
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows="6"
                  required
                ></textarea>
              </div>

              {submissionStatus === "success" && (
                <p className="success-message">
                  Message sent! Redirecting to WhatsApp…
                </p>
              )}

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
  