import React, { useState } from "react";
import { Link } from "react-router-dom";

import logo from "../../src/img/logo.png";

import Navbar from "../../src/components/Navbar";
import "./index.css";
function Header() {
  const [isMobile, setIsMobile] = useState(false);
  return (
    <div>
      <nav className="nav-header">
        <div className="nav-content">
          <img src={logo} alt="website logo" className="website-logo" />
          <button
            className="mobile-menu-icon"
            onClick={() => setIsMobile(!isMobile)}
          >
            {isMobile ? "✖" : "☰"} {/* Toggle between open and close icons */}
          </button>
          <ul className={isMobile ? "nav-menu-mobile" : "nav-menu"}>
            <li>
              <Link
                to="/"
                className="nav-link"
                onClick={() => setIsMobile(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/About"
                className="nav-link"
                onClick={() => setIsMobile(false)}
              >
                About
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Header;
