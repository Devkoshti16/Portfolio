import React from "react";
import "./Services.css";

const servicesData = [
  {
    id: 1,
    title: "Web Development",
    description:
      "We create responsive and modern websites tailored to your needs.",
    icon: "fa-brands fa-chrome",
  },
  {
    id: 2,
    title: "Web Design",
    description: "Student graphic design portfolio websites with modern UI/UX.",
    icon: "fa-brands fa-instagram",
  },
  {
    id: 3,
    title: "Creative Design",
    description: "Student portfolio website examples with artistic design.",
    icon: "fa-brands fa-reddit",
  },
  {
    id: 4,
    title: "Video Editing",
    description: "Editing portfolio videos for social media and marketing.",
    icon: "fa-solid fa-video",
  },
  {
    id: 1,
    title: "Web Development",
    description:
      "We create responsive and modern websites tailored to your needs.",
    icon: "fa-brands fa-chrome",
  },
  {
    id: 2,
    title: "Web Design",
    description: "Student graphic design portfolio websites with modern UI/UX.",
    icon: "fa-brands fa-instagram",
  },
  {
    id: 3,
    title: "Creative Design",
    description: "Student portfolio website examples with artistic design.",
    icon: "fa-brands fa-reddit",
  },
  {
    id: 4,
    title: "Video Editing",
    description: "Editing portfolio videos for social media and marketing.",
    icon: "fa-solid fa-video",
  },
  {
    id: 1,
    title: "Web Development",
    description:
      "We create responsive and modern websites tailored to your needs.",
    icon: "fa-brands fa-chrome",
  },
  {
    id: 2,
    title: "Web Design",
    description: "Student graphic design portfolio websites with modern UI/UX.",
    icon: "fa-brands fa-instagram",
  },
  {
    id: 3,
    title: "Creative Design",
    description: "Student portfolio website examples with artistic design.",
    icon: "fa-brands fa-reddit",
  },
  {
    id: 4,
    title: "Video Editing",
    description: "Editing portfolio videos for social media and marketing.",
    icon: "fa-solid fa-video",
  },
];

function Services() {
  return (
    <section className="sec-gap">
      <div className="services">
        <h1 className="page-title animate__animated animate__fadeInUp">
          My Service
        </h1>
        <div className="services-container animate__animated animate__fadeInUp">
          {servicesData.map((service) => (
            <div className="service-card" key={service.id}>
              <h2>{service.title}</h2>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
