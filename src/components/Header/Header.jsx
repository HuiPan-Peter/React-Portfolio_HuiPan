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
              👋 Hello My Friends!
            </h2>
            <p>
              My name is Peter, live and work in Fredericton , Canada. <br /><br /> I&apos;m a dedicated professional with a background in computer science and a passion for programming and IT. <br />
            </p>
            <p>I like Swim 🏊🏻, Diving 🤿</p>
            <p>
              and enjoy Coding with : <br /> <TypewriterComponent />
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
