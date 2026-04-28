import './contact.css';
function Contact() {
  return (
    <div className="contact" id="contact">
      <h2>Contact Me</h2>

      <p>
        If you’d like to get in touch, feel free to contact me via email or WhatsApp.
        I’m always open to discussing projects or opportunities.
      </p>

      <div className="contact-links">
        <a href="mailto:rudrapal2004@gmail.com">📧 Email Me</a>
        <a href="https://wa.me/918918961213" target="_blank" rel="noreferrer">
          💬 WhatsApp Me
        </a>
      </div>
    </div>
  );
}

export default Contact;