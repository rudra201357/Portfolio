import './about.css';

function About() {
  return (
    <section className="about-section">
      <div className="about-container">
        <h2 className="section-title">About Me</h2>
        
        <div className="about-grid">
          <div className="about-card bio">
            <h3>Who I Am</h3>
            <p>
              I’m a <strong>third-year undergraduate</strong> student and a 
              passionate <strong>frontend developer</strong>. I thrive on building 
              responsive, high-performance web applications using <strong>React</strong> and <strong>JavaScript</strong>.
            </p>
          </div>

       
          <div className="about-card learning">
            <h3>Current Journey</h3>
            <p>
              Currently scaling up to <strong>Full-Stack development</strong>. 
              I’m actively refining my backend logic and looking for real-world 
              opportunities to ship production-grade code.
            </p>
          </div>

    
          <div className="about-card iot">
        
            <h3>IoT & Hardware</h3>
            <p>
              Beyond the browser, I bridge the gap between hardware and software. 
              I love tinkering with <strong>IoT integrations</strong> and smart systems.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;