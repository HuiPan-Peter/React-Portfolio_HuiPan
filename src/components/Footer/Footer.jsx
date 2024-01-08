import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const FooterBottom = () => {
  return (
    <div className="footer-text">
      <p>Made by Hui Pan</p>
      <div className="social-icons">
        <a href="https://github.com/HuiPan-Peter">
          <FontAwesomeIcon icon={faGithub} size="2x" className="icon" />
        </a>
        <a href="https://www.linkedin.com/in/peter-pan-3bb0432a9/">
          <FontAwesomeIcon icon={faLinkedin} size="2x" className="icon" />
        </a>
        <a href="https://twitter.com/PanPeterpan214">
          <FontAwesomeIcon icon={faTwitter} size="2x" className="icon" />
        </a>
      </div>
    </div>
  );
};

export default FooterBottom;