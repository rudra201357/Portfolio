import { useEffect, useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [showName, setShowName] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const homeSection = document.getElementById("home");
      const rect = homeSection.getBoundingClientRect();

      // If Home section is visible → hide name
      if (rect.top <= 100 && rect.bottom >= 100) {
        setShowName(false);
      } else {
        setShowName(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="nav">
     <p className={`nav-name ${showName ? "show" : "hide"}`}>
  Rudradeb Pal <br />
 <span id="role">SW Developer</span> 
</p>

      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </div>
  );
}

export default Navbar;