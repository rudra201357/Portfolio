import { FaEnvelope, FaPaperPlane, FaWhatsapp } from "react-icons/fa";
import "./contact.css";

function Contact() {
  return (
    <div className="contact" id="contact">
      <div className="contact-card">
        <span className="contact-kicker">
          <FaPaperPlane />
          Let's connect
        </span>

        <h2>Contact Me</h2>

        <p>
          If you would like to get in touch, feel free to contact me via email
          or WhatsApp. I am always open to discussing projects or opportunities.
        </p>

        <div className="contact-links">
          <a href="mailto:rudrapal2004@gmail.com" className="email-link">
            <FaEnvelope />
            Email Me
          </a>
          <a
            href="https://wa.me/918918961213"
            target="_blank"
            rel="noreferrer"
            className="whatsapp-link"
          >
            <FaWhatsapp />
            WhatsApp Me
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
