import "./About.css";
import { TypewriterComponent } from "../utils/Typewriter/Typewriter";

const About = () => {
  return (
    <section id="about">
      <h1>About</h1>
      <div className="section__wrapper">
        <div className="terminal__format">
          <div className=" terminal_toolbar">
            <div className="terminal-button">
              <span className="btn btn__red btn-color"></span>
              <span className="btn btn__yellow"></span>
              <span className="btn btn__green"></span>
            </div>
            <p className="user">huipan@peter: About ~</p>
          </div>
          <div className="terminal__content" id="text">
            <h3 className="terminal__content">
              <span className="text-highlight"> Hui Pan (Peter) </span>
            </h3>
            <div className="about-text">
              <p className="terminal__content">
                I am a Computer Network and Web Technician 👨🏻‍💻 with over two years of experience working in Canada. <br/>
                Having graduated in Computer Sciences from the UK, I bring a diverse skill set that encompasses proficient programming in databases and web technologies.<br/>
                During my tenure at the IT ministry of SINOPEC, spanning more than 10 years, I amassed invaluable experience. Notably, leading teams and independently spearheading over 40 nationwide projects.<br/><br/>
                Now as a dedicated front-end developer passionate about IT technology, I'm fullly equippted with these full-stack development skills: <TypewriterComponent/>.
              </p>
            </div>
            <h3 className="terminal__content">
              And More?<span className="text-highlight"> YES</span>
            </h3>
            <p className="terminal__content">
              My diverse skill set not only in IT programming, but also{" "}
              <span className="text-highlight">complemented by extensive expertise in Consulting, Petrochemical Engineering and Business!</span> 
              <br/><br/>
              Look around, and I hope to hear from you! 🤝
            </p>
            <div className="card-socials">
              <a
                className="card-socials-btn download-resume"
                href="https://drive.google.com/drive/folders/178aJT71OVJzvM4JJm0IqHat_YxyOVq7O?usp=drive_link"
                target="_blank"
                rel="nofollow noreferrer noopener"
                data-tooltip="Download Resume"
                data-text="Download resume"
              >
                <i className="far fa-file-pdf about__icons"></i>
              </a>
              <a
                className="card-socials-btn"
                href="https://github.com/HuiPan-Peter"
                target="_blank"
                rel="nofollow noreferrer noopener"
                data-tooltip="GitHub"
              >
                <i className="fab fa-github about__icons"></i>
              </a>
              <a
                className="card-socials-btn icon"
                href="https://www.linkedin.com/?trk=guest_homepage-basic_nav-header-logo"
                target="_blank"
                rel="nofollow noreferrer noopener"
                data-tooltip="LinkedIn"
              >
                <i className="fab fa-linkedin about__icons"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
