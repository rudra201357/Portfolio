import './skills.css';

function Skills() {
  const skillGroups = [
    {
      title: "Languages",
      skills: ["Java", "Python", "C", "PHP", "JavaScript (ES6+)"]
    },
    {
      title: "Frontend & Web",
      skills: ["React.js", "Tailwind CSS", "HTML5/CSS3"]
    },
    {
      title: "Problem Solving",
      skills: ["DSA (PW Skills)", "Algorithmic Logic", "Java Logic"]
    },
    {
      title: "Hardware & IoT",
      skills: ["ESP32", "Microcontrollers", "Sensor Integration", "Hardware-Software Sync"]
    }
  ];

  return (
    <section className="skills-section">
      <div className="skills-container">
        <h2 className="section-title">Technical Arsenal</h2>
        
        <div className="skills-grid">
          {skillGroups.map((group, index) => (
            <div key={index} className="skill-category">
              <h3>{group.title}</h3>
              <div className="skill-badges">
                {group.skills.map((skill, i) => (
                  <span key={i} className="skill-pill">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;