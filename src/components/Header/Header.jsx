import React, { useEffect } from "react";
import "./Header.css";
import { changeLanguage } from "../../javascript/changeLanguage.js";
import { TypewriterComponent } from "../utils/Typewriter/Typewriter";
import ME from "../../assets/HuiPan.jpg";

const Header = () => {
  useEffect(() => {
    const languageLoop = () => {
      changeLanguage();
      setTimeout(languageLoop, 2000);
    };

    const delay = setTimeout(languageLoop, 2000);

    return () => clearTimeout(delay);
  }, []);


  return (
    <header id="header" className="header">
      <h1>Welcome To My Portfolio</h1>
      <div className="header-container">
        <div className="Header-section">
          
          <div className="header-text">
            <h2 id="hello" onClick={changeLanguage}>
              👋 Hello My Friend!
            </h2>
            <p>
              My name is Peter, and I&apos;m a software engineer <br />
              based in New Brunswick, Canada.
            </p>
            <p>I like Swim 🏊🏻 and Diving 🤿</p>
            <p>
              and I also enjoy Coding with : <br /> <TypewriterComponent />
            </p>
          </div>
        </div>

        <div className="header-image">
          <img src={ME} alt="Me" />
        </div>
      </div>
    </header>
  );
};

export default Header;
