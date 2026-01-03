import React, { useEffect, useState } from "react";
import "./Skills.css";
import Title from "../../components/Title/Title";

const skills = [
  { id: 1, name: "HTML", level: 95, icon: "fa-brands fa-html5", color: "#E44D26" },
  { id: 2, name: "CSS / SCSS", level: 85, icon: "fa-brands fa-css3-alt", color: "#2965F1" },
  { id: 3, name: "Bootstrap", level: 80, icon: "fa-brands fa-bootstrap", color: "#7952B3" },
  { id: 4, name: "JavaScript", level: 35, icon: "fa-brands fa-js", color: "#F7DF1E" },
  { id: 5, name: "jQuery", level: 50, icon: "fa-solid fa-code", color: "#0769AD" },
  { id: 7, name: "ReactJS", level: 20, icon: "fa-brands fa-react", color: "#61DAFB" },
  { id: 8, name: "Github", level: 10, icon: "fa-brands fa-github", color: "#ffffff" },
];

function Skills() {
  const [progress, setProgress] = useState(skills.map(() => 0));

  useEffect(() => {
    const timer = setTimeout(() => {
      setProgress(skills.map((s) => s.level));
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="skills-section sec-gap">
      <div className="skills-wrapper">
        <Title text="My Skills" />
        <p className="skills-sub">Technologies I work with and love exploring</p>

        <div className="skills-grid">
          {skills.map((skill, i) => (
            <div
              className="skill-card"
              key={skill.id}
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div
                className="circle-progress"
                style={{
                  background: `conic-gradient(${skill.color} ${progress[i] * 3.6}deg, rgba(255,255,255,0.05) ${progress[i] * 3.6}deg)`,
                }}
              >
                <div className="circle-inner">
                  <i className={skill.icon} style={{ color: skill.color }}></i>
                </div>
              </div>
              <h4>{skill.name}</h4>
              <p className="percent">{progress[i]}%</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
