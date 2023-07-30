import { useState } from "react";
import "./NavBar.css"; // Importa el archivo CSS
import MenuIcon from "@mui/icons-material/Menu";

const NavBar = ({ changePage }) => {
  let options = ["Home", "About"];
  const [navExpanded, setNavExpanded] = useState(false);
  return (
    <nav className="nav-bar">
      <a href="/" className="brand-name">
        Color Palette
      </a>
      <button
        className="nav-button"
        onClick={() => {
          setNavExpanded(!navExpanded);
        }}
      >
        <MenuIcon />
      </button>
      <div className={navExpanded ? "nav-menu expanded" : "nav-menu"}>
        <ul className="navList">
          {options.map((option, index) => (
            <li key={option}>
              <p
                onClick={() => {
                  changePage(option);
                }}
              >
                {option}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
