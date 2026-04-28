import "./projects.css"
function Projects() {
  const projectData = [
    {
      title: "RudiiFoodie",
      desc: "You can order food from RudiiFoodie restaurant.",
      tech: "PHP, MySql",
      github: "#"
    },   
    {
      title: "Parking Allocation System",
      desc: "A parking allocation app that shows real-time allocated slot, slot reservation.",
      tech: "PHP, MySql",
      github: "#"
    },
    {
      title: "Criminal Record Management System",
      desc: "CRMS is a web-app that store data about criminals. It give specific access for specific organization.",
      tech: "PHP, MySql",
      github: "#"
    },
    {
      title: "Weather App",
      desc: "React app that shows real-time weather using API.",
      tech: "React, API",
      github: "https://github.com/rudra201357/weather-app"
    },
    {
      title: "Portfolio Website",
      desc: "Personal portfolio built using React.",
      tech: "React, CSS",
      github: "#"
    },
    {
      title: "Henna Haven",
      desc: "Accept mehndi booking in real-time.",
      tech: "PHP, MySql",
      github: "#"
    },
    {
      title: "Smart Home Automation",
      desc: "Controll home appliances through Google Assistant, Alexa as well as manually.",
      tech: "ESP32, Sensors",
      github: "#"
    },
    {
      title: "Proff Rudii",
      desc: "A personal AI assistant that can give answer what you ask.",
      tech: "ESP32, Xiaozhi AI",
      github: "#"
    },
    {
      title: "Smart Car",
      desc: "A smart car that can be controlled through voice commands.",
      tech: "ESP32, Sensors",
      github: "#"
    },
    {
      title: "Smart Display",
      desc: "WS2812b led matrix that can show custom texts, animations, real time, date.",
      tech: "ESP32, Sensors",
      github: "https://github.com/rudra201357/IOT_ROBOTICS/tree/main/led_matrix_animation"
    },
    {
      title: "Disco Light",
      desc: "WS2812b led strip that can be controlled through web-app and remote.",
      tech: "ESP32, Sensors",
      github: "https://github.com/rudra201357/IOT_ROBOTICS/tree/main/10animation_300leds"
    }
    
  ];

  return (
    <div className="projects">
      <h2>My Projects</h2>

      <div className="project-container">
        {projectData.map((proj, index) => (
          <div className="project-card" key={index}>
            <h3>{proj.title}</h3>
            <p>{proj.desc}</p>
            <p className="tech">{proj.tech}</p>

            <a href={proj.github} target="_blank" rel="noreferrer">
              View Code
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;