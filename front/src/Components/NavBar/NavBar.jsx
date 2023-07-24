import { useState } from "react";
import "./NavBar.css"; // Importa el archivo CSS

const NavBar = () => {
  let options = ["Home", "Palette", "About"];
  const [selectedOption, setSelectedOption] = useState(-1);
  return (
    <nav className="navbar nav flex-column">
      <div className="container">
        <a href="/" className="brand">
          Color Palette
        </a>
        <ul className="navList">
          {options.map((option, index) => (
            <li key={option}>
              <a
                href="/"
                className={selectedOption === index ? "item-active" : "item"}
                onMouseOver={() => {
                  setSelectedOption(index);
                }}
                onMouseLeave={() => {
                  setSelectedOption(-1);
                }}
              >
                {option}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
