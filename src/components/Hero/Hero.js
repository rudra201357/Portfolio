import './Hero.css';
import { FaInstagram,FaFacebook,FaGithub,FaLinkedin } from 'react-icons/fa';
import selfie from '../images/selfie.png';
import About from '../About/about';
import Skills from '../skills/skills';
import Projects from '../projects/projects';
import Contact from '../contacts/contact';
import { TypeAnimation } from 'react-type-animation';

function Hero() {

  return (
  
    <div className="hero">
    <section className="info" id='home'>
        <div className="my-details">
            <p>Hi, I'm <br></br><span id='name'> <TypeAnimation
          sequence={[
            "Rudradeb Pal", 5000,
            
          ]}
          speed={40}
          repeat={Infinity}
          cursor={false}
        />
      </span></p>
            <div className='social-icon'>
                <a href='https://www.instagram.com/its_rudra_004/' target="_blank" rel="noreferrer"><FaInstagram /></a> 
              <a href='https://www.facebook.com/rudradeb.pal.14' target="_blank" rel="noreferrer"><FaFacebook /></a>
              <a href='https://github.com/rudra201357' target="_blank" rel="noreferrer"><FaGithub /></a>
              <a href='https://www.linkedin.com/in/rudradeb-pal-170916343/' target="_blank" rel="noreferrer"><FaLinkedin /></a>
            </div>
      <h1 className="hero-text"> A 
  <TypeAnimation
    sequence={[
      " Frontend Developer", 2000,
      "n IoT Enthusiast", 2000,
      " React Developer", 2000
    ]}
    speed={50}
    repeat={Infinity}
    cursor={false}
  />
</h1>
        </div>
        <div className="my-image">
          <img src={selfie} alt="Selfie" />
     
        </div>
    </section>
    <section className="about" id='about'>
       <About />
    </section>
    <section className="skills" id='skills'>
        <Skills/>
    </section>
    <section className="projects" id='projects'>
       <Projects/>
    </section>
    <section className="contact" id='contact'>
       <Contact/>
    </section>
    </div>
  );
}
export  default Hero;  