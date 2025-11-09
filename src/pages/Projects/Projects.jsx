import React from "react";
import "./Projects.css";
import Title from "../../components/Title/Title";
import "@fortawesome/fontawesome-free/css/all.min.css";

// Import your project images
import project1 from "../../assets/project1.jpg";
import project2 from "../../assets/project2.jpg";
import project3 from "../../assets/project3.jpg";
import project4 from "../../assets/project4.jpg";
import project5 from "../../assets/project5.jpg";
import project6 from "../../assets/project6.jpg";
import project7 from "../../assets/project7.jpg";
import project8 from "../../assets/project8.jpg";

function Projects() {
  const projectList = [
    { id: 1, name: "Topworkvibes.com", description: "Business event and team planner.", image: project1, link: "https://topworkvibes.com/", tags: ["WordPress", "Elementor", "Events"] },
    { id: 2, name: "Topmeetplan.com", description: "A first-class meeting scheduler.", image: project2, link: "https://topmeetplan.com/", tags: ["SaaS", "React", "Node.js"] },
    { id: 3, name: "Smoothick.com", description: "Find the latest electronics from top brands.", image: project3, link: "https://smoothick.com", tags: ["E-commerce", "Shopify", "Liquid"] },
    { id: 4, name: "Myproseminar.com", description: "Build communication and leadership skills.", image: project4, link: "https://myproseminar.com", tags: ["LMS", "WordPress", "LearnDash"] },
    { id: 5, name: "Wordpresbuild.com", description: "Automate your scheduling process.", image: project5, link: "https://wordpresbuild.com", tags: ["SaaS", "WordPress", "Bookings"] },
    { id: 6, name: "Lanisana.com", description: "Best quality electrical products online.", image: project6, link: "https://lanisana.com", tags: ["E-commerce", "WooCommerce"] },
    { id: 7, name: "Blazinsports.com", description: "Top-quality sports products for players.", image: project7, link: "https://blazinsports.com", tags: ["E-commerce", "Shopify", "Sports"] },
    { id: 8, name: "Docsshipping.com", description: "Reliable document shipping.", image: project8, link: "https://docsshipping.com", tags: ["Logistics", "WordPress", "Forms"] },
  ];

  return (
    <section className="projects section">
      <div className="container">
        <Title title="Projects" subtitle="What I've Built" />

        <div className="projects-grid">
          {projectList.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                <img src={project.image} alt={project.name} />
              </div>

              <div className="project-content">
                <h3>{project.name}</h3>

                <div className="project-tags">
                  {project.tags.map((tag, index) => (
                    <span key={index} className="tag">{tag}</span>
                  ))}
                </div>

                <p>{project.description}</p>

                <div className="project-links">
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="link-btn primary-btn">
                    <i className="fas fa-eye"></i> Live Demo
                  </a>
                  {/* GitHub Button Removed */}
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* "View All" Button Container Removed */}
      </div>
    </section>
  );
}

export default Projects;