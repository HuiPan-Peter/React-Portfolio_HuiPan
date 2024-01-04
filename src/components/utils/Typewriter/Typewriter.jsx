import { Typewriter } from "react-simple-typewriter";

export const TypewriterComponent = ({ words, loop, typeSpeed, deleteSpeed, delaySpeed }) => {
  return (
    <Typewriter
      words={["Photoshop ✔️", "Bootstrap ✔️", "CSS3 ✔️", "Express.js ✔️", "Git ✔️", "GraphQL ✔️", "Handlebars ✔️", "Heroku ✔️", "Netlify ✔️", "HTML5 ✔️", "Youtube JavaScript ✔️", "jQuery ✔️", "MongoDB ✔️", "MySQL ✔️", "Node ✔️","React ✔️","Vue ✔️","Angular ✔️","Sequelize ✔️"]}
      loop={true}
      typeSpeed={50}
      deleteSpeed={10}
      delaySpeed={2000}
    />
  );
};