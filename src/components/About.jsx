import image from "../assets/headshot.png";

function About() {
  return (
    <section className="section-about" id="about">
      <div className="container">
        <div className="subheading">It's me,</div>
        <h1 className="about__name">May Chang</h1>
      </div>
      <div className="container grid grid--2-1-cols">
        <div className="about__info">
          <p className="about__text">
            Hi, my name is May, and I'm diving headfirst into the world of
            frontend development. Proficient in HTML, CSS, and JavaScript, I am
            currently exploring React and working on exciting projects to
            further enhance my skills. My passion for coding began in
            university. However, what truly ignited my interest in web
            development was when I started creating customized tools for my
            former colleagues and made their lives easier. This experience made
            me realize that being a frontend developer perfectly aligns with my
            passions. I'm actively seeking opportunities to embark on this
            journey and make a meaningful contribution.
          </p>
          <ul className="about__list">
            <li className="list-item">
              M.S. & B.S. degree in Geomatics
              <span className="link">
                &nbsp;@&nbsp;
                <a
                  className="link--underline"
                  href="https://www.ncku.edu.tw/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  National Cheng Kung University
                </a>
              </span>
            </li>
            <li className="list-item">
              Master Thesis: Multi-modal HD Map Generation with Deep Learning
            </li>
          </ul>
        </div>
        <div className="about__img">
          <img className="about__img" src={image} alt="head shot"></img>
        </div>
      </div>
    </section>
  );
}

export default About;
