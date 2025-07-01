import React from "react";
import "./Projects.css";
import project1 from "../../assets/project1.jpg";
import project2 from "../../assets/project2.jpg";
import project3 from "../../assets/project3.jpg";
import project4 from "../../assets/project4.jpg";
import project5 from "../../assets/project5.jpg";
import project6 from "../../assets/project6.jpg";
// import project7 from "../../assets/project7.jpg";
// import project8 from "../../assets/project8.jpg";
import Title from "../../components/Title/Title";

function Projects() {
  const projectList = [
    { id: 1, name: "Topworkvibes.com", description: "Plan your business events, schedule important meetings and keep everyone on track with the smartest event planning software online.", image: project1, link: "https://topworkvibes.com/" },
    { id: 2, name: "Topmeetplan.com", description: "A first-class meeting scheduling platform for businesses of all sizes.", image: project2, link: "https://topmeetplan.com/" },
    { id: 3, name: "Smoothick.com", description: "Find all the electronics products you're looking for from top brands", image: project3, link: "https://smoothick.com" },
    { id: 4, name: "Myproseminar.com", description: "Build skills in team communication and other capabilities to increase your employees' wellbeing and health.", image: project4, link: "https://myproseminar.com" },
    { id: 5, name: "Auditoral.com", description: "auditoral.com is best electrical product", image: project5, link: "https://auditoral.com" },
    { id: 5, name: "lanisana.com", description: "lanisana.com is best electrical product", image: project6, link: "https://lanisana.com" },
  ];

  return (
    <section className="sec-gap">
      <div className="projects-container">
        <Title/>
        <div className="projects-grid">
          {projectList.map((project) => (
            <a key={project.id} href={project.link} target="_blank" className="project-card animate__animated animate__fadeInUp">
              <div className="project-image">
                <img src={project.image} alt={project.name}/>
              </div>
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
