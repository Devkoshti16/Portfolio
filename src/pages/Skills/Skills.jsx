import React, { useEffect, useState } from "react";
import "./Skills.css";
import Title from "../../components/Title/Title";

const skills = [
  { id: 1, name: "HTML", level: 95, icon: "fa-brands fa-html5", color: "#e44d26" },
  { id: 2, name: "CSS / SCSS", level: 90, icon: "fa-brands fa-css3-alt", color: "#2965f1" },
  { id: 3, name: "Bootstrap", level: 80, icon: "fa-brands fa-bootstrap", color: "#7952b3" },
  { id: 4, name: "JavaScript", level: 55, icon: "fa-brands fa-js", color: "#f7df1e" },
  { id: 5, name: "jQuery", level: 75, icon: "fa-solid fa-code", color: "#0769ad" },
  { id: 6, name: "Figma", level: 50, icon: "fa-brands fa-figma", color: "#a259ff" },
  { id: 7, name: "ReactJS", level: 40, icon: "fa-brands fa-react", color: "#61dafb" },
  { id: 8, name: "Github", level: 30, icon: "fa-brands fa-github", color: "#333" },
];

function Skills() {
  const [progress, setProgress] = useState(skills.map(() => 0));
  const [count, setCount] = useState(skills.map(() => 0));

  useEffect(() => {
    // Animate circle fill
    setTimeout(() => {
      setProgress(skills.map((s) => s.level));
    }, 300);

    // Animate number count
    skills.forEach((skill, i) => {
      let start = 0;
      const end = skill.level;
      const duration = 1500; // 1.5s
      const stepTime = Math.max(Math.floor(duration / end), 20);

      const timer = setInterval(() => {
        start += 1;
        setCount((prev) => {
          const updated = [...prev];
          updated[i] = start;
          return updated;
        });
        if (start === end) clearInterval(timer);
      }, stepTime);
    });
  }, []);

  return (
    <section className="skills-section sec-gap">
      <div className="skills-wrapper">
        <Title text="My Skills" />
        <div className="skills-grid">
          {skills.map((skill, i) => (
            <div
              className="skill-card animate__animated animate__fadeInUp"
              key={skill.id}
              style={{ animationDelay: `${i * 0.15}s` }}
            >
              <div
                className="circle-progress"
                style={{
                  background: `conic-gradient(${skill.color} ${
                    progress[i] * 3.6
                  }deg, rgba(255,255,255,0.1) ${progress[i] * 3.6}deg)`,
                }}
              >
                <div className="circle-inner">
                  <i className={skill.icon} style={{ color: skill.color }}></i>
                </div>
              </div>
              <h4>{skill.name}</h4>
              <p className="percent">{count[i]}%</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
