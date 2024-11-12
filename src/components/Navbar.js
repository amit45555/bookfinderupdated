// Inside your component (e.g., Navbar.js)
import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav>
      <div id="hamburger" onClick={toggleMenu} className={isOpen ? "hide" : ""}>
        ☰
      </div>
      <ul id="navlinks" className={isOpen ? "" : "hide"}>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
      </ul>
      <div id="close" onClick={toggleMenu} className={isOpen ? "" : "hide"}>
        ✖
      </div>
    </nav>
  );
};

export default Navbar;
