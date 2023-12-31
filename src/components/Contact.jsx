import { GithubLogo, LinkedinLogo, EnvelopeOpen } from "@phosphor-icons/react";

function Contact() {
  return (
    <section className="section-contact" id="contact">
      <div className="container">
        <div className="subheading">contact</div>
        <div className="contact__wrapper">
          <h2>Get In Touch</h2>
          <ul className="social__list">
            <li className="social__item">
              <a
                className="link--icon link--fill-hover social__link"
                href="mailto:p66084023@gs.ncku.edu.tw"
                target="_blank"
                rel="noopener noreferrer"
              >
                <EnvelopeOpen />
              </a>
            </li>
            <li className="social__item">
              <a
                className="link--icon link--fill-hover social__link"
                href="https://www.linkedin.com/in/chih-yu-chang-069b29221/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedinLogo />
              </a>
            </li>
            <li className="social__item">
              <a
                className="link--icon link--fill-hover social__link"
                href="https://github.com/maychang7331"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GithubLogo />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="container center-text">
        <div className="contact__text">
          Thank's for visiting. Let's connect and explore how I can bring my
          skills and enthusiasm to your projects.
        </div>
        <a
          className="link--border-oval contact__resume"
          href="https://drive.google.com/file/d/1576hRqoq87d_zRxIquj8k3LV8zzXwVdR/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
        >
          Resume
        </a>
      </div>
    </section>
  );
}

export default Contact;
