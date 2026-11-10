
import "./Contact.css";

function Contact() {
  return (
    <section className="contact-page">

      <p className="contact-label">
        LET'S CONNECT
      </p>

      <h1 className="contact-title">
        Contact <span>Me</span>
      </h1>

      <p className="contact-description">
        I'd be happy to hear from you!
        Feel free to get in touch.
      </p>

      <div className="contact-card">
        <h2>Email Me</h2>

        <a href="mailto:songujang5@gmail.com">
          songujang5@gmail.com
        </a>
      </div>

      <div className="contact-card">
        <h2>GitHub</h2>

        <a
          href="https://github.com/REDSTAR268"
          target="_blank"
          rel="noopener noreferrer"
        >
          Visit My GitHub Profile
        </a>
      </div>

    </section>
  );
}

export default Contact;
