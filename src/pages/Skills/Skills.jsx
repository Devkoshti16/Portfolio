import React from "react";
import "./Skills.css";
import Title from "../../components/Title/Title";

const skills = [
  { id: 1, name: "HTML", level: 95, icon: "fa-brands fa-html5" },
  { id: 2, name: "CSS / SCSS", level: 90, icon: "fa-brands fa-css3-alt" },
  { id: 3, name: "Bootstrap", level: 80, icon: "fa-brands fa-bootstrap" },
  { id: 4, name: "JavaScript", level: 55, icon: "fa-brands fa-js" },
  { id: 5, name: "jQuery", level: 75, icon: "fa-solid fa-code" },
  { id: 6, name: "Figma", level: 50, icon: "fa-brands fa-figma" },
  { id: 7, name: "ReactJS", level: 40, icon: "fa-brands fa-react" },
  { id: 8, name: "Github", level: 30, icon: "fa-brands fa-github" },
];

function Skills() {
  return (
    <section className="skills-section sec-gap">
      <div className="skills-wrapper">
        <Title text="My Skills" />
        <div className="skills-grid">
          {skills.map((skill) => (
            <div className="skill-card animate__animated animate__fadeInUp" key={skill.id}>
              <div className="skill-header">
                <i className={skill.icon}></i>
                <span>{skill.name}</span>
              </div>
              <div className="progress-bar">
                <div
                  className="progress-fill"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
              <span className="skill-percent">{skill.level}%</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
