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
import Title from "../../components/Title/Title";

function Projects() {
  const projectList = [
    { id: 1, name: "Topworkvibes.com", description: "Plan your business events, schedule important meetings and keep everyone on track with the smartest event planning software online.", image: project1, link: "https://topworkvibes.com/" },
    { id: 2, name: "Topmeetplan.com", description: "A first-class meeting scheduling platform for businesses of all sizes.", image: project2, link: "https://topmeetplan.com/" },
    { id: 3, name: "Smoothick.com", description: "Find all the electronics products you're looking for from top brands", image: project3, link: "https://smoothick.com" },
    { id: 4, name: "Myproseminar.com", description: "Build skills in team communication and other capabilities to increase your employees' wellbeing and health.", image: project4, link: "https://myproseminar.com" },
    { id: 5, name: "Wordpresbuild.com", description: "Avoid last minute decisions. Automate for your scheduling process and edit your agenda on the go. Use automated reminders to alert everyone ahead of time, every time.", image: project5, link: "https://wordpresbuild.com" },
    { id: 6, name: "lanisana.com", description: "lanisana.com is best electrical product", image: project6, link: "https://lanisana.com" },
    { id: 7, name: "Blazinsports.com", description: "Enjoy playing your favourite sport with our top-quality products.", image: project7, link: "https://blazinsports.com" },
    { id: 8, name: "Docsshipping.com", description: "Our online platform offers reliable document shipping services at reasonable prices.", image: project7, link: "https://docsshipping.com" },
  ];

  return (
    <section className="sec-gap">
      <div className="projects-container">
        <Title/>
        <div className="projects-grid">
          {projectList.map((project) => (
            <div key={project.id} className="project-card animate__animated animate__fadeInUp">
              <div className="project-image">
                <img src={project.image} alt={project.name} />
                <div className="project-overlay">
                  <h2>{project.name}</h2>
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    Visit Site
                  </a>
                </div>
              </div>
              <div className="project-content">
                <h3>{project.name}</h3>
                <p>{project.description}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Projects;
