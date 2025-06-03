import React from "react";
import "./Projects.css";
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
    { id: 1, name: "Project One", description: "Description of project one.", image: project1, link: "https://example.com/project1" },
    { id: 2, name: "Project Two", description: "Description of project two.", image: project2, link: "https://example.com/project2" },
    { id: 3, name: "Project Three", description: "Description of project three.", image: project3, link: "https://example.com/project3" },
    { id: 4, name: "Project Four", description: "Description of project four.", image: project4, link: "https://example.com/project4" },
    { id: 5, name: "Project Five", description: "Description of project five.", image: project5, link: "https://example.com/project5" },
    { id: 6, name: "Project Six", description: "Description of project six.", image: project6, link: "https://example.com/project6" },
    { id: 7, name: "Project Seven", description: "Description of project seven.", image: project7, link: "https://example.com/project7" },
    { id: 8, name: "Project Eight", description: "Description of project eight.", image: project8, link: "https://example.com/project8" },
  ];

  return (
    <section className="sec-gap">
      <div className="projects-container">
        <h1 className="page-title animate__animated animate__fadeInUp">Our Projects</h1>
        <div className="projects-grid">
          {projectList.map((project) => (
            <a key={project.id} href={project.link} target="_blank" className="project-card animate__animated animate__fadeInUp">
              <img src={project.image} alt={project.name} className="project-image" />
              <h2>{project.name}</h2>
              <p>{project.description}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
