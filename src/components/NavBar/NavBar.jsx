import "./NavBar.css";

export const Navbar = () => {
  const handleClick = (e, sectionId) => {
    e.preventDefault();

    if (sectionId === "#") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const section = document.querySelector(sectionId);
      if (section) {
        const offsetTop = section.offsetTop + 5;
        window.scrollTo({ top: offsetTop, behavior: "smooth" });
      }
    }
  };


  return (
    <div>
      {/* First Navigation Bar */}
      <nav className="navbar-container">
        <a href="/#" onClick={(e) => handleClick(e, "#")} aria-label="Home section">
          <i className="far fa fa-home"> Home </i>
          
        </a>
        <a href="/#about" onClick={(e) => handleClick(e, "#about")} aria-label="About section">
          <i className="far fa-user"> About </i>
        </a>
        <a href="/#project" onClick={(e) => handleClick(e, "#project")} aria-label="Project section">
          <i className="far fa-folder-open"> Portfolio </i>
        </a>
        <a href="/#contact" onClick={(e) => handleClick(e, "#contact")} aria-label="Contact section">
          <i className="far fa fa-edit"> Contact </i>
        </a>
        <a href="/#resume" onClick={(e) => handleClick(e, "#resume")} aria-label="Resume section">
          <i className="far fa fa-file"> Resume </i>
        </a>
      </nav>
    </div>
  );
};

export default Navbar;
