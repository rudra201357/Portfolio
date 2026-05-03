import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import "./projects.css";

function Projects() {
  const projectData = [
    {
      title: "RudiiFoodie",
      desc: "You can order food from RudiiFoodie restaurant.",
      tech: "PHP, MySql",
      github: "https://github.com/rudra201357/RudiiFoodie",
      link: "https://rudiifoodie.gt.tc"
    },   
    {
      title: "Parking Allocation System",
      desc: "A parking allocation app that shows real-time allocated slot, slot reservation.",
      tech: "PHP, MySql",
      github: "https://github.com/rudra201357/PAS",
      link: "https://parkingsystem.gt.tc/"
    },
    {
      title: "Criminal Record Management System",
      desc: "CRMS is a web-app that store data about criminals. It give specific access for specific organization.",
      tech: "PHP, MySql",
      github: "https://github.com/rudra201357/CRMS",
      link: ""
    },
    {
      title: "Weather App",
      desc: "React app that shows real-time weather using API.",
      tech: "React, API",
      github: "https://github.com/rudra201357/weather-app",
      link: "https://weather-app-flax-nine-67.vercel.app/"
    },
    {
      title: "Portfolio Website",
      desc: "Personal portfolio built using React.",
      tech: "React, CSS",
      github: "https://github.com/rudra201357/Portfolio",
      link: "https://portfolio-lovat-seven-11.vercel.app/#skills"
    },
    {
      title: "Henna Haven",
      desc: "Accept mehndi booking in real-time.",
      tech: "PHP, MySql",
      github: "https://github.com/rudra201357/Henna_Haven",
      link: "https://hennahaven.great-site.net/"
    },
    {
      title: "Smart Home Automation",
      desc: "Controll home appliances through Google Assistant, Alexa as well as manually.",
      tech: "ESP32, Sensors",
      github: "https://github.com/rudra201357/Smart_home_automation",
      link: ""
    },
    {
      title: "Proff Rudii",
      desc: "A personal AI assistant that can give answer what you ask.",
      tech: "ESP32, Xiaozhi AI",
      github: "https://github.com/rudra201357/proff_rudii.git",
      link: ""
    },
    {
      title: "Smart Car",
      desc: "A smart car that can be controlled through voice commands.",
      tech: "ESP32, Sensors",
      github: "https://github.com/rudra201357/Smart_Car",
      link: "https://rudra201357.github.io/Smart_Car/"
    },
    {
      title: "Smart Display",
      desc: "WS2812b led matrix that can show custom texts, animations, real time, date.",
      tech: "ESP32, Sensors",
      github: "https://github.com/rudra201357/IOT_ROBOTICS/tree/main/led_matrix_animation",
      link: ""
    },
    {
      title: "Disco Light",
      desc: "WS2812b led strip that can be controlled through web-app and remote.",
      tech: "ESP32, Sensors",
      github: "https://github.com/rudra201357/IOT_ROBOTICS/tree/main/10animation_300leds",
      link: "https://rudra201357.github.io/ws2812b_home_led/"
    }
    
  ];

  const liveProjects = projectData.filter((project) => project.link).length;
  const techStack = [...new Set(projectData.flatMap((project) => project.tech.split(", ")))];

  return (
    <div className="project-showcase">
      <div className="projects-header">
        <span className="section-kicker">Selected Builds</span>
        <h2>My Projects</h2>
        <p>
          A mix of web apps, IoT experiments, automation builds, and real-world
          systems shaped with clean interfaces and practical logic.
        </p>

        <div className="project-stats" aria-label="Project highlights">
          <div>
            <strong>{projectData.length}</strong>
            <span>Projects</span>
          </div>
          <div>
            <strong>{liveProjects}</strong>
            <span>Live demos</span>
          </div>
          <div>
            <strong>{techStack.length}</strong>
            <span>Tech tools</span>
          </div>
        </div>
      </div>

      <div className="project-container">
        {projectData.map((proj, index) => (
          <div className="project-card" key={index}>
            <div className="project-card-top">
              <span className="project-number">{String(index + 1).padStart(2, "0")}</span>
              <span className={proj.link ? "status live" : "status code-only"}>
                {proj.link ? "Live" : "Code"}
              </span>
            </div>

            <h3>{proj.title}</h3>
            <p>{proj.desc}</p>
            <div className="tech-list">
              {proj.tech.split(", ").map((tech) => (
                <span className="tech" key={`${proj.title}-${tech}`}>
                  {tech}
                </span>
              ))}
            </div>

            <div className="project-actions">
              <a href={proj.github} target="_blank" rel="noreferrer" aria-label={`View ${proj.title} code on GitHub`}>
                <FaGithub />
                View Code
              </a>
              
              {proj.link && (
                <a href={proj.link} target="_blank" rel="noreferrer" className="live-demo" aria-label={`Open ${proj.title} live demo`}>
                  <FaExternalLinkAlt />
                  Live Demo
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
