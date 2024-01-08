import "./Projects.css";
import PROJECT1 from "../../assets/1-PWA-Text-Editor_HuiPan.png";
import PROJECT2 from "../../assets/2-MVC-Tech-Blog_HuiPan.png";
import PROJECT3 from "../../assets/3-Weather-Comparison.png";
import PROJECT4 from "../../assets/4-Regex-Tutorial.png";
import PROJECT5 from "../../assets/5-WorkDayScheduler.jpg";
import PROJECT6 from "../../assets/6-JavaScript-Timed-Quiz.png";
//import the gif directly instead of src it, helps with webpack and dynamic loading.
import { useState } from "react";

const projectData = [
  {
    id: 1,
    image: PROJECT1,
    title: "PWA-Text-Editor",
    github: "https://github.com/HuiPan-Peter/PWA-Text-Editor_HuiPan",
    category: "Progressive Web Applications",
    Live: "https://main--charming-meringue-1b215c.netlify.app/",
    Source: "https://github.com/HuiPan-Peter/PWA-Text-Editor_HuiPan",
    description:
      "This application takes an existing text editor and adds functionality for it to work as a PWA offline App.",
    tags: [
      "Javascript",
      "Express.js",
      "webpack",
      "manifest",
      "IndexedDB",
    ],
  },
  {
    id: 2,
    image: PROJECT2,
    title: "MVC-Tech-Blog",
    github: "https://github.com/HuiPan-Peter/MVC-Tech-Blog_HuiPan",
    category: "Model-View-Controller",
    Live: "https://mvc-tech-blog-ph-e3e4e537645b.herokuapp.com/",
    Source: "https://github.com/HuiPan-Peter/MVC-Tech-Blog_HuiPan",
    description:
      "This is a CMS-style blog site, where developers can publish their Tech-blog and comment on other posts.",
    tags: [
      "Javascript",
      "Express.js",
      "Bcrypt",
      "Handebars",
      "SQL",
    ],
  },
  {
    id: 3,
    image: PROJECT3,
    title: "Weather Comparison",
    github: "https://github.com/AzukiCoconut/ProjectBagEnd",
    category: "Server-Side APIs",
    Live: "https://azukicoconut.github.io/ProjectBagEnd/",
    Source: "https://github.com/AzukiCoconut/ProjectBagEnd",
    description:
      "Weather Comparison is a web application that allows any user to find the current weather of two cities in the world and compare it.",
    tags: ["JQuery", "Tailwind", "Openweather API", "Google API", "Proxies"],
  },
  {
    id: 4,
    image: PROJECT4,
    title: "Regex-Tutorial",
    github: "https://gist.github.com/HuiPan-Peter/39c6ed15cabad0038b4098ef1e22eb92",
    category: "Gist",
    Live: "https://gist.github.com/HuiPan-Peter/39c6ed15cabad0038b4098ef1e22eb92",
    Source: "https://gist.github.com/HuiPan-Peter/39c6ed15cabad0038b4098ef1e22eb92",
    description:
      "The purpose of this tutorial is to discuss regular expressions step by step, and discuss their possible uses.",
    tags: [
      "Gist",
      "GitHub",
      "Regular Expression",
    ],
  },
  {
    id: 5,
    image: PROJECT5,
    title: "Work Day Scheduler",
    github: "https://github.com/HuiPan-Peter/HuiPan_WorkDayScheduler",
    category: "Third-Party APIs",
    Live: "https://huipan-peter.github.io/HuiPan_WorkDayScheduler/",
    Source: "https://github.com/HuiPan-Peter/HuiPan_WorkDayScheduler",
    description: "The application allow user to add important events to a daily planner",
    tags: ["jQuery", "Day JS", "Bootstrap"],
  },
  {
    id: 6,
    image: PROJECT6,
    title: "JavaScript-Timed-Quiz",
    github: "https://github.com/HuiPan-Peter/JavaScript-Timed-Quiz",
    category: "Web APIs",
    Live: "https://huipan-peter.github.io/JavaScript-Timed-Quiz/",
    Source: "https://github.com/HuiPan-Peter/JavaScript-Timed-Quiz",
    description: "The application provide a timed quiz on JavaScript fundamentals that stores high scores",
    tags: ["Javascript", "DOM", "LocalStorage"],
  },
];

const TechStackIcons = () => (
  <div className="tech-stack-icons">
    <i className="fab fa-react" title="React"></i>
    <i className="fas fa-database" title="MongoDB"></i>
    <i className="fas fa-server" title="Express"></i>
    <i className="fab fa-node" title="Node.js"></i>
    <i className="fab fa-graphql" title="GraphQL"></i>
    <i className="fab fa-node-js" title="MUI"></i>
    <i className="fas fa-lock" title="Bcrypt"></i>
    <i className="fas fa-code" title="Base-64"></i>
    <i className="fas fa-paint-brush" title="Emotion Styled"></i>
    <i className="fas fa-envelope" title="EmailJS"></i>
    <i className="fas fa-bell" title="SweetAlert2"></i>
  </div>
);

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState(null);

  const handleProjectClick = (link) => {
    window.open(link, "_blank");
  };

  return (
    <section id="project" className="project"> 
      <h1>Projects</h1>
      <p>Check out my work here!</p>
      <div className="container project-container">
        {projectData.map(
          ({ id, image, title, category, description, tags, Live, Source }) => {
            const isHovered = hoveredProject === id;

            return (
              <article
                key={id}
                className={`project-card ${isHovered ? "hovered" : ""}`}
                onMouseEnter={() => setHoveredProject(id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <div className="project-card-image">
                  <img src={image} alt={title} />
                  {isHovered && (
                    <div className="project-card-overlay">
                      <div className="project-card-category">{category}</div>
                      <div className="project-buttons">
                        {Live && (
                          <button
                            className="project-button"
                            onClick={() => handleProjectClick(Live)}
                          >
                            Live Demo
                          </button>
                        )}
                        {Source && (
                          <button
                            className="project-button"
                            onClick={() => handleProjectClick(Source)}
                          >
                            Source Code
                          </button>
                        )}
                      </div>
                    </div>
                  )}
                </div>
                <div className="project-card-details">
                  <h2 className="project-card-title">{title}</h2>
                  <p className="project-card-description">{description}</p>
                  <div className="project-card-tags">
                    {tags.map((tag, index) => (
                      <span key={index} className="tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            );
          }
        )}
      </div>
      <br></br>
      <p className="project-card-p">
        Haven&apos;t had enough? Check these projects out as well!!
        <a
          href="https://github.com/HuiPan-Peter?tab=repositories"
          className="github-button"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-github"></i> More projects
        </a>
      </p>
    </section>
  );
};

export default Projects;
